import 'mocha'
import { assert } from 'chai'

import { cutFirst, cutLast, reverseString } from '../src/index'

import * as npmPackage from '../src/index'

describe('npmPackage', () => {
  it('应该是一个 Object', () => {
    assert.isObject(npmPackage)
  })

  it('应该包含 cutFirst 属性', () => {
    assert.property(npmPackage, 'cutFirst')
  })
  it('应该包含 cutLast 属性', () => {
    assert.property(npmPackage, 'cutLast')
  })
  it('应该包含 reverseString 属性', () => {
    assert.property(npmPackage, 'reverseString')
  })
})

describe('cutFirst Function', () => {
  it('cutFirst 应该是一个函数', () => {
    assert.isFunction(cutFirst)
  })

  it('cutFirst 函数应该把传入的字符串的第一个字符抹去', () => {
    assert.equal(cutFirst('abc'), 'bc')
  })
})

describe('cutLast Function', () => {
  it('cutLast 应该是一个函数', () => {
    assert.isFunction(cutLast)
  })

  it('cutLast 函数应该把传入的字符串的最后一个字符抹去', () => {
    const expected = 'ab'
    const actual = cutLast('abc')
    assert.equal(actual, expected)
  })
})

describe('reverseString Function', () => {
  it('reverseString 应该是一个函数', () => {
    assert.isFunction(reverseString)
  })

  it('reverseString 函数应该把传入的字符串翻转再返回', () => {
    const expected = 'cba'
    const actual = reverseString('abc')
    assert.equal(actual, expected)
  })
})
