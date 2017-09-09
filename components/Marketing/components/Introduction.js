import React from 'react'
import { style } from 'glamor'
import { Layout } from '../../Common'
import { purple } from '../../Common/colors'

const introductionStyle = style({
  color: purple('white'),
  fontSize: '.8em',
  '& > h1': {
    color: 'white',
    fontWeight: '300'
  },
  '@media (min-width: 768px)': {
    fontSize: '1em',
    paddingTop: '1.5em'
  }
})

export default ({ children }) =>
  <Layout.Row justifyContent='center'>
    <Layout.Column md={11.5}>
      <div {...introductionStyle}>
        {children}
      </div>
    </Layout.Column>
  </Layout.Row>
