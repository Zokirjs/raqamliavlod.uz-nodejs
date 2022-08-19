require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Model = require('./models/model')

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)
app.use('/static', express.static('static'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose
    .connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    .then((result) => {
      console.log('Connected to db');
    });

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/form', async (req,res) => {
    const newUser = new Model({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password || null,
        activity: req.body.setactivityName,
        phone: req.body.phone,
        for: req.body.for
    })
    await newUser.save()
    res.render('sucsess')

})

app.listen(3000, console.log('Nodejs port:', 3000))