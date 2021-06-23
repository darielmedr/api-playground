import { expect } from "chai";
import ReverseService from "services/reverse.service";



describe('ReverseService', function () {

    const service: ReverseService = new ReverseService();

    describe('isVowel()', function () {

        it('should return true to all vowels', function () {
            const vowels: string[] = 'aeiouAEIOU'.split('');

            vowels.forEach(letter => {
                expect(service.isVowel(letter)).to.be.true;
            });
        });

        it('should return false to consonants', function () {
            const consonants: string[] = 'cdfgtCDFGT'.split('');

            consonants.forEach(letter => {
                expect(service.isVowel(letter)).to.be.false;
            });
        });

    });

    describe('trasnformVowelsToUppercase()', function () {

        it('should return all uppercase vowels', function () {
            const lowercaseVowels: string = 'aeiou';
            const uppercaseVowels: string[] = lowercaseVowels.toUpperCase().split('');

            expect(service.transformVowelsToUppercase(lowercaseVowels.split(''))).to.deep.equal(uppercaseVowels);
        });

    });

    describe('reverseString()', function () {

        it('should return an array', function () {
            const data: string = 'delete';

            expect(service.reverseString(data)).to.be.an.instanceOf(Array);
        });

        it('should return a reversed string converted to array', function () {
            const originalString: string = 'delete';
            const reversedArray: string[] = 'eteled'.split('');

            expect(service.reverseString(originalString)).to.deep.equal(reversedArray);
        });

    });

    describe('getProcessedParam()', function () {

        it('should return reversed input with all uppercase vowels', function () {
            const data: string = 'delete';
            const expected: string = 'EtElEd';

            expect(service.getProcessedParam(data)).to.equal(expected);
        });

    });

});
