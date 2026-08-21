# Studio 33 — Manuale di gestione del sito

Guida operativa completa. Contiene sia i **comandi tecnici** da eseguire, sia i **prompt da dare a un'intelligenza artificiale** (Claude, ChatGPT) per farsi modificare il sito senza scrivere codice.

Chi legge non deve essere un programmatore.

---

## 1. Come funziona il sito

Il sito è **un solo file**: `index.html`. Contiene tutto — testi, grafica, comportamento. Nessun database, nessun WordPress, nessun pannello di amministrazione.

Le nove "pagine" (About, Location, Produzione…) non sono file separati: sono blocchi dentro lo stesso documento, mostrati e nascosti da un frammento di codice. Per questo l'indirizzo resta identico mentre navighi.

| | |
|---|---|
| Cartella sul computer | `C:\Users\fabio.bernardini\studio33` |
| Indirizzo pubblico | https://bernardini250576.github.io/studio33/ |
| Pubblicazione | GitHub Pages (gratuito) |

**Nella cartella ci sono**: `index.html`, 16 immagini, 3 video `.mp4`, e i file tecnici `.nojekyll`, `.gitignore`, `README.md` (non toccare questi ultimi).

---

## 2. Le due strade per modificare il sito

**Strada A — con l'intelligenza artificiale.** Carichi `index.html` su Claude o ChatGPT, scrivi cosa vuoi cambiare, riscarichi il file modificato. Non serve conoscere il codice. È la strada consigliata per chi non è tecnico. → Vedi **sezione 5**.

**Strada B — a mano.** Apri il file con un editor di testo e modifichi direttamente. Più veloce per cambiare una parola, più rischioso per operazioni complesse. → Vedi **sezione 6**.

In entrambi i casi, per mettere online la modifica servono i comandi della sezione 3.

---

## 3. Pubblicare una modifica

Apri il **Prompt dei comandi** (cerca `cmd` nel menu Start) e scrivi:

```bash
cd C:\Users\fabio.bernardini\studio33

git add .
git commit -m "Descrivi qui cosa hai cambiato"
git push
```

Aspetta **1-2 minuti**, poi ricarica il sito con `Ctrl + Shift + R`. Il refresh normale non basta: mostra la versione salvata in cache.

### Verificare di avere il file giusto

La prima riga di `index.html` contiene un numero di versione. Per leggerlo senza aprire il file:

```bash
findstr /C:"VERSIONE" index.html
```

Se il numero non è quello atteso, stai lavorando su una copia vecchia. **Questo è l'errore più frequente**: Windows spesso salva i download come `index (1).html` invece di sovrascrivere.

### Se il push chiede la password

GitHub non accetta più la password dell'account. Serve un **Personal Access Token**:
GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic) → spunta `repo` → copia il codice e usalo al posto della password.

---

## 4. Comandi utili

| Comando | Cosa fa |
|---|---|
| `cd C:\Users\fabio.bernardini\studio33` | entra nella cartella del sito |
| `dir` | elenca i file presenti |
| `git status` | mostra cosa è stato modificato |
| `git add .` | prepara tutte le modifiche |
| `git commit -m "testo"` | registra le modifiche con una descrizione |
| `git push` | pubblica online |
| `git log --oneline` | elenco delle versioni precedenti |
| `findstr /C:"VERSIONE" index.html` | controlla la versione del file |

### Tornare indietro

Annullare l'ultima pubblicazione:
```bash
git revert HEAD
git push
```

Recuperare il file com'era due versioni fa:
```bash
git checkout HEAD~2 index.html
git commit -m "Ripristino versione precedente"
git push
```

---

## 5. Modificare il sito con l'AI

### Come si procede

1. Vai su **claude.ai** (consigliato per file grandi) o **chatgpt.com**
2. **Carica il file** `index.html` con la graffetta
3. **Scrivi il prompt** (esempi qui sotto)
4. **Scarica** il file modificato
5. Sostituiscilo nella cartella e pubblica con i comandi della sezione 3

### Regola d'oro dei prompt

Un prompt efficace dice **tre cose**: dove intervenire, cosa cambiare, cosa non toccare.

> ❌ *"Cambia il titolo"* — troppo vago, l'AI non sa quale
>
> ✅ *"Nella pagina Location, cambia il titolo principale da 'La location ideale per shooting a Roma' a 'Il set che ha ospitato Giacomelli e Toscani'. Ricorda che il testo esiste in italiano e inglese: aggiorna entrambe le versioni. Non modificare altro."*

---

### 5.1 Prompt pronti all'uso

**Aggiungere un video YouTube**

```
Aggiungi questo video alla pagina Works del sito:
https://www.youtube.com/watch?v=CODICE

Deve comparire sia nella griglia della pagina Works, sia nel
carosello della Home. Verifica che l'indice in openMedia()
corrisponda alla posizione corretta in mediaList.
Alla fine dimmi quanti video ci sono in totale.
```

**Sostituire una fotografia**

```
Sostituisci l'immagine dell'intestazione della pagina Produzione
con quella che ti allego. Ottimizzala per il web:
massimo 1920 pixel di larghezza, sotto i 400 KB.
Dimmi come si deve chiamare il file e dove va messo.
```

**Cambiare un testo**

```
Nella pagina Formazione, sostituisci il paragrafo che inizia con
"Tékhne è un progetto formativo" con questo nuovo testo:

[incolla qui il testo]

Il sito è bilingue: aggiorna sia la versione italiana sia quella
inglese. Non toccare il resto della pagina.
```

**Aggiungere un progetto ai Lavori**

```
Aggiungi un nuovo progetto alla griglia Lavori della pagina Produzione:

Titolo: [titolo]
Categoria: [es. Live Event]
Data: [es. 20 Marzo 2026]
Immagine: [indirizzo]
Link: [indirizzo della pagina originale]
Descrizione: [due righe]

Aggiungilo in cima alla griglia e aggiorna il conteggio
"44 progetti" nell'intestazione della sezione.
```

**Correggere un problema visivo**

```
Nella pagina [nome], [descrivi cosa vedi di sbagliato].
Analizza la cascata CSS per capire quale regola sta vincendo:
attenzione che alcune pagine hanno un blocco <style> locale
che sovrascrive quello globale.
Correggi alla fonte, non aggiungendo !important.
```

**Controllo generale prima di pubblicare**

```
Fai un controllo completo del file:
- tag HTML bilanciati e nulla dopo </html>
- JavaScript senza errori di sintassi
- tutte le funzioni chiamate sono definite
- tutti gli id referenziati esistono nel documento
- indici dei video coerenti con mediaList
- validità HTML5
Dimmi solo cosa non va, senza modificare nulla.
```

---

### 5.2 Cosa dire sempre all'AI

Aggiungi queste istruzioni ai tuoi prompt: evitano gli errori che si sono già verificati.

```
Tieni presente che:
- il sito è bilingue: ogni testo esiste in <span data-lang="it">
  e <span data-lang="en">, vanno aggiornati entrambi
- alcune pagine hanno un blocco <style> locale che vince
  sul CSS globale: correggi lì, non in coda al file
- non aggiungere mai background-size negli attributi style=""
  delle immagini: annulla le regole del foglio di stile
- il blocco <div class="vmodal"> deve restare dopo </main>
- non scrivere nulla dopo </html>
- aggiorna il numero di VERSIONE nella prima riga del file
```

---

### 5.3 Verificare quello che l'AI ha prodotto

Non fidarti a scatola chiusa. Prima di pubblicare:

1. **Apri il file scaricato** con un doppio clic e naviga tutte le pagine
2. **Controlla il numero di versione** nella prima riga: deve essere aumentato
3. **Prova su telefono** riducendo la finestra del browser
4. Se qualcosa non torna, **non pubblicare**: chiedi all'AI di correggere

Se dopo la pubblicazione il sito è rotto, torna indietro con `git revert HEAD` (sezione 4).

---

## 6. Modificare il sito a mano

Apri `index.html` con **Visual Studio Code** (gratuito, code.visualstudio.com): colora il codice e segnala gli errori. Il Blocco Note funziona ma è scomodo.

### 6.1 Cambiare un testo

Cerca la frase con `Ctrl+F`. Ogni testo esiste in due lingue, affiancate:

```html
<span data-lang="it">Prenota una visita</span><span data-lang="en">Book a visit</span>
```

Modifica **entrambe**. Non toccare mai ciò che sta tra `<` e `>`.

### 6.2 Aggiungere un video YouTube

Il codice del video è nell'indirizzo: in `youtube.com/watch?v=abc123XYZ` è `abc123XYZ`.

**Primo passo** — cerca `var mediaList` e aggiungi in fondo alla lista, prima della parentesi chiusa:

```javascript
{"k": "yt", "id": "abc123XYZ"}
```

Serve la virgola prima. Conta gli elementi: se il tuo è il diciottesimo, il suo numero è **17** (si conta da zero).

**Secondo passo** — cerca `class="hv-item"`, copia l'ultimo blocco e incollalo sotto, cambiando numero e codice:

```html
<button class="hv-item" onclick="openMedia(17)" aria-label="Studio 33">
  <div class="hv-media" style="background-image:url('https://img.youtube.com/vi/abc123XYZ/hqdefault.jpg')">
    <i class="ti ti-brand-youtube hv-src"></i><span class="hv-play"></span>
  </div>
  <div class="hv-meta">
    <span class="hv-cat">YouTube</span>
    <span class="hv-title"><span data-lang="it">Titolo</span><span data-lang="en">Title</span></span>
  </div>
</button>
```

L'anteprima arriva da sola da YouTube: nessun file da caricare.

> Per averlo anche nel carosello Home, ripeti cercando `class="car-item"` e usando quei nomi (`car-media`, `car-meta`, `car-kind`, `car-title`).

### 6.3 Sostituire una fotografia

1. Riduci l'immagine: **massimo 1920 pixel, sotto i 400 KB**. Usa [squoosh.app](https://squoosh.app)
2. Copia il file nella cartella `studio33`
3. Cerca il nome della vecchia immagine in `index.html` e sostituiscilo
4. Pubblica

**Dove sono usate le immagini**

| File | Dove appare |
|---|---|
| `home-hero.jpg` | prima slide del carosello Home |
| `slide-lounge / projection / cinema / neumann / booth.jpg` | slide 2-6 |
| `audio-hero.jpg` | testata Hi-End |
| `prod-hero.jpg` | testata Produzione |
| `prod-panel.jpg` | riquadro Location in Home |
| `resonance-hero.jpg` | pagina Resonance |
| `video-spot / shooting / musica / eventi.jpg` | anteprime reel |
| `logo-studio33-claim.png` | logo desktop |
| `logo-33.png` | logo mobile e favicon |

### 6.4 Aggiungere un progetto ai Lavori

Cerca `class="proj-card"`, copia un blocco e modificalo:

```html
<div class="proj-card" onclick="openProjModal('nome-breve')" role="button" tabindex="0"
     onkeydown="if(event.key==='Enter')openProjModal('nome-breve')">
  <div class="proj-img" data-bg="INDIRIZZO-IMMAGINE" style=""></div>
  <div class="proj-body">
    <span class="proj-tag">Categoria</span>
    <h3 class="proj-title">Titolo del progetto</h3>
    <span class="proj-date">15 Marzo 2026</span>
  </div>
</div>
```

Poi cerca `var projData` e aggiungi la scheda che si apre al clic:

```javascript
{"slug":"nome-breve","title":"Titolo","date":"15 Marzo 2026",
 "tag":"Categoria","img":"INDIRIZZO","url":"https://...","desc":"Descrizione."}
```

Lo `slug` deve essere **identico** nei due punti. Aggiorna anche il conteggio: cerca `44 progetti`.

### 6.5 Cambiare una voce di menu

Le voci esistono in **due punti** — menu desktop e menu mobile. Cerca `id="nl-` e modifica entrambe.

---

## 7. Attivare il modulo contatti

**Questa è l'unica funzione del sito che non funziona.** Il modulo nella pagina Contattaci non invia nulla finché non lo colleghi.

1. Registrati su **[formspree.io](https://formspree.io)** — gratuito, 50 invii al mese
2. Crea un form, destinazione `shout@studio33club.com`
3. Copia il codice che ti danno (tipo `xpzgkqyw`)
4. In `index.html` cerca `YOUR_FORM_ID` e sostituiscilo
5. Pubblica e invia un messaggio di prova

**Prompt per l'AI:**
```
Ho ottenuto questo ID Formspree: xpzgkqyw
Sostituisci YOUR_FORM_ID nel modulo della pagina Contattaci
e verifica che l'invio funzioni senza ricaricare la pagina.
```

---

## 8. Regole da non violare

Sono le cinque trappole in cui si è già caduti. Ognuna ha causato un guasto reale.

**Non scrivere `background-size` negli attributi `style=""` delle immagini.**
Uno stile in linea batte il foglio di stile. I loghi della sezione Lavori venivano tagliati perché il codice imponeva `cover` dove serviva `contain`.

**Non spostare la finestra dei video.**
Il blocco `<div class="vmodal">` deve stare **dopo** `</main>`. Se finisce dentro una pagina, il video non compare quando lo apri da un'altra sezione.

**Non scrivere nulla dopo `</html>`.**
Il browser desktop lo tollera, quello mobile a volte smette di disegnare la pagina.

**I numeri di `openMedia(...)` devono corrispondere alla posizione in `mediaList`.**
Sbagliare numero significa aprire il video sbagliato. Si conta da zero.

**Non caricare file oltre 100 MB.**
GitHub li rifiuta. Lo spot da 30 secondi (159 MB) per questo non è online.

---

## 9. Se qualcosa va storto

| Sintomo | Causa probabile | Rimedio |
|---|---|---|
| Le modifiche non si vedono | cache del browser | `Ctrl + Shift + R` |
| Non si vedono nemmeno così | file non caricato davvero | `findstr /C:"VERSIONE" index.html` e ripeti il push |
| Un'immagine non appare | file assente o nome errato | verifica nome esatto, maiuscole comprese |
| Un video non parte | numero `openMedia` sbagliato | conta la posizione in `mediaList`, da zero |
| Pagina storta | tag non chiuso | carica il file su [validator.w3.org](https://validator.w3.org/#validate_by_upload) |
| Testo bianco su bianco | colore forzato con `!important` | cerca `!important` vicino al testo |
| `git push` respinto | credenziali | serve il Personal Access Token |
| `file too large` | file oltre 100 MB | rimuovilo dalla cartella |

**Prompt per l'AI in caso di guasto:**
```
Il sito ha questo problema: [descrivi cosa vedi].
Analizza il file allegato e dimmi la causa esatta prima di
correggere. Se il problema riguarda il CSS, controlla la
cascata: quale regola sta vincendo e perché.
```

---

## 10. Struttura del sito

**Menu**: About · Location · Produzione · Hi-End · Works · Formazione · Resonance · Contattaci
(più Privacy Policy in alto a destra)

| Pagina | Identificativo | Contenuto |
|---|---|---|
| About | `page-home` | carosello 8 foto, intro, Location e Produzione, Works, citazione Monocle, clienti |
| Hi-End | `page-audio` | impianto Oswalds Mill Audio, 7 schede componente, catena del segnale |
| Location | `page-location` | spazi in mq, galleria, video Arkage, attrezzatura |
| Produzione | `page-prod` | servizi in accordion, 44 progetti |
| Works | `page-hap` | 17 video (4 reel + 13 YouTube) |
| Formazione | `page-form` | scuola Tékhne, percorso triennale |
| Resonance | `page-res` | rassegna stampa, press kit |
| Contattaci | `page-book` | modulo, contatti diretti |
| Privacy | `page-privacy` | informativa GDPR |

Il sito è **bilingue**: il pulsante IT/EN in alto commuta la lingua.

---

## 11. Note tecniche

Utili se un domani interverrà uno sviluppatore.

**Sistema visivo.** Scala tipografica di dieci gradini (da 10,5 a 56 pixel), sette livelli di grigio con contrasto verificato secondo lo standard WCAG, margini laterali governati dalla variabile `--gut`. Se aggiungi una sezione, usa quei valori: non inventare misure nuove.

**Prestazioni.** Le immagini delle pagine non visibili si caricano solo all'apertura (`data-bg`). Al primo caricamento il browser scarica 14 immagini invece di 77.

**Privacy.** Nessun cookie, nessuna statistica, nessun tracciamento. I video YouTube usano `youtube-nocookie.com`. La lingua è memorizzata solo per la sessione. Se aggiungi Google Analytics, la Privacy Policy va aggiornata.

**Accessibilità.** Skip-link, `aria-label` sui pulsanti, `aria-current` sulla voce attiva, navigazione da tastiera.

**Riferimenti.** Dominio ufficiale `studio33club.com` (su WordPress.com — questo è un sito parallelo). Repository: `github.com/bernardini250576/studio33`.

---

## 12. Cosa resta da fare

- [ ] **Collegare Formspree** — il modulo non invia (sezione 7)
- [ ] Caricare lo spot da 30 secondi su YouTube e collegarlo
- [ ] Sostituire il titolo generico "Studio 33" dei 13 video con i titoli reali
- [ ] Al passaggio sul dominio definitivo: aggiornare il `canonical` e togliere il banner "ANTEPRIMA / BOZZA"
