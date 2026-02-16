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
MODEL="gemini-2.0-flash-exp-image-generation"

STYLE="High quality character portrait, 1:1 square aspect ratio, professional illustration."

declare -a FILENAMES=(
  "assistant-executive-assistant"
  "assistant-hacker-girl"
  "assistant-research-partner"
  "assistant-fantasy-companion"
  "assistant-romantic-partner"
  "assistant-business-coach"
)

declare -a PROMPTS=(
  "An attractive professional woman in business attire - fitted blazer with low-cut blouse showing cleavage. Confident smile, sharp eyes. Beautiful face, styled hair. Holding tablet, standing in modern office. Sexy but professional. Glass office background with city view. Digital art, realistic style. $STYLE"

  "A hot female hacker with alternative style. Tank top and cargo pants showing her fit figure and curves. Purple and pink hair, face piercings, confident smirk. Surrounded by glowing code screens and neon lights. Attractive and skilled. Dark tech room background. Digital cyberpunk art. $STYLE"

  "A beautiful woman researcher in casual-professional style. V-neck sweater showing cleavage, glasses, warm smile. Intelligent and attractive. Surrounded by books, screens with data. Holding a notebook, leaning forward slightly. Library or study background. Academic yet sexy. Realistic digital painting. $STYLE"

  "A stunning anime fantasy girl with large eyes, long flowing hair. Wearing a revealing magical outfit with exposed midriff and cleavage. Curvaceous figure, ethereal beauty. Flirty expression, magical sparkles around her. Floating in dreamy sky with stars and moons. Sexy anime illustration style. $STYLE"

  "A gorgeous woman with bedroom eyes and inviting smile. Long hair, wearing a silk robe loosely tied showing cleavage and curves. Intimate, romantic setting. Soft warm lighting, cozy bedroom background with candles. Sensual, personal atmosphere. Romantic realistic art style. $STYLE"

  "A handsome, confident man in business casual - fitted shirt showing muscular build. Strong jawline, intense eyes, professional yet approachable. Arms crossed showing physique. Modern office or workspace background. Masculine, capable energy. Professional portrait style. $STYLE"
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
