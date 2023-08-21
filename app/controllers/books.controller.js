import db from '../../config/database.js';
import { HTTP_STATUS_CODE, ERROR_MESSAGE } from '../../config/constant.js';

export const insertBook = async (request, response) => {
    const {body} = request;
    try{
        const [result] = await db.sequelize.query(`INSERT INTO books (book_name,book_type) VALUES ('${body.book_name}','${body.book_type}')`);
        return response.status(HTTP_STATUS_CODE.CREATED).send({
            result: body,
            status: HTTP_STATUS_CODE.CREATED,
            message: "Book added succcessfully."
        });
    }
    catch (error) {
        console.log(error);
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
            message: error.errors || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        });
    }
}

export const getAllBooks = async (request, response) => {
    try {
        const [result] = await db.sequelize.query(`SELECT * FROM books`);
        return response.status(HTTP_STATUS_CODE.OK).send({
            result: result,
            status: HTTP_STATUS_CODE.OK,
            message: "Books fetched successfully."
        });
    } catch (error) {
        console.log(error);
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            message: error.errors || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        });
    }
}

export const getBook = async (request, response) => {
    try {
        const [result] = await db.sequelize.query(`SELECT * FROM books WHERE book_id=${request.params.id}`);
        if(result){
            const book = result[0];
            return response.status(HTTP_STATUS_CODE.OK).send({
                result: {...book},
                status: HTTP_STATUS_CODE.OK,
                message: "Book fetched successfully."
            });
        } 
        else {
            return response.status(HTTP_STATUS_CODE.NOT_FOUND).send({
                message: ERROR_MESSAGE.NOT_FOUND
            });
        }
    } catch (error) {
        console.log(error);
        return response.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            message: error.errors || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
        });
    }
}