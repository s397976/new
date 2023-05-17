const mongoose = require('mongoose');;
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
mongoose.connect ('mongodb+srv://trungluong0806:Lacussaber080699@cluster0.w8zcmxn.mongodb.net/')
.then(() => {
    console.log('connected');
    
})
.catch((err) => {
    console.log('error');
});
const orderSchema = new mongoose.Schema({
    
    ProductNmae:{
        type:String,
        required:true,
        maxlength: 20,
    },

    productPrice:{type:Number,required:true,
        min:0
    },
    productBrand:{type:String, required:true,maxlength: 20},
    productLocation:{type:String, required:true,maxlength: 20},
    productCFO:{type:String, required:true,maxlength: 20},
    productDescription:{type:String,maxlength: 20},
    imagePath:{type:String, required:true,maxlength: 20},
    
    __v:{type:Number}
})
app.use(express.urlencoded({ extended: true }));

const order=mongoose.model('order',orderSchema)
app.get('/', (req, res) => {
    order.find({})
      .then(order => {
       
        res.render('/', {order: order});
    })
      .catch(error => res.send(error));
})
app.listen(3000,()=>{
    console.log('server is running');
    
    });