#!/bin/bash
set -e

# Load API key from environment
API_KEY="${GEMINI_API_KEY}"

if [ -z "$API_KEY" ]; then
  echo "❌ GEMINI_API_KEY environment variable not set"
  echo "Add it to your .env.local file"
  exit 1
fi
OUT_DIR="public/images"
MODEL="gemini-3-pro-image-preview"

STYLE="High quality character portrait, 1:1 square aspect ratio, professional illustration."

declare -a FILENAMES=(
  "assistant-executive-assistant"
  "assistant-tech-genius"
  "assistant-fantasy-babe"
  "assistant-romance-hero"
  "assistant-seductive-companion"
  "assistant-custom"
)

declare -a PROMPTS=(
  "A sophisticated professional woman in an elegant business suit, standing confidently in a modern office. Beautiful, composed, intelligent expression. Professional styling, polished appearance. Bright office setting with windows. Photorealistic corporate portrait style. $STYLE"

  "A handsome muscular man shirtless showing defined six-pack abs, broad chest, strong arms. Strong jaw, intense eyes. Athletic build. Casual tech workspace background. Masculine energy. Realistic digital portrait. $STYLE"

  "A voluptuous anime girl with huge breasts in a very revealing bikini-style fantasy outfit showing massive cleavage and underboob. Large sparkling eyes, long hair. Extreme hourglass figure. Sexy playful pose. Magical fantasy background. Sexy anime illustration. $STYLE"

  "A shirtless muscular man with chiseled abs, broad shoulders, V-cut visible. Handsome face with bedroom eyes, tousled dark hair. Low pants. Intimate dramatic lighting, romantic background. Romance novel cover style. $STYLE"

  "A gorgeous woman with large breasts in revealing lingerie or silk robe open showing cleavage and curves. Sensual bedroom eyes, full lips. Hourglass figure, long hair. Intimate pose. Romantic bedroom with candles and soft lighting. Glamour photography. $STYLE"

  "A creative visualization showing multiple silhouettes morphing together - different genders, styles, personalities blending. Abstract artistic representation of infinite possibilities. Colorful gradient background with sparks and light effects. Modern digital art, inspiring and open-ended. $STYLE"
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
try:
    data = json.load(sys.stdin)
    if 'candidates' in data and len(data['candidates']) > 0:
        for part in data['candidates'][0]['content']['parts']:
            if 'inlineData' in part:
                print(part['inlineData']['data'])
                break
    else:
        print('ERROR: No candidates in response', file=sys.stderr)
except Exception as e:
    print(f'ERROR: {str(e)}', file=sys.stderr)
" 2>&1)

  if echo "$IMAGE_DATA" | grep -q "^ERROR"; then
    echo "  ✗ Failed: $IMAGE_DATA"
  elif [ -n "$IMAGE_DATA" ] && [ ${#IMAGE_DATA} -gt 100 ]; then
    echo "$IMAGE_DATA" | base64 -d > "${OUT_DIR}/${FILENAME}.png"
    SIZE=$(du -k "${OUT_DIR}/${FILENAME}.png" | cut -f1)
    echo "  ✓ Saved ${OUT_DIR}/${FILENAME}.png (${SIZE} KB)"
  else
    echo "  ✗ No image data for ${FILENAME}"
  fi

  # Delay between requests to respect rate limits
  sleep 3
done

echo ""
echo "✨ Done generating 6 assistant avatars!"
