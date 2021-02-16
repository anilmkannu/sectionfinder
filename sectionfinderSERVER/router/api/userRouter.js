const router = require('express').Router();
const UserController = require('../../controllers/user.controller');
const hasAuthToken = require('../../utils/hasAuthToken');

// router.get('/form-builder', hasAuthToken, IssuesController.formBuilder);
router.post( '/user/login', UserController.login);
router.post('/user/signup', UserController.superAdminSignUp);
//router.post('/user/create/admin', hasAuthToken, UserController.createAdmin)
router.post('/user/create/admin', UserController.createAdmin)

module.exports = router;
