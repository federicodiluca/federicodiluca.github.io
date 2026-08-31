---
title: "Sicurezza e attacchi hacker: come i criminali rompono i sistemi e come difendersi"
description: "OWASP Top 10, phishing, SQL injection, XSS e altre vulnerabilità comuni. Come scrivere codice sicuro."
date: 2025-02-01
category: "sicurezza"
tags: ["sicurezza", "hacking", "owasp", "vulnerabilità"]
---

Insegnare programmazione senza insegnare sicurezza è come insegnare a guidare senza dire "non ubriaco". Ecco i principali attacchi e come proteggersi.

## OWASP Top 10 (vulnerabilità più comuni)

### 1. Injection (SQL Injection)

```python
# SBAGLIATO: SQL injection
username = request.get('username')  # Input utente
query = f"SELECT * FROM users WHERE name = '{username}'"
db.execute(query)

# Attacco:
# username = "admin' OR '1'='1"
# Query diventa: "SELECT * FROM users WHERE name = 'admin' OR '1'='1'"
# → Bypassato il login!
```

**Soluzione: Parameterized queries**
```python
# CORRETTO
username = request.get('username')
query = "SELECT * FROM users WHERE name = %s"
db.execute(query, (username,))  # Escape automatico
```

### 2. Cross-Site Scripting (XSS)

```html
<!-- SBAGLIATO: Output non sanitizzato -->
<p>Benvenuto {{ user.name }}</p>

<!-- Se user.name = "<script>alert('Hacked!')</script>"
     → Script eseguito nel browser!
-->
```

**Soluzione: Escape output**
```html
<!-- CORRETTO: Framework lo fa automaticamente -->
<p>Benvenuto {{ user.name | escape }}</p>
```

### 3. Broken Authentication

```python
# SBAGLIATO
password = request.get('password')
user = db.find(username=username, password=password)

# Password salvata in chiaro! Se leak DB → tutti compromessi
```

**Soluzione: Hash + Salt**
```python
from werkzeug.security import generate_password_hash, check_password_hash

# Salva hashato
hashed = generate_password_hash(password)
db.save(password=hashed)

# Verifica
check_password_hash(hashed, password_input)  # True/False
```

### 4. Broken Access Control

```python
# SBAGLIATO
@app.get("/user/{id}")
def get_user(id):
    return db.find(id=id)  # Nessun controllo!
    # Chiunque può vedere i dati di chiunque

# Attacco: GET /user/123 → Vedo profilo del vicino
```

**Soluzione: Verificare permessi**
```python
@app.get("/user/{id}")
def get_user(id):
    if current_user.id != id and not current_user.is_admin:
        raise PermissionError("Non autorizzato")
    return db.find(id=id)
```

### 5. Sensitive Data Exposure

```python
# SBAGLIATO
response.headers['X-DB-Connection'] = "postgres://user:pass@localhost"
# Header leak credenziali!

# SBAGLIATO
log.info(f"Utente login: {username}, password: {password}")
# Log contiene password in chiaro!
```

**Soluzione**
```python
# Non mettere secrets in header/log
# Usa env variables o secrets manager
import os
db_password = os.getenv('DB_PASSWORD')

# Log solo info safe
log.info(f"Utente login: {username}")  # No password
```

## Difesa in profondità

```
Livello 1: Input validation
  └─ Non fidarti mai dell'utente

Livello 2: Authentication & Authorization
  └─ Chi sei? Hai permesso?

Livello 3: Encryption
  └─ HTTPS, password hashate, DB encrypted

Livello 4: Monitoring
  └─ Detecta attacchi anomali

Livello 5: Incident response
  └─ Se attaccato, reagi veloce
```

## Checklist di sicurezza per sviluppatori

✅ **Input**
```
- Valida tutto (whitelist, non blacklist)
- Sanitizzare per SQL, HTML, URL
- Limita dimensione input
```

✅ **Output**
```
- Escape per HTML/JavaScript
- CORS headers corretti
- No secrets in response
```

✅ **Autenticazione**
```
- HTTPS solo (no HTTP)
- Password hashate (bcrypt, argon2)
- 2FA per account importanti
- Session timeout
```

✅ **Dati**
```
- Encryption a riposo (DB)
- Encryption in transito (HTTPS)
- Backups regolari
- No dati sensibili in log
```

✅ **Deploy**
```
- Aggiorna librerie (patcha vulnerabilità)
- Firewall e rate limiting
- Monitoring continuo
```

La sicurezza non è "feature", è prerequisito. Un sistema poco sicuro è peggio che nessun sistema.
