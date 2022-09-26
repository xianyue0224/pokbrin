import { randomInt } from './randomInt'

interface Upset {
  (v: string | any[]): string | any[]
}

export const upset: Upset = v => {
  if (v.length <= 1) return v
  let arr = typeof v === 'string' ? v.split('') : v
  let l = arr.length
  for (let i = 0; i < l; i++) {
    let randomIdx = randomInt(l)
    let temp = arr[i]
    arr[i] = arr[randomIdx]
    arr[randomIdx] = temp
  }
  return typeof v === 'string' ? arr.join('') : arr
}
