import merge from 'webpack-merge'
import common from './webpack.common'

const config = merge(common, {
    mode: 'production',
    devtool: 'inline-source-map',
})

export default config
