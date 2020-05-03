import { SchemaComposer } from 'graphql-compose'

import db from '../utils/db'

const schemaComposer = new SchemaComposer()

import { InstituicaoQuery, InstituicaoMutation } from './instituicao'
import { ContaQuery, ContaMutation } from './conta'
import { LancamentoQuery, LancamentoMutation } from './lancamento'

schemaComposer.Query.addFields({
    ...InstituicaoQuery,
    ...ContaQuery,
    ...LancamentoQuery,
})

schemaComposer.Mutation.addFields({
    ...InstituicaoMutation,
    ...ContaMutation,
    ...LancamentoMutation,
})

export default schemaComposer.buildSchema()
