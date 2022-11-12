/**
 * 将传入的参数转换为一个数组。
 * @param {any} value 一个任意类型的数据。
 * @returns {Array} 只有一个元素的数组，那个元素就是传入的参数。
 */
export const convertToArray = <T, _>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value]);