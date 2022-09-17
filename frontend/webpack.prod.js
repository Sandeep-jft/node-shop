const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode:'production',
    entry:'./src/index.js',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
        publicPath: '/',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    resolve:{
        extensions:['.js','.jsx','.css'],
        alias:{
            'src':path.resolve(__dirname,'src/')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify:true 
        }),
        new MiniCssExtractPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-react","@babel/preset-env"]
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.css/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    }
}