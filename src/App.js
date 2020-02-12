
const path =  require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
var sql = require("mssql");
const port = process.env.PORT || 3000
// define paths for express 
const puplicdirectorypath = path.join(__dirname, '/../puplic')
const viewspath = path.join(__dirname, '/../html/views')
const partialspath = path.join(__dirname, '/../html/partials')

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


  // config for your database
  var config = {
    user: 'Adnaner',                                        
    password: 'Bom86596',
    server: 'adnane.database.windows.net', 
    database: 'Radiot' ,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
        },
};



  // connect to your database
  const mydata = sql.connect(config, function (err) {
       
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select * from Table_1 ORDER BY date', function (err, recordset) {
        
        if (err) console.log(err)

        // send records as a response
        res.send(recordset);
        
    });
});





app.get('/Files', (req , res) => {

    res.render('Files',{
     
        mydata
        
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











