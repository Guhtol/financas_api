import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'

import { composeWithMongoose } from 'graphql-compose-mongoose'

export const ContaSchema = new Schema(
    {
        descricao: {
            type: String,
            required: true,
        },
        quantidade: {
            type: Number,
            required: true,
            default: 1,
        },
        valor: {
            type: Number,
            required: true,
        },
        fixo: {
            type: Boolean,
            default: true,
        },
        instituicao: {
            type: Schema.Types.ObjectId,
            ref: 'Instituicao',
            required: true,
        },
    },
    {
        collection: 'conta',
    }
)

ContaSchema.plugin(timestamps)

ContaSchema.index({ criado: 1, atualiado: 1 })

export const Conta = mongoose.model('Conta', ContaSchema)
export const ContaTC = composeWithMongoose(Conta)
