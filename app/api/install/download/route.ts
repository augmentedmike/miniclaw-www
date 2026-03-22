/**
 * GET /install/download
 *
 * Serves bootstrap.sh inside a .zip as "Install MiniClaw.command".
 * The zip is built in pure JS (no shell zip binary needed on Vercel).
 * Unzipping strips the macOS quarantine flag, bypassing Gatekeeper.
 *
 * curl: gets raw script for piping
 * Browser: downloads "Install MiniClaw.zip"
 */
export async function GET(req: Request) {
  const script = await fetch(
    "https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/bootstrap.sh",
  ).then((r) => r.text());

  const ua = req.headers.get("user-agent") || "";
  if (/curl|wget|httpie/i.test(ua)) {
    return new Response(script, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const zip = buildZip("Install MiniClaw.command", script);

  return new Response(zip, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="Install MiniClaw.zip"',
    },
  });
}

/**
 * Build a minimal ZIP archive containing one file with Unix executable permissions.
 * Pure JS — no dependencies, no child_process.
 */
function buildZip(filename: string, content: string): Uint8Array {
  const enc = new TextEncoder();
  const fileData = enc.encode(content);
  const nameData = enc.encode(filename);

  const now = new Date();
  const dosTime =
    ((now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1)) & 0xffff;
  const dosDate =
    ((((now.getFullYear() - 1980) & 0x7f) << 9) | ((now.getMonth() + 1) << 5) | now.getDate()) &
    0xffff;

  const crc = crc32(fileData);

  // Local file header
  const localHeader = new Uint8Array(30 + nameData.length);
  const lv = new DataView(localHeader.buffer);
  lv.setUint32(0, 0x04034b50, true); // signature
  lv.setUint16(4, 20, true); // version needed
  lv.setUint16(6, 0, true); // flags
  lv.setUint16(8, 0, true); // compression: store
  lv.setUint16(10, dosTime, true);
  lv.setUint16(12, dosDate, true);
  lv.setUint32(14, crc, true);
  lv.setUint32(18, fileData.length, true); // compressed size
  lv.setUint32(22, fileData.length, true); // uncompressed size
  lv.setUint16(26, nameData.length, true);
  lv.setUint16(28, 0, true); // extra field length
  localHeader.set(nameData, 30);

  const centralDirOffset = localHeader.length + fileData.length;

  // Central directory header
  const centralHeader = new Uint8Array(46 + nameData.length);
  const cv = new DataView(centralHeader.buffer);
  cv.setUint32(0, 0x02014b50, true); // signature
  cv.setUint16(4, 0x031e, true); // version made by: Unix, ZIP 2.0
  cv.setUint16(6, 20, true); // version needed
  cv.setUint16(8, 0, true); // flags
  cv.setUint16(10, 0, true); // compression: store
  cv.setUint16(12, dosTime, true);
  cv.setUint16(14, dosDate, true);
  cv.setUint32(16, crc, true);
  cv.setUint32(20, fileData.length, true);
  cv.setUint32(24, fileData.length, true);
  cv.setUint16(28, nameData.length, true);
  cv.setUint16(30, 0, true); // extra field length
  cv.setUint16(32, 0, true); // comment length
  cv.setUint16(34, 0, true); // disk number
  cv.setUint16(36, 0, true); // internal attributes
  // External attributes: Unix rwxr-xr-x (0755) in high 16 bits
  cv.setUint32(38, (0o100755 << 16) >>> 0, true);
  cv.setUint32(42, 0, true); // local header offset
  centralHeader.set(nameData, 46);

  // End of central directory
  const endRecord = new Uint8Array(22);
  const ev = new DataView(endRecord.buffer);
  ev.setUint32(0, 0x06054b50, true); // signature
  ev.setUint16(4, 0, true); // disk number
  ev.setUint16(6, 0, true); // central dir disk
  ev.setUint16(8, 1, true); // entries on disk
  ev.setUint16(10, 1, true); // total entries
  ev.setUint32(12, centralHeader.length, true); // central dir size
  ev.setUint32(16, centralDirOffset, true); // central dir offset
  ev.setUint16(20, 0, true); // comment length

  // Combine all parts
  const total = localHeader.length + fileData.length + centralHeader.length + endRecord.length;
  const result = new Uint8Array(total);
  let offset = 0;
  result.set(localHeader, offset); offset += localHeader.length;
  result.set(fileData, offset); offset += fileData.length;
  result.set(centralHeader, offset); offset += centralHeader.length;
  result.set(endRecord, offset);

  return result;
}

/** CRC-32 (same algorithm as zlib) */
function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc ^= data[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}
