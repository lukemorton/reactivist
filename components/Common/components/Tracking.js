import React from 'react'
import Router from 'next/router'
import ga from 'react-ga'

function logPageView (url) {
  ga.set({ page: url })
  ga.pageview(url)
}

if (typeof window !== 'undefined') {
  ga.initialize('UA-105809278-1')
  logPageView(window.location.pathname)
}

Router.onRouteChangeComplete = logPageView

export default () => <div />
