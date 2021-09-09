import express from 'express'
import dotenv from 'dotenv'

const { parsed: localEnv } = dotenv.config()
const app = express()
const route = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static('dist/public'))
app.use(`/${localEnv.APPLICATION_API_CONTEXT}}`, route)

app.listen(localEnv.APPLICATION_PORT, localEnv.APPLICATION_ADDRESS, () => {
	console.log(`Environment: ${process.env.NODE_ENV}`)
	console.log(`Server listening on http://${localEnv.APPLICATION_ADDRESS}:${localEnv.APPLICATION_PORT}`)
})