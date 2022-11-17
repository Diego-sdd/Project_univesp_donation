import express from 'express'

// Safety
import authMiddleware from '@src/app/middlewares/auth'

// Users
import UserController from '@controllers/userController'

// Map
import UsersMapController from '@controllers/usersMapController'

// Users interactions
import UserInteractions from '@controllers/userInteractionsController'



const router = express.Router()

router.post('/register_user', UserController.RegisterUser)

router.get('/login_user', UserController.LoginUser)

router.get('/users_map', authMiddleware, UsersMapController.getUsers)

router.get('/user_map_filter', authMiddleware, UserInteractions.filterUser)

export default router.use('/v1', router)