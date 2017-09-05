import React from 'react'
import { style } from 'glamor'
import { Layout } from '../../Common'
import { purple } from '../../Common/colors'

const introductionStyle = style({
  color: purple('white'),
  fontSize: '.8em',
  '& .heading': {
    fontWeight: '300'
  },
  '@media (min-width: 768px)': {
    fontSize: '1em',
    paddingTop: '1.5em'
  }
})

export default () =>
  <Layout.Row {...introductionStyle} justifyContent='center'>
    <Layout.Column md={11.5}>
      <h1 className='heading'>We find, develop, and share best practice knowledge in the React community</h1>
    </Layout.Column>
  </Layout.Row>
