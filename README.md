# SusDevelopment — GitHub Pages

Gotowa statyczna strona dla SusDevelopment. Nie wymaga frameworka, Node.js ani backendu.

## Struktura

- `index.html` — strona główna
- `products/eyerest/index.html` — podstrona EyeRest Reminder
- `products/eyerest/privacy.html` — szablon polityki prywatności do uzupełnienia przed publikacją aplikacji
- `styles.css` — wszystkie style i responsywność
- `assets/` — logotypy SusDevelopment i EyeRest
- `404.html` — prosta strona błędu

## Publikacja na GitHub Pages

1. Utwórz repozytorium, np. `susdevelopment-site`.
2. Wrzuć zawartość tego katalogu do głównego katalogu repozytorium.
3. Na GitHubie wejdź w `Settings -> Pages`.
4. W `Build and deployment` wybierz `Deploy from a branch`.
5. Wskaż branch `main` i katalog `/ (root)`.
6. Zapisz. GitHub poda publiczny adres strony.

## Własna domena

Jeżeli chcesz użyć `susdevelopment.pl`, ustaw ją w `Settings -> Pages -> Custom domain`, a następnie dodaj wymagane rekordy DNS u operatora domeny. Po konfiguracji możesz dodać plik `CNAME` z nazwą domeny do repozytorium.

## Co uzupełnić przed publikacją EyeRest

- finalny link Google Play w `products/eyerest/index.html`;
- finalny opis aplikacji, jeśli będzie inny;
- treść `products/eyerest/privacy.html` zgodną z faktycznym działaniem aplikacji;
- ewentualne dane firmy wymagane w stopce lub dokumentach.
