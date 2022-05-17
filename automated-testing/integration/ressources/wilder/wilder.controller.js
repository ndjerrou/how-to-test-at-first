const express = require('express');

const Wilder = require('./wilder.model');

const router = express.Router();
router.use(express.json());

router
  .route('')
  .get(async (req, res, next) => {
    const wilders = await Wilder.find().exec();
    res.status(200).send(wilders);
  })
  .post(async (req, res) => {
    const wilder = await Wilder.create(req.body);

    res.status(201).send(wilder);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const wilder = await Wilder.findById(req.params.id);
      res.status(200).send(wilder);
    } catch (err) {
      return res.status(404).send('Wilder not found');
    }
  })
  .put(async (req, res) => {
    const id = req.params.id;

    try {
      const updated = await Wilder.findByIdAndUpdate(id, req.body, {
        new: true,
      }).exec();
      res.send(updated);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
