import jwt from 'jsonwebtoken'
import { Usuario } from '../models/usuario'
import { compose } from 'ramda'
import { schemaComposer } from 'graphql-compose'
import { promiseError, createPromiseError } from '../../../core'

// const promiseError = (obj) => Promise.reject(obj)
// const createMsgError = (msg) => new Error(msg)
// const createPromiseError = compose(promiseError, createMsgError)

const accesToken = schemaComposer.createObjectTC({
    name: 'AccessToken',
    fields: { accessToken: 'String!' },
})

export const signIn = {
    name: 'signIn',
    type: accesToken,
    args: {
        email: 'String!',
        password: 'String!',
    },
    resolve: async ({ args: { email, password } }) => {
        try {
            let msgError = 'email, password podem estar errado ou não existe'
            const usuario = await Usuario.emailExist(Usuario, email)
            if (!usuario) return createPromiseError(msgError)

            const comparePassword = await usuario.comparePassword(
                password,
                usuario.password
            )

            if (!comparePassword) return createPromiseError(msgError)

            const accessToken = jwt.sign(
                { userId: usuario._id },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRATION }
            )
            return { accessToken }
        } catch (error) {
            return promiseError(error)
        }
    },
}
