# SusDevelopment — GitHub Pages

## Struktura

- `index.html` — strona główna
- `eyerest/index.html` — podstrona EyeRest Reminder (`/eyerest/`)
- `eyerest/privacy/index.html` — aktualna polityka prywatności (`/eyerest/privacy`; GitHub Pages może dodać końcowy ukośnik)
- `products/eyerest/` — zachowane starsze adresy produktu i polityki
- `language.js` — wybór EN/PL; domyślnie EN, wybór zapisany w localStorage
- `privacy.js` — pobiera aktualny `PRIVACY.md` z gałęzi `master` repozytorium `matxowy/EyeRestReminder` przy każdym otwarciu, bez lokalnej kopii polityki
- `styles.css` — wszystkie style i responsywność
- `assets/` — logotypy SusDevelopment i EyeRest
- `404.html` — prosta strona błędu

Polityka pozostaje w języku dokumentu źródłowego. Wybór języka zmienia interfejs strony, bez automatycznego tłumaczenia dokumentu. Źródło musi być publicznie dostępne: `https://raw.githubusercontent.com/matxowy/EyeRestReminder/master/PRIVACY.md`. Jeśli pobranie nie powiedzie się, strona pokazuje komunikat, przycisk ponowienia i link do GitHuba. Bez JavaScript dostępny pozostaje link do źródła.

Publikacja: statyczne pliki z tego katalogu należy wdrożyć w dotychczasowej konfiguracji GitHub Pages dla `susdevelopment.pl`; nie wymagają budowania.
