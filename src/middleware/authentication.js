const jwt = require('jsonwebtoken')
import { Usuario } from '../modules/usuario/models/usuario'
import { isNil, merge } from 'ramda'

export const authentication = async (req) => {
    try {
        const {
            headers: { authorization },
        } = req

        const accessToken = authorization.split(' ')[1]

        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET)

        if (!decoded) return ""

        const usuario = await Usuario.findById(decoded.userId)

        if (isNil(usuario)) return ""
        
        return { accessToken, usuario }         
        
    } catch (error) {
        return ""
    }
}
