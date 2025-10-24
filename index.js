const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo!" });
});

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

const bookRoutes = requie("./routes/books");

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
})