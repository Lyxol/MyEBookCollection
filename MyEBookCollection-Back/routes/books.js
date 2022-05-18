'use strict'
import { sequelize } from "../database/database.js"
import { Book } from "../database/model.js"

export default async function (fastify, opts) { //query : id,user
    fastify.get('/', async function (request, reply) {
        return { book: true }
    })

    fastify.post('/', async function (request, reply) {
        /***/
    })

    fastify.put('/', async function (request, reply) {
        /***/
    })

    fastify.delete('/', async function (request, reply) {
        /***/
    })
}
