interface ReverseString {
  (str: string): string
}

export const reverseString: ReverseString = function (str: string) {
  return str.split('').reduceRight((t, v) => t + v, '')
}
