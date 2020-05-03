import { Lancamento, LancamentoTC } from '../models/lancamento'
import { createQueryMutation } from './createQueryMutation'
import { mutationObject } from './mutationObject'
import { queryObject } from './queryObject'

const LancamentoQuery = createQueryMutation(
    'lancamento',
    queryObject,
    LancamentoTC
)

const LancamentoMutation = createQueryMutation(
    'lancamento',
    mutationObject,
    LancamentoTC
)

export { LancamentoQuery, LancamentoMutation }
