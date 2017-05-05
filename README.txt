## webpack性能优化

    静态资源 --> 模块
    模块多 --> 文件&文件夹多


## less-loader
```
    less文件中
        @import 'less/common/index.less';  -- 当前less文件所在路径开始
        @import '~less/common/index.less'; -- @说明2
        @import '~font-awesome/less/animated.less'; -- @说明3

    webpack.config.js 
        resolve: {
            alias: {
                'less': path.resolve(__dirname, 'src/less')
            }
        }

    说明2
        寻找 webpack.config.js 中 alias 中是有 'less', 则使用该路径, 没有则在默认路径下寻找 less 目录 (webpack默认为 根路径)

    说明3
        寻找 webpack.config.js 中 alias 中是没有 'font-awesome', 则在默认路径下寻找 font-awesome 目录 (webpack默认为 根路径)

    说明4 
        必须写明具体引入哪个文件
        如果路径只写到文件夹, 即使该文件夹下有index.less 也会报错

```