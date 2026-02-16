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
MODEL="gemini-2.0-flash-exp"

STYLE="Dark background color #0a0a0a. Orange accent color #e8752a for glows, highlights, and outlines. Minimal clean modern flat illustration. No text or words on the image. 16:9 aspect ratio. Stylized, sleek, slightly futuristic."

declare -a FILENAMES=(
  "showcase-chatbots"
  "showcase-news"
  "showcase-install"
  "showcase-files"
  "showcase-coding"
  "showcase-brain"
  "showcase-research"
  "showcase-trends"
)

declare -a PROMPTS=(
  "Multiple glowing orange chat bubbles with robot icons floating around a central control panel. Speech bubbles showing different conversation topics. A person casually setting up chatbots with simple clicks. $STYLE"
  "A newspaper made of glowing orange holographic panels showing AI and tech headlines. Articles and charts floating in 3D space, auto-updating with new information. A coffee cup nearby. $STYLE"
  "A laptop screen showing a software installation progress bar at 100% with a green checkmark. In the background, faded icons of complex terminal windows being bypassed. Everything automated and simple. $STYLE"
  "A chaotic pile of messy file folders transforming into perfectly organized, color-coded, labeled folders. An orange robotic arm sorting and arranging them into neat stacks. Files flying through the air in an arc. $STYLE"
  "A coding environment with glowing orange AI assistance. Code being auto-completed, documentation writing itself, project files organizing automatically. A developer sitting back relaxed while the AI works. $STYLE"
  "A glowing orange brain made of interconnected nodes and documents. Conversations, notes, and ideas flowing into it, being tagged and organized automatically. A journal entry appearing at the bottom. $STYLE"
  "A research desk with glowing orange reports materializing automatically. Charts, graphs, and highlighted findings appearing on floating screens. A person reading the summary while working on something else. $STYLE"
  "Social media icons from Reddit and X (Twitter) with trending topic cards rising up like smoke. A dashboard capturing and analyzing viral discussions, memes, and hot topics in real-time. $STYLE"
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
        print('', file=sys.stderr)
        print(json.dumps(data, indent=2), file=sys.stderr)
except Exception as e:
    print('', file=sys.stderr)
    print(str(e), file=sys.stderr)
" 2>&1)

  if [ -n "$IMAGE_DATA" ] && [ ${#IMAGE_DATA} -gt 100 ]; then
    echo "$IMAGE_DATA" | base64 -d > "${OUT_DIR}/${FILENAME}.png"
    SIZE=$(du -k "${OUT_DIR}/${FILENAME}.png" | cut -f1)
    echo "  ✓ Saved ${OUT_DIR}/${FILENAME}.png (${SIZE} KB)"
  else
    echo "  ✗ No image data for ${FILENAME}"
    echo "$RESPONSE" | head -50
  fi

  # Small delay between requests
  sleep 2
done

echo ""
echo "Done!"
