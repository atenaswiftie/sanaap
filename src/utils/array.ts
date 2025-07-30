export const range = (n: number) => Array.from({ length: n }, (_, i) => i);

export function findLastIndex(arr: any[], callback: any) {
  const reversedIndex = arr.slice().reverse().findIndex(callback);
  if (reversedIndex !== -1) {
    return arr.length - 1 - reversedIndex;
  }
  return -1;
}