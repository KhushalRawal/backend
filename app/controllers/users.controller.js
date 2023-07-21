import { HTTP_STATUS_CODE,ERROR_MESSAGE  } from '../../config/constant.js'
import db from '../../config/database.js'

export const insertUser = async (request, response) => {
    const {body} = request
    try {
        const [result] = await db.sequelize.query(`INSERT INTO users (first_name,last_name,email,password) VALUES ('${body.first_name}','${body.last_name}','${body.email}','${body.password}')`);
        return response.status(HTTP_STATUS_CODE.OK).send({
            result: body,
            status: HTTP_STATUS_CODE.OK,
            message: 'Users inserted sucessfully.'
        })
    }
    catch (error) {
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            message:error || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        })
    }
}

export const getAllUser = async (request, response) => {
    try {
        const [result] = await db.sequelize.query(`SELECT * FROM users`);
        if (result.length > 0) {
            const users = result.map((user) => {
                delete user['password']
                return user
            });
            return response.status(HTTP_STATUS_CODE.OK).send({
                result: users,
                status: HTTP_STATUS_CODE.OK,
                message: "User fetched successfully."
            });
        } else {
            return response.status(HTTP_STATUS_CODE.NOT_FOUND).send({
                message: ERROR_MESSAGE.NOT_FOUND
            });
        } 
    }
    catch (error) {
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            message: error || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        });
    }
}

export const getUser = async (request, response) => {
    try {
        const [result] = await db.sequelize.query(`SELECT * FROM users WHERE user_id=${request.params.id}`);
        if (result) {
            const user = result[0]
            delete user['password']
            return response.status(HTTP_STATUS_CODE.OK).send({
                result: {...user},
                status: HTTP_STATUS_CODE.OK,
                message: "User fetched successfully."
            });
        } else {
            return response.status(HTTP_STATUS_CODE.NOT_FOUND).send({
                message: ERROR_MESSAGE.NOT_FOUND
            });
        } 
    }
    catch (error) {
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            message: error.errors || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        });
    }
}

export const updateUser = async (request, response) => {
    const { body } = request;
    try {
        const [result] = await db.sequelize.query(`
            UPDATE users
                SET first_name = '${body.first_name}', 
                    email = '${body.email}',
                    mobile = '${body.mobile}',
                    last_name = '${body.last_name}'
                WHERE user_id='${request.params.id}'
        `);
        if (result) {
            return response.status(HTTP_STATUS_CODE.OK).send({
                result: { ...body },
                status: HTTP_STATUS_CODE.OK,
                message: "Updated user successfully."
            });
        } else {
            return response.status(HTTP_STATUS_CODE.NOT_FOUND).send({
                message:'No user found with such ID'
            });
        }
    } catch (error) {
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
            message: error || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        });
    }
}

export const deleteUser = async (request, response) => {
    const [result] = await db.sequelize.query(`DELETE FROM users WHERE user_id=${request.params.id}`);
    return response.status(HTTP_STATUS_CODE.OK).send({
        status: HTTP_STATUS_CODE.OK,
        message: 'User deleted.',
        results: {}
    })
}