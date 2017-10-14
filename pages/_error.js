import React from 'react'
import { ErrorPage } from '../components/Common'

const statusCode = ({ res, jsonPageRes }) =>
  res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)

const errorMessage = (statusCode) => {
  switch (statusCode) {
    case 404:
      return 'The page you requested could not be found.'
    default:
      return 'An error occurred on server'
  }
}

export default class Error extends React.Component {
  static getInitialProps (ctx) {
    return { statusCode: statusCode(ctx) }
  }

  render () {
    return (
      <ErrorPage title={errorMessage(this.props.statusCode)}>
        {errorMessage(this.props.statusCode)}
      </ErrorPage>
    )
  }
}
