const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const inlineFormat = (text: string) => {
  return text
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
};

export const markdownToHtml = (markdown: string): string => {
  const lines = markdown.split(/\r?\n/);
  const output: string[] = [];
  let inList = false;
  let inCode = false;

  const closeList = () => {
    if (inList) {
      output.push("</ul>");
      inList = false;
    }
  };

  for (const line of lines) {
    const raw = line.trimEnd();

    if (raw.startsWith("```")) {
      closeList();
      if (!inCode) {
        inCode = true;
        output.push("<pre><code>");
      } else {
        inCode = false;
        output.push("</code></pre>");
      }
      continue;
    }

    if (inCode) {
      output.push(`${escapeHtml(raw)}\n`);
      continue;
    }

    if (!raw.trim()) {
      closeList();
      continue;
    }

    if (raw.startsWith("### ")) {
      closeList();
      output.push(`<h3>${inlineFormat(escapeHtml(raw.slice(4)))}</h3>`);
      continue;
    }

    if (raw.startsWith("## ")) {
      closeList();
      output.push(`<h2>${inlineFormat(escapeHtml(raw.slice(3)))}</h2>`);
      continue;
    }

    if (raw.startsWith("# ")) {
      closeList();
      output.push(`<h1>${inlineFormat(escapeHtml(raw.slice(2)))}</h1>`);
      continue;
    }

    if (raw.startsWith("- ")) {
      if (!inList) {
        output.push("<ul>");
        inList = true;
      }
      output.push(`<li>${inlineFormat(escapeHtml(raw.slice(2)))}</li>`);
      continue;
    }

    closeList();
    output.push(`<p>${inlineFormat(escapeHtml(raw))}</p>`);
  }

  closeList();
  return output.join("\n");
};
