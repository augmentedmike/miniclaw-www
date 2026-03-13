import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Install MiniClaw",
  description: "One-click installer for your personal AI assistant",
};

interface Step {
  n: number;
  title: string;
  desc: React.ReactNode;
  img: string;
  imgAlt: string;
}

const STEPS: Step[] = [
  { n: 1, title: "Download & unzip", desc: "Click the button above, then double-click the zip in your Downloads folder to unzip it.", img: "", imgAlt: "" },
  { n: 2, title: "Double-click Install MiniClaw", desc: <>macOS will show a warning — this is normal for apps not from the App Store. Click <strong style={{ color: "#fff" }}>Done</strong>.</>, img: "", imgAlt: "" },
  { n: 3, title: "Open System Settings", desc: <>Click the Apple menu  → System Settings, then search for <strong style={{ color: "#fff" }}>&quot;priv&quot;</strong> in the search box.</>, img: "/guide/1-settings.png", imgAlt: "Open System Settings and search for priv" },
  { n: 4, title: "Go to Privacy & Security", desc: <>Click <strong style={{ color: "#fff" }}>Privacy & Security</strong> in the sidebar.</>, img: "/guide/3-privacy.png", imgAlt: "Privacy & Security in System Settings" },
  { n: 5, title: "Scroll down to Security", desc: "Scroll down past the privacy sections until you see the Security heading.", img: "/guide/4-privacy-scroll-down.png", imgAlt: "Scroll down to Security section" },
  { n: 6, title: 'Click "Open Anyway"', desc: <>You&apos;ll see &quot;Install MiniClaw was blocked to protect your Mac.&quot; Click <strong style={{ color: "#00E5CC" }}>Open Anyway</strong>.</>, img: "/guide/5-look-for-this-click-open.png", imgAlt: "Click Open Anyway" },
  { n: 7, title: "Double-click Install MiniClaw again", desc: <>Go back to your Downloads folder and double-click <strong style={{ color: "#fff" }}>Install MiniClaw</strong> one more time. This time it will run.</>, img: "", imgAlt: "" },
  { n: 8, title: "Enter your Mac password", desc: <>A dialog will ask for your password. Type it and click <strong style={{ color: "#00E5CC" }}>OK</strong>. Click <strong style={{ color: "#00E5CC" }}>Allow</strong> or <strong style={{ color: "#00E5CC" }}>Open</strong> on any other prompts until it finishes.</>, img: "", imgAlt: "" },
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
        {/* Quick install option */}
        <div style={{
          textAlign: "center",
          marginBottom: 32,
          padding: "20px 24px",
          background: "#00E5CC08",
          border: "1px solid #00E5CC22",
          borderRadius: 12,
        }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: "#ccc", margin: "0 0 8px" }}>
            Easier option
          </p>
          <p style={{ fontSize: 13, color: "#888", margin: "0 0 14px", lineHeight: 1.6 }}>
            While we wait for Apple approval, you can skip the download and just
            open <strong style={{ color: "#ccc" }}>Terminal</strong> (search for it in Spotlight with Cmd+Space),
            paste this command, and press Enter:
          </p>
          <div style={{
            background: "#111",
            border: "1px solid #333",
            borderRadius: 8,
            padding: "12px 16px",
            fontFamily: "ui-monospace, monospace",
            fontSize: 12,
            color: "#00E5CC",
            wordBreak: "break-all",
            textAlign: "left",
            lineHeight: 1.6,
            userSelect: "all",
            cursor: "text",
          }}>
            bash &lt;(curl -fsSL https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/bootstrap.sh)
          </div>
          <p style={{ fontSize: 11, color: "#555", margin: "10px 0 0" }}>
            Click the command above to select it, then Cmd+C to copy.
          </p>
        </div>

        <div style={{
          textAlign: "center",
          marginBottom: 32,
          padding: "16px 20px",
          background: "#1a1a1a",
          border: "1px solid #333",
          borderRadius: 12,
        }}>
          <p style={{ fontSize: 14, color: "#999", margin: 0, lineHeight: 1.7 }}>
            We don&apos;t have Apple&apos;s approval yet — we&apos;re working on it.
            <br />
            Until then, there&apos;s a workaround below if you prefer the download. We&apos;ll make this much easier soon!
          </p>
        </div>

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
