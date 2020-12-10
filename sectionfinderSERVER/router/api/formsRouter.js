const router = require('express').Router();
const UserController = require('../../controllers/user.controller');
const hasAuthToken = require('../../utils/hasAuthToken');

// router.get('/form-builder', hasAuthToken, IssuesController.formBuilder);
router.post( '/login', UserController.login);
router.post('/signup', UserController.superAdminSignUp);
router.post('/create/admin', hasAuthToken, UserController.createAdmin)

module.exports = router;
