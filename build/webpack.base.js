const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
  output: {
    path: path.join(__dirname, "../dist"), // 打包出口
    filename: "static/js/[name].js", // 打包后的文件名
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
          },
        },
      },
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: ["thread-loader", "babel-loader"],
      },
      {
        test: /.(css|scss)$/, //匹配 css 文件
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/images/[name][ext]", // 文件输出目录和命名
        },
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/fonts/[name][ext]", // 文件输出目录和命名
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/media/[name][ext]", // 文件输出目录和命名
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
    alias: {
      "@": path.join(__dirname, "../src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
    }),
  ],
  cache: {
    type: "filesystem", // 使用文件缓存
  },
};
console.log("NODE_ENV", process.env.NODE_ENV);
console.log("BASE_ENV", process.env.BASE_ENV);
