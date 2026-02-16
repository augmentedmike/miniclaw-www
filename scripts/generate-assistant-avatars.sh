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
  "assistant-realistic-companion"
  "assistant-fantasy-dreamgirl"
  "assistant-romance-hero"
  "assistant-mysterious-stranger"
  "assistant-charismatic-rebel"
  "assistant-sophisticated-seducer"
)

declare -a PROMPTS=(
  "A beautiful woman in her mid-20s with warm, inviting eyes and a genuine smile. Long flowing hair, wearing a cozy oversized sweater and jeans. Natural beauty, relatable and approachable. Soft window lighting, modern apartment background with plants. Comfortable, intimate atmosphere. Digital art, realistic style. $STYLE"

  "A stunning anime-style fantasy woman with large expressive eyes, long flowing silver-white hair with soft highlights. Wearing an elegant fantasy dress with magical glowing accents. Delicate features, ethereal beauty. Surrounded by soft magical lights and floating sakura petals. Dreamy fantasy background with pastel colors. Anime illustration style. $STYLE"

  "A handsome, masculine man in his 30s with strong jawline, intense eyes, and tousled dark hair. Wearing an open shirt showing muscular build. Confident, protective stance. Brooding yet caring expression. Dramatic lighting, moody romantic background. Romance novel cover style, detailed digital painting. $STYLE"

  "An alluring figure with mysterious eyes partially hidden by shadows, captivating smile. Dark elegant clothing, sophisticated style. Enigmatic expression, dangerous charm. Atmospheric noir lighting with deep contrasts. Urban nighttime background with neon lights. Cinematic, mysterious mood. Digital art. $STYLE"

  "An attractive rebellious character with edgy style - leather jacket, casual confidence. Messy stylish hair, piercing gaze, mischievous smirk. Tattooed arms, cool demeanor. Standing against urban graffiti wall. Bold colors, dynamic lighting. Modern street style photography aesthetic. $STYLE"

  "An elegant, sophisticated figure exuding confidence and allure. Impeccable style in luxurious attire, knowing smile. Refined features, magnetic presence. Holding a wine glass, seductive eyes. Upscale lounge background with ambient lighting. Classy, sensual atmosphere. Fashion photography style. $STYLE"
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
