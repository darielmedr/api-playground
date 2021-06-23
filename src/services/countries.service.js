"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const countries_db_1 = __importDefault(require("../db/countries.db"));
const logger_1 = __importDefault(require("../logger"));
let CountryService = class CountryService {
    constructor(countriesDB) {
        this.countriesDB = countriesDB;
    }
    async getCountries(queryParams) {
        try {
            logger_1.default.info('Fetching all countries from API');
            const countries = await this.countriesDB.getCountries();
            if (!queryParams) {
                return countries;
            }
            let countriesResult = countries;
            const { filter, order } = queryParams;
            if (filter) {
                countriesResult = this.filterCountries(countries, filter);
            }
            if (order) {
                countriesResult = this.sortCountries(countriesResult, order);
            }
            return countriesResult;
        }
        catch (error) {
            logger_1.default.error(error);
            return [];
        }
    }
    filterCountries(countries, searchString) {
        // Makes the search string a regular expression with case insensitive
        const regex = new RegExp(searchString, 'i');
        return countries.filter((country) => (regex.test(country.country) ||
            regex.test(country.code)));
    }
    sortCountries(countries, order) {
        return countries.sort((a, b) => ((order === 'asc')
            ? a.vat - b.vat
            : b.vat - a.vat));
    }
};
CountryService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [countries_db_1.default])
], CountryService);
exports.default = CountryService;
