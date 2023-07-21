import {HTTP_STATUS_CODE, ERROR_MESSAGE} from '../../config/constant.js'
import db from '../../config/database.js'

export const createTable = async (request,response) => {
    try {
        const [result] = await db.sequelize.query(`CREATE TABLE users (
            user_id serial PRIMARY KEY,
            first_name VARCHAR (50) NOT NULL,
            last_name VARCHAR (50) NOT NULL,
            email VARCHAR (50) UNIQUE NOT NULL)`
        );
        return response.status(HTTP_STATUS_CODE.OK).send({
            result: result,
            status: HTTP_STATUS_CODE.OK,
            message: "Table created successfully"
        })
    }
    catch (error) {
        console.log(error)
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            message: error.errors || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        });
    }
}

export const addColumns = async (request,response) => {
    try {
        const [result] = await db.sequelize.query(`ALTER TABLE users
            ADD password VARCHAR (50) NOT NULL`
        );
        return response.status(HTTP_STATUS_CODE.OK).send({
            result: result,
            status: HTTP_STATUS_CODE.OK,
            message: "Column added successfully"
        })
    }
    catch (error) {
        console.log(error)
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            message: error.errors || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        });
    }
}

export const deleteColumn = async (request,response) => {
    try {
        const [result] = await db.sequelize.query(`ALTER TABLE users DROP COLUMN password`
        );
        return response.status(HTTP_STATUS_CODE.OK).send({
            result: result,
            status: HTTP_STATUS_CODE.OK,
            message: "Column deleted successfully"
        })
    }
    catch (error) {
        console.log(error)
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            message: error.errors || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        });
    }
}

// export const alterColumnType = async (request, response) => {
//     try {
//         const [result] = await db.sequelize.query(`ALTER TABLE users 
//         ALTER COLUMN password TYPE VARCHAR (50) NOT NULL`);
//         return response.status(HTTP_STATUS_CODE.OK).send({
//             result: result,
//             status: HTTP_STATUS_CODE.OK,
//             message: "Column deleted successfully"
//         })
//     }
//     catch (error) {
//         console.log(error)
//         return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
//             message: error.errors || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
//         });
//     }
// }