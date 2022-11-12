/**
 * 判断数组是否为空。
 * @param {any[]} arr 一个数组。
 * @returns {Boolean} 数组是否为空。
 */
export const isEmpty = <T, _>(arr: T[]): boolean => Array.isArray(arr) && !arr.length;