const router = require('express').Router();
const { myProfile } = require('../controllers/user.controller');
const { authenticate } = require('../middlewares/auth.middleware');


router.get('/profile', authenticate, myProfile);

module.exports = router;
