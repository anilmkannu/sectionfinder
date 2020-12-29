const router = require('express').Router();
const secEleController = require('../../controllers/srcElement.controller');
const hasAuthToken = require('../../utils/hasAuthToken');
const multer = require('multer'),

// Multer File upload settings
DIR = './public/uploads/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});


// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});
//router.post('/section/element/create', hasAuthToken, secEleController.secEleController);
router.post('/section/element/create',  upload.single('file'), secEleController.creatSrcElement);

module.exports = router;