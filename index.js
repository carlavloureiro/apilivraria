const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo!" });
});

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

const bookRoutes = require("./routes/books");
app.use("/users", bookRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Servidor rodando na porta ${port}`);
});