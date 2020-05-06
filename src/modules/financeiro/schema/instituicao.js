import { Instituicao, InstituicaoTC } from '../models/instituicao'
import { createQueryMutation, mutationObject, queryObject } from '../../core'

const InstituicaoQuery = createQueryMutation(
    'instituicao',
    queryObject,
    InstituicaoTC
)

const InstituicaoMutation = createQueryMutation(
    'instituicao',
    mutationObject,
    InstituicaoTC
)

export { InstituicaoQuery, InstituicaoMutation }
