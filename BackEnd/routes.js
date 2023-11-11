const express = require('express');
const controller = require('./controller')
const router = express.Router();

router.get('/',controller.getAllApartments)
router.get('/:id',controller.getApartment)
router.post('/',controller.addApartment)

module.exports = router;