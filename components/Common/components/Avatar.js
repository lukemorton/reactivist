import React from 'react'
import { style } from 'glamor'

const avatarStyle = style({
  borderRadius: '50%',
  boxShadow: '0 0 8px rgba(0,0,0, .03)',
  border: '5px solid rgba(255,255,255, .8)',
  display: 'block',
  margin: '0 auto',
  width: '6em'
})

const gravatarSrc = (gravatar) =>
  `https://s.gravatar.com/avatar/${gravatar}?s=200`

export default ({ gravatar }) =>
  <img src={gravatarSrc(gravatar)} {...avatarStyle} />
