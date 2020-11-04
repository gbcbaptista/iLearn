const express = require('express')
const app = express();


app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/public'))

/*var http = require('http');
var fs = require('fs')*/

app.get('/', (req,res) => {
    res.render('index')
})



/*http.createServer( (req, res) => {
    fs.readFile('warehouse.html', (err,data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8080)*/

app.listen(8080, ()=>{
    console.log('App rodando!')
})