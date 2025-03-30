const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/serverconfig');
const jobs = require('./utils/cron');


const Apiroutes = require('./routes/index');
const server = async()=>{

    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',Apiroutes);
    app.listen(PORT,()=>{
        console.log('Server Started');
        jobs();
    })

}

server();
