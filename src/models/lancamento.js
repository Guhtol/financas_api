import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'
import { composeWithMongoose } from 'graphql-compose-mongoose'
import { ContaSchema } from './conta'

export const LancamentoSchema = new Schema(
    {
        data: {
            type: Date,
            required: true,
        },
        Contas: {
            type: [ContaSchema],
            default: [],
        },
    },
    {
        collection: 'lancamento',
    }
)

LancamentoSchema.plugin(timestamps)

LancamentoSchema.index({ criado: 1, atualizado: 1 })

export const Lancamento = mongoose.model('Lancamento', LancamentoSchema)
export const LancamentoTC = composeWithMongoose(Lancamento)
