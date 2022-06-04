import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config: Configuration = {
    target: 'web',

    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'www'),
        assetModuleFilename: 'images/[hash][ext][query]',
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
            {
                test: /.(png|jpg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /.svg$/,
                type: 'asset/inline',
            },
        ],
    },

    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.png',
            '.jpg',
            '.gif',
            '.svg',
        ],
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src'),
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'public/*'),
                    to: path.join(__dirname, 'www/'),
                },
            ],
        }),
    ],
}

export default config
