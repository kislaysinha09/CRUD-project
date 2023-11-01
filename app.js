const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const LogData = require('./models/logdatamodel');



const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kislaysinha2012:kislaysinha09@cluster0.aecad4h.mongodb.net/cruddatabase?retryWrites=true&w=majority');


//CRUD OPERATIONS 

// Create
//                                                                    check linkups   check routes    
app.post('/log_data',async(req,res)=> {
    const newLog = new LogData(req.body);
    await newLog.save();
    res.status(201).send(newLog);
});


//READ

app.get('/log_data/:id',async (req,res) =>{
    const log = await
    LogData.findById(req.params.id);
    res.send(log);
});

app.get('/log_data',async (req,res) =>{
    const log = await
    LogData.find({});
    res.send(log);
});

//UPDATE  

app.put('/log_data/:id',async(req, res) =>{
    await
    LogData.findByIdAndUpdate(req.params.id,req.body);
    res.send('Update Successfully');
});

//DELETE

app.delete('/log_data/:id', async(req,res) =>{
    await
    LogData.findByIdAndDelete(req.params.id);
    res.send('Deleted Successfully');
});

//Add pagination on GET request

//Read with pagination

app.get('/log_data', async (req,res) => {
    const limit = parseInt(req.query.limit) || 10;
    const skip = parseInt(req.query.skip) || 0;

    const logs = await
    LogData.find().limit(limit).skip(skip);
    res.send(logs);
});


//flow 1 
app.listen(PORT, () => {
    console.log('Server is running on port $ {PORT}');

});