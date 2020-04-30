const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require('../auth/authRouter.js');

//login and registration
server.use('/api/auth', authRouter);


server.get('/', (req,res) => {
    res.send("server is up!")
})



module.exports = server;