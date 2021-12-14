
'use strict';

const apply = require('../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('String API requireAndNotEmptyForStr', () => {


    it(`字符串必填且非空 输入非必填字段 提示 "value" is required ,But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : "xxx"};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.b)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段undefined 提示 "value" is required ,But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : undefined};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为空'' 提示 "value" is not allowed to be empty, But the type of the argument passed in is [String], Please check the value in the "_original" field. `, () => {
        let obj = {"a" : ""};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" is not allowed to be empty, But the type of the argument passed in is [String], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new String('') 提示 'value' must be a string, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('')};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new String('test') 提示 'value' must be a string, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('test')};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })


    it("字符串必填且非空 输入必填字段值不为空 PASS", () => {
        let obj = {"a" : "test"};
        let result = apply.requireAndNotEmptyForStr(obj.a);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
        
    })


    it(`字符串必填且非空 输入必填字段值不为空 为"123" PASS`, () => {
        let obj = {"a" : "123"};
        let result = apply.requireAndNotEmptyForStr(obj.a);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`字符串必填且非空 输入必填字段值不为空 为"12SS3" PASS`, () => {
        let obj = {"a" : "12SS3"};
        let result = apply.requireAndNotEmptyForStr(obj.a);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })



    it(`字符串必填且非空 输入必填字段值为number 0 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为number 1 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 1};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Number(1) 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Number(1)};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为Number(1) 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Number(1)};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为binary number 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0b100000000000000000000000000000000000000000000000000011};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为hex number 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0x20000000000003};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为octal number 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0o400000000000000003};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为NaN 不传options 提示 'value' must be a string, But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Number('abc')};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为object 不传options 提示 'value' must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : {}};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Object() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Object()};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为array 不传options 提示 'value' must be a string, But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : []};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Array() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Array()};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为boolean 不传options 提示 'value' must be a string, But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : true};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Boolean() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Boolean()};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Date() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Date], Please check the value in the "_original" field.`, () => {
       let obj = {"a" : new Date()}; 
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Date], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为function 不传options 提示 'value' must be a string, But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : function name(params) {}};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Function() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Function()};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })

    
    it(`字符串必填且非空 输入必填字段值为symbol 不传options 提示 'value' must be a string, But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Symbol("test")};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为buffer 不传options 提示 'value' must be a string, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Buffer.from('test')};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })

    it(`字符串必填且非空 输入必填字段值为new Buffer() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new Buffer('test')};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为null 不传options 提示 'value' must be a string, But the type of the argument passed in is [Null], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : null};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Null], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为BigInt 不传options 提示 'value' must be a string, But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 10n};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为RegExp 不传options 提示 'value' must be a string, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : /^1[3456789]\d{9}$/};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new RegExp() 不传options 提示 'value' must be a string, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new RegExp(/^1[3456789]\d{9}$/)};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为Error 不传options 提示 'value' must be a string, But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Error('test')};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Error() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Error('test')};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Map() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Map], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Map()};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Map], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new WeakMap() 不传options 提示 'value' must be a string, But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new  WeakMap()};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Set() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Set], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Set()};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Set], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new WeakSet() 不传options 提示 'value' must be a string, But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new WeakSet()};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值为new Proxy() 不传options 提示 'value' must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Proxy({} , {})};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a string, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`字符串必填且非空 输入必填字段值 options 为{} PASS`, () => {
        let obj = {"a" : "1658999952@qq.com"} , options = {};
        let result = apply.requireAndNotEmptyForStr(obj.a , options);
        expect( result ).toBe(true)
    })


    it(`字符串必填且非空 输入必填字段值 options 为{error : 'xxx'} 提示 options.error must be a Error!`, () => {
        let obj = {"a" : "1658999952@qq.com"}, options = {error : 'xxx'};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param , options)
            }
        }
        expect(test(obj.a)).toThrowError(new TypeError( `options.error must be a Error!` ))
    })



    it(`字符串必填且非空 输入必填字段值 options 为{error : Error("test")} 提示 throw 自定义的Error("test")`, () => {
        let obj = {"a" : ""}, options = {error : Error("test")};
        const test = function test(param){
            return function(){
                apply.requireAndNotEmptyForStr(param , options)
            }
        }
        expect(test(obj.a)).toThrowError(new Error( `test` ))
    })
})