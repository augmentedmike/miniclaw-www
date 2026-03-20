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

STYLE="Professional headshot portrait, friendly expression, modern clean background, soft lighting. 1:1 square aspect ratio. Photorealistic style."

declare -a FILENAMES=(
  "avatar-1"
  "avatar-2"
  "avatar-3"
)

declare -a PROMPTS=(
  "A professional headshot of a friendly 45-year-old woman with short brown hair and glasses, wearing a casual blazer. Warm smile, approachable demeanor. Neutral gray background. $STYLE"
  "A professional headshot of a confident 35-year-old man with short dark hair and a trimmed beard, wearing a button-up shirt. Genuine smile, professional yet casual. Soft blue-gray background. $STYLE"
  "A professional headshot of a cheerful 50-year-old person with silver-gray hair, wearing a comfortable sweater. Kind expression, relaxed and friendly. Light beige background. $STYLE"
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

  # Delay between requests
  sleep 3
done

echo ""
echo "Done generating 3 avatars!"
