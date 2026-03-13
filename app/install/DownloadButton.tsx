"use client";

export function DownloadButton({ href }: { href: string }) {
  const handleClick = () => {
    // Start the download
    const a = document.createElement("a");
    a.href = href;
    a.click();

    // Scroll to the guide
    setTimeout(() => {
      document.getElementById("guide")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: "inline-block",
        background: "#00E5CC",
        color: "#0f0f0f",
        fontSize: 18,
        fontWeight: 600,
        padding: "16px 48px",
        borderRadius: 12,
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      Download installer
    </button>
  );
}
