/**
 * GET /install
 *
 * Serves the miniclaw-os bootstrap script so users can run:
 *   curl -fsSL https://miniclaw.bot/install | bash
 */
export async function GET() {
  const res = await fetch(
    "https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/bootstrap.sh",
    { next: { revalidate: 300 } }, // cache 5 min
  );

  if (!res.ok) {
    return new Response("#!/bin/bash\necho 'Error: could not fetch installer. Try again or visit https://github.com/augmentedmike/miniclaw-os'\nexit 1\n", {
      status: 502,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  const script = await res.text();

  return new Response(script, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
