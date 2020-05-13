import { createMiddleware } from '../core'
import { has } from 'ramda'

const hasUser = (context) => has('usuario', context)
const getUser = (context) => context.usuario

export const isAuth = createMiddleware({
    msg: 'You must be authorized',
    getProperty: getUser,
    has: hasUser,
})
