import { SchemaComposer } from 'graphql-compose'

import db from '../utils/db'

const schemaComposer = new SchemaComposer()

import { InstituicaoQuery, InstituicaoMutation } from './financeiro/schema/instituicao'
import { ContaQuery, ContaMutation } from './financeiro/schema/conta'
import { LancamentoQuery, LancamentoMutation } from './financeiro/schema/lancamento'
import { UsuarioQuery, UsuarioMutation } from './usuario/schema/usuario'

schemaComposer.Query.addFields({
    ...UsuarioQuery,
    ...InstituicaoQuery,
    ...ContaQuery,
    ...LancamentoQuery,
})

schemaComposer.Mutation.addFields({
    ...UsuarioMutation,
    ...InstituicaoMutation,
    ...ContaMutation,
    ...LancamentoMutation,
})

export default schemaComposer.buildSchema()
