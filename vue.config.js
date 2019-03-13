const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',

  chainWebpack: config => {
    config.resolve.alias
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('services', resolve('src/services'))
      .set('components', resolve('src/components'))
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },

  devServer: {    
    proxy: {
      '/thirdprovider': {
        target: 'http://qingketest.chinacloudapp.cn:30316',
        changeOrigin: true,
      },
      '/commonprovider': {
        target: 'http://qingketest.chinacloudapp.cn:30316',
        changeOrigin: true,
      },
    }
  },
}

// http://qingketest.chinacloudapp.cn:30316/thirdprovider  测试

// http://192.168.1.74 本地