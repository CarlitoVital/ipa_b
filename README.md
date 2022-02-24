<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="src/assets/project_logo/ipa_projekt_logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">IPA Linkpinnwand-Webseite</h3>

<p>Strapi<br />
Backend des Gesamtprojektes
</p>

  <p align="center">
    Projekt Beschreibung
    <br />
    Die Webseite soll für die Sammlung nützlicher und interessanter Links sein. (Z.B. Tutorials, Infos, Best Practices usw.)
    Für jeden Link der eingeben wird der Titel, die Beschreibung und ein Bild automatisch abgefragt und gespeichert.
  </p>
</div>

<details>
  <summary>Inhaltsverzeichnis</summary>
  <ol>
    <li>
      <a href="#projekt-setup">Projekt Setup</a>
    </li>
    <li>
      <a href="#erstellt-mit">Erstellt mit</a>
    </li>
    <li>
      <a href="#projekt-setup">Projektaufbau</a>
      <ul>
        <li><a href="#tabellen">Tabellen</a></li>
        <li><a href="#api">API</a></li>
        <li><a href="#auto-abfrage">Auto Abfrage</a></li>
      </ul>
    </li>
  </ol>
</details>

## Projekt Setup

Alle Befehle sind ebenfalls mit yarn möglich.

Mit dem unten stehenden Befehl werden alle notwendigen Node JS Module installiert.

- npm

  ```sh
  npm i
  ```

  oder

- npm

  ```sh
  npm install
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Test Funktionalität

Projekt laufen lassen

- npm

  ```sh
  npm run develop
  ```

Nun sollte das Projekt im Browser zu sehen sein.

```sh
http://localhost:8080/admin
```

Es kann auch ein andere Port sein.

Vergessen Sie nicht, dass auch das Frontend (Vue JS) welches zu diesem Projekt gehört laufen sollte. Sonst sehen sie lediglich das Backend.

<p align="right">(<a href="#top">back to top</a>)</p>

## Erstellt mit

- [Strapi](https://strapi.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Projekt Aufbau

### Tabellen

Im Strapi Content-Type Builder sind zwei neuen Tabellen, Category und Link.

- Category

  - name (Name der Kategorie)
  - icon (Klasse für Icon Font)

- Link
  - url (URL)
  - title (Titel)
  - description (Beschreibung)
  - clicks (Anzahl Klicks)
  - image (Bild Link)
  - category_id (Fremdschlüssel für zugewiesene Kategorie)

### API

Unter Settings, Roles, Public, Permissions sind die API Berechtigungen definiert. Für Link sind alle aktiviert, für Category nur die beiden GET.

<p align="right">(<a href="#top">back to top</a>)</p>

### Auto Abfrage

Die automatische Abfrage ist im Verzeichnis unter src/api/link/controllers/urldata.js zu finden.

<p align="right">(<a href="#top">back to top</a>)</p>
