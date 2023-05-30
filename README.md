# 简介

- 基于 NodeJS 开发
- 使用 Typescript
- 使用 [pnpm](https://pnpm.io/) 作为包管理工具

# 工具链

## 构建

Rollup 是一个 JavaScript 模块打包工具，适用于开发类库等需要单独打包的项目。相比于其他打包工具，它支持的项目类型更加广泛，而不像 webpack、vite 等专注于 web 应用的打包

## 日志

使用 [winston](https://github.com/winstonjs/winston) 作为项目日志库，可用于问题诊断以及操作输出

## 命令行

使用 https://github.com/tj/commander.js/ 作为 cli 框架

# 质量管理

## 版本管理

使用 git，分支管理采用 [git-flow 的工作流程 | Learn Version Control with Git (git-tower.com)](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)

### git flow

1. 安装：[Windows · nvie/gitflow Wiki (github.com)](https://github.com/nvie/gitflow/wiki/Windows)
2. 执行 `git flow init`

### lint

通过 husky 安装 pre-commit hook，在提交代码前自动对提交文件进行 lint 和代码格式修复

### 提交

参考 [约定式提交 (conventionalcommits.org)](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

## lint

eslint，使用 Airbnb 规则集

## 格式化

使用 prettier 作为代码格式化方案

## 日志

todo

## 代码组织

```jsx
src/ // 项目源码
bin/ // 命令行入口文件
```

### cmd

用于定义 cli 的命令集，文件夹结构遵循**命令嵌套子命令**的格式，例如：

```jsx
cmd/
├─ generate/ // generate
│  ├─ component/ // generate component
│  ├─ mod/ // generate mod
│  ├─ store/ ...
├─ template/ // template
│  ├─ h5/ // template h5
│  ├─ pc/ ...
│  ├─ weapp/ ...
```

# 开发流程

## 持续构建

`pnpm dev`，修改代码会自动重新编译

## 本地运行

`node .\bin\`

## 全局安装

`npm i -g .`

将当前项目安装为全局 cil 命令，在任意工作目录都可以使用

## Debug

配置 vscode 的 launch.json 文件：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/bin/index.js",
      "args": [
        // 命令行参数
      ],
    }
  ]
}
```

将断点添加在 dist 文件夹内的 js 文件上