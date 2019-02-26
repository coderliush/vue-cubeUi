module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: [
        '*'
      ]
    },
    'postcss-px2rem': {
      remUnit: 37.5
    }
  }
}

