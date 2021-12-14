'use strict';

const apply = require('../../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('整数API requireForRangeInt-loro', () => {
    it(`必填整数left-open-right-open (0,100) 输入必填字段值number -1 不传options 提示 'value' must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : -1} , rangeArr = [0,100] ,  op = "left-open-right-open";
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })



    it(`必填整数left-open-right-open [0,100] 输入必填字段值number -1.1 不传options 提示 'value' must be an integer, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : -1.1} , rangeArr = [0,100] ,  op = "left-open-right-open";
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be an integer, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填整数left-open-right-open (0,100) 输入必填字段值number 0 不传options 提示 'value' must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 0} , rangeArr = [0,100] ,  op = "left-open-right-open";
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be greater than 0, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })

    
    it(`必填整数left-open-right-open (0,100) 输入必填字段值number 101 不传options 提示 'value' must be less than 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 101} , rangeArr = [0,100] ,  op = "left-open-right-open";
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be less than 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })


    it(`必填整数left-open-right-open (0,100) 输入必填字段值number 100 不传options 提示 'value' must be less than 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.`, () => {
        let obj = {"a" : 100} , rangeArr = [0,100] ,  op = "left-open-right-open";
        const test = function test(param){
            return function(){
                apply.requireForRangeInt(obj.a , op,  rangeArr);
            }
        }
        expect(test(obj.a)).toThrowError(new ValidationError( `"value" must be less than 100, But the type of the argument passed in is [Number], Please check the value in the "_original" field.` ))
    })

    it("必填整数left-open-right-open (0,100) 输入必填字段值number 99 不传options PASS", () => {
        let obj = {"a" : 99} , rangeArr = [0,100] ,  op = "left-open-right-open";
        let result = apply.requireForRangeInt(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })


    it("必填整数left-open-right-open (0,100) 输入必填字段值number 1 不传options PASS", () => {
        let obj = {"a" : 1} , rangeArr = [0,100] ,  op = "left-open-right-open";
        let result = apply.requireForRangeInt(obj.a , op,  rangeArr);
        // console.log("---------->" , error)
        expect( result ).toBe(true)
    })
})