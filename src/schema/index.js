import { SchemaComposer } from 'graphql-compose'

import db from '../utils/db'

const schemaComposer = new SchemaComposer()

import { InstituicaoQuery, InstituicaoMutation } from './instituicao'
import { ContaQuery, ContaMutation } from './conta'

schemaComposer.Query.addFields({
    ...InstituicaoQuery,
    ...ContaQuery,
})

schemaComposer.Mutation.addFields({
    ...InstituicaoMutation,
    ...ContaMutation,
})

export default schemaComposer.buildSchema()
