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

STYLE="Digital art portrait, character design, vibrant colors, 1:1 square aspect ratio, high quality illustration."

declare -a FILENAMES=(
  "assistant-brutal-cofounder"
  "assistant-terminal-goblin"
  "assistant-chill-partner"
  "assistant-fantasy-muse"
  "assistant-fixer"
  "assistant-worldbuilder"
)

declare -a PROMPTS=(
  "A striking portrait of an intense business executive with sharp features, piercing eyes, and a serious expression. Dressed in professional attire with rolled-up sleeves. Direct gaze, no-nonsense attitude. Modern office background with city view. Confident and commanding presence. $STYLE"

  "A playful character portrait of a mischievous hacker surrounded by floating terminal windows and code snippets. Wearing oversized headphones, hoodie, and a wide grin. Glowing green and blue tech elements around them. Chaotic yet energetic vibe with digital effects. $STYLE"

  "A warm, relaxed portrait of a friendly person in casual streetwear, sitting comfortably with a gentle smile. Soft ambient lighting, cozy atmosphere. Laid-back posture, approachable expression. Background with plants and warm tones. Peaceful and inviting energy. $STYLE"

  "An ethereal, romantic character portrait with flowing hair and dreamy expression. Soft fantasy lighting with magical sparkles and gentle colors. Wearing elegant flowing clothing. Surrounded by floating flower petals and soft glowing lights. Poetic and enchanting atmosphere. $STYLE"

  "A composed, practical-looking person in casual work clothes with a calm, focused expression. Holding tools or a tablet. Clean, organized background. Efficient and capable demeanor. Problem-solver energy with subtle confidence. Professional yet approachable. $STYLE"

  "An enthusiastic character portrait surrounded by books, maps, and glowing fantasy elements. Excited expression with wide curious eyes. Wearing comfortable clothing with fantasy accessories. Background filled with lore symbols, scrolls, and magical artifacts. Passionate researcher vibe. $STYLE"
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
