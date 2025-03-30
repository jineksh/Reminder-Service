const emailservice = require('../service/emailservice');
const { StatusCodes} = require('http-status-codes');

const service = new emailservice();

const create = async(req,res)=>{

    try {
        const ticket = await service.createticket(req.body);
        return res.status(StatusCodes.OK).json({
            message : "Email created",
            response : ticket,
            success : true,
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            message : "Email not created",
            response : error,
            success : false,
        })
    }

};


module.exports = {
    create
}