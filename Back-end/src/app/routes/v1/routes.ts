import express from 'express'

// Safety
import authMiddleware from '@src/app/middlewares/auth'

// Users
import UserController from '@controllers/userController'

// Map
import UsersMapController from '@controllers/usersMapController'



const router = express.Router()

router.post('/register_user', UserController.RegisterUser)

router.get('/login_user', UserController.LoginUser)

router.get('/users_map', authMiddleware, UsersMapController.getUsers)

export default router.use('/v1', router)