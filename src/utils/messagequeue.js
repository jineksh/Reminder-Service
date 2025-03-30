const amqp = require('amqplib');
const {EXCHANGE_NAME,MESSAGE_BROKER_URL,BINDING_KEY} = require('../config/serverconfig');

const createChannel = async()=>{
    try {
        const connection = await amqp.connect(MESSAGE_BROKER_URL);
        const channel = await connection.createChannel();
        await channel.assertExchange(EXCHANGE_NAME);
        return channel;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

const publishmessage = async(channel,binding_key,message)=>{
    try {
        await channel.assertQueue('QUEUE_NAME');
        await channel.publish(EXCHANGE_NAME,binding_key,Buffer.from(message));
    } catch (error) {
        console.log(error);
        throw error;
    }
}



const subscribe = async(channel,service,binding_key)=>{
    try {
        const appqueue = await channel.assertQueue('QUEUE_NAME');
        channel.bindQueue(appqueue.queue,EXCHANGE_NAME,binding_key);

        channel.consume(appqueue.queue,msg=>{
            console.log('Recived message');
            console.log(msg.content.toString());
            channel.ack(msg);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    createChannel,
    publishmessage,
    subscribe
}