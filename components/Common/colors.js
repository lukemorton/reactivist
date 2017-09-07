function blendToLight (blend) {
  switch (blend) {
    case 'black':
      return '10%'
    case 'dark':
      return '25%'
    case 'normal':
      return '50%'
    case 'light':
      return '70%'
    case 'white':
      return '98%'
    default:
      return blend
  }
}

function blendToSat (blend) {
  switch (blend) {
    case 'black':
    case 'dark':
      return '25%'
    default:
      return '100%'
  }
}

export const purple = (blend = 'normal') =>
  `hsl(262, ${blendToSat(blend)}, ${blendToLight(blend)})`

export const blue = (blend = 'normal') =>
  `hsl(220, 70%, ${blendToLight(blend)})`

export const green = (blend = 'normal') =>
  `hsl(19, 100%, ${blendToLight(blend)})`
