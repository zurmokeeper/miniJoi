
'use strict';

const apply = require('../../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('Number API requireForRangeInt-lt', () => {

    it(`必填整数lt <100 输入必填字段 未传 op 提示 op is not passed!`, () => {
        let obj = {"a" : "xxx"};
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param)
            }
        }
        expect(test(obj.b)).toThrowError(new ValidationError( `op is not passed!` ))
    })


    it(`必填整数lt <100 输入必填字段  op = 0 提示 op 必须是这些值 gt,gte,lt,lte,left-close-right-close,left-close-right-open,left-open-right-open,left-open-right-close,l-c-r-c,l-c-r-o,l-o-r-o,l-o-r-c`, () => {
        let obj = {"a" : "xxx"} , op = 0;
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op)
            }
        }
        expect(test(obj.b)).toThrowError(new ValidationError( `op 必须是这些值 gt,gte,lt,lte,left-close-right-close,left-close-right-open,left-open-right-open,left-open-right-close,l-c-r-c,l-c-r-o,l-o-r-o,l-o-r-c` ))
    })


    it(`必填整数lt <100 输入必填字段 op = 'lt' 未传 limit 提示 limit is not passed!`, () => {
        let obj = {"a" : "xxx"},  op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op)
            }
        }
        expect(test(obj.b)).toThrowError(new ValidationError( `limit is not passed!` ))
    })


    it(`必填整数lt <100 输入必填字段 op = 'lt' 未传 limit = null 提示 limit is not passed!`, () => {
        let obj = {"a" : "xxx"},  op = 'lt' , limit = null;
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.b)).toThrowError(new ValidationError( `limit is not passed!` ))
    })


    it(`必填整数lt <100 输入必填字段 提示 "value" is required ,But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : "xxx"}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param, op , limit)
            }
        }
        expect(test(obj.b)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <0 输入必填字段值number 50 op = 'lt' limit = 0 不传options 提示 'value' must be less than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 50} , limit = 0 , op = 'lt';        
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be less than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })



    it(`必填整数lt <100 输入必填字段undefined 提示 "value" is required ,But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : undefined}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" is required, But the type of the argument passed in is [Undefined], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为空'' 提示 'value' must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('')}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new String('') 提示 'value' must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('')}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new String('test') 提示 'value' must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new String('test')}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [String(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值number 100.1 不传options 提示 'value' must be an integer, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 100.1} , limit = 100 , op = 'lt';        
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be an integer, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值number 100 不传options 提示 'value' must be less than 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 100} , limit = 100 , op = 'lt';        
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be less than 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值number 99.9 不传options 提示 'value' must be an integer, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 99.9} , limit = 100 , op = 'lt';        
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be an integer, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段number 0 op = 'lt' limit = 100 不传options PASS`, () => {
        let obj = {"a" : 0} , limit = 100 , op = 'lt';
        let result = apply.requireForRangeInt(obj.a , op , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填整数lt <100 输入必填字段number 1 op = 'lt' limit = 100 不传options PASS`, () => {
        let obj = {"a" : 1} , limit = 100 , op = 'lt';
        let result = apply.requireForRangeInt(obj.a , op , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填整数lt <100 输入必填字段值为new Number(1) 不传options 提示 'value' must be a number, But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Number(1)}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Number(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段Number(1) op = 'lt' limit = 100 不传options PASS`, () => {
        let obj = {"a" : Number(1)} , limit = 100 , op = 'lt';
        let result = apply.requireForRangeInt(obj.a , op , limit);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填整数lt <100 输入必填字段值为binary number 不传options 提示 'value' must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0b100000000000000000000000000000000000000000000000000011}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为hex number 不传options 提示 'value' must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0x20000000000003}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为octal number 不传options 提示 'value' must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0o400000000000000003}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a safe number, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为NaN 不传options 提示 'value' must be a number, But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Number('abc')}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param, op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Number(isNaN)], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为object 不传options 提示 'value' must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : {}}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new Object() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Object()}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param, op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为array 不传options 提示 'value' must be a number, But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : []}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param, op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new Array() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Array], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Array()}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Array], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为boolean 不传options 提示 'value' must be a number, But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : true}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Boolean], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new Boolean() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Boolean()}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Boolean(object)], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new Date() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Date], Please check the value in the "_original" field.`, () => {
       let obj = {"a" : new Date()}, limit = 100 , op = 'lt'; 
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Date], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为function 不传options 提示 'value' must be a number, But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : function name(params) {}}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new Function() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Function], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Function()}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Function], Please check the value in the "_original" field.` ))
    })

    
    it(`必填整数lt <100 输入必填字段值为symbol 不传options 提示 'value' must be a number, But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Symbol("test")}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Symbol], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为buffer 不传options 提示 'value' must be a number, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Buffer.from('test')}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })

    it(`必填整数lt <100 输入必填字段值为new Buffer() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new Buffer('test')}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Buffer], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为null 不传options 提示 'value' must be a number, But the type of the argument passed in is [Null], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : null}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Null], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为BigInt 不传options 提示 'value' must be a number, But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 10n}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [BigInt], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为RegExp 不传options 提示 'value' must be a number, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : /^1[3456789]\d{9}$/}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new RegExp() 不传options 提示 'value' must be a number, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.`, () => {
        let obj = {"a" :  new RegExp(/^1[3456789]\d{9}$/)}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [RegExp], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为Error 不传options 提示 'value' must be a number, But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : Error('test')}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new Error() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Error], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Error('test')}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Error], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new Map() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Map], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Map()}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Map], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new WeakMap() 不传options 提示 'value' must be a number, But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new  WeakMap()}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [WeakMap], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new Set() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Set], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Set()}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Set], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new WeakSet() 不传options 提示 'value' must be a number, But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new WeakSet()}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [WeakSet], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为new Proxy() 不传options 提示 'value' must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : new Proxy({} , {})}, limit = 100 , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be a number, But the type of the argument passed in is [Object], Please check the value in the "_original" field.` ))
    })


    it(`必填整数lt <100 输入必填字段值为number 100 limit 为string "test" 不传options 提示 limit must be a number or reference`, () => {
        let obj = {"a" : 100}, limit = "test" , op = 'lt';
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(param , op , limit)
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a number or reference` ))
    })
})