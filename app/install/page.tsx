import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Install MiniClaw",
  description: "One-click installer for your personal AI assistant",
};

const step = (n: number, title: string, desc: string, img: string, imgAlt: string) => ({
  n, title, desc, img, imgAlt,
});

const STEPS = [
  step(1, "Download & unzip", "Click the button above, then double-click the zip in your Downloads folder to unzip it.", "", ""),
  step(2, "Double-click Install MiniClaw", "macOS will show a warning — this is normal for apps not from the App Store. Click Done.", "", ""),
  step(3, "Open System Settings", "Click the Apple menu  → System Settings, then search for \"priv\" in the search box.", "/guide/1-settings.png", "Open System Settings and search for priv"),
  step(4, "Go to Privacy & Security", "Click Privacy & Security in the sidebar.", "/guide/3-privacy.png", "Privacy & Security in System Settings"),
  step(5, "Scroll down to Security", "Scroll down past the privacy sections until you see the Security heading.", "/guide/4-privacy-scroll-down.png", "Scroll down to Security section"),
  step(6, 'Click "Open Anyway"', 'You\'ll see "Install MiniClaw was blocked to protect your Mac." Click Open Anyway.', "/guide/5-look-for-this-click-open.png", "Click Open Anyway"),
];

export default function InstallPage() {
  return (
    <div style={{
      margin: 0,
      minHeight: "100vh",
      background: "#0f0f0f",
      color: "#f0f0f0",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    }}>
      {/* Hero */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 24px 40px",
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "#00E5CC22", border: "2px solid #00E5CC",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 36, marginBottom: 24,
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
          href="https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/dist/MiniClaw-Installer-v0.1.5.zip"
          style={{
            display: "inline-block",
            background: "#00E5CC",
            color: "#0f0f0f",
            fontSize: 18,
            fontWeight: 600,
            padding: "16px 48px",
            borderRadius: 12,
            textDecoration: "none",
          }}
        >
          Download installer
        </a>
      </div>

      {/* Visual guide */}
      <div style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "0 24px 60px",
      }}>
        <h2 style={{
          fontSize: 20, fontWeight: 700, color: "#ccc",
          marginBottom: 32, textAlign: "center",
        }}>
          After downloading
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              {/* Step header */}
              <div style={{
                padding: "16px 20px",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "#00E5CC", color: "#0f0f0f",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, flexShrink: 0,
                }}>
                  {s.n}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#e0e0e0", marginBottom: 4 }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                    {s.desc}
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              {s.img && (
                <div style={{
                  borderTop: "1px solid #222",
                  padding: 12,
                  background: "#111",
                }}>
                  <Image
                    src={s.img}
                    alt={s.imgAlt}
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 8,
                      border: "1px solid #2a2a2a",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* That's it */}
        <div style={{
          textAlign: "center",
          marginTop: 40,
          padding: "24px 20px",
          background: "#00E5CC11",
          border: "1px solid #00E5CC33",
          borderRadius: 12,
        }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: "#00E5CC", margin: "0 0 8px" }}>
            That&apos;s it!
          </p>
          <p style={{ fontSize: 14, color: "#888", margin: 0, lineHeight: 1.6 }}>
            MiniClaw will install itself and open in your browser.
            <br />
            You only need to do this once — it starts automatically after that.
          </p>
        </div>

        {/* Terminal fallback */}
        <p style={{ fontSize: 12, color: "#444", marginTop: 32, textAlign: "center" }}>
          Or if you prefer the terminal: <code style={{ color: "#666", background: "#1a1a1a", padding: "2px 6px", borderRadius: 4 }}>curl -fsSL https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/bootstrap.sh | bash</code>
        </p>
      </div>
    </div>
  );
}
