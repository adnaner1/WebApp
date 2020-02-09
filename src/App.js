
const path =  require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000
// define paths for express 
const puplicdirectorypath = path.join(__dirname, '../puplic')
const viewspath = path.join(__dirname, '../html/views')
const partialspath = path.join(__dirname, '../html/partials')

// setup handlebars engines and views location 
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialspath)

// setuo static directory to serve
app.use(express.static(puplicdirectorypath))

// Main page 
app.get('', (req , res) => {

    res.render('Main',{ 
        title:'Dashboard',
        name:'Warning'
     })

})

// Alarm page 
app.get('/Alarm', (req , res) => {

    res.render('Alarm',{
       title:'Home',
       name:'Warning'
    })

}) 

// Maintenance page 
app.get('/Maintenance', (req , res) => {

    res.render('Maintenance',{
       title:'Settings',
       name:'Documents'
    })

})


app.get('/weather' , (req , res) => {

    res.send( {title:'Setting',
    name:'Document'})

})

// 404 not found page
app.get('*' , (req , res) => {

    res.render('404')

})

// server starter 

app.listen(port , () => {

    console.log('Server started on port : ' + port)
    
});











