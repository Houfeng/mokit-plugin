### mokit 插件助手

开发一个 mokit 的插件，一般只需要实现 **install** 方法即可，当在插件中需要用到 mokit 的 API 时，通常需要：

  1. 将逻辑都写在 install 方法中  
  2. 在 install 中将 mokit 引用暂存，然后在 install 之后再使用  


> 注意，一般不建议在插件中直接添加到 mokit 的引用  
> 因为这样在用 webpack 等工具「独立打包」插件时，会将 mokit 也包含进去。


使用 **mokit-plugin** 将会简化相关处理。
并且在不使用任何「构建系统」，而通过 **script** 标签直接在页面中使用 mokit 和 「插件」时，会自动完成「插件安装」

**1. 安装 mokit-plugin 包**

```sh
npm install mokit-plugin --save
```

**2. 编写插件「代理入口」文件**

```js
const Plugin = require('mokit-plugin');
module.exports = new Plugin(function () {
  return require('your path');
});
```

这个文件中除了上述代码不要再写其它任何代码，然后，将 **package.json** 中的 **main** 指向这个入口文件。

**3. 在代码中引用 mokit**

```js
const mokit = require('mokit-plugin').mokit;

//your plugin code...
```
