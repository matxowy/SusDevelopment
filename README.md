# SusDevelopment - GitHub Pages

## Struktura

- `index.html` - strona główna
- `eyerest/index.html` - podstrona EyeRest Reminder (`/eyerest/`)
- `eyerest/privacy/index.html` - aktualna polityka prywatności (`/eyerest/privacy`; GitHub Pages może dodać końcowy ukośnik)
- `products/eyerest/` - zachowane starsze adresy produktu i polityki
- `language.js` - wybór EN/PL; domyślnie EN, wybór zapisany w localStorage
- `eyerest/privacy/PRIVACY.md` - lokalna kopia polityki dostarczonej przez autora aplikacji
- `styles.css` - wszystkie style i responsywność
- `assets/` - logotypy SusDevelopment i EyeRest
- `404.html` - prosta strona błędu

Polityka pozostaje w języku dokumentu źródłowego. Wybór języka zmienia interfejs strony, bez automatycznego tłumaczenia dokumentu. Pełna treść jest zapisana bezpośrednio w HTML, działa bez JavaScript i nie wymaga dostępu do prywatnego repozytorium. Strona udostępnia też kopię Markdown. Przy zmianie polityki należy zaktualizować `eyerest/privacy/PRIVACY.md` i treść `#privacy-content` w obu plikach: `eyerest/privacy/index.html` oraz `products/eyerest/privacy.html`, zachowując nagłówki, listy i tabelę uprawnień.

Publikacja: statyczne pliki z tego katalogu należy wdrożyć w dotychczasowej konfiguracji GitHub Pages dla `susdevelopment.pl`; nie wymagają budowania.
