import express from "express";


const app = express();
const port = 3000;



app.get("/", (req, res, next) => {
    res.status(200).send("<h1>Hello World !!!</h1>")
})







app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

console.log("Hello via Bun!");