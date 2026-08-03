import express from 'express';
import {userCollection, toDoCollection, connection} from './dbconfig.js';
import cors from 'cors';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
const app =  express();
app.use(express.json());
app.use(cookieParser())

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));

// Sign Up
app.post('/user/signup',async (req,resp) => {
    const userData = req.body;
    if (userData.emailid && userData.password) {
        const db = await connection();
        const collection = await db.collection(userCollection);
        const result = await collection.insertOne(userData);
        if (result) {
            jwt.sign(userData, 'Google', {expiresIn:'5d'}, (error, token) => {
                resp.send({message:'User has been successfully signup.', status:true, token})
            })
        } else {
            resp.send({message:'Something went wrong!.', status:false})
        }
    } else {
        resp.send({message:'Kindly Fill EmailId and password!.', status:false})
    }
});
// Login
app.post('/user/login',async (req,resp) => {
    const userData = req.body;
    if (userData.emailid && userData.password) {
        const db = await connection();
        const collection = await db.collection(userCollection);
        const result = await collection.findOne({emailid:userData.emailid, password:userData.password});
        if (result) {
            jwt.sign(userData, 'Google', {expiresIn:'5d'}, (error, token) => {
                resp.send({message:'Login Done.', status:true, token})
            })
        } else {    
            resp.send({message:'Something went wrong!.', status:false})
        }
    } else {
        resp.send({message:'Kindly Fill EmailId and password!.', status:false})
    }
});

// New Add List
app.post('/add-list',verifyToken, async (req,resp) => {
    const db = await connection();
    const collection = await db.collection(toDoCollection);
    const result = await collection.insertOne(req.body);
    if (result) {
        resp.send({message:'New List has been added succesfully.', status:true, result})
    } else {
        resp.send({message:'List has not been added.', status:false})
    }
});
// Get all List Data
app.get('/list',verifyToken, async (req,resp) => {
    const db = await connection();
    const collection = await db.collection(toDoCollection);
    const result = await collection.find().toArray();
    if (result) {
        resp.send({message:'Task List fetch.', status:true, result})
    } else {
        resp.send({message:'Data not exist in the database.', status:false})
    }
})

// Delete ToDo All list
app.delete('/delete-multiple',verifyToken, async (req,resp) => {
    const ids = req.body;
    const deleteTaskIds = ids.map((item) => new ObjectId(item));
    const db = await connection();
    const collection = await db.collection(toDoCollection);
    const result = await collection.deleteMany({_id:{$in:deleteTaskIds}});
    if (result) {
        resp.send({message:'Task Deleted Successfully.',status:true, result})
    } else {
        resp.send({message:'something went wrong.',status:false})
    }
})

// Delete ToDo list By id
app.delete('/delete/:id',verifyToken, async (req,resp) => {
    const id = req.params.id;
    const db = await connection();
    const collection = await db.collection(toDoCollection);
    const result = await collection.deleteOne({_id:new ObjectId(id)});
    if (result) {
        resp.send({message:'Task Deleted Successfully.',status:true,result})
    } else {
        resp.send({message:'something went wrong.',status:false})
    }
})

// Get List Todo By Id
app.get('/list/:id',verifyToken, async (req,resp) => {
    const id = req.params.id;
    const db = await connection();
    const collection = await db.collection(toDoCollection);
    const result = await collection.findOne({_id:new ObjectId(id)});
    if (result) {
        resp.send({message:'List fetch By Id.', status:true, result})
    } else {
        resp.send({message:'Data not exist in the database.', status:false})
    }
})

// Update Add List
app.put('/update-list/:id',verifyToken, async (req,resp) => {
    const db = await connection();
    const collection = await db.collection(toDoCollection);
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


function verifyToken(req, resp, next) {
    const jwtToken = req.cookies['token'];
    jwt.verify(jwtToken, 'Google', (err, decoded) => {
        if (err) {
            return resp.send({
                msg:'Invalid token',
                status: false
            })
        }
        next();
    })
}
app.listen(3200);