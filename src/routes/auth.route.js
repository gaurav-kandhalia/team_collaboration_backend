const router = require('express').Router();
const { register } = require('../controllers/auth.controller');
const { registerSchema } = require('../validators/auth.validator');
const validate = require('../middlewares/validate.middleware');

router.post('/register', validate(registerSchema), register);

module.exports = router;