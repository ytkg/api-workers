import { Hono } from 'hono'

const app = new Hono()

app.use('/', async (c) => c.text('Hello, Hono!'))

export default app
