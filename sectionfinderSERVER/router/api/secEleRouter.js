const router = require('express').Router();
const secEleController = require('../../controllers/srcElement.controller');
const hasAuthToken = require('../../utils/hasAuthToken');

//router.post('/section/element/create', hasAuthToken, secEleController.secEleController);
router.post('/section/element/create', secEleController.creatSrcElement);

module.exports = router;