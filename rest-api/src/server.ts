import * as dotenv from 'dotenv'

const result = dotenv.config()

if (result.error) {
    console.log(`Error loading environment variables, aborting...`)
    process.exit(1)
}

import * as express from 'express'
import { root } from './routes/root'
import { isInteger } from './utils'

const app = express()

function setupExpress() {

    app.route('/').get(root) //request handler. 'root' function generates http response

}

function startServer() {

    let port: number;

    const portEnv = process.env.PORT

    if (isInteger(portEnv)) {
        port = parseInt(portEnv)
    }

    if (!port) {
        port = 9000
    }

    app.listen(port, () => {
        console.log(`HTTP REST API Server is now running at http://localhost:9000`)
    })

}

setupExpress()
startServer()