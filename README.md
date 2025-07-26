# TSV Ladbergen Website – TYPO3 Projekt

Dies ist das Repository für die Vereinswebsite des TSV Ladbergen, basierend auf TYPO3 CMS.

## Voraussetzungen

- PHP 8.2 oder höher
- [Composer](https://getcomposer.org/download/)
- Datenbank (z.B. MySQL/MariaDB)
- Optional: DDEV für lokale Entwicklung

## Installation

1. Repository klonen:
   ```bash
   git clone <REPO-URL> tsv-ladbergen
   cd tsv-ladbergen
   ```

2. Abhängigkeiten installieren:
   ```bash
   composer install
   ```

3. TYPO3 Setup ausführen (interaktiv):
   ```bash
   composer exec typo3 setup
   ```

   Oder unbeaufsichtigt:
   ```bash
   composer exec -- typo3 setup \
     --no-interaction \
     --driver=mysqli \
     --username=... \
     --password=... \
     --host=127.0.0.1 \
     --port=3306 \
     --dbname=typo3 \
     --admin-username=admin \
     --admin-email="email@domain.de" \
     --admin-user-password=deinPasswort \
     --project-name="TSV Ladbergen Website" \
     --create-site="https://localhost/"
   ```

4. Optional: DDEV für lokale Entwicklung aktivieren:
   ```bash
   ddev start
   ```

## Entwicklung

- Lokalen PHP-Server starten:
  ```bash
  TYPO3_CONTEXT=Development php -S localhost:8000 -t public
  ```
  Dann im Browser `http://localhost:8000` öffnen.

- Für DDEV:
  ```bash
  ddev launch
  ```

## Verzeichnisstruktur

- `public/` – Webroot, Einstiegspunkt für den Webserver
- `packages/site_package/` – Eigenes TYPO3 Site Package (Konfiguration, Templates, Ressourcen)
- `config/` – TYPO3 Konfigurationsdateien
- `var/`, `vendor/` – System- und Abhängigkeitsverzeichnisse

## Nützliche Befehle

- Xdebug aktivieren/deaktivieren (mit DDEV):
  ```bash
  ddev xdebug on
  ddev xdebug off
  ```

- Composer Abhängigkeiten aktualisieren:
  ```bash
  composer update
  ```

## Lizenz

GPL-2.0 oder später
