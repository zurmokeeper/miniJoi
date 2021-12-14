'use strict';

const apply = require('../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('Number API requireAndEnumForNum', () => {

    it(`必填数字枚举 输入非必填字段 不传options  提示 "value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field. `, () => {
        let obj = {"a" : "xxx"} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.b)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段undefined 提示 "value" is required ,But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : undefined} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为空'' 提示 "value" must be one of [-123, 123, 0], But the type of the argument passed in is [String], Please check the value in the "_original" field. `, () => {
        let obj = {"a" : ""} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [String], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new String('') 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('')} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new String('test') 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('test')} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })


    it("必填数字枚举 输入必填字段值不为空 为枚举值 123 PASS", () => {
        let obj = {"a" : 123} , enumArr = [-123, 123, 0];
        let result = apply.requireAndEnumForNum(obj.a , enumArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填数字枚举 输入必填字段值不为空 为枚举值 -123 PASS", () => {
        let obj = {"a" : -123} , enumArr = [-123, 123, 0];
        let result = apply.requireAndEnumForNum(obj.a , enumArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填数字枚举 输入必填字段值不为空 为枚举值 0 PASS", () => {
        let obj = {"a" : 0} , enumArr = [-123, 123, 0];
        let result = apply.requireAndEnumForNum(obj.a , enumArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填数字枚举 输入必填字段值不为空 为非枚举值 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 124} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值不为空 为非枚举值 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : -124} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })



    it(`必填数字枚举 输入必填字段值不为空 为非枚举值 string 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [String], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : "123"} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [String], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Number() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Number(1)} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为binary number 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0b100000000000000000000000000000000000000000000000000011} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为hex number 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0x20000000000003} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为octal number 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0o400000000000000003} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为NaN 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Number('abc')} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为object 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : {}} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Object() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Object()} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为array 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : []} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Array() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Array()} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为boolean 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : true} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Boolean() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Boolean()} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Date() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Date], Please check the value in the "_original" field.`, () => {
       let obj = {"a" : new Date()} , enumArr = [-123, 123, 0]; 
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Date], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为function 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : function name(params) {}} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Function() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Function()} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })

    
    it(`必填数字枚举 输入必填字段值为symbol 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Symbol("test")} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为buffer 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Buffer.from('test')} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })

    it(`必填数字枚举 输入必填字段值为new Buffer() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new Buffer('test')} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为null 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Null], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : null} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Null], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为BigInt 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 10n} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为RegExp 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : /^1[3456789]\d{9}$/} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new RegExp() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new RegExp(/^1[3456789]\d{9}$/)} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为Error 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Error('test')} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Error() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Error('test')} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Map() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Map], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Map()} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Map], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new WeakMap() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new  WeakMap()} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Set() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Set], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Set()} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Set], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new WeakSet() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new WeakSet()} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.` ))
    })


    it(`必填数字枚举 输入必填字段值为new Proxy() 不传options 提示 'value' must be one of [-123, 123, 0], But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Proxy({} , {})} , enumArr = [-123, 123, 0];
        const test = function test(param){
            return function(){
                apply.requireAndEnumForNum(param , enumArr)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be one of [-123, 123, 0], But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })

})