export const HTTP_STATUS_CODE = {
    OK:200,
    CREATED:201,
    BAD_REQUEST:400,
    UNAUTHORISED:401,
    FORBIDDEN:403,
    NOT_FOUND:404,
    METHOD_NOT_ALLOWED:405,
    INTERNAL_SERVER_ERROR:500
}

export const ERROR_MESSAGE = {
    INTERNAL_SERVER_ERROR: 'Something went wrong! Please try again later.',
    UNAUTHORISED:'Invaild user credentials',
    USEREXISTS:'User already exists',
    NOT_FOUND:'User not found',
}