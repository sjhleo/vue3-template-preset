# demo-web

## 如何开发

-   安装依赖（推荐使用 pnpm，需提前安装 pnpm）

```
npm i pmpm -g
pnpm i
```

或者

```
npm i
```

添加 husky 校验

commit-msg:

    npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"';

pre-commit:

    npx husky add .husky/pre-commit "npx lint-staged"

-   启动项目

```
npm run serve
```

-   打包项目

```
npm run build
```

-   本地测试打包文件

```
npm run check
```

## 其他说明

-   UI 库使用 andt-vue3.0 以上版本
-   vue 版本 3.0 以上,开发建议使用 setup script
-   状态管理使用 pinia
-   提交代码前会进行格式化代码以及 eslint 校验，建议编写代码时同步完成格式化和 eslint 检查和修复，如果 eslint 校验不通过且无法修复会导致提交失败。
-   git 提交信息需要符合规范，如果不符合规范会导致提交失败。
