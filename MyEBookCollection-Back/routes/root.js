'use strict'
import books from './books.js'
import users from './users.js'

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  fastify.register(books, { prefix: 'books' })
  fastify.register(users, { prefix: 'users' })
}