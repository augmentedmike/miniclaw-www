/**
 * GET /install/download
 *
 * For curl: serves raw bootstrap script for piping
 * For browsers: serves a .zip containing the .command file with execute bit set
 *               (zip preserves permissions, bypasses Gatekeeper quarantine)
 */
import { execSync } from "node:child_process";
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

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

  // curl gets raw script
  if (isCurl) {
    return new Response(script, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  }

  // Browser gets a zip containing the executable .command file
  const tmp = mkdtempSync(join(tmpdir(), "miniclaw-"));
  const cmdPath = join(tmp, "Install MiniClaw.command");
  const zipPath = join(tmp, "Install MiniClaw.zip");

  try {
    writeFileSync(cmdPath, script, { mode: 0o755 });
    execSync(`cd "${tmp}" && zip -j "${zipPath}" "${cmdPath}"`, { stdio: "pipe" });
    const zipData = readFileSync(zipPath);

    return new Response(zipData, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="Install MiniClaw.zip"',
        "Cache-Control": "no-cache",
      },
    });
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}
