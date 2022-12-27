import {splitIntoWords, sum} from "./01";
import {mul} from "./01";

//data
let a: number;
let b: number;
let c: number;
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})
test('sum should be correct', () => {

//action
    const result = sum(a, b);
    const result2 = sum(b, c);
//expect result
    expect(result).toBe(3);
    expect(result2).toBe(5);
})

test('multiply should be correct', () => {
//data
    const a = 1;
    const b = 2;
    const c = 3;
//action
    const result = mul(a, b);
    const result2 = mul(b, c);
//expect result
    expect(result).toBe(2);
    expect(result2).toBe(6);
})

test('spliting should be correct', () => {
//data
    const sentence1 = 'Hello, my friend!';
    const sentence2 = 'Js - the best programming language!';

//action
    const result = splitIntoWords(sentence1);
    const result2 = splitIntoWords(sentence2);
//expect result
    expect(result.length).toBe(3);
    })