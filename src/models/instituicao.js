import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'
import { composeWithMongoose } from 'graphql-compose-mongoose'

export const InstituicaoSchema = new Schema({
    descricao: {
        type: String,
        required: true,
    },
})

InstituicaoSchema.plugin(timestamps)

InstituicaoSchema.index({ criado: 1, atualizado: 1 })

export const Instituicao = mongoose.model('Instituicao', InstituicaoSchema)
export const InstituicaoTC = composeWithMongoose(Instituicao)
