module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: (config) => {
    const rules = config.module.rules
    
    const fileLoaderRule = rules.find((rule) => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /.svg$/

    rules.push({
      test: /.svg$/,
      loader: '@svgr/webpack',
      options: {
          typescript: true,
      },
    })

    return config
  }
}