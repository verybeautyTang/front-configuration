function webpack(options) {
  // / 创建compiler对象
  const compiler = new Compiler(options)
  return compiler
}

module.exports = webpack
