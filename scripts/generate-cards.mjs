import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY environment variable not set");
  console.error("Add it to your .env.local file");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const cards = [
  {
    filename: "showcase-raybans.png",
    prompt:
      "A stylized dark illustration of a person wearing Meta Ray-Ban smart glasses looking at a product on a store shelf. A glowing orange AR overlay appears in front of their eyes showing 'Add to Cart'. Dark background (#0a0a0a), orange (#e8752a) accent glows and highlights. Minimal, modern, clean flat illustration style. 16:9 aspect ratio.",
  },
  {
    filename: "showcase-briefing.png",
    prompt:
      "A stylized dark illustration of a smartphone on a nightstand at sunrise, screen glowing with a clean morning briefing dashboard showing weather, calendar events, and news headlines. Dark background (#0a0a0a), orange (#e8752a) accent glows on the screen elements. Minimal, modern, clean flat illustration style. 16:9 aspect ratio.",
  },
  {
    filename: "showcase-inbox.png",
    prompt:
      "A stylized dark illustration of an email inbox being automatically sorted by an AI assistant. Emails flying into organized folders labeled 'Important', 'Junk', 'Reply'. An orange robot arm sorting the mail. Dark background (#0a0a0a), orange (#e8752a) accent glows and highlights. Minimal, modern, clean flat illustration style. 16:9 aspect ratio.",
  },
  {
    filename: "showcase-employee.png",
    prompt:
      "A stylized dark illustration of a glowing orange AI assistant working at a desk with multiple monitors showing charts, customer messages, and reports — while a person sleeps peacefully in the background. Dark background (#0a0a0a), orange (#e8752a) accent glows. Minimal, modern, clean flat illustration style. 16:9 aspect ratio.",
  },
  {
    filename: "showcase-vacation.png",
    prompt:
      "A stylized dark illustration of a tropical vacation planning scene — a laptop screen showing flight comparisons and hotel options with checkmarks, a plane ticket, and a palm tree silhouette. Dark background (#0a0a0a), orange (#e8752a) accent highlights on the selected options. Minimal, modern, clean flat illustration style. 16:9 aspect ratio.",
  },
  {
    filename: "showcase-mentions.png",
    prompt:
      "A stylized dark illustration of social media monitoring — a dashboard showing brand mentions from Reddit, Twitter, and review sites flowing into a summary report with sentiment indicators (thumbs up/down). Dark background (#0a0a0a), orange (#e8752a) accent glows. Minimal, modern, clean flat illustration style. 16:9 aspect ratio.",
  },
];

const outDir = path.resolve("public/images");

async function generateCard(card, index) {
  console.log(`[${index + 1}/${cards.length}] Generating: ${card.filename}...`);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: [
        {
          role: "user",
          parts: [{ text: card.prompt }],
        },
      ],
      config: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const buf = Buffer.from(part.inlineData.data, "base64");
        const outPath = path.join(outDir, card.filename);
        fs.writeFileSync(outPath, buf);
        console.log(`  ✓ Saved ${outPath} (${(buf.length / 1024).toFixed(0)} KB)`);
        return true;
      }
    }
    console.log(`  ✗ No image data in response for ${card.filename}`);
    return false;
  } catch (err) {
    console.error(`  ✗ Error generating ${card.filename}: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log("Generating showcase card images...\n");

  // Generate sequentially to avoid rate limits
  for (let i = 0; i < cards.length; i++) {
    await generateCard(cards[i], i);
  }

  console.log("\nDone!");
}

main();
