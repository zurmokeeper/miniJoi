'use strict';

const apply = require('../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('Number API requireAndPrecision', () => {

    it(`必填最多N位小数 输入非必填字段  不传limit 和 options 提示 limit is not passed!`, () => {
        let obj = {"a" : "xxx"};
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param)
            }
        }
        expect(test(obj.b)).toThrowError(new Error( `limit is not passed!` ))
    })

    it(`必填最多N位小数 输入非必填字段 不传options  提示 "value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field. `, () => {
        let obj = {"a" : "xxx"} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.b)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段undefined 不传options 提示 "value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : undefined} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为空'' 不传options 提示 "value" must be a number, But the type of the argument passed in is [String], Please check the value in the "_original" field. `, () => {
        let obj = {"a" : ""} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [String], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new String('') 不传options 提示 'value' must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('')} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new String('test') 不传options 提示 'value' must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('test')} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填最多N位小数 输入必填字段值为number -1 0位小数 不传options PASS`, () => {
        let obj = {"a" : -1} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填最多N位小数 输入必填字段值为number -1.1 1位小数 不传options PASS`, () => {
        let obj = {"a" : -1.1} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填最多N位小数 输入必填字段值为number 1.1 1位小数 不传options PASS`, () => {
        let obj = {"a" : 1.1} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })

    it(`必填最多N位小数 输入必填字段值为number 1.11 2位小数 不传options PASS`, () => {
        let obj = {"a" : 1.11} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填最多N位小数 输入必填字段值为number -1.11 2位小数 不传options PASS`, () => {
        let obj = {"a" : -1.11} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填最多N位小数 输入必填字段值为number 0 0位小数 不传options 提示 PASS`, () => {
        let obj = {"a" : 0} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填最多N位小数 输入必填字段值为number 1 0位小数 不传options 提示 PASS`, () => {
        let obj = {"a" : 1} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填最多N位小数 输入必填字段值为number 1.1 0位小数 不传options 提示 PASS`, () => {
        let obj = {"a" : 1.1} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填最多N位小数 输入必填字段值为number 1.111 3位小数 不传options 提示 'value' must have no more than 2 decimal places, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 1.111} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must have no more than 2 decimal places, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填最多N位小数 输入必填字段值为number MAX_SAFE_INTEGER 9007199254740991 不传options 提示 PASS`, () => {
        let obj = {"a" : Number.MAX_SAFE_INTEGER} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填最多N位小数 输入必填字段值为number MIN_SAFE_INTEGER  -9007199254740991 不传options 提示 PASS`, () => {
        let obj = {"a" : Number.MIN_SAFE_INTEGER} , limit = 2;
        let result = apply.requireAndPrecision(obj.a , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填最多N位小数 输入必填字段值为number MAX_VALUE 不传options 提示 'value' must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Number.MAX_VALUE} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填最多N位小数 输入必填字段值为number MIN_VALUE 不传options 提示 'value' must have no more than 2 decimal places, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Number.MIN_VALUE} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must have no more than 2 decimal places, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填最多N位小数 输入必填字段值为new Number() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Number(1)} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为binary number 不传options 提示 'value' must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0b100000000000000000000000000000000000000000000000000011} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为hex number 不传options 提示 'value' must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0x20000000000003} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为octal number 不传options 提示 'value' must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0o400000000000000003} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为NaN 不传options 提示 'value' must be a number, But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Number('abc')} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为object 不传options 提示 'value' must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : {}} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new Object() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Object()} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为array 不传options 提示 'value' must be a number, But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : []} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new Array() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Array()} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为boolean 不传options 提示 'value' must be a number, But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : true} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new Boolean() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Boolean()} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new Date() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Date], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Date()} , limit = 2; 
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Date], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为function 不传options 提示 'value' must be a number, But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : function name(params) {}} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new Function() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Function()} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为symbol 不传options 提示 'value' must be a number, But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Symbol("test")} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为buffer 不传options 提示 'value' must be a number, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Buffer.from('test')} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new Buffer() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new Buffer('test')} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为null 不传options 提示 'value' must be a number, But the type of the argument passed in is [Null], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : null} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Null], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为BigInt 不传options 提示 'value' must be a number, But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 10n} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为RegExp 不传options 提示 'value' must be a number, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : /^1[3456789]\d{9}$/} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new RegExp() 不传options 提示 'value' must be a number, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new RegExp(/^1[3456789]\d{9}$/)} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为Error 不传options 提示 'value' must be a number, But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Error('test')} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })

    it(`必填最多N位小数 输入必填字段值为new Error() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Error('test')} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })


    it(`必填最多N位小数 输入必填字段值为new Map() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Map], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Map()} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Map], Please check the value in the "_original" field.` ))
    })


    it(`必填最多N位小数 输入必填字段值为new WeakMap() 不传options 提示 'value' must be a number, But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new  WeakMap()} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.` ))
    })


    it(`必填最多N位小数 输入必填字段值为new Set() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Set], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Set()} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Set], Please check the value in the "_original" field.` ))
    })


    it(`必填最多N位小数 输入必填字段值为new WeakSet() 不传options 提示 'value' must be a number, But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new WeakSet()} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.` ))
    })


    it(`必填最多N位小数 输入必填字段值为new Proxy() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Proxy({} , {})} , limit = 2;
        const test = function test(param){
            return function(){
                apply.requireAndPrecision(param, limit)
            }
        }
        expect(test(obj.a , limit)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })
})