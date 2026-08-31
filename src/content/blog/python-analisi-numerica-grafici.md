---
title: "Analisi numerica e visualizzazione con Python: da dati a grafici"
description: "NumPy, Pandas e Matplotlib per analizzare dati, eseguire calcoli numerici e creare visualizzazioni efficaci in Python."
date: 2025-01-15
category: "educazione"
tags: ["python", "numerica", "grafici", "matplotlib", "numpy"]
---

Python è il linguaggio di elezione per data analysis e visualizzazione. Con poche righe, puoi trasformare dati grezzi in insight visuali. Ecco cosa insegno ai miei studenti.

## Le librerie essenziali

```python
import numpy as np          # Calcoli numerici veloci
import pandas as pd         # Dataframe (tabelle)
import matplotlib.pyplot    # Grafici
```

## NumPy: Calcoli veloci

```python
import numpy as np

# Array (lista di numeri veloce)
arr = np.array([1, 2, 3, 4, 5])

# Operazioni vettorizzate (velocissime)
arr * 2        # [2, 4, 6, 8, 10]
arr ** 2       # [1, 4, 9, 16, 25]
np.sin(arr)    # Seno di ogni elemento

# Matrici (2D)
matrix = np.array([[1, 2], [3, 4]])
matrix @ matrix  # Moltiplicazione matriciale

# Statistiche
np.mean(arr)    # Media = 3
np.std(arr)     # Dev standard
np.max(arr)     # 5
```

## Pandas: Dataframe (tabelle)

```python
import pandas as pd

# Creazione da dizionario
data = {
    'Nome': ['Alice', 'Bob', 'Charlie'],
    'Età': [25, 30, 28],
    'Salario': [30000, 45000, 35000]
}
df = pd.DataFrame(data)

# Visualizza
print(df)
#      Nome  Età  Salario
# 0   Alice   25    30000
# 1     Bob   30    45000
# 2 Charlie   28    35000

# Filtri
df[df['Età'] > 26]  # Solo > 26 anni
df['Salario'].mean()  # Salario medio = 36666

# Groupby
df.groupby('Età')['Salario'].sum()  # Salario per fascia
```

## Matplotlib: Grafici

### Linea
```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]  # y = x²

plt.plot(x, y)
plt.xlabel('X')
plt.ylabel('X²')
plt.title('Quadrato dei numeri')
plt.show()

# Output: Linea che sale
```

### Barre
```python
città = ['Roma', 'Milano', 'Napoli']
popolo = [2700000, 1300000, 900000]

plt.bar(città, popolo)
plt.ylabel('Popolazione')
plt.title('Maggiori città Italia')
plt.show()
```

### Scatter (dispersione)
```python
# Relazione Ore studiate vs Voto esame
ore = [2, 3, 4, 5, 6, 7, 8]
voto = [5, 6, 6.5, 7.5, 8, 9, 9.5]

plt.scatter(ore, voto)
plt.xlabel('Ore studiate')
plt.ylabel('Voto')
plt.title('Correlazione studio-rendimento')
plt.show()

# Pattern: Più studi, più voto (atteso!)
```

### Istogramma
```python
import numpy as np

# Voti di 100 studenti (distribuiti normalmente)
voti = np.random.normal(loc=6.5, scale=1.5, size=100)

plt.hist(voti, bins=10)
plt.xlabel('Voto')
plt.ylabel('Numero studenti')
plt.title('Distribuzione voti')
plt.show()

# Output: Campana gaussiana
```

## Esempio completo: Analisi andamento vendite

```python
import pandas as pd
import matplotlib.pyplot as plt

# Dati di vendita
data = {
    'Mese': ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu'],
    'Vendite': [1000, 1200, 1100, 1500, 1800, 2000],
    'Spesa': [500, 600, 550, 750, 900, 1000]
}
df = pd.DataFrame(data)

# Analisi
print(f"Vendite medie: {df['Vendite'].mean()}")  # 1433.33
print(f"Profitto: {(df['Vendite'] - df['Spesa']).sum()}")  # 3950

# Grafici
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

# Grafico 1: Trend vendite
ax1.plot(df['Mese'], df['Vendite'], marker='o')
ax1.set_title('Vendite nel tempo')
ax1.set_ylabel('€')

# Grafico 2: Profitto
profitto = df['Vendite'] - df['Spesa']
ax2.bar(df['Mese'], profitto, color='green')
ax2.set_title('Profitto mensilmente')
ax2.set_ylabel('€')

plt.tight_layout()
plt.show()
```

## Best practices

✅ Dai sempre titoli e label agli assi
✅ Scegli il grafico giusto (linea per trend, barre per confronto, scatter per correlazione)
✅ Usa colori per evidenziare

❌ Evita grafici 3D inutili
❌ Non sovraccaricare di dati
❌ Senza labels il grafico è inutile

Python + Numerica + Visualizzazione = Superpotere per data-driven decision making.
