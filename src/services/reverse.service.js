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
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
let ReverseService = class ReverseService {
    constructor() { }
    getProcessedParam(urlParam) {
        const reversedLetters = this.reverseString(urlParam);
        const processedLetters = this.transformVowelsToUppercase(reversedLetters);
        return processedLetters.join('');
    }
    reverseString(data) {
        return data
            .split('')
            .reverse();
    }
    transformVowelsToUppercase(letters) {
        return letters.map((letter) => {
            if (this.isVowel(letter)) {
                return letter.toUpperCase();
            }
            return letter;
        });
    }
    /**
     * Caution!!!
     *
     * This logic return true if @param letter contains a vowel.
     * Therefore, the input param MUST be a single character to properly check if it's a vowel
     */
    isVowel(letter) {
        const vowelsRegex = /[aeiou]/i;
        return letter.match(vowelsRegex)
            ? true
            : false;
    }
};
ReverseService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], ReverseService);
exports.default = ReverseService;
