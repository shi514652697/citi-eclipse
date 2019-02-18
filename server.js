const express =  require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/myapp'));
app.listen(process.env.PORT || 8081);
//path location strategy

app.get('/*', function(req,res){

    res.sendFile(path.join(__dirname+'/dist/myapp/index.html'));
})
console.log('console listening');