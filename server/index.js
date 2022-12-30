const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors");

const app =  express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
res.send(`<h1 style="text-align:center">Welcome to my page</h1>`)
});



app.post('/api/sendEmail', (req,res)=>{
res.send("Yes, I got the form details");
let data = req.body;
console.log("hello " + data);
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'s.sudhacse03@gmail.com',
        pass:'laaulqdcfvfdeegz'
    }
})

transporter.verify((error) => {
    if(error){
    console.log(error);
    }
    else{
        console.log("Ready To Send yes");
    }
});
const mailOptions = {
    from:data.email,
    to:'s.sudhacse08@gmail.com',
    subject:'Message from contact form',
    html:`
    <ul>
    <li>Firstname : ${data.firstName}</li>
    <li>Lastname : ${data.lastName}</li>
    <li>Email : ${data.email}</li>
    <li>Phone : ${data.Phone}</li>
    </ul>`
}
transporter.sendMail(mailOptions, (error,info)=>{
 if(error){
   res.send(error);
 }   
 else{
   res.send(info.response);
    console.log("sent to your gmail")
 }
})
})

app.listen(9000,()=>{
    console.log("Server running at the port 9000!")
})