const express = require('express');
const Process = require("process");
const {connectDb} = require("./helpers/db");
const {port, host, db, authApiUrl} = require("./configuration");
const {Schema} = require("mongoose");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const blogSchema = new Schema({
    title:  String,
});
const Blog = mongoose.model('Blog', blogSchema);

const startServer = async () => {
    app.listen(Process.env.PORT, () => {
        console.log(`START API service on PORT:${port}`)
        console.log(`START API service on HOST:${host}`)
        console.log(`START API service on DB:${db}`)

        const silents = new Blog({title: 'Silents'})
        silents.save((err, savedSilents) => {
            if (err) return  console.log(err);
            console.log('savedSilents', savedSilents);
        })
        Blog.find((err, findPosts) => {
            if (err) return  console.log(err);
            console.log('findPosts', findPosts);
        })

    })
}

app.get('/test', (req, res) => {
    res.send('API server working correctly123')
})

app.get('/testwithcurrentuser', (req, res) => {
    axios.get(authApiUrl + '/currentUser').then(result => {
        res.json({
            testwithcurrentuser: true,
            currentUserFromSAuth: result.data
        })
    })
})

app.get('/api/testapidata', (req, res) => {
    res.json({
        testwithapi: true
    })
})


connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer)