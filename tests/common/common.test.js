
'use strict';

const apply = require('../../apply.js');
const Joi = require('joi');
const ValidationError = Joi.ValidationError;

describe('common test', () => {


    it(`必填且合法邮箱 输入必填字段值为不合法邮箱 options 为string "xxx" 提示 options must be a object!`, () => {
        let obj = {"a" : "165sfsdfsdf8999952@qq.1232com"}, options = 'xxx';
        const test = function test(param){
            return function(){
                apply.requireEmail(param , options)
            }
        }
        expect(test(obj.a)).toThrowError(new Error( `options must be a object!` ))
    })


    it(`必填且合法邮箱 输入必填字段值为不合法邮箱 options 为{error : 'xxx'} 提示 options.error must be a Error!`, () => {
        let obj = {"a" : "165sfsdfsdf8999952@qq.1232com"}, options = {error : 'xxx'};
        const test = function test(param){
            return function(){
                apply.requireEmail(param , options)
            }
        }
        expect(test(obj.a)).toThrowError(new Error( `options.error must be a Error!` ))
    })

})


