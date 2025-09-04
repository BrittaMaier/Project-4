import { useState } from "react";

export default function CopyToClipboard({ hex }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  return (
    <button type="button" onClick={copy}>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
