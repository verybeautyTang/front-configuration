const fs = require('fs')
class Compiler {
  constructor(options) {
    this.options = options || {}

    // 保存编译过程编译的 module
    this.modules = new Set()
  }

  run(callback) {
    const entryModule = this.build(path.join(process.cwd(), this.options.entry))
    const entryChunk = this.buildChunk('entry', entryModule)
  }

  build(modulePath) {}

  // 将源码交给匹配的 loader 处理
  dealWidthLoader(modulePath, originCode) {}

  // 调用 webpack 处理依赖的代码
  dealDependencies(code, modulePath) {}

  buildChunk(entryName, entryModule) {
    return {
      name: entryName,
      // 入口文件编译结果
      entryModule,
      // 所有直接依赖和间接依赖编译结果
      modules: this.modules
    }
  }
}

module.exports = Compiler
