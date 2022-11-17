import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import { check, validationResult } from 'express-validator'
import authConfig from '@config/auth.json'

import GetUsersModel from '@models/usersModel'

const generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

class Users {
    async LoginUser(request, response) {
        const {
            phone,
            password
        } = request.query

        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() })
        }

        if (!phone || !password) {
            return response.status(404).json({ body: 'missing information' })
        }

        const checkPhone = await check('phone')
            .notEmpty()
            .isLength({ min: 11, max: 11 })
            .run(request)

        const checkPassword = await check('password')
            .notEmpty()
            .isLength({ min: 5 })
            .run(request)

        if (checkPhone.context.errors.length > 0 ||
            checkPassword.context.errors.length > 0) {
            return response.status(406).json({
                error: 'incorrect parameters'
            })
        }

        try {
            const resultRegisterUser = await GetUsersModel.getUserRegister(phone)

            if (resultRegisterUser.length === 0) {
                return response.status(404).json({ body: 'User not found' })
            } else {
                if (!await bcryptjs.compare(password, resultRegisterUser[0].password)) {
                    return response.status(404).send({ error: 'Invalid password' })
                }

                delete resultRegisterUser[0].password

                return response.status(200).json({
                    body: {
                        user: resultRegisterUser[0],
                        token: generateToken({ id: resultRegisterUser[0].id })
                    }
                })
            }
        } catch (error) {
            console.log(error)
            return response.status(500).json({ error })
        }
    }
    async RegisterUser(request, response) {
        const {
            phone,
            password,
            profile,
            name,
            email,
            city,
            state,
            street,
            district,
            country,
            numberAddress,
            latitude,
            longitude,
            profileImage,
            receiving,
            description,
            cnpj,
        } = request.body

        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() })
        }

        if (!name || !password || !profile || !phone || !latitude || !longitude) {
            return response.status(400).json({ body: 'missing information' })
        }

        const checkPhone = await check('phone')
            .notEmpty()
            .isLength({ min: 11, max: 11 })
            .run(request)

        const checkPassword = await check('password')
            .notEmpty()
            .isLength({ min: 5 })
            .run(request)

        const checkProfile = await check('profile')
            .notEmpty()
            .custom((value) => {
                const validUserTypes = [
                    'donor',
                    'needHelp',
                    'institution'
                ]
                return validUserTypes.includes(value)
            })
            .run(request)


        if (checkPhone.context.errors.length > 0 ||
            checkProfile.context.errors.length > 0 ||
            checkPassword.context.errors.length > 0) {
            return response.status(406).json({
                error: 'incorrect parameters'
            })
        }

        try {
            const [checkUserPhone] = await GetUsersModel.getUserRegister(phone)

            if (checkUserPhone) {
                return response.status(409).json({ error: 'this user is already registered' })
            }

            const hashPassword = await bcryptjs.hash(password, 10)

            const resultInsert = await GetUsersModel.insertUser(
                phone,
                profile,
                name,
                email,
                city,
                state,
                street,
                district,
                country,
                numberAddress,
                latitude,
                longitude,
                hashPassword,
                profileImage,
                receiving,
                description,
                cnpj)

            if (resultInsert.length > 0) {

                const resultUser = await GetUsersModel.getUserRegisterId(resultInsert[0])

                return response.status(200).json({
                    body: {
                        user: {
                            id: resultUser[0].id,
                            phone: resultUser[0].phone,
                            profile: resultUser[0].profile,
                            name: resultUser[0].name,
                            email: resultUser[0].email,
                            latitude: resultUser[0].latitude,
                            longitude: resultUser[0].longitude,
                            created_at: resultUser[0].created_at,
                            profileImage: resultUser[0].profileImage,
                            receiving: resultUser[0].receiving,
                            description: resultUser[0].description,
                            cnpj: resultUser[0].cnpj,
                        },
                        token: generateToken({ id: resultInsert[0] })
                    }
                })
            } else {
                return response.status(500).json({ error: 'error registering user' })
            }
        } catch (error) {
            console.log(error)
            return response.status(500).json({ error })
        }
    }
}
export default new Users()