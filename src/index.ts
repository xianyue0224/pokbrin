// export { randomInt } from './common/randomInt'
// export { upset } from './common/upset'

import { convertToArray } from "./array/convertToArray"
import { isEmpty } from "./array/isEmpty"
import { compareArrays } from "./array/compareArrays"

import { capitalize } from "./string/capitalize"

// 导出数组方法
export { convertToArray, isEmpty, compareArrays }
// 导出字符串方法
export { capitalize }

// 默认导出
export default {
    array: {
        convertFrom: convertToArray,
        isEmpty,
        compare: compareArrays
    },
    string: {
        capitalize
    }
}