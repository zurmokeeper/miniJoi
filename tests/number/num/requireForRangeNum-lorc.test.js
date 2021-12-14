'use strict';

const apply = require('../../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('数字API requireAndGtNForNum-lorc', () => {
    it(`必填数字left-open-right-close (0,100] 输入必填字段值number -1 不传options 提示 'value' must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : -1} , rangeArr = [0,100] ,  op = "left-open-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字left-open-right-close (0,100] 输入必填字段值number -1.1 不传options 提示 'value' must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : -1.1} , rangeArr = [0,100] ,  op = "left-open-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字left-open-right-close (0,100] 输入必填字段值number 0 不传options 提示 'value' must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0} , rangeArr = [0,100] ,  op = "left-open-right-close";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it("必填数字left-open-right-close (0,100] 输入必填字段值number 100 不传options PASS", () => {
        let obj = {"a" : 100} , rangeArr = [0,100] ,  op = "left-open-right-close";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填数字left-open-right-close (0,100] 输入必填字段值number 1 不传options PASS", () => {
        let obj = {"a" : 1} , rangeArr = [0,100] ,  op = "left-open-right-close";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填数字l-o-r-c (0,100] 输入必填字段值number 1 不传options PASS", () => {
        let obj = {"a" : 1} , rangeArr = [0,100] ,  op = "l-o-r-c";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })
})