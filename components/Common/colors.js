function lightnessToPercent(lightness) {
  switch (lightness) {
    case 'black':
      return '5%'
    case 'dark':
      return '30%'
    case 'normal':
      return '47%'
    case 'white':
      return '96%'
    default:
      return lightness
  }
}

export const purple = (lightness = 'normal') =>
  `hsl(262, 52%, ${lightnessToPercent(lightness)})`
