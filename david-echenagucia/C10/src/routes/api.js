const express = require('express');
const router = express.Router();
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/apiController');

router.get('/items', getItems);
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

module.exports = router;