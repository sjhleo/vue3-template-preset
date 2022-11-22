# vue3-template-preset

vue-cli vue3 项目模板, 开发语言为 TypeScript, 默认支持 sass

## 如何使用

安装全局的 vue-cli

    npm install -g @vue/cli

使用 vue-cli 命令创建项目

    vue create --preset sjhleo/vue3-template-preset projectName

项目添加 husky 校验

commit-msg:

    npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"';

pre-commit:

    npx husky add .husky/pre-commit "npx lint-staged"

## 更新日志

-   2022.10.30 初始化版本创建
-   2022.11.21 添加 husky 对提交代码进行格式化和 eslint 校验 fix，提交信息校验。
