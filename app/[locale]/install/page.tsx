import { Metadata } from "next"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { CopyCommand } from "./CopyCommand"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "install" })
  return {
    title: t("title"),
    description: t("metaDescription"),
  }
}

interface Step {
  n: number
  titleKey: string
  descKey: string
  img: string
  imgAlt: string
}

const STEPS: Step[] = [
  { n: 1, titleKey: "step1Title", descKey: "step1Desc", img: "", imgAlt: "" },
  { n: 2, titleKey: "step2Title", descKey: "step2Desc", img: "", imgAlt: "" },
  { n: 3, titleKey: "step3Title", descKey: "step3Desc", img: "/guide/1-settings.png", imgAlt: "System Settings" },
  { n: 4, titleKey: "step4Title", descKey: "step4Desc", img: "/guide/3-privacy.png", imgAlt: "Privacy & Security" },
  { n: 5, titleKey: "step5Title", descKey: "step5Desc", img: "/guide/4-privacy-scroll-down.png", imgAlt: "Security section" },
  { n: 6, titleKey: "step6Title", descKey: "step6Desc", img: "/guide/5-look-for-this-click-open.png", imgAlt: "Open Anyway" },
  { n: 7, titleKey: "step7Title", descKey: "step7Desc", img: "", imgAlt: "" },
  { n: 8, titleKey: "step8Title", descKey: "step8Desc", img: "", imgAlt: "" },
]

export default async function InstallPage() {
  const t = await getTranslations("install")

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
        padding: "48px 24px 24px",
      }}>
        <Image
          src="/miniclaw-logo.png"
          alt="MiniClaw"
          width={80}
          height={80}
          style={{ borderRadius: "50%", marginBottom: 20 }}
        />

        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 6 }}>
          {t("heading")}
        </h1>
        <p style={{ fontSize: 15, color: "#888", marginBottom: 24, lineHeight: 1.6 }}>
          {t("subtitle")}
        </p>
      </div>

      <div style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "0 24px 60px",
      }}>
        {/* Apple approval note */}
        <div style={{
          textAlign: "center",
          marginBottom: 24,
          padding: "14px 20px",
          background: "#1a1a1a",
          border: "1px solid #333",
          borderRadius: 12,
        }}>
          <p style={{ fontSize: 13, color: "#999", margin: 0, lineHeight: 1.7 }}>
            <strong style={{ color: "#fff" }}>{t("appleNote")}</strong> {t("appleNoteSuffix")}
          </p>
        </div>

        {/* Terminal option */}
        <div style={{
          marginBottom: 32,
          padding: "24px",
          background: "#00E5CC08",
          border: "1px solid #00E5CC22",
          borderRadius: 12,
        }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: "#ccc", margin: "0 0 16px", textAlign: "center" }}>
            {t("easiestWay")}
          </p>
          <ol style={{ fontSize: 14, color: "#999", margin: "0 0 16px", paddingLeft: 20, lineHeight: 2.2 }}>
            <li>{t("spotlightStep")}</li>
            <li>{t("terminalStep")}</li>
            <li>{t("pasteStep")}</li>
          </ol>
          <CopyCommand
            command="bash <(curl -fsSL https://raw.githubusercontent.com/augmentedmike/miniclaw-os/main/bootstrap.sh)"
            copiedLabel={t("copied")}
            copyLabel={t("clickToCopy")}
          />
          <p style={{ fontSize: 12, color: "#555", marginTop: 12, marginBottom: 0, textAlign: "center" }}>
            {t("browserDone")}
          </p>
        </div>

        {/* Divider */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16, marginBottom: 32,
        }}>
          <div style={{ flex: 1, height: 1, background: "#333" }} />
          <span style={{ fontSize: 12, color: "#555", fontWeight: 600 }}>{t("orDownload")}</span>
          <div style={{ flex: 1, height: 1, background: "#333" }} />
        </div>

        {/* Step 1 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 24 }}>
          {STEPS.filter(s => s.n === 1).map((s) => (
            <div key={s.n} style={{
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              <div style={{ padding: "14px 18px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: "#00E5CC", color: "#0f0f0f",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, flexShrink: 0,
                }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#e0e0e0", marginBottom: 3 }}>{t(s.titleKey)}</div>
                  <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{t(s.descKey)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download button */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <a
            href="https://github.com/augmentedmike/miniclaw-os/releases/download/v0.1.5-installer/MiniClaw-Installer-v0.1.5.zip"
            style={{
              display: "inline-block",
              background: "#00E5CC",
              color: "#0f0f0f",
              fontSize: 16,
              fontWeight: 600,
              padding: "14px 40px",
              borderRadius: 12,
              textDecoration: "none",
            }}
          >
            {t("downloadInstaller")}
          </a>
        </div>

        {/* Steps 2+ */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {STEPS.filter(s => s.n > 1).map((s) => (
            <div key={s.n} style={{
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              <div style={{
                padding: "14px 18px",
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: "#00E5CC", color: "#0f0f0f",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, flexShrink: 0,
                }}>
                  {s.n}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#e0e0e0", marginBottom: 3 }}>
                    {t(s.titleKey)}
                  </div>
                  <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                    {t(s.descKey)}
                  </div>
                </div>
              </div>

              {s.img && (
                <div style={{
                  borderTop: "1px solid #222",
                  padding: 10,
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

        {/* Done */}
        <div style={{
          textAlign: "center",
          marginTop: 32,
          padding: "20px",
          background: "#00E5CC11",
          border: "1px solid #00E5CC33",
          borderRadius: 12,
        }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: "#00E5CC", margin: "0 0 6px" }}>
            {t("doneTitle")}
          </p>
          <p style={{ fontSize: 13, color: "#888", margin: 0, lineHeight: 1.6 }}>
            {t("doneDesc")}
          </p>
        </div>
      </div>
    </div>
  )
}
