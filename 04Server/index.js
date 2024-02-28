const http=require('http');
const fs=require('fs');
const url=require('url')

const myserver=http.createServer((req,res)=>{
 console.log('New request recieved');

 const log=`${Date.now()} : ${req.url}\n`;

 const myurl=url.parse(req.url)

 console.log(myurl)
 if(req.url==='/favicon.ico'){
    return res.end();
 }
 fs.appendFile('log.txt',log,(err,result)=>{
    if(err){
        res.end("Error")
    }else{
   switch (myurl.pathname) {
    case '/':
        res.end("Home Page");
        break;

    case '/about':
     res.end("I am Sandeep");
     break;
    default:
        res.end("404 NOt Found");
        break;
   }}
 })

});
myserver.listen(8000,()=>{
    console.log("server started");
});
