'use strict'
import { sequelize } from "../database/database"
import { EBook_User } from "../database/model"

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return { user: true }
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
