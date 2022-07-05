const express = require('express');
const Process = require("process");
const {connectDb} = require("./helpers/db");
const {port, host, db, apiUrl} = require("./configuration");
const axios = require("axios");
const app = express();

const startServer = async () => {
    app.listen(Process.env.PORT, () => {
        console.log(`START Auth server service on PORT:${port}`)
        console.log(`START Auth server service on HOST:${host}`)
        console.log(`START Auth server service on DB:${db}`)

    })
}

app.get('/test', (req, res) => {
    res.send('Auth server working correctly')
})

app.get('/api/currentUser', (req, res) => {
    res.json({
        id: "1234",
        email: "test@test.ru"
    })
})

app.get('/testwithapidata', (req, res) => {
    axios.get(apiUrl + '/testapidata').then((response) => {
        res.send(response.data)
    })
})

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer)