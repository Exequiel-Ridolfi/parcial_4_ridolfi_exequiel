"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true,
    },
    descripcion: {
        type: String,
    },
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio"],
        minimum: [0, "El precio  debe ser mayor o igual a cero"],
    },
    imagenUrl: {
        type: String,
        lowercase: true,
        pattern: "http//",
        trim: true,
    },
}, {
    timestamps: { createdAt: true, updatedAt: true },
});
exports.default = (0, mongoose_1.model)("Products", UserSchema);
