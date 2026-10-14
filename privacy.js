(() => {
  const source = 'https://raw.githubusercontent.com/matxowy/EyeRestReminder/master/PRIVACY.md';
  const content = document.getElementById('privacy-content');
  const loading = document.getElementById('privacy-loading');
  const error = document.getElementById('privacy-error');

  // Build DOM nodes instead of interpreting remote HTML.
  function inline(parent, text) {
    const tokens = /(\[([^\]]+)\]\(([^\s)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`)/g;
    let start = 0;
    for (const match of text.matchAll(tokens)) {
      parent.append(document.createTextNode(text.slice(start, match.index)));
      let element;
      if (match[2]) {
        const url = new URL(match[3], source);
        element = document.createElement(['https:', 'http:', 'mailto:'].includes(url.protocol) ? 'a' : 'span');
        if (element.tagName === 'A') element.href = url.href;
        element.textContent = match[2];
      } else {
        element = document.createElement(match[4] ? 'strong' : 'code');
        element.textContent = match[4] || match[5];
      }
      parent.append(element);
      start = match.index + match[0].length;
    }
    parent.append(document.createTextNode(text.slice(start)));
  }
  function render(markdown) {
    const fragment = document.createDocumentFragment();
    let paragraph = null;
    let list = null;
    let code = null;
    for (const line of markdown.replace(/\r/g, '').split('\n')) {
      if (line.startsWith('```')) {
        if (code) code = null;
        else { const pre = document.createElement('pre'); code = document.createElement('code'); pre.append(code); fragment.append(pre); }
        paragraph = list = null;
        continue;
      }
      if (code) { code.append(document.createTextNode(line + '\n')); continue; }
      if (!line.trim()) { paragraph = list = null; continue; }
      const heading = /^(#{1,6})\s+(.+)$/.exec(line);
      const item = /^\s*(?:[-*+] |\d+\. )(.+)$/.exec(line);
      if (heading) {
        const element = document.createElement('h' + Math.min(6, heading[1].length + 1));
        inline(element, heading[2]); fragment.append(element); paragraph = list = null;
      } else if (/^\s*(---+|\*\*\*+)\s*$/.test(line)) {
        fragment.append(document.createElement('hr')); paragraph = list = null;
      } else if (item) {
        const type = /^\s*\d/.test(line) ? 'OL' : 'UL';
        if (!list || list.tagName !== type) { list = document.createElement(type); fragment.append(list); }
        const element = document.createElement('li'); inline(element, item[1]); list.append(element); paragraph = null;
      } else {
        list = null;
        if (!paragraph) { paragraph = document.createElement('p'); fragment.append(paragraph); }
        else paragraph.append(document.createTextNode('\n'));
        inline(paragraph, line);
      }
    }
    content.replaceChildren(fragment);
  }
  async function load() {
    loading.hidden = false; error.hidden = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(source, { cache: 'no-store', signal: controller.signal });
      if (!response.ok) throw new Error('Source unavailable');
      const markdown = await response.text();
      if (!markdown.trim()) throw new Error('Empty policy');
      render(markdown);
    } catch { error.hidden = false; }
    finally { clearTimeout(timeout); loading.hidden = true; }
  }
  document.getElementById('privacy-retry').addEventListener('click', load);
  load();
})();
