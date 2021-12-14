# miniJoi

```
const miniJoi = require('miniJoi');

miniJoi.requireAndNotEmptyForStr(value , options)
options : {
    error : new Error("This is an Error")  //公有
    pattern : /^1[3456789]\d{9}$/    // email ID   URL  phone  name
    mode : 'strict'     //phone
    version : 'ipv6'    //IP
    generation : 'first'  //ID
}
```

**友好的堆栈提示，在Joi的基础上，报错的同时把要校验的参数类型也一起告诉给开发者，开发者可以清楚的看到输入的值和类型， _original 字段的值就是输入的值，如下：**

```
Error [ValidationError]: "value" is not allowed to be empty, But the type of the argument passed in is [String], Please check the value in the "_original" field.
    at Object.exports.process (D:\data\git\minijoi\node_modules\.pnpm\joi@17.4.2\node_modules\joi\lib\errors.js:184:16)
    at Object.internals.entry (D:\data\git\minijoi\node_modules\.pnpm\joi@17.4.2\node_modules\joi\lib\validator.js:150:26)
    at Object.exports.entry (D:\data\git\minijoi\node_modules\.pnpm\joi@17.4.2\node_modules\joi\lib\validator.js:27:30)
    at internals.Base.validate (D:\data\git\minijoi\node_modules\.pnpm\joi@17.4.2\node_modules\joi\lib\base.js:548:26)
    at validate (D:\data\git\minijoi\apply.js:12:37)
    at Object.requireAndNotEmptyForStr (D:\data\git\minijoi\apply.js:39:12)
    at Object.<anonymous> (D:\data\git\minijoi\test.js:101:7)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32) {
  _original: '',
  details: [
    {
      message: '"value" is not allowed to be empty, But the type of the argument passed in is [String], Please check the value in the "_original" field.',
      path: [],
      type: 'string.empty',
      context: { label: 'value', value: '' }
    }
  ]
}
```

**Node.js版本要求：**

`支持 Node.js  V10,V12, V14, V16` 



API如下：

**开发者可自定义 Error ，调用API时传 error 参数就可以了，miniJoi 会自动抛出开发者自定义 Error，默认输出上面的错误信息。**

字符串必填且非空 
```
miniJoi.requireAndNotEmptyForStr(value)
miniJoi.requireAndNotEmptyForStr(value , {error : new Error("This is an Error")})
```
字符串必填可以为空 
```
miniJoi.requireAndIsEmptyForStr(value)
miniJoi.requireAndIsEmptyForStr(value , {error : new Error("This is an Error")})
```
必填字符串枚举
```
miniJoi.requireAndEnumForStr(value , ["test"])
miniJoi.requireAndEnumForStr(value , ["test","test1"] , {error : new Error("This is an Error")})
```
必填字符串特定长度
```
miniJoi.length(value , limit)
miniJoi.length(value , limit , {error : new Error("This is an Error")})
```

必填字符串最大长度   
```
miniJoi.max(value , limit)
miniJoi.max(value , limit , {error : new Error("This is an Error")})
```
必填字符串最小长度    
```
miniJoi.min(value , limit)
miniJoi.min(value , limit , {error : new Error("This is an Error")})
```
必填字符串中文姓名    
```
miniJoi.name(value )
miniJoi.name(value , {error : new Error("This is an Error")})

miniJoi.name(value , {pattern : xxxx})

如miniJoi提供的中文姓名校验功能不符合开发者的要求，开发者可自定义传入正则表达式

```
必填字符串且合法邮箱    
```
miniJoi.requireEmail(value )
miniJoi.requireEmail(value , {error : new Error("This is an Error")})

输入pattern字段，则使用pattern

miniJoi.requireEmail(value , {
        error : new Error("This is an Error"),
        pattern : /^1[3456789]\d{9}$/
    })
    
如miniJoi提供的邮箱校验功能不符合开发者的要求，开发者可自定义传入正则表达式
    
```
必填字符串且合法电话号码   mode字段参考  [anyrule](https://github.com/any86/any-rule/tree/8414a8e1aa78e83001c006cad57e21a7d39fd691#%E6%89%8B%E6%9C%BA%E5%8F%B7mobile-phone%E4%B8%AD%E5%9B%BD%E4%B8%A5%E8%B0%A8-%E6%A0%B9%E6%8D%AE%E5%B7%A5%E4%BF%A1%E9%83%A82019%E5%B9%B4%E6%9C%80%E6%96%B0%E5%85%AC%E5%B8%83%E7%9A%84%E6%89%8B%E6%9C%BA%E5%8F%B7%E6%AE%B5)    
```
miniJoi.requirePhone(value )
miniJoi.requirePhone(value , {error : new Error("This is an Error")})

输入pattern字段，则使用pattern
mode 'strict'||'loose'
strict 表示严谨
loose 表示宽松
默认为(最宽松), 只要是1开头即可

miniJoi.requirePhone(value , {
        error : new Error("This is an Error"),
        pattern : /^1[3456789]\d{9}$/
        mode : 'strict'
    })
    
如miniJoi提供的电话号码校验功能不符合开发者的要求，开发者可自定义传入正则表达式
```
必填字符串且合法IP    
```
miniJoi.requireIP(value )
miniJoi.requireIP(value , {error : new Error("This is an Error")})

输入pattern字段，则使用pattern
version 'ipv4'||'ipv6'

ipv4 表示只校验ipv4
ipv6 表示只校验ipv6
默认同时校验ipv4和ipv6

miniJoi.requireIP(value , {
        error : new Error("This is an Error"),
        version : 'ipv6'
    })
    
如miniJoi提供的IP校验功能不符合开发者的要求，开发者可自定义传入正则表达式
```
必填字符串且合法Url  
```
miniJoi.requireUrl(value )
miniJoi.requireUrl(value , {error : new Error("This is an Error")})

输入pattern字段，则使用pattern

miniJoi.requireUrl(value , {
        error : new Error("This is an Error"),
        pattern : /^1[3456789]\d{9}$/
    })

如miniJoi提供的Url校验功能不符合开发者的要求，开发者可自定义传入正则表达式
```
必填字符串且合法身份证
```
miniJoi.requireID(value )
miniJoi.requireID(value , {error : new Error("This is an Error")})

输入pattern字段，则使用pattern
generation : "first" || "second"

first 表示只校验一代身份证
second 表示只校验二代身份证
默认同时校验一代和二代

miniJoi.requireID(value , {
        error : new Error("This is an Error"),
        pattern : /^1[3456789]\d{9}$/
        generation : "first"
    })
    
如miniJoi提供的身份证校验功能不符合开发者的要求，开发者可自定义传入正则表达式
```
必填数字
```
miniJoi.requireForNum(value)
miniJoi.requireForNum(value , {error : new Error("This is an Error")})
```
必填整数
```
miniJoi.requireForInt(value)
miniJoi.requireForInt(value , {error : new Error("This is an Error")})
```
必填数字枚举
```
miniJoi.requireAndEnumForNum(value)
miniJoi.requireAndEnumForNum(value ,[1,2], {error : new Error("This is an Error")})
```
必填数字小数位不大于 limit 位

```
miniJoi.requireAndPrecision(value)
miniJoi.requireAndPrecision(value , limit , {error : new Error("This is an Error")})

2.2 PASS
2.22 PASS
2.222 FAIL
```
必填数字范围API

```
miniJoi.requireForRangeNum(value ,op, limit )
miniJoi.requireForRangeNum(value ,op, limit , {error : new Error("This is an Error")})

op的值为 gt(>) || gte(>=) || lt(<) || lte(<=)

比如需要参数 > 0 , 则
miniJoi.requireForRangeNum(value ,"gt" , 0 )   可代表正数

参数 >= 0
miniJoi.requireForRangeNum(value ,"gte" , 0 )

参数 <= 0
miniJoi.requireForRangeNum(value ,"lte" , 0 )

参数 < 0
miniJoi.requireForRangeNum(value ,"lt" , 0 )  可代表负数


必填数字范围API
miniJoi.requireForRangeNum(value ,op, rangeArr )
miniJoi.requireForRangeNum(value ,op, rangeArr , {error : new Error("This is an Error")})

op的值为 
left-close-right-close `[0,100]`   简称l-c-r-c
left-close-right-open `[0,100)`   简称 l-c-r-o
left-open-right-open `(0,100)`     简称 l-o-r-o
left-open-right-close `(0,100]`     简称 l-o-r-c

比如需要参数 > 0 and <= 100 , 则
miniJoi.requireForRangeNum(value ,"left-open-right-close" , [0,100] )
miniJoi.requireForRangeNum(value ,"l-o-r-c" , [0,100] )

比如需要参数 >= 0 and <= 100 , 则
miniJoi.requireForRangeNum(value ,"left-close-right-close" , [0,100] )
miniJoi.requireForRangeNum(value ,"l-c-r-c" , [0,100] )

比如需要参数 > 0 and < 100 , 则
miniJoi.requireForRangeNum(value ,"left-open-right-open" , [0,100] )
miniJoi.requireForRangeNum(value ,"l-o-r-o" , [0,100] )


比如需要参数 >= 0 and < 100 , 则
miniJoi.requireForRangeNum(value ,"left-close-right-open" , [0,100] )
miniJoi.requireForRangeNum(value ,"l-c-r-o" , [0,100] )

```
必填整数范围API

```
miniJoi.requireForRangeInt(value ,op, limit )
miniJoi.requireForRangeInt(value ,op, limit , {error : new Error("This is an Error")})
op的值为 gt(>) || gte(>=) || lt(<) || lte(<=)

比如需要参数 > 0 , 则
miniJoi.requireForRangeInt(value ,"gt" , 0 )   可代表正整数


参数 >= 0
miniJoi.requireForRangeInt(value ,"gte" , 0 )

参数 <= 0
miniJoi.requireForRangeInt(value ,"lte" , 0 )

参数 < 0
miniJoi.requireForRangeInt(value ,"lt" , 0 )  可代表负整数


必填整数范围API  
miniJoi.requireForRangeInt(value ,op, rangeArr )
miniJoi.requireForRangeInt(value ,op, rangeArr , {error : new Error("This is an Error")})
```
必填布尔
```
miniJoi.requireForBool(value)
miniJoi.requireForBool(value , {error : new Error("This is an Error")})
```
数组必填且非空
```
miniJoi.requireAndNotEmptyForArr(value)
miniJoi.requireAndNotEmptyForArr(value , {error : new Error("This is an Error")})
```
数组必填可以为空
```
miniJoi.requireAndIsEmptyForArr(value)
miniJoi.requireAndIsEmptyForArr(value , {error : new Error("This is an Error")})
```
对象必填且非空
```
miniJoi.requireAndNotEmptyForObj(value)
miniJoi.requireAndNotEmptyForObj(value , {error : new Error("This is an Error")})
```
对象必填可以为空
```
miniJoi.requireAndIsEmptyForObj(value)
miniJoi.requireAndIsEmptyForObj(value , {error : new Error("This is an Error")})
```






