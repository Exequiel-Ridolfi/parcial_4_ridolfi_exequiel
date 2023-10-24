"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.show = exports.create = exports.index = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const http_exception_1 = require("../utils/http.exception");
const index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield product_model_1.default.find();
        return res.status(200).json(users);
    }
    catch (error) {
        next(new http_exception_1.HttpException(500, "Internal Server Error"));
    }
});
exports.index = index;
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, descripcion, precio, imagenUrl } = req.body;
        if (yield product_model_1.default.findOne({ nombre })) {
            throw new http_exception_1.BadRequestException("The user is already registered");
        }
        const user = new product_model_1.default({
            nombre,
            descripcion,
            precio,
            imagenUrl
        });
        yield user.save();
        return res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.create = create;
const show = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield product_model_1.default.findById(id);
        if (!user) {
            throw new http_exception_1.NotFoundException("Record not found");
        }
        return res.status(200).json(user);
    }
    catch (error) {
        return next(error);
    }
});
exports.show = show;
const destroy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield product_model_1.default.findById(id);
        if (!user) {
            throw new http_exception_1.NotFoundException("Record not found");
        }
        yield user.deleteOne();
        return res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.destroy = destroy;
