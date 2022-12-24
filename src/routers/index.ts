import { Router } from 'express';
import { Auth } from '../middlewares/MiddlewareAuth';
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/ping', (req, res) => {
    res.status(200).json({pong: true});
});

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/forgot-password', AuthController.forgot);
router.post('/reset-password', AuthController.reset);

router.get('/users', Auth.private, UserController.index);



export default router;