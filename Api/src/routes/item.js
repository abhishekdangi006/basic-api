const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// GET /api/items - Retrieve all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error('Error retrieving items', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/items/:id - Retrieve a specific item
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error(`Error retrieving item with ID ${id}`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/items - Create a new item
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const item = await Item.create({ name, description });
    res.status(201).json(item);
  } catch (error) {
    console.error('Error creating item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/items/:id - Update an existing item
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const item = await Item.findByIdAndUpdate(id, { name, description }, { new: true });
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error(`Error updating item with ID ${id}`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/items/:id - Delete an item
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(`Error deleting item with ID ${id}`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
