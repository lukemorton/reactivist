function lightnessToPercent(lightness) {
  switch (lightness) {
    case 'black':
      return '10%'
    case 'dark':
      return '30%'
    case 'normal':
      return '50%'
    case 'light':
      return '70%'
    case 'white':
      return '95%'
    default:
      return lightness
  }
}

export const purple = (lightness = 'normal') =>
  `hsl(262, 52%, ${lightnessToPercent(lightness)})`

export const blue = (lightness = 'normal') =>
  `hsl(220, 52%, ${lightnessToPercent(lightness)})`
