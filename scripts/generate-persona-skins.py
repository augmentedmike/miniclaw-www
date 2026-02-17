#!/usr/bin/env python3
"""
Generate persona role skin images using Gemini API.

Usage:
  GEMINI_API_KEY=your_key python3 scripts/generate-persona-skins.py

Steps:
  1. Generates a base portrait for each persona
  2. For each base image, generates 7 role-specific skin variants
  3. Saves to public/images/ with correct naming convention

Roles: designer | dev | pm | hacker | critic | date | morning
Output: persona-[id]-base.png, persona-[id]-[role].png  (42 images total)
"""

import os
import sys
import time
import base64
from pathlib import Path
from io import BytesIO

# Make the personas package importable when running from project root
sys.path.insert(0, str(Path(__file__).parent))

try:
    from google import genai
    from google.genai import types as genai_types
except ImportError:
    print("Error: Run `pip3 install google-genai` first")
    sys.exit(1)

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Error: Run `pip3 install pillow` first")
    sys.exit(1)

# ── Config ──────────────────────────────────────────────────────────────────
API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    print("Error: Set GEMINI_API_KEY environment variable")
    print("  export GEMINI_API_KEY=your_key_here")
    sys.exit(1)

CLIENT = genai.Client(api_key=API_KEY)

MODEL = "gemini-3-pro-image-preview"  # image generation model
OUT_DIR = Path(__file__).parent.parent / "public" / "images" / "personas"
OUT_DIR.mkdir(parents=True, exist_ok=True)

SAFETY = [
    genai_types.SafetySetting(category="HARM_CATEGORY_HARASSMENT",        threshold="BLOCK_NONE"),
    genai_types.SafetySetting(category="HARM_CATEGORY_HATE_SPEECH",       threshold="BLOCK_NONE"),
    genai_types.SafetySetting(category="HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold="BLOCK_NONE"),
    genai_types.SafetySetting(category="HARM_CATEGORY_DANGEROUS_CONTENT", threshold="BLOCK_NONE"),
]

# ── Persona definitions (loaded from scripts/personas/*.py) ─────────────────
from personas import PERSONAS

# ── Role skin definitions ────────────────────────────────────────────────────
ROLES = [
    {
        "id": "designer",
        "title": "Graphic Designer",
        "outfit": (
            "wearing creative stylish clothing, holding a Wacom stylus, "
            "surrounded by mood boards and a large monitor showing brand mockups and design work. "
            "Warm creative studio lighting, artistic energy, paint or ink on fingers."
        ),
    },
    {
        "id": "dev",
        "title": "Software Developer",
        "outfit": (
            "wearing a dark technical hoodie or fitted t-shirt, sitting at a desk with multiple monitors "
            "showing code and terminal windows, mechanical keyboard in front. "
            "Cool blue-green screen glow on face, focused late-night energy."
        ),
    },
    {
        "id": "pm",
        "title": "Manager / Lead",
        "outfit": (
            "wearing a sharp tailored blazer, holding a tablet showing a Kanban board or sprint dashboard, "
            "standing confidently in front of a glass-walled conference room with diagrams on whiteboards. "
            "Professional power pose, decisive commanding energy."
        ),
    },
    {
        "id": "hacker",
        "title": "Hacker",
        "outfit": (
            "wearing all-black tactical or hoodie outfit, sitting in a dark server room or basement, "
            "multiple glowing screens with code and matrix-style data streams visible, "
            "neon green or purple ambient glow. Zero-fear energy, completely in their element."
        ),
    },
    {
        "id": "critic",
        "title": "Critic",
        "outfit": (
            "wearing a sharp editorial outfit — structured blazer or dramatic dark clothing, "
            "arms crossed or holding a red pen over printed documents, "
            "slight intimidating smirk. Dark dramatic background, theatrical lighting. "
            "The look of someone whose feedback will make you cry and make you better."
        ),
    },
    {
        "id": "date",
        "title": "Dinner Date",
        "outfit": (
            "sitting across a candlelit table at an upscale restaurant, direct first-person POV "
            "as if the viewer is her date. "
            "Wearing a sleek black revealing mini skirt, black sheer leggings, and heels — "
            "auditioning for a Bond girl part. Hair done up with a few loose strands. "
            "Bold red lip, thin choker, one long earring. "
            "Leaning forward over the table, hands wrapped around a wine glass, "
            "looking directly at the viewer with a dangerous knowing smile. "
            "Warm candlelight catching her face, champagne glasses on the table, rose petals, "
            "glowing city skyline through the window behind her. "
            "80s glamour glow-up energy — Pretty Woman meets James Bond. "
            "Cinematic, intimate, slightly electric atmosphere. Shallow depth of field."
        ),
    },
    {
        "id": "morning",
        "title": "Morning Wake-Up",
        "outfit": (
            "first-person POV morning scene — the viewer has just woken up next to her. "
            "She is lying in a massive luxury bed with expensive white linen sheets, slightly tangled, "
            "propped up on one elbow looking directly at the viewer with a warm sleepy half-smile — "
            "a rare unguarded moment from someone usually so guarded. "
            "Hair loose and disheveled. Natural look, no performance. "
            "Minimal clothing, mostly wrapped in white sheets. "
            "Bright golden morning light pouring through floor-to-ceiling windows overlooking the ocean — "
            "luxury seaside bedroom, Amalfi Coast or Malibu energy. "
            "White walls, white bedding, bleached driftwood furniture, glass of water on the nightstand. "
            "Feels expensive, intimate, cinematic. "
            "Very shallow depth of field, soft warm lens flare. "
            "16:9 landscape orientation for this skin only."
        ),
    },
]


# ── Generation helpers ────────────────────────────────────────────────────────
def generate_image(prompt, reference_image_path=None):
    """Call Gemini to generate an image. Returns raw JPEG bytes or None."""
    contents = []

    if reference_image_path:
        with open(reference_image_path, "rb") as f:
            img_bytes = f.read()
        ext = Path(reference_image_path).suffix.lower().lstrip(".")
        mime = "image/jpeg" if ext in ("jpg", "jpeg") else "image/png"
        contents.append(genai_types.Part.from_bytes(data=img_bytes, mime_type=mime))

    contents.append(genai_types.Part.from_text(text=prompt))

    try:
        response = CLIENT.models.generate_content(
            model=MODEL,
            contents=contents,
            config=genai_types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
                safety_settings=SAFETY,
            ),
        )
        for part in response.candidates[0].content.parts:
            if part.inline_data and part.inline_data.data:
                return part.inline_data.data
        print("  Warning: no image in response")
        return None
    except Exception as e:
        print(f"  Error: {e}")
        return None


def add_role_label(data: bytes, persona_name: str, role_title: str) -> bytes:
    """Burn the persona name + role title into the bottom-left corner of the image."""
    img = Image.open(BytesIO(data)).convert("RGBA")
    w, h = img.size

    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Gradient bar at bottom
    bar_h = max(64, h // 8)
    for y in range(bar_h):
        alpha = int(200 * (1 - y / bar_h))
        draw.rectangle([(0, h - bar_h + y), (w, h - bar_h + y)], fill=(0, 0, 0, alpha))

    # Try to load a nice font, fall back to default
    font_large = font_small = None
    for font_path in [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]:
        if Path(font_path).exists():
            try:
                font_large = ImageFont.truetype(font_path, size=max(28, h // 20))
                font_small = ImageFont.truetype(font_path, size=max(18, h // 32))
                break
            except Exception:
                pass
    if not font_large:
        font_large = font_small = ImageFont.load_default()

    pad = 14
    # Role title (larger, white)
    draw.text((pad, h - bar_h + pad), role_title.upper(), font=font_large, fill=(255, 255, 255, 230))
    # Persona name (smaller, muted)
    role_h = font_large.getbbox(role_title.upper())[3] if hasattr(font_large, "getbbox") else 30
    draw.text((pad, h - bar_h + pad + role_h + 4), persona_name, font=font_small, fill=(200, 200, 200, 180))

    composited = Image.alpha_composite(img, overlay).convert("RGB")
    buf = BytesIO()
    composited.save(buf, format="JPEG", quality=92)
    return buf.getvalue()


def save_image(data: bytes, path: Path, persona_name: str = "", role_title: str = ""):
    if persona_name and role_title and role_title != "Base":
        data = add_role_label(data, persona_name, role_title)
    path.write_bytes(data)
    print(f"  ✓ Saved {path.name} ({len(data) // 1024}KB)")


# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    # Optional: filter to specific persona IDs via CLI args (e.g. python3 script.py kael)
    filter_ids = set(sys.argv[1:]) if len(sys.argv) > 1 else set()

    print(f"\n🎨 Generating persona skins → {OUT_DIR}\n")
    if filter_ids:
        print(f"  Filtering to: {', '.join(filter_ids)}\n")

    for persona in PERSONAS:
        if filter_ids and persona["id"] not in filter_ids:
            continue
        pid = persona["id"]
        name = persona["name"]
        print(f"━━━ {name} ({'persona ' + pid}) ━━━")

        # Step 1: Generate base portrait
        base_path = OUT_DIR / f"persona-{pid}-base.png"
        if base_path.exists():
            print(f"  ↩ Base image exists, skipping generation")
        else:
            print(f"  Generating base portrait...")
            data = generate_image(persona["base_prompt"])
            if data:
                save_image(data, base_path, name, "Base")
            else:
                print(f"  ✗ Failed to generate base for {name}, skipping skins")
                continue
            time.sleep(2)  # rate limiting

        # Step 2: Generate each role skin using base image as reference
        for role in ROLES:
            rid = role["id"]
            skin_path = OUT_DIR / f"persona-{pid}-{rid}.png"

            if skin_path.exists():
                print(f"  ↩ {role['title']} skin exists, skipping")
                continue

            # Use persona-specific override if defined, else fall back to shared outfit
            outfit_text = persona.get("role_overrides", {}).get(rid) or role["outfit"]
            orientation = "16:9 landscape orientation." if rid == "morning" else "2:3 portrait orientation."
            skin_prompt = (
                f"Using the exact same character face, hair color, hairstyle, skin tone, and distinctive features "
                f"as shown in the reference image — redraw {name} {outfit_text} "
                f"Keep the exact same art style, lighting quality, and character identity. "
                f"Same person, completely different outfit and environment. "
                f"High detail. {orientation}"
            )

            print(f"  Generating {role['title']} skin...")
            data = generate_image(skin_prompt, reference_image_path=str(base_path))
            if data:
                save_image(data, skin_path, name, role["title"])
            else:
                print(f"  ✗ Failed to generate {role['title']} skin for {name}")

            time.sleep(2)  # rate limiting

        print()

    print("✅ Done! Update hero-persona-card.tsx to uncomment the persona skin paths.")
    print("\nRename/uncomment pattern in components/hero-persona-card.tsx:")
    for p in PERSONAS:
        for r in ROLES:
            print(f"  {r['id']}: \"/images/persona-{p['id']}-{r['id']}.png\",")


if __name__ == "__main__":
    main()
