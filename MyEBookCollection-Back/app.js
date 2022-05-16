'use strict'
import sensible from './plugins/sensible.js'
import support from './plugins/support.js'
import routes from './routes/root.js'
import fastifyCors from '@fastify/cors'
import "./database/database.js"
import "./database/model.js"

export default async function (fastify, opts) {
  // Do not touch the following lines
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(sensible)
  fastify.register(support)
  fastify.register(routes)
  fastify.register(fastifyCors)
}
