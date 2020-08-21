const path = require('path')
module.exports = {
  mode: 'production', // 打包环境 默认production  development none
  entry: {
    index: path.join(__dirname, './src/index.js'),
    main: path.join(__dirname, './src/main.js'),
  },
  // output: {
  //   path: path.join(__dirname, './dist'), //打包目录
  //   filename: 'main.js', //打包文件
  // },
}

// webpack.production.config.js
// const configWebpack = {
//   mode: 'production',
//   performance: {
//     hints: 'warning',
//   },
//   output: {
//     pathinfo: false,
//   },
//   optimization: {
//     namedModules: false,
//     namedChunks: false,
//     nodeEnv: 'production',
//     flagIncludedChunks: true,
//     occurrenceOrder: true,
//     sideEffects: true,
//     usedExports: true,
//     concatenateModules: true,
//     splitChunks: {
//       hidePathInfo: true,
//       minSize: 30000,
//       maxAsyncRequests: 5,
//       maxInitialRequests: 3,
//     },
//     noEmitOnErrors: true,
//     checkWasmTypes: true,
//     minimize: true,
//   },
//   plugins: [
//     new TerserPlugin(/* ... */),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('production'),
//     }),
//     new webpack.optimize.ModuleConcatenationPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//   ],
// }
