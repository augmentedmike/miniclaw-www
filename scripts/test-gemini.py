import urllib.request
import json
import base64
import os
import time
import ssl

API_KEY = os.environ["GEMINI_API_KEY"]
MODEL = "gemini-3-pro-image-preview"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}"
OUT_DIR = "public/images"

STYLE = "Dark background color #0a0a0a. Orange accent color #e8752a for glows, highlights, and outlines. Minimal clean modern flat illustration. No text or words on the image. 16:9 aspect ratio. Stylized, sleek, slightly futuristic."

cards = [
    {
        "filename": "showcase-raybans.png",
        "prompt": f"A person wearing Meta Ray-Ban smart glasses in a store, looking at a product. A glowing orange AR hologram overlay floats in front of their vision showing a shopping cart icon and a price tag. The person looks relaxed and casual, not techy. {STYLE}",
    },
    {
        "filename": "showcase-briefing.png",
        "prompt": f"A cozy morning scene. A phone on a nightstand next to a coffee cup, its screen glowing with a clean dashboard showing a sun icon, calendar blocks, and news headlines. Warm sunrise light from a window. {STYLE}",
    },
    {
        "filename": "showcase-inbox.png",
        "prompt": f"An email inbox being magically sorted. Glowing orange robotic hands organizing floating email envelopes into neat stacks labeled with icons — a star, a trash can, a reply arrow. Emails flying through the air. {STYLE}",
    },
    {
        "filename": "showcase-employee.png",
        "prompt": f"Split scene: on one side, a glowing orange AI figure working at a desk with multiple screens showing charts and messages. On the other side, a person sleeping peacefully in bed. A clock shows 3 AM. {STYLE}",
    },
    {
        "filename": "showcase-vacation.png",
        "prompt": f"A dreamy travel planning scene. A glowing tablet showing flight cards and hotel photos being compared side by side. A miniature airplane, palm tree, and suitcase float around it like a diorama. {STYLE}",
    },
    {
        "filename": "showcase-mentions.png",
        "prompt": f"A social media monitoring dashboard. Floating cards from Reddit, Twitter, and review sites flowing into a central glowing orange summary screen with thumbs up and thumbs down sentiment icons. {STYLE}",
    },
]

ctx = ssl.create_default_context()

for i, card in enumerate(cards):
    print(f"[{i+1}/{len(cards)}] Generating: {card['filename']}...")

    payload = json.dumps({
        "contents": [{"parts": [{"text": card["prompt"]}]}],
        "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]},
    }).encode("utf-8")

    req = urllib.request.Request(URL, data=payload, headers={"Content-Type": "application/json"})

    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            data = json.loads(resp.read().decode("utf-8"))

        if "candidates" not in data:
            print(f"  x No candidates. Response: {json.dumps(data, indent=2)[:500]}")
            continue

        found = False
        for part in data["candidates"][0]["content"]["parts"]:
            if "inlineData" in part:
                img_bytes = base64.b64decode(part["inlineData"]["data"])
                out_path = os.path.join(OUT_DIR, card["filename"])
                with open(out_path, "wb") as f:
                    f.write(img_bytes)
                print(f"  ok Saved {out_path} ({len(img_bytes) // 1024} KB)")
                found = True
                break

        if not found:
            print(f"  x No image in response")

    except Exception as e:
        print(f"  x Error: {e}")

    time.sleep(2)

print("\nDone!")
