import express from 'express';
import {collectionName, connection} from './dbconfig.js';
import cors from 'cors';
const app =  express();
app.use(express.json());

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

app.post('/add-list',async (req,resp) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    if (result) {
        resp.send({
            message:'New List has been added succesfully.',
            status:true,
            result
        })
    } else {
        resp.send({
            message:'List has not been added.',
            status:false
        })
    }
});

app.get('/list',async (req,resp) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.find().toArray();
    if (result) {
        resp.send({
            message:'Task List fetch.',
            status:true,
            result
        })
    } else {
        resp.send({
            message:'Data not exist in the database.',
            status:false
        })
    }
})
app.listen(3200);