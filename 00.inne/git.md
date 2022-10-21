# System kontroli wersji

- Git - https://git-scm.com/ (Wazne)
- SVN - https://subversion.apache.org/ (Niewazne)
- Perforce - https://www.perforce.com/ (Niewazne)

## Git

CLI (program terminalowy, bezokienkowy, skrypt) do systemu kontroli wersji.

### Komendy

- init - utworzenie repozytorium, konkretny folder staje sie "repozytorium", czyli mozna utrzymywac wiele wersji plikow z tego folderu
- commit - "zapisanie" wersji konkretnych plikow
- status - pokazuje ktore pliki sie zmienily w porownaniu do ostatniej wersji
- add - dodaje konkretne pliki do "stage"
- diff - pokazuje roznice w plikach w porownaniu do ostatniej wersji
- push - wysyla Twoja historie do zewnetrznego repozytorium
- pull - sciaga historie z zewnetrznego repozytorium
- log - pokazuje historie

### Inne

- konflikt - sytuacja w ktorej ktos zmienil to samo co Ty (w momencie pulla/merge-a), trzeba rozwiazac konflikt przed dalsza praca