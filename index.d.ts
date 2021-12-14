
/**
 * @author zurmokeeper
 * github home page https://github.com/zurmokeeper/miniJoi
 */


export = miniJoi;

declare namespace miniJoi{

    interface Options {
        /**
         * Whether to output joi error messages.
         * 
         * optional
         * @default false
         */
        clear?: boolean;
        /**
         * Custom error object.
         * 
         * optional
         */
        error?: Error;
        /**
         * Custom regular expression.
         * 
         * optional
         */
        pattern?: RegExp;
        /**
         * Phone number mode.
         * 
         * optional
         */
        mode?: 'strict' | 'loose';
        /**
         * ip version.
         * 
         * optional
         */
        version?: 'ipv4' | 'ipv6';
        /**
         * ID version.
         * 
         * optional
         */
        generation?: 'first' | 'second';
    }

    type OpTypes = 
        | 'gt'
        | 'gte'
        | 'lt'
        | 'lte'
        | 'left-close-right-close'
        | 'left-close-right-open'
        | 'left-open-right-open'
        | 'left-open-right-close'
        | 'l-c-r-c'
        | 'l-c-r-o'
        | 'l-o-r-o'
        | 'l-o-r-c';

    /**
     * @description 字符串必填且非空
     */
    function requireAndNotEmptyForStr(value: string, options?: Options): boolean;

    /**
     * @description 字符串必填可以为空
     */
    function requireAndIsEmptyForStr(value: string, options?: Options): boolean;

    /**
     * @description 必填字符串枚举
     */
    function requireAndEnumForStr(value: string, enumArr:string[] , options?: Options): boolean;

    /**
     * @description 必填字符串特定长度
     */
    function length(value: string, limit:number , options?: Options): boolean;

    /**
     * @description 必填字符串最大长度 
     */
    function max(value: string, options?: Options): boolean;

    /**
     * @description 必填字符串最小长度  
     */
    function min(value: string, options?: Options): boolean;

    /**
     * @description 必填字符串中文姓名 
     */
    function name(value: string, options?: Options): boolean;

    /**
     * @description 必填字符串且合法邮箱 
     */
    function requireEmail(value: string, options?: Options): boolean;

    /**
     * @description 必填字符串且合法电话号码 
     */
    function requirePhone(value: string, options?: Options): boolean;

    /**
     * @description 必填字符串且合法IP 
     */
    function requireIP(value: string, options?: Options): boolean;

    /**
     * @description 必填字符串且合法Url 
     */
    function requireUrl(value: string, limit:number , options?: Options): boolean;

    /**
     * @description 必填字符串且合法身份证
     */
    function requireID(value: string, limit:number , options?: Options): boolean;

    /**
     * @description 必填数字
     */
    function requireForNum(value: number, options?: Options): boolean;

    /**
     * @description 整数
     */
    function requireForInt(value: number, options?: Options): boolean;

    /**
     * @description 必填数字枚举
     */
    function requireAndEnumForNum(value: number, enumArr : number[] , options?: Options): boolean;

    /**
     * @description 必填数字范围
     */
    function requireForRangeNum(value: number, op : OpTypes, limit:number | number[],  options?: Options): boolean;
    
    /**
     * @description 必填整数范围
     */
    function requireForRangeInt(value: number, op : OpTypes, limit:number | number[], options?: Options): boolean;
    
    /**
     * @description 必填数字小数位不大于 limit 位
     */
    function requireAndPrecision(value: number, limit : number , options?: Options): boolean;

    /**
     * @description 数组必填可以为空
     */
    function requireAndIsEmptyForArr(value: array, options?: Options): boolean;

    /**
     * @description 数组必填且非空
     */
    function requireAndNotEmptyForArr(value: array, options?: Options): boolean;

    /**
     * @description 对象必填可以为空
     */
    function requireAndIsEmptyForObj(value: Options, options?: Options): boolean;

    /**
     * @description 对象必填且非空
     */
    function requireAndNotEmptyForObj(value: Options, options?: Options): boolean;

    /**
     * @description 必填布尔
     */
    function requireForBool(value: boolean, options?: Options): boolean;

}