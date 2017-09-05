function blendToLight (blend) {
  switch (blend) {
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
      return blend
  }
}

export const purple = (blend = 'normal') =>
  `hsl(262, 100%, ${blendToLight(blend)})`

export const blue = (blend = 'normal') =>
  `hsl(220, 70%, ${blendToLight(blend)})`

export const green = (blend = 'normal') =>
  `hsl(19, 100%, ${blendToLight(blend)})`
