# webpack
a demo of react webpack onestep by another

#步骤     (基础配置流程)
npm init

npm install --save react

npm install --save react-dom

npm install --save-dev webpack

npm install --save-dev webpack-dev-server

npm install --save-dev babel-core

npm install --save babel-polyfill

npm install --save-dev babel-loader

npm install --save babel-runtime

npm install --save-dev babel-plugin-transform-runtime

npm install --save-dev babel-preset-es2015
--> 装完es2015记得更新毕竟现在是es7满地跑的年代了 不更新无法使用

npm install --save-dev babel-preset-react

npm install --save-dev babel-preset-stage-2

package.json 添加start跟build
`
    "scripts": {
    "start": "webpack-dev-server --hot --inline --colors --content-base ./build",
    "build": "webpack --progress --colors"
    }
`

初始化 webpack.config.js
`
    var webpack = require('webpack');
module.exports = {
  entry: './src/app.js',
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};

`