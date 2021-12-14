'use strict';

const apply = require('../../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('数字API requireAndGtNForNum-lcro', () => {
    it(`必填数字left-close-right-open [0,100) 输入必填字段值number -1 不传options 提示 'value' must be greater than or equal to 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : -1} , rangeArr = [0,100] ,  op = "left-close-right-open";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be greater than or equal to 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字left-close-right-open [0,100) 输入必填字段值number -1.1 不传options 提示 'value' must be greater than or equal to 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : -1.1} , rangeArr = [0,100] ,  op = "left-close-right-open";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be greater than or equal to 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填数字left-close-right-open [0,100) 输入必填字段值number 100 不传options 提示 'value' must be less than 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 100} , rangeArr = [0,100] ,  op = "left-close-right-open";
        const test = function test(param){
            return function(){
                apply.requireForRangeNum(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be less than 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })



    it("必填数字left-close-right-open [0,100) 输入必填字段值number 0 不传options PASS", () => {
        let obj = {"a" : 0} , rangeArr = [0,100] ,  op = "left-close-right-open";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填数字left-close-right-open [0,100) 输入必填字段值number 1 不传options PASS", () => {
        let obj = {"a" : 1} , rangeArr = [0,100] ,  op = "left-close-right-open";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填数字l-c-r-o [0,100) 输入必填字段值number 1 不传options PASS", () => {
        let obj = {"a" : 1} , rangeArr = [0,100] ,  op = "l-c-r-o";
        let result = apply.requireForRangeNum(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })
})