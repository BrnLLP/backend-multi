const express = require('express');
const Vidro = require('../models/vidro');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const vidros = await Vidro.find();
    res.json(vidros);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, color } = req.body;
    const Vidro = new Vidro({ name, color });
    await Vidro.save();
    res.status(201).send('Produto registrado com sucesso');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;