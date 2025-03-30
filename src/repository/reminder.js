const { Notifications } = require('../models/index');
const {Op} = require('sequelize');
class Reminderrepo{


    async create(data){
        try{
            const ticket = await Notifications.create(data);
            return ticket;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async get(data){
        try{
            const ticket = await Notifications.findAll({
                where:{
                    status : data.status,
                    notificationTime : {
                        [Op.lte] : new Date()
                    }
                }
            });
            return ticket;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async update(emailId,data){
        try {
            const ticket = await Notifications.findByPk(emailId);
            ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = Reminderrepo;