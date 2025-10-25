const express = require("express");
const router = express.Router();
const books = require("../data/books");

//Listar todos os livros
router.get("/", (req, res) => {
    res.json(books);
});