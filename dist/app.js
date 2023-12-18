"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const erros_1 = require("./erros");
// import cors from "cors"
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cors());
app.use(erros_1.handleErrors);
exports.default = app;
