"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = exports.appError = void 0;
const zod_1 = require("zod");
class appError extends Error {
    constructor(message, statusCode = 400) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.appError = appError;
const handleErrors = (error, req, res, next) => {
    if (error instanceof appError) {
        return res.status(error.statusCode).json({
            message: error.message
        });
    }
    if (error instanceof zod_1.ZodError) {
        return res.status(400).json({
            message: error.flatten().fieldErrors
        });
    }
    console.log(error);
    return res.status(500).json({
        message: "Internal serve error"
    });
};
exports.handleErrors = handleErrors;
