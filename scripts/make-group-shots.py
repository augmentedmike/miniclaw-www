#!/usr/bin/env python3
"""
Rebuild group shot composites for all personas.
Outputs a 4-column grid (2 rows for 7 images, 2 rows for 8, etc.)
Usage: python3 scripts/make-group-shots.py [persona_id ...]
"""
import sys
import math
from pathlib import Path
from PIL import Image

OUT_DIR = Path(__file__).parent.parent / "public" / "images" / "personas"
ROLES    = ["designer", "dev", "pm", "hacker", "critic", "date", "morning"]
COLS     = 4
THUMB_W  = 320
THUMB_H  = 480   # 2:3
PAD      = 10
BG       = (15, 15, 20)


def make_group_shot(persona_id: str):
    imgs = []
    for rid in ROLES:
        for ext in ["png", "jpg", "jpeg"]:
            p = OUT_DIR / f"persona-{persona_id}-{rid}.{ext}"
            if p.exists():
                img = Image.open(p).convert("RGB")
                # crop to 2:3 from center
                w, h = img.size
                target_h = int(w * 3 / 2)
                if target_h > h:
                    target_w = int(h * 2 / 3)
                    x = (w - target_w) // 2
                    img = img.crop((x, 0, x + target_w, h))
                else:
                    y = (h - target_h) // 2
                    img = img.crop((0, y, w, y + target_h))
                img = img.resize((THUMB_W, THUMB_H), Image.LANCZOS)
                imgs.append(img)
                break

    if not imgs:
        print(f"  ✗ No role images found for {persona_id}")
        return

    rows = math.ceil(len(imgs) / COLS)
    canvas_w = COLS * THUMB_W + PAD * (COLS + 1)
    canvas_h = rows * THUMB_H + PAD * (rows + 1)
    canvas = Image.new("RGB", (canvas_w, canvas_h), BG)

    for i, img in enumerate(imgs):
        col = i % COLS
        row = i // COLS
        x = PAD + col * (THUMB_W + PAD)
        y = PAD + row * (THUMB_H + PAD)
        canvas.paste(img, (x, y))

    out = OUT_DIR / f"persona-{persona_id}-group.jpg"
    canvas.save(out, "JPEG", quality=90)
    print(f"  ✓ {out.name}  {canvas_w}×{canvas_h}px  ({out.stat().st_size // 1024}KB)  [{len(imgs)} roles, {rows} rows]")


def main():
    filter_ids = set(sys.argv[1:]) if len(sys.argv) > 1 else None

    # Auto-discover personas from existing base images
    persona_ids = sorted({
        p.name.replace("persona-", "").replace("-base.png", "").replace("-base.jpg", "")
        for p in OUT_DIR.glob("persona-*-base.*")
    })

    if filter_ids:
        persona_ids = [p for p in persona_ids if p in filter_ids]

    print(f"\n🖼  Building group shots → {OUT_DIR}\n")
    for pid in persona_ids:
        print(f"  {pid}")
        make_group_shot(pid)
    print("\n✅ Done")


if __name__ == "__main__":
    main()
