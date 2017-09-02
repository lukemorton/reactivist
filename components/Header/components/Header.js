import React from 'react'
import { Row, Column } from '../../Layout'
import Branding from './Branding'
import Nav from './Nav'

export default () =>
  <Row>
    <Column md={6}>
      <Branding />
    </Column>

    <Column md={6}>
      <Nav />
    </Column>
  </Row>
