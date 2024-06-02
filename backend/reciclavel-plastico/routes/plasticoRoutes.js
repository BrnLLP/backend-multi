const express = require('express');
const Plastico = require('../models/plastico');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const plasticos = await Plastico.find();
    res.json(plasticos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, color } = req.body;
    const Plastico = new Plastico({ name, color });
    await Plastico.save();
    res.status(201).send('Produto registrado com sucesso');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;