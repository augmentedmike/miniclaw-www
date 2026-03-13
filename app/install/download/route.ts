/**
 * GET /install/download
 *
 * Proxies bootstrap.sh from GitHub and serves it as "Install MiniClaw.command".
 * The proxy is needed to set Content-Disposition (GitHub raw doesn't).
 * Cost: ~5ms serverless function, negligible on free tier (100K/mo).
 * The landing page at /install is fully static — zero cost.
 *
 * curl: gets raw script for piping
 * Browser: downloads as "Install MiniClaw.command"
 */
export async function GET(req: Request) {
  const script = await fetch(
    "https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/bootstrap.sh",
  ).then(r => r.text());

  const ua = req.headers.get("user-agent") || "";

  if (/curl|wget|httpie/i.test(ua)) {
    return new Response(script, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return new Response(script, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": 'attachment; filename="Install MiniClaw.command"',
    },
  });
}
