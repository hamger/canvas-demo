# canvas-demo
使用 canvas 制作一些有趣的 demo

## Construction
```
.
├── package.json ---------------------- 项目描述
├── README.md ------------------------- 说明文件
├── build ----------------------------- 构建配置
├── output ---------------------------- canvas-kit 内容
└── src ------------------------------- 源码目录
    ├── assets ------------------------ 资源文件
    ├── page01 ------------------------ 页面A代码
        ├── index.html ---------------- 页面A的html代码
        └── index.js ------------------ 页面A的js代码入口
    └── page02 ------------------------ 页面B代码
```

## canvas-kit
> 在编写某些 canvas demo 过程中，抽象出一些实用的方法，用于快速实现一些效果

详见 [canvas-kit 文档](https://github.com/hamger/canvas-demo/tree/master/output)

## Start
### 安装依赖
``` bash
npm install
```

### 本地开发
```bash
npm run dev
```
访问`http://localhost:8080/page01.html`可以看到页面A的内容，同理可访问其他页面的内容。


### 打包代码
```bash
npm run build
```
打包后根目录下会出现`dist`文件夹，其中内容如下
```
.
└── dist ------------------------------ 生产代码
    ├── assets ------------------------ 资源文件
    ├── page01 ------------------------ 页面A的生产代码
        ├── index.html ---------------- 页面A的html代码
        └── index.js ------------------ 页面A的js代码入口
    └── page02 ------------------------ 页面B的生产代码
```
