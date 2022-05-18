'use strict'
import { sequelize } from "../database/database.js"
import { EBook_User } from "../database/model.js"

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {//query : id,name,password,email
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
