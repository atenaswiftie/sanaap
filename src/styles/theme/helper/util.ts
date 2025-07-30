import { htmlFontSize } from "../system/typography"

export const pxToRem = (px: number, baseFontSize: number = htmlFontSize) => `${(px / baseFontSize).toFixed(3)}rem`
export const remToPx = (rem: number, baseFontSize: number = htmlFontSize) => `${(rem * baseFontSize).toFixed(0)}px`
