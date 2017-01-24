var http=require('http');

    
var count=0;
http.createServer(function(req,res)
{
    
var message;
  
  count+=1;
   
 res.writeHead(200,{'Content-Type':'text/plain'});
   
 message='Number of Visitors :'+ count 
   
 res.end(message);
console.log(message);


}).listen(5000);
console.log("server running");