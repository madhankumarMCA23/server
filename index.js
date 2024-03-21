const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req , res) => {
    res.send('Hello World!')
})
app.put('/update/:id',async(req,res)=>{
    console.log(req.params.id);
     console.log(req.body);
   const amount = req.body.amount;
   
  const userUpdate= await Data.findByIdAndUpdate(req.params.id,{amount:amount},{new:true,});
    res.json({
     data:userUpdate
})
})
app.delete('/delete/:id',async(req,res)=>{
    console.log(req.params.id);
    const userDelete= await Data.findByIdAndDelete(req.params.id);
    res.json({
     data:userDelete
})
})

app.listen(8080, () =>{
    console.log(`Example app listening on port 8080`)
})
mongoose.connect('mongodb+srv://Madhankumar:TN42AF3732@cluster0.rarixw3.mongodb.net/').then(console.log("MongoDB connected"))
app.get('/data',function(req, res){
    data.find().then((item) => res.send((item)))
 })

//create a schema
var newSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    amount:Number
})
//model
let Data=mongoose.model('mca',newSchema)

//create a data for testing
let data1=new Data(
{
    name:"madhankumar",
    email:"kumarmmadhan22@gmail.com",
    password:"123456789",
    account:"1000"


}
)
data1.save()