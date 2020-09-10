var nodeExternals = require('webpack-node-externals');
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const scss = {
     entry:{
         style:path.resolve('./client/scss/style.scss')
     },
     output:{
         filename:"[name].css",
         path:path.resolve("./build/client/css")
     },
     mode:"development",
     module:{
         rules:[
              {
                  test:/\.scss/,
                  use:['style-loader','css-loader', 'sass-loader']
              }
         ]
         
     }
}


const js = {
    mode: 'development',
    entry:{
        client:path.resolve('./client/vue/index.vue')
    },
    output:{
        path:path.resolve("./build"),
        filename:"./[name]/js/[name].js"
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude:/node_modules/,
                options: {
                    loaders: {
                        ts: 'ts-loader'
                    },
                    esModule: true,
                }
            },
            {
                test: /\.js/,
                loaders: ['babel-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    resolve:{
        extensions: ['.vue', '.json','.js'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        },
    },
}

const server = {
    mode: 'development',
    entry:{
        server:path.resolve("./server/server.map.ts"),
    },
    output:{
        path:path.resolve("./build"),
        filename:"./[name]/js/[name].js"
    },
    module:{
        rules:[
            {
                test:/\.map.ts$/,
                use:'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve:{
        extensions: ['.js','.json','.ts'],
    },
    externals:[nodeExternals()],
    target:"node"
}


/**
 * When bundling with Webpack for the backend - you usually don't want to bundle its node_modules dependencies. This library creates an externals function that ignores node_modules when bundling in Webpack.
 */
module.exports = [scss,server,js];