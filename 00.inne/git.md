# System kontroli wersji

- Git - https://git-scm.com/ (Wazne)
- SVN - https://subversion.apache.org/ (Niewazne)
- Perforce - https://www.perforce.com/ (Niewazne)

## Git

CLI (program terminalowy, bezokienkowy, skrypt) do systemu kontroli wersji.

### Operacje

> Hint: Tekst w postaci `$COS_TAKIEGO` musisz podmienic tym, czego potrzebujesz, np. `git add $PLIK_1 $PLIK_2` -> `git add package.json 00.inne/git.md`

- `git init` - tworzy repozytorium w folderze w ktorym aktualnie jestes (sprawdz: `pwd`)
- `git add $PLIK_1 $PLIK_2 ...` - dodaje wybrane pliki do **stage**
- `git add .` - dodaje wszystkie zmienione pliki do **stage**
- `git status` - pokazuje aktualny status zmian - co mamy zmodyfikowane + co mamy w **stage**
- `git diff` - pokazuje zmiany jakie aktualnie masz w plikach
- `git diff --staged` - pokazuje zmiany jakie aktualnie masz w plikach, ale tylko te, ktore sa w **stage**
- `git commit -m "$OPIS_ZMIANY"` - tworzy nowy commit z zmian ktore masz w **stage**. 
- `git branch` - lista branchy w repozytorium
- `git branch $NAZWA_BRANCHA` - tworzy nowego brancha w lokalnym repozytorium
- `git pull` - zaciaganie zmian z zdalnego repozytorium
- `git push` - wrzucanie lokalnych zmian do zdalnego repozytorium
- `git merge $NAZWA_BRANCHA` - merguje brancha `$NAZWA_BRANCHA` z branchem na ktorym aktualnie jestes (sprawdz: `git status`)
- `git log` - pokazuje historie zmian w repozytorium


### Nomenklatura

- konflikt - sytuacja w ktorej ktos zmienil to samo co Ty (w momencie pulla/merge-a), trzeba rozwiazac konflikt przed dalsza praca