import { Lancamento, LancamentoTC } from '../models/lancamento'
import { createQueryMutation, mutationObject, queryObject } from '../../core'

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
