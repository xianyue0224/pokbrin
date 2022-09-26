interface CutFirst {
  (str: string): string
}

export const cutFirst: CutFirst = function (str: string) {
  const l = str.length
  if (l <= 1) return ''
  return str.slice(1)
}
