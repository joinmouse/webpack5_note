const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 需要打包的文件入口
    entry: {
        app: './app.js' 
    },
    output: {
        publicPath: __dirname + '/dist/',  // js 引用的路径或者 CDN 地址
        path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
        filename: 'bundle.js' // 打包后生产的 js 文件
    },
    module: {
        rules: [
          {
            test: /\.js$/,  //使用正则来匹配 js 文件
            exclude: /node_modules/, // 排除依赖包文件夹
            use: {
              loader: 'babel-loader' //使用 babel-loader
            }
          }
        ]
    },
    plugins: [
        // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产
        new CleanWebpackPlugin()
    ]
}

// console.log('__dirname: ', __dirname)
// console.log('path.resolve: ', path.resolve(__dirname, 'dist'))