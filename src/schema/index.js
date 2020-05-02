import { SchemaComposer } from 'graphql-compose'

import db from '../utils/db'

const schemaComposer = new SchemaComposer()

import { InstituicaoQuery, InstituicaoMutation } from './instituicao'

schemaComposer.Query.addFields({
    ...InstituicaoQuery,
})

schemaComposer.Mutation.addFields({
    ...InstituicaoMutation,
})

export default schemaComposer.buildSchema()
