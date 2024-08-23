# webpack 知识体系

## 配置相关

简单配置

- Webpack 常规配置项有哪些？
- 常用 Loader 有哪些？如何配置？
- 常用插件（Plugin）有哪些？如何的配置？
- Babel 的如何配置？Babel 插件如何使用？

**基本配置：**

- mode：开发模式
- entry： 入口文件
- output： 输出文件
- plugins: 插件
- module： 模块配置

**mode**有两个配置 **development** 和 **production**

development:

- 需要更快的构建速度 -需要打印 debug 信息
- 需要 live reload 或 hot reload 功能
- 需要 sourcemap 方便定位问题

production:

- 需要更小的包体积，代码压缩+tree-shaking
- 需要进行代码分割
- 需要压缩图片体积

### loader

常用 loader：

1. css-loader
2. postcss-loader
3. less-loader
4. babel-loader

### plugins
