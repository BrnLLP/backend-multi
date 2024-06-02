const express = require('express');
const Metal = require('../models/metal');
const router = express.Router();

router.post('/metais', (req, res) => {
  const metal = new Metal(req.body);
  metal.save()
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ message: err.message }));
});

router.get('/metais', async (req, res) => {
  try {
    const metais = await Metal.find();
    res.status(200).json(metais);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.get('/metais/:id', async (req, res) => {
  try {
    const metal = await Metal.findById(req.params.id);
    if (!metal) {
      return res.status(404).json({ message: 'Metal não encontrado' });
    }
    res.status(200).json(metal);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.delete("/metais/:id", (req, res, next) => {
  const id = req.params.id;
  Metal.deleteOne({ _id: id })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Metal não encontrado' });
      }
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/metais/:id", (req, res, next) => {
  const updates = req.body;
  if (ObjectId.isValid(req.params.id)) {
    Metal.updateOne({ _id: req.params.id }, { $set: updates })
      .then(result => {
        if (result.n === 0) {
          return res.status(404).json({ message: 'Metal não encontrado' });
        }
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json({ error: "Não foi possível atualizar o documento" });
      });
  } else {
    res.status(400).json({ error: "Id inválido" });
  }
});

module.exports = router;