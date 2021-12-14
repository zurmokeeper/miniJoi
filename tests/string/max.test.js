
'use strict';

const apply = require('../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('String API max', () => {


    it(`必填字符串最大长度 输入非必填字段  不传limit 和 options 提示 limit is not passed!`, () => {
        let obj = {"a" : "xxx"};
        const test = function test(param){
            return function(){
                apply.max(param)
            }
        }
        expect(test(obj.b)).toThrowError(new Error( `limit is not passed!` ))
    })


    it(`必填字符串最大长度 输入必填字段 limit = null 和 options 提示 limit is not passed!`, () => {
        let obj = {"a" : "xxx"} , limit = null;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new Error( `limit is not passed!` ))
    })


    it(`必填字符串最大长度 输入非必填字段 不传options 提示 "value" is required ,But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : "xxx"} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.b)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段undefined 不传options 提示 "value" is required ,But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : undefined} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为空'' 不传options 提示 "value" is not allowed to be empty, But the type of the argument passed in is [String], Please check the value in the "_original" field. `, () => {
        let obj = {"a" : ""} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" is not allowed to be empty, But the type of the argument passed in is [String], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new String('') 不传options 提示 'value' must be a string, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('')} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new String('test') 不传options 提示 'value' must be a string, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('test')} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })



    it(`必填字符串最大长度 输入必填字段值为number 0 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为number 1 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 1} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Number(1) 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Number(1)} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为Number(1) 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Number(1)} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为binary number 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0b100000000000000000000000000000000000000000000000000011} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为hex number 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0x20000000000003} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为octal number 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0o400000000000000003} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为NaN 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Number('abc')} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为object 不传options 提示 'value' must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : {}} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Object() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Object()} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为array 不传options 提示 'value' must be a string, But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : []} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Array() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Array()} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为boolean 不传options 提示 'value' must be a string, But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : true} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Boolean() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Boolean()} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Date() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Date], Please check the value in the "_original" field.`, () => {
       let obj = {"a" : new Date()} , limit = 5; 
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Date], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为function 不传options 提示 'value' must be a string, But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : function name(params) {}} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Function() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Function()} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })

    
    it(`必填字符串最大长度 输入必填字段值为symbol 不传options 提示 'value' must be a string, But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Symbol("test")} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为buffer 不传options 提示 'value' must be a string, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Buffer.from('test')} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })

    it(`必填字符串最大长度 输入必填字段值为new Buffer() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new Buffer('test')} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为null 不传options 提示 'value' must be a string, But the type of the argument passed in is [Null], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : null} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Null], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为BigInt 不传options 提示 'value' must be a string, But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 10n} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为RegExp 不传options 提示 'value' must be a string, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : /^1[3456789]\d{9}$/} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new RegExp() 不传options 提示 'value' must be a string, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new RegExp(/^1[3456789]\d{9}$/)} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为Error 不传options 提示 'value' must be a string, But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Error('test')} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Error() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Error('test')} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Map() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Map], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Map()} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Map], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new WeakMap() 不传options 提示 'value' must be a string, But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new  WeakMap()} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Set() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Set], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Set()} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Set], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new WeakSet() 不传options 提示 'value' must be a string, But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new WeakSet()} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为new Proxy() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Proxy({} , {})} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值为test limit = -1.1 不传options 提示 limit must be a positive integer or reference.`, () => {
        let obj = {"a" : "test"} , limit = -1.1;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a positive integer or reference` ))
    })


    it(`必填字符串最大长度 输入必填字段值为test limit = -1 不传options 提示 limit must be a positive integer or reference.`, () => {
        let obj = {"a" : "test"} , limit = -1;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a positive integer or reference` ))
    })


    it(`必填字符串最大长度 输入必填字段值为test limit = 1.1 不传options 提示 limit must be a positive integer or reference.`, () => {
        let obj = {"a" : "test"} , limit = 1.1;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a positive integer or reference` ))
    })


    //TODO:
    it(`必填字符串最大长度 输入必填字段值 为test limit = 0 不传options 提示 "value" length must be less than or equal to characters long, But the type of the argument passed in is [String], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : "test"} , limit = 0;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" length must be less than or equal to 0 characters long, But the type of the argument passed in is [String], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值不为空 为"test" limit = 4 PASS`, () => {
        let obj = {"a" : "test"} , limit = 4;
        let result = apply.max(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
        
    })


    it(`必填字符串最大长度 输入必填字段值不为空 为"1234" limit = 4 PASS`, () => {
        let obj = {"a" : "1234"} , limit = 4;
        let result = apply.max(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填字符串最大长度 输入必填字段值不为空 为"1SS3" limit = 4 PASS`, () => {
        let obj = {"a" : "1SS3"} , limit = 4;
        let result = apply.max(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填字符串最大长度 输入必填字段值 为test 4个字符 limit = 5 不传options PASS`, () => {
        let obj = {"a" : "test"} , limit = 5;
        let result = apply.max(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填字符串最大长度 输入必填字段值 为"1234" 4个字符 limit = 5 不传options PASS`, () => {
        let obj = {"a" : "1234"} , limit = 5;
        let result = apply.max(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填字符串最大长度 输入必填字段值 为"te12" 4个字符 limit = 5 不传options PASS`, () => {
        let obj = {"a" : "te12"} , limit = 5;
        let result = apply.max(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })



    it(`必填字符串最大长度 输入必填字段值 为"testte" 6个字符 limit = 5 不传options 提示 "value" length must be less than or equal to 5 characters long, But the type of the argument passed in is [String], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : "testte"} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" length must be less than or equal to 5 characters long, But the type of the argument passed in is [String], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值 为"123456" 6个字符 limit = 5 不传options 提示 "value" length must be less than or equal to 5 characters long, But the type of the argument passed in is [String], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : "123456"} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" length must be less than or equal to 5 characters long, But the type of the argument passed in is [String], Please check the value in the "_original" field.` ))
    })


    it(`必填字符串最大长度 输入必填字段值 为"1234te" 6个字符 limit = 5 不传options 提示 "value" length must be less than or equal to 5 characters long, But the type of the argument passed in is [String], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : "1234te"} , limit = 5;
        const test = function test(param){
            return function(){
                apply.max(param , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" length must be less than or equal to 5 characters long, But the type of the argument passed in is [String], Please check the value in the "_original" field.` ))
    })

})