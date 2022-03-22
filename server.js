// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const dotenv = require('dotenv');
const cors = require('cors');

const middlewares = jsonServer.defaults()

dotenv.config();

server.use(middlewares)
    // To handle POST, PUT and PATCH you need to use a body-parser
    // You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
    //  enable CORS is with the cors library.
server.use(cors());


server.use('/api', router)
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})