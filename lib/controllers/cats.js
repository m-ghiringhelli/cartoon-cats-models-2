const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const selectedCat = cats.find((cat) => cat.id === id);
    res.json(selectedCat);
  })

  .get('/', (req, res) => {
    const catData = cats.map((cat) => (
      { id: cat.id, name: cat.name }
    ));
    res.json(catData);
  });

