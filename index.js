const express= require('express');
const app=express();
console.log('hello world');

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));
//it means to find all static files in folder named public under the current directory

app.get('/',function(req,res)
{
res.send('Hey there everyone!!');
});

app.get('/homepage/:name',function(req,res)
{
res.render('view.ejs',{your_name:req.params.name});
});

const server= app.listen(4000,function(){
    console.log('listening to port requests 4000');
});