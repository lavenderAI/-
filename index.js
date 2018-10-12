var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
var app = express()
app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:true}))
app.post('/save/nav',function(req,res){
    fs.writeFileSync('json/nav.json',JSON.stringify(req.body.data))
})
app.get('/nav',function(req,res){
    fs.readFile('json/nav.json',function(errpr,fileData){
        res.status(200).send(fileData);
    })
})
app.listen(8000,function(){
    console.log('服务器已开~~~~~')
});