import express from 'express';
import {collectionName, connection} from './dbconfig.js';
import cors from 'cors';
import { ObjectId } from 'mongodb';
const app =  express();
app.use(express.json());

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

// New Add List
app.post('/add-list',async (req,resp) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    if (result) {
        resp.send({message:'New List has been added succesfully.', status:true, result})
    } else {
        resp.send({message:'List has not been added.', status:false})
    }
});

// Get all List Data
app.get('/list',async (req,resp) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.find().toArray();
    if (result) {
        resp.send({message:'Task List fetch.', status:true, result})
    } else {
        resp.send({message:'Data not exist in the database.', status:false})
    }
})

// Delete ToDo list By id
app.delete('/delete/:id',async (req,resp) => {
    const db = await connection();
    const id = req.params.id;
    const collection = await db.collection(collectionName);
    const result = await collection.deleteOne({_id:new ObjectId(id)});
    if (result) {
        resp.send({message:'Task Deleted Successfully.',status:true,result})
    } else {
        resp.send({message:'something went wrong.',status:false})
    }
})

// Get List Todo By Id
app.get('/list/:id',async (req,resp) => {
    const db = await connection();
    const id = req.params.id;
    const collection = await db.collection(collectionName);
    const result = await collection.findOne({_id:new ObjectId(id)});
    if (result) {
        resp.send({message:'List fetch By Id.', status:true, result})
    } else {
        resp.send({message:'Data not exist in the database.', status:false})
    }
})

// Update Add List
app.put('/update-list/:id',async (req,resp) => {
    console.log(req.body)
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        }
    );
    if (result) {
        resp.send({message:'Update List has been added succesfully.', status:true, result})
    } else {
        resp.send({message:'List has not been Updated.', status:false})
    }
});
app.listen(3200);