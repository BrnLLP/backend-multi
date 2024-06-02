const express = require('express');
const Metal = require('../models/metal');
const connect = require('../db/Connect');
const router = express.Router();

router.post('/metais', (req, res) => {
  connect();
  console.log(req.body);
  const metal = new Metal(req.body);
  console.log(metal);
  produto.save()
      .then(data => res.json(data))
      .catch(err => res.status(500).json({message: err.message}));
});
router.get('/metais', async (req, res) => {
  try {
    connect();
    const metais = await Metal.find()
    res.status(200).json(metais)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

router.get('/metais/:id', async (req, res) => {
  try {
    connect();
    const metais = await Metal.findById(req.params.id)
    res.status(200).json(metais)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

router.delete("/metais/:id", (req, res, next) => {
  connect();
  const id = req.params.id;
  Metal.deleteOne({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.patch("/metais/:id", (req, res, next) => {
  const updates = req.body
  if(ObjectId.isValid(req.params.id)){
    Metal.updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
    .then(result =>{
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({error:"Não foi possível atualizar o documento"})
    })
  }else{
      res.status(500).json({error:"Id inválido"})
    }
});

module.exports = router;