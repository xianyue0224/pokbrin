import 'mocha'
import { assert } from 'chai'

import { convertToArray, capitalize, isEmpty, compareArrays } from '../src/index'

import pok from "../src/index"

function contain(obj: Object, arr: string[]) {
  arr.forEach(key => {
    assert.property(obj, key)
  })
}

describe('pok', () => {
  it('pok 应该是一个对象,包含 array、string 这些属性', () => {
    assert.isObject(pok)
    contain(pok, ["array", "string"])
  })

  it("pok.array 是否包含所有数组方法", () => {
    contain(pok.array, ["convertFrom", "isEmpty", "compare"])
  })

  it("pok.string 是否包含所有字符串方法", () => {
    contain(pok.string, ["capitalize"])
  })
})

describe('Array', () => {
  it('#convertToArray() & #pok.array.convertFrom()', () => {
    const value = "abc"
    assert.equal(convertToArray(value).includes(value), true)
    const arr = [1, 2, 3]
    assert.equal(convertToArray(arr), arr)
  })
  it('#isEmpty() & #pok.array.isEmpty()', () => {
    assert.equal(isEmpty([]), true)
    assert.equal(isEmpty([1]), false)
  })
  it('#compareArrays() & #pok.array.compare()', () => {
    assert.equal(compareArrays([1, 1, 2, 3], [3, 3, 2, 1]), true)
    assert.equal(compareArrays([1, 1, 2, 3, 4], [3, 3, 2, 1]), false)
  })
})

describe('String', () => {
  it('#capitalize()', () => {
    assert.equal(capitalize("abc"), "Abc")
    assert.equal(capitalize("a"), "A")
    assert.equal(capitalize(""), "")
  })
})