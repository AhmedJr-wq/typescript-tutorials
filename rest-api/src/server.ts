
import * as express from 'express'
import { root } from './routes/root'

const app = express()

function setupExpress() {
    app.route('/').get(root)
}

function startServer() {

}

setupExpress()
startServer()