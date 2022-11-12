/**
 * 比较两个数组中的元素是否相同（不考虑顺序）。
 * @param {any[]} a 第一个数组。
 * @param {any[]} b 第二个数组。
 * @returns {Boolean} 两个数组是否相同。
 */
export const compareArrays = <T, _>(a: T[], b: T[]): boolean => JSON.stringify([...(new Set(a))].sort()) === JSON.stringify([...(new Set(b))].sort());