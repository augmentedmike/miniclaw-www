#!/bin/bash
set -e

API_KEY="REDACTED_ROTATE_THIS_KEY"
OUT_DIR="public/images"
MODEL="gemini-2.0-flash-exp"

STYLE="Dark background color #0a0a0a. Orange accent color #e8752a for glows, highlights, and outlines. Minimal clean modern flat illustration. No text or words on the image. 16:9 aspect ratio. Stylized, sleek, slightly futuristic."

declare -a FILENAMES=(
  "showcase-raybans"
  "showcase-briefing"
  "showcase-inbox"
  "showcase-employee"
  "showcase-vacation"
  "showcase-mentions"
)

declare -a PROMPTS=(
  "A person wearing Meta Ray-Ban smart glasses in a store, looking at a product. A glowing orange AR hologram overlay floats in front of their vision showing a shopping cart icon and a price tag. The person looks relaxed and casual, not techy. $STYLE"
  "A cozy morning scene. A phone on a nightstand next to a coffee cup, its screen glowing with a clean dashboard showing a sun icon, calendar blocks, and news headlines. Warm sunrise light from a window. $STYLE"
  "An email inbox being magically sorted. Glowing orange robotic hands organizing floating email envelopes into neat stacks labeled with icons — a star, a trash can, a reply arrow. Emails flying through the air. $STYLE"
  "Split scene: on one side, a glowing orange AI figure working at a desk with multiple screens showing charts and messages. On the other side, a person sleeping peacefully in bed. A clock shows 3 AM. $STYLE"
  "A dreamy travel planning scene. A glowing tablet showing flight cards and hotel photos being compared side by side. A miniature airplane, palm tree, and suitcase float around it like a diorama. $STYLE"
  "A social media monitoring dashboard. Floating cards from Reddit, Twitter, and review sites flowing into a central glowing orange summary screen with thumbs up and thumbs down sentiment icons. $STYLE"
)

for i in "${!FILENAMES[@]}"; do
  FILENAME="${FILENAMES[$i]}"
  PROMPT="${PROMPTS[$i]}"

  echo "[$((i+1))/${#FILENAMES[@]}] Generating: ${FILENAME}.png..."

  RESPONSE=$(curl -s "https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}" \
    -H "Content-Type: application/json" \
    -d "{
      \"contents\": [{
        \"parts\": [{\"text\": \"$PROMPT\"}]
      }],
      \"generationConfig\": {
        \"responseModalities\": [\"TEXT\", \"IMAGE\"]
      }
    }")

  # Extract base64 image data
  IMAGE_DATA=$(echo "$RESPONSE" | python3 -c "
import sys, json
data = json.load(sys.stdin)
for part in data['candidates'][0]['content']['parts']:
    if 'inlineData' in part:
        print(part['inlineData']['data'])
        break
")

  if [ -n "$IMAGE_DATA" ]; then
    echo "$IMAGE_DATA" | base64 -d > "${OUT_DIR}/${FILENAME}.png"
    SIZE=$(du -k "${OUT_DIR}/${FILENAME}.png" | cut -f1)
    echo "  ✓ Saved ${OUT_DIR}/${FILENAME}.png (${SIZE} KB)"
  else
    echo "  ✗ No image data for ${FILENAME}"
    echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(json.dumps(d.get('error', d), indent=2))" 2>/dev/null || echo "$RESPONSE" | head -20
  fi

  # Small delay between requests
  sleep 2
done

echo ""
echo "Done!"
