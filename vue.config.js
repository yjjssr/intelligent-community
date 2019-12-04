const path=require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports = {
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('@views', resolve('src/views'))
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
  }
}