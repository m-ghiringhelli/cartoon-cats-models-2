const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const selectedCat = await Cat.getById(id);
    res.json(selectedCat);
  })

  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    const catData = cats.map((cat) => (
      { id: cat.id, name: cat.name }
    ));
    res.json(catData);
  });

