interface CutLast {
  (str: string): string
}

export const cutLast: CutLast = function (str: string) {
  const l = str.length
  if (l <= 1) return ''
  return str.slice(0, l - 1)
}
