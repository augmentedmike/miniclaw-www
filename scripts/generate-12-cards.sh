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

STYLE="Dark background color #0a0a0a. Orange accent color #e8752a for glows, highlights, and outlines. Minimal clean modern flat illustration. No text or words on the image. 16:9 aspect ratio. Stylized, sleek, slightly futuristic."

declare -a FILENAMES=(
  "showcase-support"
  "showcase-meetings"
  "showcase-social"
  "showcase-leads"
  "showcase-finance"
  "showcase-smarthome"
  "showcase-health"
  "showcase-research"
)

declare -a PROMPTS=(
  "A 24/7 customer support scene. A glowing orange AI chat interface responding to multiple customer questions simultaneously with checkmarks and smiley faces. Clock showing midnight. Customer messages being answered instantly. $STYLE"
  "A meeting being transformed into organized notes. A conference table with people talking, their words flowing up and transforming into neat bullet points and action items on a glowing orange dashboard. $STYLE"
  "A social media content calendar with posts being auto-generated. Multiple platform icons (Instagram, Twitter, LinkedIn) with glowing orange content cards being created and scheduled. A person relaxing while posts go live. $STYLE"
  "A sales funnel with leads flowing in. Glowing orange email envelopes being sent to potential customers, responses coming back, CRM updating automatically. A growing customer list. $STYLE"
  "Financial charts and reports materializing from raw data. Glowing orange graphs, profit curves, and cash flow diagrams appearing on screens. Calculator and spreadsheets transforming into simple readable reports. $STYLE"
  "A smart home dashboard with voice control. A person speaking and their home responding — lights turning on, door locking, thermostat adjusting. Orange glow radiating from smart devices throughout the house. $STYLE"
  "A medication reminder system. Pill bottles with glowing orange alerts, a phone showing reminder notifications, a health tracking chart in the background. Peaceful elderly person being reminded at the right time. $STYLE"
  "A research assistant compiling information. Multiple web pages, articles, and data sources flowing into a central glowing orange report. Charts, graphs, and key insights being highlighted and organized. $STYLE"
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
    echo "$RESPONSE" | python3 -m json.tool | head -30
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
echo "Done generating 8 new images!"
echo "Existing images: inbox, vacation, mentions, briefing"
