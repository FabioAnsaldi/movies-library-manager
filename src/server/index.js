import express, { response } from 'express'
import dotenv from 'dotenv'
import Service from './service/index.js'

const { parsed: localEnv } = dotenv.config()
const app = express()
const route = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static('dist/public'))

route.get('/environment', (req, res) => {
	const { APPLICATION_API_CONTEXT, APPLICATION_VERSION, DATA_SOURCE_ADDRESS } = localEnv
	const APPLICATION_SOURCE_ADDRESS = DATA_SOURCE_ADDRESS.replace('api', 'www')

	return res.status(200).send({ APPLICATION_API_CONTEXT, APPLICATION_VERSION, APPLICATION_SOURCE_ADDRESS, ENVIRONMENT: process.env.NODE_ENV })
})

route.get('/movie-list', (req, res) => {
	const url = `${localEnv.DATA_SOURCE_ADDRESS}/${localEnv.APPLICATION_API_CONTEXT}/list/${localEnv.APPLICATION_MOVIES_LIST}?api_key=${localEnv.DATA_SOURCE_CREDENTIALS_KEY}`

	Service.getMovieList(url).then(response => {
		if (response) {
			return res.status(200).send(response)
		} else {
			return res.status(500).send({ message: 'Entity List Not Found!', type: 'danger' })
		}
	})
})

app.use(`/${localEnv.APPLICATION_API_CONTEXT}`, route)

app.listen(localEnv.APPLICATION_PORT, localEnv.APPLICATION_ADDRESS, () => {
	console.log(`Environment: ${process.env.NODE_ENV}`)
	console.log(`Server listening on http://${localEnv.APPLICATION_ADDRESS}:${localEnv.APPLICATION_PORT}`)
})