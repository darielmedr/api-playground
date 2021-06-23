"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const countries_controller_1 = __importDefault(require("../controllers/countries.controller"));
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.controller = typedi_1.default.get(countries_controller_1.default);
        this.setRoutes();
    }
    setRoutes() {
        this.router.get('/', (req, res) => this.controller.getCountries(req, res));
    }
    getRoutes() {
        return this.router;
    }
}
const routes = new Routes();
exports.default = routes.getRoutes();
