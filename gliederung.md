# Mono-Poly - das Spiel um den großen Deal

## Gliederung

- [x] Zur Person
  - [x] 10 Jahre selbstständig im Frontend
- [x] Disclaimer: Frontend- und Javascript-Biased
- [x] Was sind Poly-Repos
  - [x] Definition
  - [x] Use Cases (Separation: Backend, Frontend(s), Infra)
  - [x] Pros
    - [x] abgekapselte Codebasis
    - [x] granularere Rechte: (externe) Mitarbeiter können z.B. auf ein konkretes Projekt Zugriff bekommen
  - [x] Cons
    - [x] Versionsmanagement (Versionen synchronisieren)
    - [x] Codestandards etablieren
    - [x] Synchronisieren von geänderten APIs unter verschiedenen Projekten
    - [x] Code-Duplikationen von lintern, Lib-Abhängigkeiten
- [x] Was sind Mono-Repos
  - [x] Definition
  - [x] Use Cases
  - [x] Demo Time: lookmom/nohands
  - [x] Pros
    - [x] Separation of Concern
    - [x] Config Sharing
    - [x] Interface Sharing (API-Contracts)
    - [x] konsistente Deployments
    - [x] Workspaces in node_modules -> absolute Pfade
  - [x] Cons
    - [x] häufige Commits/Checkouts
    - [x] Repogröße
    - [x] Rechte Aufteilung für Team-Mitglieder
      - [x] Partial Checkouts?

## Referenzen:

- [x] https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/
- [x] https://github.com/babel/babel
- [x] https://www.youtube.com/watch?v=PvabBs_utr8&t=984s
- [x] https://earthly.dev/blog/monorepo-vs-polyrepo/
- [x] https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/
