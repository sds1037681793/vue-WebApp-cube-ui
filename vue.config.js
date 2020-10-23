const path = require('path')
const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
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
  },// 第三方插件配置
  devServer: {
    open: true,
    host: '0.0.0.0', // 允许外部ip访问
    port: 8022, // 端口
    https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    proxy: {
      '/api': {
        target: 'https://zgb.yybd.xyz',
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    } // 代理转发配置，用于调试环境
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, ''),
        '@assets': resolve('src/assets'),
        '@src': resolve('src'),
        '@images': resolve('src/images'),
        '@components': resolve('src/components'),
        '@api': resolve('src/api'),
        '@utils': resolve('src/utils'),
        '@pages': resolve('src/pages')
      }

    }
  },
}
