
const express = require('express');
const router = express.Router();
const ThoughtController = require('../../controllers/thoughtController');

router.get('/', ThoughtController.getAllThoughts);
router.get('/:thoughtId', ThoughtController.getThoughtById);
router.post('/', ThoughtController.createThought);
router.put('/:thoughtId', ThoughtController.updateThought);
router.delete('/:thoughtId', ThoughtController.deleteThought);

module.exports = router;
