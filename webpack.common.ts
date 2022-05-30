import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: Configuration = {
    target: 'web',

    entry: path.join(__dirname, 'src/app.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'www'),
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'ts',
                    target: 'es2015',
                },
            },
            {
                test: /\.tsx$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015',
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src'),
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
}

export default config
