"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileExists = exports.unauthorizedexception = exports.BadRequestException = exports.NotFoundException = exports.HttpException = void 0;
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.HttpException = HttpException;
class NotFoundException extends HttpException {
    constructor(message = 'Not Found') {
        super(404, message);
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends HttpException {
    constructor(message = 'Bad Request') {
        super(400, message);
    }
}
exports.BadRequestException = BadRequestException;
class unauthorizedexception extends HttpException {
    constructor(message = 'error authotication') {
        super(401, message);
    }
}
exports.unauthorizedexception = unauthorizedexception;
class FileExists extends HttpException {
    constructor(message = 'unauthorized') {
        super(500, message);
    }
}
exports.FileExists = FileExists;
