const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    test: /\.(svg|png|jpg|jpeg|gif)$/,
    include: 'path of input image directory',
    use: {
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
            outputPath: 'path of output image directory',
        },
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ],
    },
}
