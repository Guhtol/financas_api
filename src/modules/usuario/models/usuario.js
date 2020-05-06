import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const bcrypt = require('bcryptjs')

export const UsuarioSchema = new Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true,
        },
        sobreNome: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
    },
    {
        collection: 'usuario',
    }
)

UsuarioSchema.plugin(timestamps)

UsuarioSchema.index({ createdAt: 1, updatedAt: 1 })

const usuarioConfig = {
    fields: {
        remove: ['password'],
    },
}

UsuarioSchema.statics.emailExist = (usuario, email) =>
    usuario.findOne({ email })

UsuarioSchema.methods.generateHash = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

UsuarioSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

export const Usuario = mongoose.model('Usuario', UsuarioSchema)
export const UsuarioTC = composeWithMongoose(Usuario).removeField('password')
