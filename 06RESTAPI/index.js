const express=require('express')
const fs=require('fs')
const users=require('./MOCK_DATA (1).json')

const app=express();
const PORT=8000;
app.listen(PORT,()=>console.log(`Server has started on PORT : ${PORT}`));
app.use(express.urlencoded({extended:false}));


app.route('/users')
  .get((req,res)=>{
     return res.json(users);
  })
  .post((req,res)=>{
     return res.json({"mesaage":"Making passible"});
  })

  app.route('/user/:id')
      .get((req,res)=>{
       const user_id=Number(req.params.id);
       const user=users.find((user)=>user.id===user_id);
       if(!user){
          return res.status(404).json({"message":"User NOt Found"})
       }else{
         return res.status(200).json(user)
       }
        })
      .post((req,res)=>{
        const user_data=req.body;
        if(!user_data.gender){
            return res.status(400).json({"message":"All Fields are required"})
        }
        users.push({...user_data,id:users.length+1});
        fs.writeFile('./MOCK_DATA (1).json',JSON.stringify(users),(err,result)=>{
          return res.status(201).json({"UserID":users.length})
        })
      })
// Good Pratice : Always add X to Custom Headers