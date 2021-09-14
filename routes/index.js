const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Horoscope = require('../models/horoscope')
const { model } = require("mongoose");

/* GET home page with categories list. */
router.get("/", async function (req, res, next) {
  const categories = await Category.find();
  res.render("index", { categories });
});

router.get('/horoscope/:id', async (req, res) => {
  const { id } = req.params; // в req.params падают параметры
  const horoscopes = await Horoscope.find({ categ: id })
  res.render('show-horoscope', { horoscopes })
})



module.exports = router;
