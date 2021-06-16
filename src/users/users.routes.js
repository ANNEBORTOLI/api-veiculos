const express = require('express');
const router = express.Router();
const UserController = require('./users.controller')

/* GET users listing. */
router.get('/', UserController.findAll);
/* GET one user. */
router.get('/:id', UserController.findById);
/* POST create user. */
router.post('/', UserController.createOrEdit);
/* PUT update user.*/
router.put('/:id', UserController.createOrEdit);
/* DELETE user. */
router.delete('/:id', UserController.remove);

module.exports = router;