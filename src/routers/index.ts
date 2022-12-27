import { Router } from 'express';
import { Auth } from '../middlewares/AuthMiddleware';
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';
import MailController from '../controllers/MailController';

const router = Router();

router.get('/ping', (req, res) => {
    res.status(200).json({pong: true});
});

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/forgot-password', AuthController.forgot);
router.post('/reset-password', AuthController.reset);

router.get('/send-mail', MailController.index);

router.get('/users', Auth.private, UserController.index);



export default router;