import { NextResponse } from "next/server"

const manifest = {
  schema_version: "1.0",
  name: "MiniClaw",
  description:
    "MiniClaw is an AI-native plugin ecosystem built on OpenClaw. Download the installer, browse documentation, join the waitlist, or explore available plugins.",
  url: "https://miniclaw.bot",
  logo: "https://miniclaw.bot/og-image-square.png",
  contact_email: "michael@claimhawk.app",
  tools: [
    {
      name: "download-miniclaw",
      description:
        "Download and install MiniClaw on macOS. Returns a bootstrap installer zip or raw shell script.",
      uri: "https://miniclaw.bot/install/download",
      method: "GET",
      parameters: [],
    },
    {
      name: "view-documentation",
      description:
        "Search MiniClaw documentation for setup guides, plugin APIs, architecture details, and troubleshooting.",
      uri: "https://miniclaw.bot/api/docs/search",
      method: "GET",
      parameters: [
        {
          name: "q",
          description: "Search query — keywords or topic to find in documentation",
          required: true,
          type: "string",
        },
        {
          name: "tag",
          description: "Optional tag filter (e.g. plugin, api, guide)",
          required: false,
          type: "string",
        },
      ],
    },
    {
      name: "join-waitlist",
      description:
        "Join the MiniClaw waitlist to get notified when new plans and early access are available.",
      uri: "https://miniclaw.bot/api/subscribe",
      method: "POST",
      parameters: [
        {
          name: "email",
          description: "Email address to subscribe",
          required: true,
          type: "string",
        },
        {
          name: "name",
          description: "Your name (optional)",
          required: false,
          type: "string",
        },
        {
          name: "plan",
          description: "Which plan tier to join the waitlist for",
          required: false,
          type: "string",
        },
      ],
    },
    {
      name: "check-plugin-list",
      description:
        "View the list of available MiniClaw plugins including memory, skills, persona, kanban, design, email, and more.",
      uri: "https://miniclaw.bot/#plugins",
      method: "GET",
      parameters: [],
    },
  ],
  support: {
    declarative: true,
    imperative: true,
  },
}

export async function GET() {
  return NextResponse.json(manifest, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "public, max-age=3600",
    },
  })
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
