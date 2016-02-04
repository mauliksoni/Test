var express = require("express"),
    app = express();


app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/bower_components'));


app.get('/', function(req, res){
   
   res.redirect('/index.html');
    
});

// var key = speakeasy.generate_key({length: 20, google_auth_qr: true});
// console.log(key);
// var x = speakeasy.time({key: 'EY3F2622FJDEUP2UOMZGS2LPIQZVOJSI', encoding: 'base32'});
// console.log(x);


app.listen (process.env.PORT);