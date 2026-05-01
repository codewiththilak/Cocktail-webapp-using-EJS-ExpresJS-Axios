# 🍹 Cocktail Finder Web App

## Overview

The Cocktail Finder Web App is a full-stack web application built using **Node.js, Express.js, Axios, and EJS**.
It integrates with the public API TheCocktailDB to fetch and display cocktail data in a clean and user-friendly interface.

This project demonstrates how to **consume external APIs**, process the response, and dynamically render data on a web page.

---

## Features

* **Search Cocktails by Name**
  Users can search for any cocktail and view its details.

* **Random Cocktail Generator**
  Fetches a random cocktail with a single click.

* **Detailed Information Display**

  * Cocktail image
  * Category (e.g., Ordinary Drink, Cocktail)
  * Alcoholic / Non-Alcoholic
  * Ingredients with measurements
  * Preparation instructions

* **Modern UI Design**

  * Centered landing page
  * Glassmorphism container
  * Card-based layout for results
  * Responsive design (mobile-friendly)

* **Error Handling**

  * Displays message when no results are found
  * Handles API errors gracefully

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **API Requests:** Axios
* **Templating Engine:** EJS
* **Frontend:** HTML, CSS
* **Architecture:** Client–Server model

---

## What I Learned

* How to integrate and work with **public APIs**
* Handling asynchronous operations using **Axios**
* Building server-side applications using **Express.js**
* Rendering dynamic data using **EJS templating**
* Structuring a Node.js project professionally
* Implementing **error handling and user feedback**
* Designing a clean and responsive UI using CSS

---

## Project Structure

```
cocktail-app/
│
├── views/
│   ├── index.ejs        # Home page
│   └── result.ejs       # Results page
│
├── public/
│   └── style.css        # Styling
│
├── index.js             # Main server file
├── package.json
└── README.md
```

---

## Installation & Setup

### 1. Clone the Repository

```
git clone <your-repo-link>
cd cocktail-app
```

### 2. Install Dependencies

```
npm install
```

### 3. Run the Application

```
npx nodemon index.js
```

or

```
node index.js
```

### 4. Open in Browser

```
http://localhost:3000
```

---

## How It Works

1. User enters a cocktail name or clicks random
2. Request is sent to Express server
3. Server calls external API using Axios
4. API response is processed
5. Data is passed to EJS template
6. UI renders the result dynamically

---

## API Used

* Cocktail API: https://www.thecocktaildb.com/api.php

---

## Error Handling

* Displays “No cocktails found” if API returns null
* Handles network/API failures gracefully
* Logs errors in the console for debugging

---

## Future Improvements

* Add search suggestions / autocomplete
* Save favorite cocktails (local storage or database)
* Add animations and loading indicators
* Convert frontend to React
* Deploy the application online (Render / Vercel)

---

## Conclusion

This project demonstrates a complete workflow of building a **data-driven web application**, from API integration to frontend rendering. It reflects strong fundamentals in backend development and modern web design practices.

---
