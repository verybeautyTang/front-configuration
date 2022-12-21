### webpack核心概念
1. entry： 入口
2. output：出口
3. loader： 对于模块的源代码进行转换
4. plugin： plugin可以处理loader不能处理的事情
5. mode
6. 模式/兼容性


### webpack的安装方式
1. 局部安装 pnpm安装 pnpm add -D webpack webpack-cli 
2. 全局安装 pnpm add -g webpack webpack-cli 
### 运行方式
1. ./node_modules/.bin/webpack -- version
2. npx webpck --version
3. 全局安装的可以直接 webpck -version

### webpack配置

1. 关键字entry、output
2. node的路径相关： 要使用require进行引用
3. output里面的path需要使用绝对路径 使用path.join去拼接路径

4. test去匹配文件、loader倒叙加载流水线文件
5. 安装plugin以来
6. 热模块更新 需要配合webpack-dev-serve


8.  开发中使用热更新 开发模式中使用压缩插件
9. babel配置文件、pollfile
10. 