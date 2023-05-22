import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())

app.use('/', async (c) => c.text('Hello, Hono!'))

export default app
