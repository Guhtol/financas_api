import { Instituicao, InstituicaoTC } from '../models/instituicao'
import { mutationObject } from './mutationObject'
import { queryObject } from './queryObject'
import { createQueryMutation } from './createQueryMutation'

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
