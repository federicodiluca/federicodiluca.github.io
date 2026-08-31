---
title: "Regressione e previsioni: applicazioni pratiche di ML in azienda"
description: "Modelli di regressione per forecasting: da time series a multivariate, con esempi di demand planning, anomaly detection e predictive maintenance."
date: 2023-02-14
category: "ai"
tags: ["machine learning", "regressione", "forecasting", "time series"]
---

La regressione è forse l'applicazione ML più comune in azienda: predire continuità (prezzo, quantità, tempo) da dati storici. Ho sviluppato sistemi di forecasting per inventory planning e anomaly detection durante il mio tempo in Websolute.

## Regressione vs Classificazione

```
CLASSIFICAZIONE                  REGRESSIONE
(Categoria discreta)            (Valore continuo)

Input: [età, peso]            Input: [temperature, ora, stagione]
Output: "Malato" / "Sano"      Output: 24.5°C (previsione temperatura)

Modelli:                        Modelli:
├─ Logistic Regression        ├─ Linear Regression
├─ SVM                         ├─ Ridge/Lasso
├─ Random Forest               ├─ SVR (Support Vector Regression)
└─ Neural Net                  ├─ Random Forest Regression
                               ├─ Gradient Boosting Regression
                               └─ LSTM (Time Series)
```

## Linear Regression: il fondamento

```
y = m*x + b

Esempio: Prezzo casa vs. metratura
┌─────────────────────────────┐
│ Prezzo (€)                  │
│     ↑                      /│
│ 300k│                    / │
│     │                  /   │
│ 200k│               /      │
│     │             /        │
│ 100k│           /          │
│     │         /            │
│     └─────/───────────────→ Metratura (m²)
│        / 0    50    100     │
│      /                      │
│   Intercepto (b) = 50k      │
│   Slope (m) = 2000 €/m²     │
└─────────────────────────────┘

Formula: Prezzo = 50k + 2000 * metratura
```

## Time Series Forecasting

Predire il futuro da dati sequenziali:

```
Vendite storiche (30 giorni)
├─ Giorno 1: 100 unità
├─ Giorno 2: 120 unità
├─ Giorno 3: 115 unità
├─ ...
├─ Giorno 30: 145 unità
└─ Giorno 31: ? (predict)

Visualizzazione:
         Vendite (unità)
             ↑
        150  │    ╱╲    ╱╲
             │   ╱  ╲  ╱  ╲
        100  │  ╱    ╲╱    ╲
             │                ╱ (Forecast)
         50  │               ╱
             ├──────────────→ Tempo (giorni)
             0       15      30      40
```

## Componenti di una Time Series

```
y(t) = Trend + Seasonality + Noise + Anomalies

Trend: Crescita/decrescita generale
  └─ Linear, Exponential, Polynomial

Seasonality: Pattern ciclico (settimanale, mensile, annuale)
  └─ Es: vendite natalizie più alte in dicembre

Noise: Variazioni random
  └─ Es: fluttuazioni giornaliere non predicibili

Anomalies: Deviazioni significative
  └─ Es: picco inaspettato da evento esterno
```

## Modelli principali per regressione

### 1. Linear Regression

```python
from sklearn.linear_model import LinearRegression

# Demand planning: predire vendite del mese prossimo
# Features: [mese_precedente, prezzo, stagione, ...]

model = LinearRegression()
model.fit(X_train, y_train)

# Evaluazione
from sklearn.metrics import mean_squared_error, r2_score

mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)  # Root Mean Squared Error
r2 = r2_score(y_true, y_pred)  # 1.0 = perfetto, 0 = casuale
```

### 2. Polynomial Regression

Quando la relazione non è lineare:

```python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Trasforma features lineari in polinomiali
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)
# [x] → [1, x, x²]

model = LinearRegression()
model.fit(X_poly, y)

# Visualizzazione
curve: y = a*x² + b*x + c
  (curva, non linea)
```

### 3. Ridge & Lasso Regression

Regolarizzazione per evitare overfitting:

```python
from sklearn.linear_model import Ridge, Lasso

# Ridge (L2): penalizza grandi coefficienti
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)

# Lasso (L1): forza alcuni coefficienti a zero
lasso = Lasso(alpha=0.1)
lasso.fit(X_train, y_train)

# Ridge vs Lasso
Alpha piccolo  → Overfitting (aderenza dati)
Alpha grande   → Underfitting (troppo semplice)
```

### 4. Time Series: ARIMA

AutoRegressive Integrated Moving Average:

```
ARIMA(p, d, q)
├─ p: AR (AutoRegressive) - usa valori passati
├─ d: I (Integrated) - differenziazione
└─ q: MA (Moving Average) - usa errori passati

Esempio: Vendite
├─ Usa ultime 7 giorni di vendite (AR)
├─ Differenzia se trend (I)
└─ Media errori ultimi 3 giorni (MA)

from statsmodels.tsa.arima.model import ARIMA

model = ARIMA(ts_data, order=(7, 1, 3))
fitted = model.fit()
forecast = fitted.forecast(steps=30)  # Prossimi 30 giorni
```

### 5. LSTM (Long Short-Term Memory)

Reti neurali per sequenze lunghe:

```python
from tensorflow.keras.layers import LSTM, Dense
from tensorflow.keras.models import Sequential

model = Sequential([
    LSTM(50, activation='relu', input_shape=(lookback, 1)),
    LSTM(50, activation='relu'),
    Dense(1)
])

model.compile(optimizer='adam', loss='mse')
model.fit(X_train, y_train, epochs=50, batch_size=16)

# LSTM "ricorda" pattern lunghi
# Ideale per series con dipendenze temporali complesse
```

## Case Study: Demand Planning in e-commerce

```
Obiettivo: Predire domanda di magliette per il mese prossimo

Dati storici (12 mesi):
├─ Vendite giornaliere
├─ Prezzo praticato
├─ Marketing spend
├─ Stagione
└─ Giorno della settimana

Feature Engineering:
├─ Rolling average (7 giorni, 30 giorni)
├─ Lag features (vendite giorno -1, -7, -365)
├─ Dummy variables (stagione, giorno settimana)
└─ Trend (coefficiente lin. dei 90 giorni prev.)

Modelli provati:
├─ Linear Regression: RMSE 50 unità (baseline)
├─ Polynomial: RMSE 45 unità
├─ Gradient Boosting: RMSE 35 unità ✓
└─ LSTM: RMSE 38 unità (overkill?)

Scelta: Gradient Boosting
└─ Migliore accuratezza
└─ Interpretabile (feature importance)
└─ Veloce in production
└─ Robusto a outliers
```

## Metriche di regressione

```
MAE (Mean Absolute Error)
  = Media delle differenze assolute
  = |(y_true - y_pred)| in media
  Interpretabile in unità originali

RMSE (Root Mean Squared Error)
  = Radice della media degli errori quadrati
  Penalizza errori grandi
  Stessa unità di y

R² (Coefficient of Determination)
  = 1 - (Residual SS / Total SS)
  = Percentuale di varianza spiegata
  1.0 = perfetto, 0 = no meglio del media, <0 = peggio
```

## Errori comuni in regressione

❌ **Data Leakage**
```
X_train include info dal futuro
Risultato: Training R²=0.99, Test R²=-0.50 ⚠️
```

❌ **Non-stazionarietà in Time Series**
```
Trend sempre crescente
ARIMA fallisce (presume media costante)
Soluzione: Differenziazione
```

❌ **Overfitting con polinomi alti**
```
degree=10: Fit perfetto ma generalizza male
degree=2-3: Meglio in test set
```

❌ **Ignoring seasonality**
```
Vendite d'estate > d'inverno (sempre)
Modello che ignora ciò sbaglia sistematicamente
```

## Deployment di modelli di regressione

```
├─ Salva modello: joblib.dump(model, 'demand_model.pkl')
├─ API Flask/FastAPI:
│  POST /predict
│  Body: {"mese": 3, "prezzo": 19.99, "stagione": "primavera"}
│  Response: {"domanda_prevista": 1250, "confidenza": 0.87}
├─ Batch prediction:
│  Calcola forecast mensile ogni sera
│  Aggiorna inventario planning
└─ Monitoring:
   Traccia prediction error vs realtà
   Retraining mensile con dati nuovi
```

La regressione è il cavallo di battaglia del ML in azienda: semplice, interpretabile, e concretamente utile per planning e forecasting.
