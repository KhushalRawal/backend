import { HTTP_STATUS_CODE,ERROR_MESSAGE  } from '../../config/constant'

export const getUsers = async (request, response) =>{
    try{
        const [result] = await db.sequelize.query(`select * from users`);
        
        if(result.length>0){
            const users = result.map((user)=>{
                delete user['password']
                return user
            });
            return  response.status(HTTP_STATUS_CODES.OK).send({
                result: users,
                status: HTTP_STATUS_CODES.OK,
                message: 'Users fetched sucessfully.'
            })
        }else{
            return response.status(HTTP_STATUS_CODES.NOT_FOUND).send({
                message:'No user found'
            })
        }


    }
    catch(error){
        console.log(error);
        return response.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
            message: error || ERROR_MESSAGES.INTERNAL_SERVER_ERROR
        });
    }
}

export const getUser = async(request, response) =>{
    try{
        const [result] = await db.sequelize.query(`SELECT * from users where id=${request.params.id}`);
        if(result.length === 1){
            const user = result[0];
            delete user['password'];
            return response.status(HTTP_STATUS_CODES.OK).send({
                result:{
                    ...user
                },
                status: HTTP_STATUS_CODES.OK,
                message: 'Users fetched sucessfully.'
            })
        }else{
            return response.status(HTTP_STATUS_CODES.NOT_FOUND).send({
                message:'No user found with such ID'
            })    
        }
    }catch(error){
        return response.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
            message:error|| ERROR_MESSAGES.INTERNAL_SERVER_ERROR
        })
    }
}