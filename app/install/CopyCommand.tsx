"use client";

import { useState } from "react";

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select the text
      const el = document.getElementById("mc-install-cmd");
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
      }
    }
  };

  return (
    <div
      onClick={handleCopy}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "#111",
        border: `1px solid ${copied ? "#00E5CC44" : "#333"}`,
        borderRadius: 8,
        padding: "12px 16px",
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}
    >
      <code
        id="mc-install-cmd"
        style={{
          flex: 1,
          fontFamily: "ui-monospace, monospace",
          fontSize: 12,
          color: "#00E5CC",
          wordBreak: "break-all",
          lineHeight: 1.6,
          userSelect: "all",
        }}
      >
        {command}
      </code>
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 4,
          flexShrink: 0,
          color: copied ? "#00E5CC" : "#555",
          fontSize: 16,
          transition: "color 0.2s",
        }}
        title="Copy to clipboard"
      >
        {copied ? "✓" : "⧉"}
      </button>
    </div>
  );
}
