var express = require('express');
const VehicleController = require('./vehicles.controller');
var router = express.Router();


/* GET vehicle listing. */
router.get('/', VehicleController.findAll);
/* GET one vehicle. */
router.get('/:id', VehicleController.findById);
/* POST create vehicle. */
router.post('/', VehicleController.createOrUpdate);
/* PUT update vehicle. */
router.put('/:id', VehicleController.createOrUpdate);
/* DELETE vehicle. */
router.delete('/:id', VehicleController.remove);

module.exports = router;