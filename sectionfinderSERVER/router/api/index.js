const router = require('express').Router();
router.use('/', require('./secEleRouter'));
router.use('/', require('./userRouter'));
module.exports = router;
