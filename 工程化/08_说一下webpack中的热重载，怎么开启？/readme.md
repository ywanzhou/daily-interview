> 日期：/d2022/07/15
分类：webpack、前端工程化
题目：说一下webpack中的热重载，怎么开启？

热重载又叫热模块替换，即HMR，HMR就是在程序运行过程中实时替换某个模块，使应用程序的运行状态不受影响。

开启HMR比较简单，将`devServe.hot`设置为true，然后在webpack中引入`HotModuleReplacementPlugin`插件，并在plugins配置项中实例化。