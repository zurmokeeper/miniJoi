'use strict';

/**
 * @description 
 */
const isUndefined = exports.isUndefined = function isUndefined(param) {
    if( Object.prototype.toString.call(param) == '[object Undefined]') return true;
    return false
}


/**
 * @description 
 */
const isNull = exports.isNull = function isNull(param) {
    if( Object.prototype.toString.call(param) == '[object Null]') return true;
    return false
}


/**
 * @description 
 */
const isEmpty = exports.isEmpty = function isEmpty(param) {
    if(isUndefined(param)) return true;
    if(isNull(param)) return true;
    return false;
}


/**
 * @description 
 */
const isObject = exports.isObject = function isObject(param) {
    if( Object.prototype.toString.call(param) == '[object Object]') return true;
    return false
}


/**
 * @description 
 */
const isArray = exports.isArray = function isArray(param) {
    if( Object.prototype.toString.call(param) == '[object Array]') return true;
    return false
}


/**
 * @description 
 */
const isComparableNumber = exports.isComparableNumber = function isComparableNumber(param) {
    if( Object.prototype.toString.call(param) == '[object Number]'){
        if(isNaN(param)){
            return false;
        }else{
            if((typeof param) == 'object'){
                return false;
            }else{
                return true;
            }
        }
    }
    return false;
}


/**
 * @description 获取对应的类型
 */
const getType = exports.getType = function getType(param) {

    let type = Object.prototype.toString.call(param);
    switch (type) {
        case "[object String]":
            if((typeof param) == 'object'){
                type = "String(object)";
            }else{
                type = "String";
            }
            break;
        case "[object Number]":
            if(isNaN(param)){
                type = "Number(isNaN)";
            }else{
                if((typeof param) == 'object'){
                    type = "Number(object)";
                }else{
                    type = "Number";
                }
            }
            break;
        case "[object Array]":
            type = "Array";
            break;
        case "[object Object]":
            type = "Object";
            break;
        case "[object Boolean]":
            if((typeof param) == 'object'){
                type = "Boolean(object)";
            }else{
                type = "Boolean";
            }        
            break;
        case "[object Date]":
            type = "Date";
            break;
        case "[object Function]":
            type = "Function";
            break;
        case "[object Symbol]":
            type = "Symbol";
            break;
        case "[object RegExp]":
            type = "RegExp";
            break;
        case "[object Uint8Array]":
            type = "Buffer";
            break;
        case "[object BigInt]":
            type = "BigInt";
            break;
        case "[object Error]":
            type = "Error";
            break;
        case "[object Null]":
            type = "Null";
            break;
        case "[object Undefined]":
            type = "Undefined";
            break;
        case "[object WeakMap]":
            type = "WeakMap";
            break;
        case "[object Map]":
            type = "Map";
            break;
        case "[object WeakSet]":
            type = "WeakSet";
            break;
        case "[object Set]":
            type = "Set";
            break;
    }
    return type;
}


/**
 * @description 获取提示信息 
 */
const getMsgTip = exports.getMsgTip = function getMsgTip(param) {
    return `But the type of the argument passed in is [${getType(param)}], Please check the value in the "_original" field.`;
}
