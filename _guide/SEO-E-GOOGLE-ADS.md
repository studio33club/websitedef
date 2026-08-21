# Studio 33 — SEO e Google Ads

Guida operativa. Prima il posizionamento naturale su Google, poi la pubblicità a pagamento.

---

## Premessa: sono due cose diverse

**SEO** è comparire gratis nei risultati di Google. Richiede mesi, ma poi il traffico non costa nulla.

**Google Ads** è pagare per comparire in cima. Funziona dal primo giorno, si ferma quando smetti di pagare.

Per Studio 33 hanno senso entrambe, ma con tempi diversi: gli annunci portano richieste subito mentre la SEO matura.

---

## PARTE 1 — SEO

### Il problema strutturale da conoscere

Il sito è costruito come **applicazione a pagina singola**: le nove sezioni non sono file separati, sono blocchi mostrati e nascosti da un frammento di codice. L'indirizzo resta sempre lo stesso.

Per un visitatore è comodo. Per Google è un limite serio:

- vede **un solo indirizzo** invece di nove
- trova **nove titoli H1** ammassati nella stessa pagina
- non può mostrare la pagina Location a chi cerca "location shooting Roma" e quella Hi-End a chi cerca "listening room Roma", perché per lui è tutto la stessa pagina

**Conseguenza pratica**: il sito può posizionarsi bene su *"Studio 33 Roma"* — chi già conosce il nome — ma difficilmente su ricerche generiche come *"studio fotografico Trastevere"*.

### Cosa ho già sistemato

| Intervento | Effetto |
|---|---|
| `sitemap.xml` | Google sa quale indirizzo indicizzare |
| `robots.txt` | indica dove trovare la sitemap |
| `hreflang` × 4 lingue | Google capisce che esistono italiano, inglese, spagnolo e francese |
| Schema.org esteso | 5 servizi dichiarati, orari, zona servita, profili social |
| Meta geografici | coordinate di Trastevere per le ricerche locali |

Lo Schema arricchito è quello che può dare il risultato più visibile: aiuta a comparire nei riquadri laterali di Google con orari, telefono e indirizzo.

### Cosa fare tu, in ordine

**1. Google Search Console** — gratuito, indispensabile

Vai su `search.google.com/search-console`, aggiungi la proprietà del sito, verifica la titolarità (Cloudflare permette la verifica via DNS in un clic), poi invia la sitemap: `sitemap.xml`.

Da lì vedrai quali ricerche portano visite e potrai chiedere l'indicizzazione immediata.

**2. Profilo dell'attività su Google** — il più importante per un'attività locale

Vai su `business.google.com` e rivendica o crea la scheda Studio 33. Compila tutto: indirizzo, orari, telefono, categoria (*Studio fotografico* come principale, aggiungendo *Studio di registrazione* e *Sala per eventi*), e **carica almeno venti fotografie**.

Per un'attività fisica a Roma questo conta spesso più del sito stesso: è quello che appare nella mappa quando qualcuno cerca "studio fotografico Trastevere" dal telefono.

**3. Chiedere recensioni**

Dieci recensioni sincere da clienti reali spostano il posizionamento locale più di mesi di lavoro tecnico. Chiedile a chi ha girato lì.

**4. Se un domani vuoi davvero posizionarti sulle ricerche generiche**

Serve trasformare le nove sezioni in nove indirizzi veri. Due strade:

- rifare il sito su WordPress (il tema è già pronto da una fase precedente del lavoro)
- generare nove file HTML separati, uno per sezione, mantenendo la grafica attuale

È un lavoro di un paio di giorni. Ha senso solo se decidi di puntare seriamente sul traffico organico.

### Parole chiave su cui vale la pena competere

| Ricerca | Difficoltà | Dove porta |
|---|---|---|
| location shooting Roma | media | Location |
| studio fotografico Trastevere | bassa | Location |
| sala prove / listening room Roma | bassa | Hi-End |
| studio registrazione podcast Roma | media | Produzione |
| spazio eventi Trastevere | media | Location |
| scuola musicoterapia Roma | bassa | Formazione |
| studio produzione video Roma | alta | Produzione |

Le ricerche a bassa difficoltà sono quelle dove si può arrivare in prima pagina senza budget.

---

## PARTE 2 — Google Ads

### Prima di spendere un euro

**Il modulo contatti non funziona.** Finché non colleghi Formspree, chi clicca l'annuncio e compila il modulo non ti manda nulla. Pagheresti per perdere richieste.

Fallo prima di tutto: registrati su `formspree.io`, crea un form verso `shout@studio33club.com`, cerca `YOUR_FORM_ID` nel file e sostituiscilo.

### Impostare la misurazione

Senza sapere quali clic diventano richieste, la pubblicità è denaro buttato. Servono due cose.

**Google Ads** — crea l'account su `ads.google.com`, poi vai in *Strumenti → Conversioni* e crea una conversione di tipo *Invio modulo*. Ti darà un frammento di codice.

**Il codice va inserito nel sito.** Posso farlo io: mi servono l'ID conversione e l'etichetta che Google ti fornisce.

> ⚠️ Attenzione: Google Ads installa cookie di tracciamento. La Privacy Policy attuale dichiara che il sito **non** ne usa. Andrà aggiornata, e servirà un banner cookie con consenso preventivo — obbligatorio in Europa. Anche questo posso predisporlo.

### Struttura campagne consigliata

Non fare una campagna sola: separa i servizi, perché hanno pubblici e valori diversi.

**Campagna 1 — Location** (priorità alta)
Chi cerca una location ha budget e fretta. È il servizio con il ritorno migliore.
```
location shooting roma
studio fotografico roma affitto
location spot pubblicitario roma
sala posa roma
location eventi trastevere
```

**Campagna 2 — Produzione**
```
studio registrazione podcast roma
produzione video roma
studio audio professionale roma
```

**Campagna 3 — Formazione** (stagionale)
Da attivare nei mesi delle iscrizioni.
```
corso musicoterapia roma
diventare musicoterapeuta
scuola musicoterapia certificata
```

**Escludi sempre** queste parole, che attirano clic inutili: `gratis`, `gratuito`, `lavoro`, `stage`, `corso gratis`, `come diventare`, `fai da te`, `usato`.

### Budget realistico

Per un'attività locale a Roma:

| | Importo |
|---|---|
| Prova iniziale | 15-20 € al giorno per 3-4 settimane |
| Costo per clic atteso | 0,80-2,50 € |
| Clic al mese | 250-500 |
| Richieste attese | 8-25 |

Con un valore medio per noleggio location, bastano due o tre richieste andate a buon fine per rientrare del mese.

### Come scrivere gli annunci

Google vuole più titoli tra cui scegliere. Per la campagna Location:

**Titoli**
```
Location Shooting Roma · Trastevere
Studio Fotografico 250 mq
Set per Video, Spot e Serie TV
Dove Hanno Girato HBO e Fremantle
Sopralluogo Gratuito
```

**Descrizioni**
```
250 mq nel cuore di Trastevere. Luce naturale, ampi spazi,
attrezzatura broadcast inclusa. Richiedi disponibilità.

Studio fotografico storico dagli anni '80. Giacomelli,
Toscani, Avedon hanno lavorato qui. Ora, il tuo progetto.
```

Aggiungi le **estensioni**: numero di telefono, indirizzo (collegando il Profilo attività), e link diretti alle sezioni.

---

## Ordine di priorità

| | Cosa | Costo | Quando si vedono i risultati |
|---|---|---|---|
| **1** | Collegare Formspree | gratis | subito — senza, tutto il resto è inutile |
| **2** | Profilo attività su Google | gratis | 1-2 settimane |
| **3** | Search Console + sitemap | gratis | 2-4 settimane |
| **4** | Chiedere recensioni | gratis | 1 mese |
| **5** | Google Ads — solo Location | 15-20 €/giorno | dal primo giorno |
| **6** | Banner cookie + privacy aggiornata | gratis | prima di attivare Ads |
| **7** | Nove indirizzi separati | 2 giorni di lavoro | 3-6 mesi |

I primi quattro punti sono gratuiti e vanno fatti comunque. Il quinto solo dopo il primo.

---

## Cosa posso fare io

Dimmi quali ti servono:

- inserire il codice di monitoraggio Google Ads o Analytics
- creare il banner cookie a norma europea e aggiornare la Privacy Policy
- generare i nove file HTML separati per risolvere il limite della pagina singola
- preparare i testi completi degli annunci con tutte le varianti
- collegare Formspree, se mi passi l'ID

---

## Debug tecnico — stato attuale

Ho appena verificato il file dopo la sostituzione dei video:

```
✓ struttura HTML bilanciata su tutte e 9 le sezioni
✓ JavaScript senza errori, nessuna funzione orfana
✓ 17 video, indici corretti, nessun duplicato
✓ 27 immagini, tutte presenti
✓ nessun riferimento a file .mp4 rimasto
✓ JSON-LD valido
✓ HTML5 valido
```

Ho anche rimosso un residuo: il codice cercava ancora l'elemento del vecchio player video, ormai eliminato. Era protetto da un controllo e non causava errori, ma era codice morto.
