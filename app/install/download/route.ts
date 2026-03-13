/**
 * GET /install/download
 *
 * For curl: serves raw bootstrap script for piping (curl -fsSL ... | bash)
 * For browsers: serves as downloadable "Install MiniClaw.command" file
 */
export async function GET(req: Request) {
  const res = await fetch(
    "https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/bootstrap.sh",
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    return new Response(
      "#!/bin/bash\necho 'Error: could not fetch installer.'\nexit 1\n",
      { status: 502, headers: { "Content-Type": "text/plain" } },
    );
  }

  const script = await res.text();
  const ua = req.headers.get("user-agent") || "";
  const isCurl = /curl|wget|httpie/i.test(ua);

  if (isCurl) {
    return new Response(script, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  }

  return new Response(script, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": 'attachment; filename="Install MiniClaw.command"',
      "Cache-Control": "no-cache",
    },
  });
}
