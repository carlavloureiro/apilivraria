const express = require("express");
const router = express.Router();
const books = require("../data/books");

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ id, titulo: "Livro Exemplo" });
});

router.post("/", (req, res) => {
  const novoLivro = req.body;
  res.status(201).json({
    mensagem: "Livro criado com sucesso",
    livro: novoLivro
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const dadosAtualizados = req.body;
  res.json({
    mensagem: `Livro ${id} atualizado`,
    dados: dadosAtualizados
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `Livro ${id} deletado` });
});

module.exports = router;
