/**
 * GET /install
 *
 * Redirects to the raw bootstrap.sh from GitHub so users can run:
 *   curl -fsSL https://miniclaw.bot/install | bash
 *
 * Uses a redirect instead of proxying to avoid Vercel ISR caching stale content.
 * curl -fsSL follows redirects automatically.
 */
export async function GET() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/bootstrap.sh",
      "Cache-Control": "no-cache",
    },
  });
}
