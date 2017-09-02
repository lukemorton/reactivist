import React from 'react'
import * as Hedron from 'hedron'

const Row = (props) =>
  <Hedron.Page>
    <Hedron.Row {...props} />
  </Hedron.Page>

const Column = Hedron.Column

export { Row, Column }
