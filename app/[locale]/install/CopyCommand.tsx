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
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
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
        <div
          style={{
            flexShrink: 0,
            fontSize: 11,
            fontWeight: 600,
            color: copied ? "#00E5CC" : "#666",
            background: copied ? "#00E5CC18" : "#1a1a1a",
            border: `1px solid ${copied ? "#00E5CC33" : "#333"}`,
            borderRadius: 6,
            padding: "4px 10px",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          {copied ? "Copied!" : "Click to copy"}
        </div>
      </div>
    </div>
  );
}
