var nodeExternals = require('webpack-node-externals');
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    resolve:{
        extensions: ['.vue', '.json','.js','.ts'],
        alias: {
            vue$: 'vue/dist/vue.esm.js'
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
module.exports = [server,js];