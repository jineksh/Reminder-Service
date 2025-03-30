const cron = require('node-cron');
const emailservice = require('../service/emailservice');
const service = new emailservice();
const sender = require('../config/emailconfig');


const setupjobs = async () => {
    cron.schedule('*/1 * * * *', async () => {
        const response = await service.get({ status: 'Pending' });
        console.log(response);
        response.forEach((email)=>{
            sender.sendMail({
                from : 'chovatiyajinex@gamil.com',
                to : email.recepientEmail,
                subject : email.subject,
                text : email.content
            },async(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                    await service.update(email.id,{status:'Succesed'});
                }
            })
        })
    })
}

module.exports =
    setupjobs
