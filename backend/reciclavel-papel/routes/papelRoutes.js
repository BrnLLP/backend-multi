const express = require('express');
const Papel = require('../models/papel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const papeis = await Papel.find();
    res.json(papeis);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, color } = req.body;
    const Papel = new Papel({ name, color });
    await Papel.save();
    res.status(201).send('Produto registrado com sucesso');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;