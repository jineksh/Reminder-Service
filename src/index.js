const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/serverconfig');
const jobs = require('./utils/cron');
const {createChannel,subscribe} = require('./utils/messagequeue');
const {BINDING_KEY} = require('./config/serverconfig');

const Apiroutes = require('./routes/index');
const server = async()=>{

    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',Apiroutes);
    app.listen(PORT,async()=>{
        console.log('Reminder Service is Started');
        const channel = await createChannel();
        subscribe(channel,undefined,BINDING_KEY);
    })

}

server();
