import 'mocha'
import { assert } from 'chai'

import { castArray,capitalize } from '../src/index'

import * as pok from '../src/index'

describe('pok', () => {
  it('pok 应该是一个对象', () => {
    assert.isObject(pok)
  })

  it('应该包含 castArray 属性', () => {
      assert.property(pok, 'castArray')
  })
  it('应该包含 capitalize 属性', () => {
      assert.property(pok, 'capitalize')
  })
})

describe('都是函数', () => {
    assert.isFunction(castArray)
    assert.isFunction(capitalize)
})

describe('Array', () => {
  it('#castArray()', () => {
    const value = "abc"
    assert.equal(castArray(value).includes(value),true)
  })
})

describe('String', () => {
    it('#capitalize()', () => {
    assert.equal(capitalize("abc"), "Abc")
    assert.equal(capitalize("a"), "A")
  })
})