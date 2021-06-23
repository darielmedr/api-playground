"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const api_operation_controller_1 = __importDefault(require("../controllers/api-operation.controller"));
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.controller = typedi_1.default.get(api_operation_controller_1.default);
        this.setRoutes();
    }
    setRoutes() {
        this.router.put('/', (req, res) => this.controller.updateApiOperations(req, res));
    }
    getRoutes() {
        return this.router;
    }
}
const routes = new Routes();
exports.default = routes.getRoutes();
