const express = require('express')
const app = express()
const mongoose = require('mongoose')

// const dbURI = process.env.MONGODB_URL || 'mongodb://localhost:27017/NewsAPI'
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(res => {
//         console.log(res.models)
//         start()
//     })
//     .catch(err => console.error(err))
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

app.get('/',(req, res, next) => {
    return res.status(200).json({
        word: "Hello Fam"
    })
})

app.use((req, res, next) => {
    return res.status(404).json({
        msg: 'General Error: Sorry this page Cannot be found'
    })
})
const PORT = process.env.PORT || 2222
const start = () => {
    app.listen(PORT, () => {
        console.log(`Listening on port 2222.....`)
    })
}

start()

