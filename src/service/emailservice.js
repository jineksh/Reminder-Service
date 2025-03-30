
const Reminderrepo = require('../repository/reminder');


class emailservice{
    constructor() {
        this.repository = new Reminderrepo();
    }
    

    async createticket(data){
        try {
            const ticket = await this.repository.create(data);
            return ticket;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(data){
        try{
            const ticket = await this.repository.get(data);
            return ticket;
        }
        catch(error)
        {
            console.log(error);
            throw error;
        }
    }

    async update(emailId,data){
        try {
            const ticket = await this.repository.update(emailId,data);
            return ticket;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}


module.exports = emailservice;