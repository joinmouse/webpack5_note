/*
    webpack.config.js: webpack配置文件，运行webpack会加载里面的配置
    所有构件工具都是基于node.js平台运行的common.js
*/
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口起点
    entry: './src/index.js',
    // 输出
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录, __dirname表示当前文件的目录绝对路径
        filename: '[name].bundle.js', // 打包后生产的 js 文件
    },
    // loader配置
    module: {
        rules: [
            // 处理js
            {
                test: /\.js$/,  //使用正则来匹配 js 文件
                exclude: /node_modules/, // 排除依赖包文件夹
                use: {
                    loader: 'babel-loader' //使用 babel-loader
                }
            },
            // 处理css
            {
                test: /\.css$/,  //使用正则来匹配 css 文件
                // 使用那些loader处理
                use: [
                    'style-loader',  //创建style标签，将js中的样式资源进行插入, 添加到head生效
                    'css-loader'     //将css文件变成commonjs模块加载到js，里面内容是样式字符串
                ]
            },
            // 处理less
            {
                test: /\.less$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    'less-loader'  //将less编译为css
                ]
            }
        ]
    },
    // 插件配置
    plugins: [
        // 默认情况下，此插件将删除webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产
        new CleanWebpackPlugin(),
        // 默认创建空的HTML文件，自动引入打包输出的所有资源(js/css)
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // 模式 development/production
    mode: 'production',
    // mode: 'development',

    // 开发服务器devServer, 自动化(编译、刷新浏览器)
    // 特点: 没有输出，在内存中编译打包，不会有任何输出到本地
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,  //启动gzip压缩
        port: 3000
    }
}