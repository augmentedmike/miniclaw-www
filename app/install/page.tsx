import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Install MiniClaw",
  description: "One-click installer for your personal AI assistant",
};

export default function InstallPage() {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "#f0f0f0",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          textAlign: "center",
          maxWidth: 480,
          padding: "40px 24px",
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "#00E5CC22",
            border: "2px solid #00E5CC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            margin: "0 auto 24px",
          }}>
            🦀
          </div>

          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
            Install MiniClaw
          </h1>
          <p style={{ fontSize: 16, color: "#888", marginBottom: 32, lineHeight: 1.6 }}>
            Your personal AI assistant. Runs locally on your Mac.
          </p>

          <a
            href="https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/dist/Install%20MiniClaw.zip"
            style={{
              display: "inline-block",
              background: "#00E5CC",
              color: "#0f0f0f",
              fontSize: 18,
              fontWeight: 600,
              padding: "16px 48px",
              borderRadius: 12,
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
          >
            Download installer
          </a>

          <div style={{
            marginTop: 32,
            padding: 20,
            borderRadius: 12,
            background: "#1a1a1a",
            border: "1px solid #333",
            textAlign: "left",
          }}>
            <p style={{ fontSize: 14, color: "#ccc", margin: "0 0 12px", fontWeight: 600 }}>
              After downloading:
            </p>
            <ol style={{ fontSize: 14, color: "#999", margin: 0, paddingLeft: 20, lineHeight: 2 }}>
              <li>Open your <strong style={{ color: "#ccc" }}>Downloads</strong> folder</li>
              <li>Double-click <strong style={{ color: "#ccc" }}>Install MiniClaw.zip</strong> to unzip</li>
              <li>Right-click <strong style={{ color: "#ccc" }}>Install MiniClaw</strong> and click <strong style={{ color: "#ccc" }}>Open</strong></li>
              <li>Click <strong style={{ color: "#ccc" }}>Open</strong> once more to confirm</li>
            </ol>
            <p style={{ fontSize: 12, color: "#555", marginTop: 12, marginBottom: 0 }}>
              A native macOS dialog asks for your password. Nothing is stored or sent anywhere.
            </p>
          </div>

          <p style={{ fontSize: 12, color: "#444", marginTop: 24 }}>
            Or if you prefer the terminal: <code style={{ color: "#666", background: "#1a1a1a", padding: "2px 6px", borderRadius: 4 }}>curl -fsSL https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/bootstrap.sh | bash</code>
          </p>
        </div>
      </body>
    </html>
  );
}
