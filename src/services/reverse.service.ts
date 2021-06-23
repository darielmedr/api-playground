import { Service } from "typedi";

@Service()
export default class ReverseService {

    constructor() { }

    public getProcessedParam(urlParam: string): string {
        const reversedLetters: string[] = this.reverseString(urlParam);
        const processedLetters: string[] = this.transformVowelsToUppercase(reversedLetters);
        return processedLetters.join('');
    }

    public reverseString(data: string): string[] {
        return data
            .split('')
            .reverse();
    }

    public transformVowelsToUppercase(letters: string[]): string[] {
        return letters.map((letter: string) => {
            if (this.isVowel(letter)) {
                return letter.toUpperCase();
            }

            return letter;
        })
    }

    /**
     * Caution!!!
     *
     * This logic return true if @param letter contains a vowel.
     * Therefore, the input param MUST be a single character to properly check if it's a vowel
     */
    public isVowel(letter: string): boolean {
        const vowelsRegex: RegExp = /[aeiou]/i;

        return letter.match(vowelsRegex)
            ? true
            : false;
    }
}