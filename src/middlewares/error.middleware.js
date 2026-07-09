const ApiError = require('../utils/ApiError');

const errorHandler = (err, req, res, next) => {
     const statusCode = err.statusCode || 500;
     const isDevelopment = process.env.NODE_ENV === 'development';

     let errorResponse = {}
     if(err instanceof ApiError){
           errorResponse = {
            success: false,
            message: err.message,
            errors: err.errors
           }
       
     }else if(isDevelopment){
                
                errorResponse = {
                       success: false,
                       message: err.message,
                       stack: err.stack
                }
              
     }else {
         
         errorResponse = {
            success: false,
            message: 'Internal Server Error',
            errors: []
            }
     }

       return res.status(statusCode).json(errorResponse);
}

module.exports = errorHandler;