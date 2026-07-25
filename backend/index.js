import express from 'express';
import {collectionName, connection} from './dbconfig.js';
const app =  express();
app.use(express.json());

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
})
app.listen(3200);