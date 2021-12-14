

const Joi = require('Joi')
const safe = require('safe-regex')
// const apply = require('./apply.js');

const apply = require('./index.js');


// Joi.custom()

const method = (value, helpers) => {
    console.log("xxxxx" ,value)
    console.log("xx-->" , helpers)

    if (value !== "something") {
        // return helpers.error("any.invalid");
        return helpers.message("any.invalid");
    }
    
      // Return the value unchanged
      return value;
}



// const { error, value } = Joi.object({
//     password: Joi
//         .string()
//         .custom((value, helpers) => {
//             console.log("xxxxx" ,value)
//             // console.log("xx-->" , helpers)
//             console.log("xx-->" , helpers.error())
//             console.log("original" ,helpers.original)
//             if (value.length < 8) {
//                 return helpers.message("Password must be at least 8 characters long")
//                 // return helpers.error("any.invalid");

//             } else {
//                 return true
//             }

//         })

// }).validate({
//     password: '1234'
// });


// const { error, value } = Joi
//         .string()
//         .messages({
//             'string.empty': `"a" cannot be an empty field`
//         })
//         .custom((value, helpers) => {
//             console.log("xxxxx" ,value)
//             // console.log("xx-->" , helpers)
//             console.log("xx-->" , helpers.error())
//             // console.log("original" ,helpers.original)
//             // console.log("messages" ,helpers.prefs.messages)
//             if (value.length < 8) {
//                 return helpers.message("Password must be at least 8 characters long")
//                 // return helpers.error("any.invalid");

//             } else {
//                 return true
//             }

//         }).validate("asd");
        // }).validate(new Date());

// let objnumber = {a : 2}
// apply.requireForNum(objnumber.b);        

const {object, string , array ,boolean ,date ,number } = Joi.types()

// [0,100]
// apply.requireForRangeNum(100 , 'left-close-right-close' , 0)
// apply.requireForRangeNum(100 , 'left-close-right-close' , [1 , 0])

// apply.requireForRangeNum(100 , 'left-close-right-close' , ["str" , 0])

// apply.requireForRangeNum(100 , 'left-close-right-close' , [Number('abc') , 0])
// apply.requireForRangeNum(100 , 'left-close-right-close' , [Number('abc') , new Number(1)])

// apply.requireForRangeNum(100 , 'left-close-right-close' , [new Number(1) , new Number(1)])

// apply.requireForRangeNum(100 , 'left-close-right-close' , [1 , new Number(1)])

// apply.requireForRangeNum(100 , 'left-close-right-close' , [1 , Number(2)] , {error : Error("teststrrtwre")})
// apply.requireForRangeNum(100 , 'left-close-right-close' , [1 , 2])

// apply.requireForRangeNum(Buffer.from("test") , 'l-c-r-c' , [1 , 2] ,{error : Error("teststrrtwre") , clear : false})

// apply.requireForRangeNum(Buffer.from("test") , 'left-close-right-close' , [1 , 2] ,{error : Error("teststrrtwre") , clear : false})

// const {error} = string.trim().required().validate(12, {errors : { stack : true} , convert : false})
// let obj = {"a" : ""}, options = {error : Error("test")};
let obj = {"a" : ""};

apply.requireAndNotEmptyForStr(obj.a )

// if(error){
//     console.log(error)
//     console.log('name', error.name)
//     console.log('message', error.details[0].message)
//     console.log('context', error.details[0].context)
//     console.log('_original' , error['_original'])

//     throw error;
// }else{
//     console.log("asdasd", value)
// }

