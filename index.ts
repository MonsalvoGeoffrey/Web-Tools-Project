import express from "express";


const app = express();
const port = 3000;

app.set("view engine", "ejs")


app.use(express.static('static'));

app.get("/", (req, res, next) => {
    res.render("index");
})





app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

console.log("Hello via UnBun!");