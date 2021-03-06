import dotenv from 'dotenv'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { authentication } from './middleware/authentication'


import mongoose, { Promise } from 'mongoose'

import './utils/db'
import schema from './modules/schema'
import { Usuario } from './modules/usuario/models/usuario'

dotenv.config()

const app = express()

const server = new ApolloServer({
    schema,
    cors: true,
    playground: process.env.NODE_ENV === 'development' ? true : false,
    introspection: true,
    tracing: true,
    path: '/',
    context: async ({ req }) => {
        const usuario = await authentication(req)
        return { req, usuario }
    },
})

server.applyMiddleware({
    app,
    path: '/',
    cors: true,
    onHealthCheck: () =>
        new Promise((resolve, reject) => {
            if (mongoose.connection.readyState > 0) {
                resolve()
                return
            }

            reject()
        }),
})

app.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 Server listening on port ${process.env.PORT}`)
    console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`)
})
