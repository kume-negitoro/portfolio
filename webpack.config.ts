import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (env: unknown, argv: Record<string, string>): Configuration => {
    const isDev = argv.mode === 'development'

    return {
        target: 'web',
        devtool: isDev ? 'inline-source-map' : 'none',

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
                        loader: 'tsx',
                        target: 'es2015',
                    },
                },
            ],
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', 'jsx'],
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
}
