import express, { response } from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const app = express(); 
const port = 3000; 

const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware 
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended : true })); 
app.use(express.static(path.join(__dirname, "public"))); 

// Home Page 
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// Search Cocktail 
app.post("/search", async (req, res) => {
    const drink = req.body.drink;

    try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);    
    const drinks = response.data.drinks; 

    if (!drinks) {
        return res.render("result", { drinks: null });
    }

    res.render("result", { drinks });
    } catch (error) {
        console.error(error.message);
        res.send("Error fetching the data.");
    }
}); 

// Random Cocktail 
app.get("/random", async (req, res) => {
    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");

        res.render("result.ejs", { drinks: response.data.drinks }); 
    } catch (error) {
        console.error(error.message); 
        res.send("Error fetching the random drink.");
    }
}); 

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});