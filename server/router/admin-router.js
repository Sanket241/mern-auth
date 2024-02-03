const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller')

router.route('/users').get(adminController.getAlluser);
router.route('/contacts').get(adminController.getAllcontacts);

module.exports = router