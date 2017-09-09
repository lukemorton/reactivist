import React from 'react'
import { style } from 'glamor'
import { Layout } from '../../Common'
import { purple } from '../../Common/colors'
import Subscribe from './Subscribe'

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

const intersectStyle = style({
  marginTop: '-7em',
  '@media (min-width: 768px)': {
    marginTop: '-10em'
  }
})

const Introduction = ({ children }) =>
  <Layout.Row justifyContent='center'>
    <Layout.Column md={11.5}>
      <div {...introductionStyle}>
        {children}
      </div>
    </Layout.Column>
  </Layout.Row>

Introduction.Subscribe = () =>
  <Layout.Row justifyContent='center' {...intersectStyle}>
    <Layout.Column md={7}>
      <Subscribe />
    </Layout.Column>
  </Layout.Row>

export default Introduction
