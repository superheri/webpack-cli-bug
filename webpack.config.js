const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
    return {
        entry: {
            'test': './src/index.html'
        },
        output: {
            path: __dirname + '/dist'
        },
        plugins: [
            new CopyWebpackPlugin({patterns: [
                {from: 'src/index.html', to: 'index.html'},
                {from: 'src/a/index.html', to: 'a/index.html'},
                {from: 'src/b/index.html', to: 'b/index.html'}
            ]})
        ],
        module: {
            rules: [
                {
                    test: /.*\.html?$/,
                    loader: 'html-loader'
                }
            ]
        },
        devServer: {
            index: 'index.html',
            contentBase: './dist',
            writeToDisk: true,
            port: 3000,
            compress: true,
            historyApiFallback: {
                rewrites: [
                    { from: /a\/.*/, to: 'a/index.html' },
                    { from: /b\/.*/, to: 'b/index.html' }
                ]
            }
        }
    }
}