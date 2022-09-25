import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    const template = `<h1 style='text-align: center;'>Hello Docker World</h1>`;

    res.send(template)
});

app.listen(PORT,()=>{
    console.log('server started on port:: ',PORT)
})
