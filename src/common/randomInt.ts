interface RandomInt {
  (min: number, max?: number): number
}

export const randomInt: RandomInt = (min, max) => {
  min = Math.floor(min)
  max = max && max !== 0 ? Math.floor(max) : max
  if (!max) {
    if (min < 0) throw new Error('参数应该大于等于0')
    return Math.floor(Math.random() * min)
  } else {
    if (min < 0 || max < 0) throw new Error('参数应该大于等于0')
    if (min > max) throw new Error('第一个参数应该小于等于第二个参数')
    if (min === max) return min
    const arr: number[] = []
    for (let i = min; i < max; i++) {
      arr.push(i)
    }
    return arr[Math.floor(Math.random() * arr.length)]
  }
}
