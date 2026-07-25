import express from 'express';
const app =  express();
app.get('/', (req, resp) => {
    resp.send({
        message:'welcome to nodejs project',
        status:true
    })
})
app.listen(3200);