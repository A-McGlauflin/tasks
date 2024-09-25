import { toContainElement } from "@testing-library/jest-dom/matchers";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let x: number[] = [];
    if (numbers.length == 0) return [];
    else if (numbers.length == 1) {
        x.push(numbers[0]);
        x.push(numbers[0]);
    } else {
        x.push(numbers[0]);
        x.push(numbers[numbers.length - 1]);
    }
    return x;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const x = numbers.map((y: number): number => y * 3);
    return x;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const x = numbers.map((y: string): number =>
        Number.isNaN(parseInt(y)) ? 0 : parseInt(y),
    );
    return x;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let check = (str: string) => str[0] == "$";
    //disgusting nested ternary operators, auto format makes it worse to look at
    const x = amounts.map((y: string): number =>
        check(y) ?
            Number.isNaN(parseInt(y.substring(1))) ?
                0
            :   parseInt(y.substring(1))
        : Number.isNaN(parseInt(y)) ? 0
        : parseInt(y),
    );
    return x;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let exclamation = (str: string) => str[str.length - 1] == "!";
    let question = (str: string) => str[str.length - 1] == "?";

    const x = messages
        .filter((y: string): boolean => !question(y))
        .map((y: string): string => (exclamation(y) ? y.toUpperCase() : y));
    return x;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const x = words.filter((y: string): boolean => y.length < 4);
    return x.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) return true;
    const x = colors.filter(function (y: string): boolean {
        if (y == "red") return false;
        else if (y == "green") return false;
        else if (y == "blue") return false;
        else return true;
    });
    return x.length == 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) return "0=0";
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    return sum + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const x = [...values];
    const sum = values.reduce(function (
        total: number,
        num: number,
        index: number = 0,
    ): number {
        if (total < 0) return 0;
        else if (num < 0) {
            x.splice(++index, 0, total);
            total = -1;
            return total;
        }
        index++;
        return total + num;
    }, 0);
    if (x.length == values.length) x.push(sum);
    return x;
}
