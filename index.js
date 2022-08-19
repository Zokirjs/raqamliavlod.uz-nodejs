const express = require('express');
const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)
app.use('/static', express.static('static'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/form', (req,res) => {
    res.send('ok')
    console.log(req.body)
})

app.listen(3100, console.log('Nodejs port:', 3100))