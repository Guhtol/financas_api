import { Instituicao, InstituicaoTC } from '../models/instituicao'
import { createQueryMutation, mutationObject, queryObject } from '../../../core'
import { isAuth } from '../../../middleware/authMiddleware'
import { authentication } from '../../../middleware/authentication'

const privateRole = {
    Pagination: [isAuth],
}

const InstituicaoQuery = createQueryMutation(
    'instituicao',
    queryObject,
    InstituicaoTC,
    privateRole
)

const InstituicaoMutation = createQueryMutation(
    'instituicao',
    mutationObject,
    InstituicaoTC
)

export { InstituicaoQuery, InstituicaoMutation }
