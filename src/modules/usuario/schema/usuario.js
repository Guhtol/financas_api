import { Usuario, UsuarioTC } from '../models/usuario'
import { createQueryMutation, mutationObject, queryObject } from '../../../core'
import { signIn } from '../resolver/signIn'
import { isAuth } from '../../../middleware/authMiddleware'
import { authentication } from '../../../middleware/authentication'

UsuarioTC.addResolver(signIn)

UsuarioTC.wrapResolverResolve('createOne', (next) => async (rp) => {
    rp.beforeRecordMutate = async (doc, resolveParams) => {
        doc.password = doc.generateHash(doc.password)

        return doc
    }

    return next(rp)
})

delete mutationObject.CreateMany
delete mutationObject.UpdateMany
delete mutationObject.RemoveManys

const privateRole = {
    FindById: [isAuth, authentication],
}

const UsuarioQuery = createQueryMutation(
    'usuairo',
    queryObject,
    UsuarioTC,
    // privateRole
)

const UsuarioMutation = createQueryMutation(
    'usuario',
    mutationObject,
    UsuarioTC
)

UsuarioMutation.signIn = UsuarioTC.getResolver('signIn')

export { UsuarioQuery, UsuarioMutation }
