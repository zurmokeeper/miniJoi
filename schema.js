
'use strict';

const Joi = require('Joi')
const {object, string , array ,boolean , date ,number } = Joi.types();
const { getMsgTip  , getType, isEmpty , isArray , isComparableNumber} = require('./util.js');
const safe = require('safe-regex')

/**
 * 下面的正则表达式都是参考 anyrule 的 
 * @https://github.com/any86/any-rule
 * @https://any86.github.io/any-rule/
 */

/**
 * @description strictPhoneReg  手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
 * 例如: 008618311006933, +8617888829981, 19119255642
 */
const strictPhoneReg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;

/**
 * @description loosePhoneReg  手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * 例如: 008618311006933, +8617888829981, 19119255642
 */
const loosePhoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
/**
 * @description phoneReg  手机号(mobile phone)
 * 例如: 19119255642
 */
const phoneReg = /^1[3456789]\d{9}$/;

/**
 * @description firstIdReg  身份证号(1代,15位数字) 例如: 123456991010193
 */
const firstIdReg = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/;

/**
 * @description secondIdReg  身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X 例如: 12345619991205131x
 */
const secondIdReg = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;

/**
 * @description idReg  身份证号, 支持1/2代(15位/18位数字) 例如: 12345619991205131x
 */
const idReg = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;


/**
 * @method requireAndNotEmptyForStrSchema
 * @description The string is mandatory and not empty 字符串必填且非空 
 * @returns {object}
 */
exports.requireAndNotEmptyForStrSchema = function requireAndNotEmptyForStrSchema(...args) {
    return string.trim().required();
}

/**
 * @method requireAndIsEmptyForStrSchema
 * @description The string must be empty 字符串必填可以为空
 * @returns {object}
 */
exports.requireAndIsEmptyForStrSchema = function requireAndIsEmptyForStrSchema(...args) {
    return string.trim().required().allow('');
}


/**
 * @method requireAndEnumForStrSchema
 * @description 必填字符串枚举
 * @returns {object}
 */
exports.requireAndEnumForStrSchema = function requireAndEnumForStrSchema(...args) {
    let [enumArr ,  options] = args;
    return string.trim().required().valid(...enumArr);
}


/**
 * @method lengthSchema
 * @description 特定字符串长度
 * @returns {object}
 */
exports.lengthSchema = function lengthSchema(...args) {
    let [param , limit , options] = args;
    if(limit !== 0 && !limit) throw Error(`limit is not passed!`);
    return string.trim().required().length(limit);
}


/**
 * @method maxSchema
 * @description length <= max
 * @returns {object}
 */
exports.maxSchema = function maxSchema(...args) {
    let [param , limit , options] = args;
    if(limit !== 0 && !limit) throw Error(`limit is not passed!`);
    return string.trim().required().max(limit);
}


/**
 * @method minSchema
 * @description length >= max
 * @returns {object}
 */
exports.minSchema = function minSchema(...args) {
    let [param , limit , options] = args;
    if(limit !== 0 && !limit) throw Error(`limit is not passed!`);
    return string.trim().required().min(limit);
}



/**
 * @method requireForNumSchema
 * @description 必填数字
 * @returns {object}
 */
exports.requireForNumSchema = function requireForNumSchema(...args) {

    let [param , options] = args;
    return number.required();
}


/**
 * @method requireAndEnumForNumSchema
 * @description 必填数字枚举
 * @returns {object}
 */
exports.requireAndEnumForNumSchema = function requireAndEnumForNumSchema(...args) {
    let [enumArr ,  options] = args;
    return number.required().valid(...enumArr);
}



/**
 * @method requireForRangeSchema
 * @description 必填且 整数 > X  
 * @returns {object}
 */
exports.requireForRangeSchema = function requireForRangeSchema(...args) {

    let [param , op  , limit  , options , type] = args;
    const opOneList = ["gt","gte","lt","lte"];

    const opTwoList = ["left-close-right-close","left-close-right-open",
    "left-open-right-open","left-open-right-close","l-c-r-c","l-c-r-o","l-o-r-o","l-o-r-c"];

    const opList = opOneList.concat(opTwoList);
    if(isEmpty(op)) throw new Error("op is not passed!");
    if(!opList.includes(op)) throw new Error(`op 必须是这些值 ${opList.join()}`);

    let start , end , schema = number.required();
    if(opOneList.includes(op)){
        if(isEmpty(limit)) throw new Error("limit is not passed!");
    }else{
        if(!isArray(limit) || limit.length != 2)  throw new Error("limit must be an array of length 2!");
        start = limit[0], end = limit[1];
        if( isComparableNumber(start) && isComparableNumber(end)){
            if(start >= end){
                throw new Error("The second value of the limit array must be greater than the first value!");
            }
        }
    }

    if(op == 'l-c-r-c') op = "left-close-right-close";
    if(op == 'l-c-r-o') op = "left-close-right-open";
    if(op == 'l-o-r-c') op = "left-open-right-close";
    if(op == 'l-o-r-o') op = "left-open-right-open";

    if(type == 'integer') schema = schema.integer();

    switch (op) {
        // X<P
        case "gt":
            schema = schema.greater(limit);
            break;
        // X<=P
        case "gte":
            schema = schema.min(limit);
            break;
        // P<Y
        case "lt":
            schema = schema.less(limit);
            break;
        // X<=P<=Y
        case "lte":
            schema = schema.max(limit);
            break;
        // X<P<Y
        case "left-open-right-open":
            schema = schema.greater(start).less(end);
            break;
        // X<P<=Y
        case "left-open-right-close":
            schema = schema.greater(start).max(end);
            break;
        // X<=P<Y
        case "left-close-right-open":
            schema = schema.min(start).less(end);
            break;
        // X<=P<=Y
        case "left-close-right-close":
            schema = schema.min(start).max(end);
            break;
    }
    return schema;
}



/**
 * @method requireAndPrecisionSchema
 * @description 必填N位小数
 * @returns {object}
 */
exports.requireAndPrecisionSchema = function requireAndPrecisionSchema(...args) {
    let [param  , limit,  options] = args;
    if(limit !== 0 && !limit) throw Error(`limit is not passed!`);
    return number.required().precision(limit);
}

/**
 * @method requireForIntSchema
 * @description 必填数字枚举
 * @returns {object}
 */
exports.requireForIntSchema = function requireForIntSchema(...args) {
    let [options] = args;
    return number.required().integer();
}

/**
 * @method requireForBoolSchema
 * @description 必填布尔
 * @returns {object}
 */
exports.requireForBoolSchema = function requireForBoolSchema(...args) {
    let [options] = args;
    return boolean.required();
}


/**
 * @method requireAndNotEmptyForArrSchema
 * @description 必填数组且非空
 * @returns {object}
 */
exports.requireAndNotEmptyForArrSchema = function requireAndNotEmptyForArrSchema(...args) {
    let [options] = args;
    return array.required().min(1);
}


/**
 * @method requireAndIsEmptyForArrSchema
 * @description 必填数组可以为空
 * @returns {object}
 */
exports.requireAndIsEmptyForArrSchema = function requireAndIsEmptyForArrSchema(...args) {
    let [options] = args;
    return array.required();
}


/**
 * @method requireAndNotEmptyForObjSchema
 * @description 必填对象且非空
 * @returns {object}
 */
exports.requireAndNotEmptyForObjSchema = function requireAndNotEmptyForObjSchema(...args) {
    let [options] = args;
    return object.required().min(1);
}


/**
 * @method requireAndIsEmptyForObjSchema
 * @description 必填对象可以为空
 * @returns {object}
 */
exports.requireAndIsEmptyForObjSchema = function requireAndIsEmptyForObjSchema(...args) {
    let [options] = args;
    return object.required();
}


/**
 * @returns {object}
 * @description 校验正则
 */
function checkPattern(options){
    let {pattern} = options;
    if( !(pattern instanceof RegExp) ) throw new TypeError("options.pattern must be a RegExp!");
    if( !safe(pattern) ) console.warn(`From minijoi hint: ${pattern} is an unsafe regular expression , please check carefully?` );        
    return string.trim().required().regex(pattern);
}


/**
 * @method requirePhoneSchema
 * @description 必填且合法电话号码 
 * 
 * options 可以不填，可以为{} ,但是填了options的 key 就必须填对key值，不然忽略。如果key值填对了，
 * 但是key对应的value 值不对，则报错提示。
 * options.pattern 优先级最高，设置了pattern ，则会忽略其他参数，使用用户定义的pattern
 * 
 * requirePhone(param , {'pattern' : xxxx})
 * requirePhone(param , {'mode' : 'strict' })
 * requirePhone(param )
 * @returns {object}
 */
exports.requirePhoneSchema = function requirePhoneSchema(...args) {
    let [options] = args;
    let reg = phoneReg;
    if(!options) return string.trim().required().regex(reg);
    let { pattern , mode } = options;
    if(options.hasOwnProperty('pattern') ){
        return checkPattern(options);
    }
    if(options.hasOwnProperty('mode') ){
        // if( !mode ) throw new Error("options.mode cannot be empty!");
        if( !['loose','strict'].includes(mode) ) throw new Error("Options.mode is one of 'loose' and 'strict'!");
        if(mode == 'loose') reg = loosePhoneReg;
        if(mode == 'strict') reg = strictPhoneReg;
    }
    return string.trim().required().regex(reg);
}


/**
 * @method requireEmailSchema
 * @description 必填且合法邮箱
 * @returns {object}
 */
exports.requireEmailSchema = function requireEmailSchema(...args) {
    let [options] = args;
    if(!options) return string.trim().required().email();
    if(options.hasOwnProperty('pattern') ){
        return checkPattern(options);
    }else{
        return string.trim().required().email();
    }
}


/**
 * @method requireIDSchema
 * @description 必填且合法身份证
 * default 1/2代
 * @returns {object}
 */
exports.requireIDSchema = function requireIDSchema(...args) {
    let [options] = args;
    let reg = idReg;
    if(!options) return string.trim().required().regex(reg);
    let { pattern  , generation} = options;
    if(options.hasOwnProperty('pattern') ){
        return checkPattern(options);
    }
    if(options.hasOwnProperty('generation') ){
        // if( !generation ) throw new Error("options.generation cannot be empty!");
        if( !['first','second'].includes(generation) ) throw new Error("Options.generation is one of 'first' and 'second'!");
        if(generation == 'first') reg = firstIdReg;
        if(generation == 'second') reg = secondIdReg;
    }
    return string.trim().required().regex(reg);
}

/**
 * @method requireIPSchema
 * @description 必填且合法IP
 * default ipv4/ipv6
 * @returns {object}
 */
exports.requireIPSchema = function requireIPSchema(...args) {
    let [options] = args;
    let joiVersion = ['ipv4','ipv6'];
    if(!options) return string.trim().required().ip({version : joiVersion});
    let { version  } = options;
    if(options.hasOwnProperty('version') ){
        // if( !version ) throw new Error("options.version cannot be empty!");
        if( !joiVersion.includes(version) ) throw new Error("Options.version is one of 'ipv4' and 'ipv6'!");
        joiVersion = [version];
    }
    return string.trim().required().ip({version : joiVersion});
}


/**
 * @method nameSchema
 * @description 中文姓名
 * @returns {object}
 */
exports.nameSchema = function nameSchema(...args) {
    let [param  , options] = args;
    if(!options) return string.trim().required().pattern(/^(?:[\u4e00-\u9fa5·]{2,16})$/);
    if(options.hasOwnProperty('pattern') ){
        return checkPattern(options);
    }else{
        return string.trim().required().pattern(/^(?:[\u4e00-\u9fa5·]{2,16})$/);
    }
}


/**
 * @method requireUrlSchema
 * @description 必填且合法Url
 * @returns {object}
 */
 exports.requireUrlSchema = function requireUrlSchema(...args) {
    let [options] = args;
    if(!options) return string.trim().required().uri();
    if(options.hasOwnProperty('pattern') ){
        return checkPattern(options);
    }else{
        return string.trim().required().uri();
    }
}