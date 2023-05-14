const express = require('express');
const controller = require('./patients.controllers');

const router = express.Router();

router.get('/', controller.indexGet);
router.post('/create', controller.createPost);
router.delete('/:id', controller.deletePatient);
router.put('/edit/:id', controller.editPut);
router.get('/:name', controller.getByName)

module.exports = router;