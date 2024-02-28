  const fs=require("fs")
  const os=require("os")
// // Syn...
// fs.writeFileSync('./test.txt','Its file')
// // Asy..
// fs.writeFile('./test.txt','Its Asycfile',(err)=>{console.log(err)})
// const result=fs.readFileSync('./contact.txt','utf-8');
// console.log(result)
fs.readFile('./contact.txt','utf-8',(err,result)=>{
    if(result){
        console.log(result)
    }else{
        console.log(err)
    }
});
fs.appendFileSync("./test.txt",new Date().getTime().toLocaleString())
console.log(os.cpus().length);