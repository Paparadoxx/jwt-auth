const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware =require('../middlewares/auth-middleware');

router.post('/registration',
	body('username', 'Имя пользователя должно быть не менее 3 и не более 15 символов').isLength({min:3, max:15}),
	body('email', 'Неккоректный email').isEmail(),
	body('password','Пароль должен быть не менее 6 и не более 20 символов').isLength({min:6, max:20}),
userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router
