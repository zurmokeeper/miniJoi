
'use strict';

const safe = require('safe-regex')
const joiSchema = require('./schema.js');
const {isUndefined , isObject ,getMsgTip , isEmpty} = require('./util.js');

/**
 * stack 默认是false 默认不输入error里面的stack 这里改为输出
 */
function validate(schema , param, options ){
    const { error, value } = schema.validate(param , {errors : { stack : true} , convert : false});
    if(error){
        let message = `${error.message}, ${getMsgTip(param)}` ;
        error.details[0].message = message;
        error.message = message;
        if(options && options['error']){     
            if(options.hasOwnProperty('clear') && !options['clear']){
            }else{
                console.error( error );
            } 
            throw options['error'];
        }
        throw error;
    }else{
        return true;
    }
}


/**
 * @method requireAndNotEmptyForStr
 * @param {string} param -- 要检验的参数值
 * @description The string is mandatory and not empty 字符串必填且非空
 */
exports.requireAndNotEmptyForStr = function requireAndNotEmptyForStr(...args) {
    let [param, options] = args;
    checkCommon(options)
    return validate(joiSchema.requireAndNotEmptyForStrSchema(param) , param, options);
}

/**
 * @method requireAndIsEmptyForStr
 * @param {string} param -- 要检验的参数值
 * @description The string must be empty 字符串必填可以为空
 */
exports.requireAndIsEmptyForStr = function requireAndIsEmptyForStr(...args) {
    let [param, options] = args;
    checkCommon(options)
    return validate(joiSchema.requireAndIsEmptyForStrSchema() , param, options);
}



/**
 * @param {object} options
 */
function checkCommon(options){
    if(isEmpty(options)) return;
    if(!isObject(options)) throw new TypeError("options must be a object!");
    if(Object.keys(options).length == 0 ) return;
    if(options.hasOwnProperty('error') ){
        // if( isEmpty(options.error) ) throw new Error("options.error cannot be empty!");
        if( !(options.error instanceof Error) ) throw new TypeError("options.error must be a Error!");
    }
}


/**
 * @method requirePhone
 * @param {string} param -- 要检验的参数值
 * @description 必填且合法电话号码 
 */
exports.requirePhone = function requirePhone(...args) {
    let [param , options] = args;
    checkCommon(options)
    return validate(joiSchema.requirePhoneSchema(options) , param, options );
}

/**
 * @method requireForNum
 * @param {string} param -- 要检验的参数值
 * @description 必填数字 
 */
exports.requireForNum = function requireForNum(...args) {
    let [param , options] = args;
    checkCommon(options)
    return validate(joiSchema.requireForNumSchema(param , options ) , param, options );
}


/**
 * @method requireEmail
 * @param {string} param -- 要检验的参数值
 * @description 必填且合法邮箱 
 */
exports.requireEmail = function requireEmail(...args) {
    let [param , options] = args;
    checkCommon(options)
    return validate(joiSchema.requireEmailSchema(options) , param, options);
}


/**
 * @method requireID
 * @param {string} param -- 要检验的参数值
 * @description 必填且合法身份证 
 */
exports.requireID = function requireID(...args) {
    let [param , options] = args;
    checkCommon(options)
    return validate(joiSchema.requireIDSchema(options) , param, options);
}


/**
 * @method requireIP
 * @param {string} param -- 要检验的参数值
 * @description 必填且合法IP 
 */
exports.requireIP = function requireIP(...args) {
    let [param , options] = args;
    checkCommon(options)
    return validate(joiSchema.requireIPSchema(options) , param, options);
}


/**
 * @method requireUrl
 * @param {string} param -- 要检验的参数值
 * @description 必填且合法URL 
 */
exports.requireUrl = function requireUrl(...args) {
    let [param , options] = args;
    checkCommon(options)
    return validate(joiSchema.requireUrlSchema(options) , param, options);
}


/**
 * @method requireAndEnumForStr
 * @param {string} param -- 要检验的参数值
 * @param {string[]} enumArr -- 枚举值
 * @description 必填枚举字符串 
 */
exports.requireAndEnumForStr = function requireAndEnumForStr(...args) {
    let [param , enumArr ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.requireAndEnumForStrSchema(enumArr , options) , param, options);
}


/**
 * @method length
 * @param {string} param -- 要检验的参数值
 * @param {integer} limit -- 长度
 * @description 必填字符串特定长度 
 */
 exports.length = function length(...args) {
    let [param , limit ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.lengthSchema(param , limit , options) , param, options);
}

/**
 * @method max
 * @param {string} param -- 要检验的参数值
 * @param {integer[]} limit -- 长度
 * @description 必填字符串最大长度 
 */
exports.max = function max(...args) {
    let [param , limit ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.maxSchema(param , limit , options) , param, options);
}


/**
 * @method min
 * @time 2021-11-03
 * @param {string} param -- 要检验的参数值
 * @param {integer[]} limit -- 长度
 * @description 必填字符串最小长度 
 */
exports.min = function min(...args) {
    let [param , limit ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.minSchema(param , limit , options) , param, options);
}


/**
 * @method name
 * @param {string} param -- 要检验的参数值
 * @description 必填且合法中文姓名 
 */
exports.name = function name(...args) {
    let [param  ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.nameSchema(param , options) , param, options);
}


/**
 * @method requireAndNotEmptyForArr
 * @param {array} param -- 要检验的参数值
 * @description 必填数组且非空 
 */
exports.requireAndNotEmptyForArr = function requireAndNotEmptyForArr(...args) {
    let [param  ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.requireAndNotEmptyForArrSchema(param , options) , param, options);
}


/**
 * @method requireAndIsEmptyForArr
 * @param {array} param -- 要检验的参数值
 * @description 必填数组可以为空 
 */
exports.requireAndIsEmptyForArr = function requireAndIsEmptyForArr(...args) {
    let [param  ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.requireAndIsEmptyForArrSchema(param , options) , param, options);
}


/**
 * @method requireAndNotEmptyForObj
 * @param {object} param -- 要检验的参数值
 * @description 必填对象且非空 
 */
exports.requireAndNotEmptyForObj = function requireAndNotEmptyForObj(...args) {
    let [param  ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.requireAndNotEmptyForObjSchema(param , options) , param, options);
}


/**
 * @method requireAndIsEmptyForObj
 * @param {object} param -- 要检验的参数值
 * @description 必填对象可以为空 
 */
exports.requireAndIsEmptyForObj = function requireAndIsEmptyForObj(...args) {
    let [param  ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.requireAndIsEmptyForObjSchema(param , options) , param, options);
}


/**
 * @method requireAndEnumForNum
 * @param {number} param -- 要检验的参数值
 * @param {number[]} enumArr -- 枚举值
 * @description 必填枚举数字 
 */
exports.requireAndEnumForNum = function requireAndEnumForNum(...args) {
    let [param , enumArr ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.requireAndEnumForNumSchema(enumArr , options) , param, options);
}


/**
 * @method requireForRangeNum
 * @param {number} param -- 要检验的参数值
 * @param {string} op 
 * @param {number || number[]} otherValue -- 限定的大小
 * @description 必填且 Y>P>X 任意数 
 */
exports.requireForRangeNum = function requireForRangeNum(...args) {
    let [param , op , otherValue , options] = args;
    checkCommon(options)
    return validate(joiSchema.requireForRangeSchema(param , op , otherValue , options) , param, options );
}


/**
 * @method requireForRangeInt
 * @param {integer} param -- 要检验的参数值
 * @param {string} op 
 * @param {integer || integer[]} otherValue -- 限定的大小
 * @description 必填且 Y>P>X 整数 
 */
exports.requireForRangeInt = function requireForRangeInt(...args) {
    let [param , op , otherValue , options] = args;
    checkCommon(options)
    return validate(joiSchema.requireForRangeSchema(param , op , otherValue , options, 'integer') , param, options);
}


/**
 * @method requireAndPrecision
 * @param {number} param -- 要检验的参数值
 * @param {integer} limit -- 小数位位数
 * @description 必填最多N位小数 
 */
exports.requireAndPrecision = function requireAndPrecision(...args) {
    let [param , limit , options] = args;
    checkCommon(options)
    return validate(joiSchema.requireAndPrecisionSchema(param , limit , options) , param, options);
}

/**
 * @method requireForInt
 * @param {integer} param -- 要检验的参数值
 * @description 必填整数 
 */
exports.requireForInt = function requireForInt(...args) {
    let [param ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.requireForIntSchema(options) , param, options);
}


/**
 * @method requireForBool
 * @param {boolean} param -- 要检验的参数值
 * @description 必填布尔 
 */
exports.requireForBool = function requireForBool(...args) {
    let [param ,  options] = args;
    checkCommon(options)
    return validate(joiSchema.requireForBoolSchema(options) , param, options);
}


