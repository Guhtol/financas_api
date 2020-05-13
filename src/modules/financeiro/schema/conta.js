import { Conta, ContaTC } from '../models/conta'
import { createQueryMutation, mutationObject, queryObject }  from '../../../core'

const ContaQuery = createQueryMutation('conta', queryObject, ContaTC)

const ContaMutation = createQueryMutation('conta', mutationObject, ContaTC)

export { ContaQuery, ContaMutation }
