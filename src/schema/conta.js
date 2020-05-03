import { Conta, ContaTC } from '../models/conta'
import { createQueryMutation } from './createQueryMutation'
import { mutationObject } from './mutationObject'
import { queryObject } from './queryObject'

const ContaQuery = createQueryMutation('conta', queryObject, ContaTC)

const ContaMutation = createQueryMutation('conta', mutationObject, ContaTC)

export { ContaQuery, ContaMutation }
