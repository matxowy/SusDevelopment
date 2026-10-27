(() => {
  function setLanguage(language) {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-language-content]').forEach(element => {
      element.hidden = element.dataset.languageContent !== language;
    });
    document.querySelectorAll('[data-en]').forEach(element => {
      element.textContent = element.dataset[language];
    });
    for (const attribute of ['aria-label', 'alt', 'content']) {
      document.querySelectorAll(`[data-${attribute}-en]`).forEach(element => {
        element.setAttribute(attribute, element.getAttribute(`data-${attribute}-${language}`));
      });
    }
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
  }
  let language = 'en';
  try { if (localStorage.getItem('language') === 'pl') language = 'pl'; } catch {}
  setLanguage(language);
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.dataset.language;
      try { localStorage.setItem('language', selected); } catch {}
      setLanguage(selected);
    });
  });
})();
