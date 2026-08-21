# Pubblicare Studio 33 su Cloudflare Pages

Guida completa: nuovo repository GitHub → Cloudflare Pages → dominio personalizzato.
Tutto gratuito, senza limiti di banda.

---

## Perché Cloudflare invece di GitHub Pages

| | GitHub Pages | Cloudflare Pages |
|---|---|---|
| Banda | 100 GB/mese | **illimitata** |
| Rete | CDN base | **330+ data center** |
| Repository privato | a pagamento | **gratuito** |
| Anteprima per ogni modifica | no | **sì** |
| Protezione DDoS | base | **inclusa** |
| Statistiche visite | no | **incluse, senza cookie** |
| File oltre 100 MB | vietati | vietati (uguale) |

Il vantaggio pratico più concreto per Studio 33 è la velocità in Italia e la banda illimitata, utile se i video vengono guardati molto.

---

## Cosa è già stato preparato

I file in questa cartella sono **già pronti per Cloudflare**. In particolare ho fatto una modifica indispensabile:

> **47 indirizzi immagine sono stati convertiti da assoluti a relativi.**
> Prima puntavano a `bernardini250576.github.io/studio33/`; se avessi caricato il file così com'era, le immagini avrebbero continuato a essere scaricate dal vecchio sito GitHub anche sul nuovo dominio. Ora usano percorsi relativi (`./nome-file.jpg`) e funzionano ovunque.

Ho anche aggiunto un file `_headers` che dice a Cloudflare come gestire la cache: le immagini restano in memoria un anno, l'HTML viene ricontrollato a ogni visita così le modifiche si vedono subito.

---

## PASSO 1 — Creare il nuovo repository

1. Vai su **github.com** → pulsante verde **New** (o `github.com/new`)
2. Compila:
   - **Repository name**: `studio33-web`
   - **Description**: `Sito Studio 33 — Trastevere, Roma`
   - **Public** oppure **Private** (con Cloudflare funzionano entrambi)
   - **Non** spuntare "Add a README file"
3. Clicca **Create repository**

Lascia aperta la pagina: ti servirà l'indirizzo che compare.

---

## PASSO 2 — Caricare i file

Crea una cartella nuova sul computer, per esempio `C:\Users\fabio.bernardini\studio33-web`, e copiaci dentro **tutto il contenuto di questa cartella**.




```

Poi apri il Prompt dei comandi:

```bash
cd C:\Users\fabio.bernardini\studio33-web

git init
git add .
git commit -m "Sito Studio 33 - versione iniziale"
git branch -M main
git remote add origin https://github.com/bernardini250576/studio33-web.git
git push -u origin main
```

> Se il push chiede la password, serve un **Personal Access Token**:
> GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → spunta `repo` → copia il codice e usalo al posto della password.

---

## PASSO 3 — Collegare Cloudflare

1. Registrati su **dash.cloudflare.com** (gratuito, serve solo un'email)
2. Nel menu di sinistra apri **Workers & Pages**
3. Clicca **Create application** → scheda **Pages** → **Connect to Git**
4. Scegli **GitHub** e autorizza Cloudflare

   > Ti chiederà quali repository può leggere: seleziona **solo** `studio33-web`, non serve dargli accesso a tutto.

5. Seleziona `studio33-web` e clicca **Begin setup**

6. Nella schermata **Set up builds and deployments** compila così:

   | Campo | Valore |
   |---|---|
   | Project name | `studio33` |
   | Production branch | `main` |
   | Framework preset | **None** |
   | Build command | **lascia vuoto** |
   | Build output directory | **lascia vuoto** (o scrivi `/`) |

   > Il sito è HTML puro: non serve nessuna compilazione. Se metti un comando di build il deploy fallisce.

7. Clicca **Save and Deploy**

Dopo circa un minuto il sito è online su:

```
https://studio33.pages.dev
```

---

## PASSO 4 — Verificare

Apri l'indirizzo e controlla:

- [ ] Le immagini si vedono tutte (se sono bianche, i percorsi relativi non hanno funzionato)
- [ ] Il carosello della Home ruota
- [ ] I video partono cliccando le card in Works
- [ ] Il menu funziona su tutte le 9 pagine
- [ ] Il selettore lingua IT · EN · ES · FR cambia i testi
- [ ] Su telefono compare il menu hamburger

---

## PASSO 5 — Aggiornare il sito, d'ora in poi

Da qui in avanti il flusso è identico a prima:

```bash
cd C:\Users\fabio.bernardini\studio33-web

git add .
git commit -m "Descrivi la modifica"
git push
```

Cloudflare se ne accorge da solo e ripubblica in **meno di trenta secondi**. Nessun pannello da aprire.

Trovi lo storico dei rilasci in **Workers & Pages → studio33 → Deployments**, e da lì puoi anche **tornare a una versione precedente** con un clic (pulsante *Rollback*) — molto più comodo dei comandi git.

---

## PASSO 6 — Collegare studio33club.com (opzionale)

Quando vorrai usare il dominio ufficiale invece di `studio33.pages.dev`:

1. In Cloudflare vai su **Workers & Pages → studio33 → Custom domains**
2. Clicca **Set up a domain** e scrivi `studio33club.com`
3. Cloudflare ti indicherà i **nameserver** da impostare presso chi ti ha venduto il dominio (Aruba, Register.it, GoDaddy…)
4. Entra nel pannello del registrar e sostituisci i nameserver con quelli forniti da Cloudflare
5. Attendi la propagazione: da un'ora a 24 ore

Il certificato HTTPS viene creato e rinnovato da solo, gratis, senza fare nulla.

> ⚠️ **Attenzione**: il dominio `studio33club.com` oggi punta al sito WordPress. Cambiando i nameserver, quel sito smette di essere raggiungibile. Fallo solo quando sei sicuro di voler sostituire il vecchio sito.

---

## Cosa resta da fare

### Il modulo contatti
Continua a non inviare finché non colleghi Formspree: cerca `YOUR_FORM_ID` in `index.html` e sostituiscilo con l'ID che ottieni registrandoti su **formspree.io** (gratuito, 50 invii al mese).

### Il banner "ANTEPRIMA / BOZZA"
Quando il sito diventa ufficiale, va tolto. Cerca `draft-banner` in `index.html` e rimuovi tutto il blocco `<div id="draft-banner">…</div>`.

### Il canonical
Nel file punta a `studio33.pages.dev`. Quando collegherai il dominio definitivo, cerca `rel="canonical"` e sostituisci con `https://studio33club.com/`. Stessa cosa per `og:url`, `og:image` e `twitter:image`.

### Video
Tutti i video sono ora su YouTube: nessun file pesante nel repository.

---

## Note tecniche

**Il file `_headers`** controlla cache e sicurezza. Le immagini restano in cache un anno perché non cambiano mai nome; l'HTML viene ricontrollato a ogni visita, così gli aggiornamenti compaiono subito. Contiene anche alcune intestazioni di sicurezza standard.

**Le statistiche.** In **Workers & Pages → studio33 → Analytics** trovi visite, paesi di provenienza e pagine più viste. Non usa cookie, quindi non serve modificare la Privacy Policy.

**Anteprime automatiche.** Se un domani lavorerai su un ramo separato (`git checkout -b prova`), Cloudflare genera un indirizzo di anteprima dedicato senza toccare il sito pubblico.

**Limiti del piano gratuito.** 500 build al mese, un build alla volta, file singoli fino a 25 MB. Per un sito come questo sono margini ampi.

---

## Se qualcosa non va

| Problema | Causa | Soluzione |
|---|---|---|
| Pagina bianca dopo il deploy | build output directory sbagliata | lasciala vuota, non scrivere `dist` o `build` |
| Immagini assenti | file non caricati o nome errato | controlla con `git status` che siano tutti tracciati |
| Il deploy fallisce | build command impostato | deve essere **vuoto** |
| Modifiche non visibili | cache del browser | `Ctrl + Shift + R` |
| Errore "file too large" | file oltre 25 MB | rimuovilo o caricalo altrove |
| Il dominio non funziona | nameserver non propagati | attendi fino a 24 ore |

Per tutto il resto — modificare testi, aggiungere video o fotografie — vale il **MANUALE.html** già presente in questa cartella.
