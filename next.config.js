const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    // Inject env vars
    config.plugins.push(
      new webpack.EnvironmentPlugin([
        'ARTICLES_ORIGIN'
      ])
    )

    return config
  }
}
