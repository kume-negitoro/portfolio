const path = require('path')

module.exports = {
    content: [path.resolve(__dirname, 'src/**/*.{html,ts,tsx,js,tsx}')],
    theme: {
        extend: {},
    },
    plugins: [],
}
