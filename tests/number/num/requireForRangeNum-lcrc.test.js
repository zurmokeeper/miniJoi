'use strict';

const apply = require('../../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('数字API requireAndGtNForNum-lcrc', () => {
    it(`必填数字left-close-right-close [0,100] 输入必填字段值number -1 不传options 提示 'value' must be greater than or equal to 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : -1} , rangeArr = [0,100] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be greater than or equal to 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number -1.1 不传options 提示 'value' must be greater than or equal to 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : -1.1} , rangeArr = [0,100] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be greater than or equal to 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it("必填数字left-close-right-close [0,100] 输入必填字段值number 0 不传options PASS", () => {
        let obj = {"a" : 0} , rangeArr = [0,100] ,  op = "left-close-right-close";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填数字left-close-right-close [0,100] 输入必填字段值number 1 不传options PASS", () => {
        let obj = {"a" : 1} , rangeArr = [0,100] ,  op = "left-close-right-close";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填数字left-close-right-close [0,100] 输入必填字段值number 100 不传options PASS", () => {
        let obj = {"a" : 100} , rangeArr = [0,100] ,  op = "left-close-right-close";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填数字l-c-r-c [0,100] 输入必填字段值number 100 不传options PASS", () => {
        let obj = {"a" : 100} , rangeArr = [0,100] ,  op = "l-c-r-c";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 不传options 提示 'value' must be less than or equal to 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 100.1} , rangeArr = [0,100] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be less than or equal to 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr不是数组 不传options 提示 limit must be an array of length 2!`, () => {
        let obj = {"a" : 100.1} , rangeArr = 0 ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be an array of length 2!` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为["str" , 0] 不传options 提示 limit must be a number or reference`, () => {
        let obj = {"a" : 100.1} , rangeArr = ["str" , 0] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a number or reference` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为[0 , "str"] 不传options 提示 limit must be a number or reference`, () => {
        let obj = {"a" : 100.1} , rangeArr = [0 , "str"] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a number or reference` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为[Number('abc') , 0] 不传options 提示 limit must be a number or reference`, () => {
        let obj = {"a" : 100.1} , rangeArr = [Number('abc') , 0] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a number or reference` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为[Number('abc') , new Number(1)] 不传options 提示 limit must be a number or reference`, () => {
        let obj = {"a" : 100.1} , rangeArr = [Number('abc') , new Number(1)] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a number or reference` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为[Number('abc') , Number('abc')] 不传options 提示 limit must be a number or reference`, () => {
        let obj = {"a" : 100.1} , rangeArr = [Number('abc') , Number('abc')] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a number or reference` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为[new Number(1) , Number("abc")] 不传options 提示 limit must be a number or reference`, () => {
        let obj = {"a" : 100.1} , rangeArr = [new Number(1) , Number("abc")] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a number or reference` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为[new Number(1) , 1] 不传options 提示 limit must be a number or reference`, () => {
        let obj = {"a" : 100.1} , rangeArr = [new Number(1) , 1] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a number or reference` ))
    })



    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为[1 , Number("abc")] 不传options 提示 limit must be a number or reference`, () => {
        let obj = {"a" : 100.1} , rangeArr = [1 , Number("abc")] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `limit must be a number or reference` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为[1 , 1] 不传options 提示 The second value of the limit array must be greater than the first value!`, () => {
        let obj = {"a" : 100.1} , rangeArr = [1 , 1] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `The second value of the limit array must be greater than the first value!` ))
    })


    it(`必填数字left-close-right-close [0,100] 输入必填字段值number 100.1 rangeArr为[1 , 2] 不传options {error : Error("test")} 提示 The second value of the limit array must be greater than the first value!`, () => {
        let obj = {"a" : 100.1} , rangeArr = [1 , 2] ,  op = "left-close-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr , {error : Error("test")});
            }
        }
        expect(test(obj.a)).toThrowError(new Error( `test` ))
    })

})