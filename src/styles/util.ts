export const getSliderItemSize = (perView: number, spacing: number) => {
  return `calc(${100 / perView}% - ${((perView - 1) * spacing) / perView}px)`
}
