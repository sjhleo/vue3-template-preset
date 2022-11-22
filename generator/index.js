module.exports = (api, opts) => {
    api.extendPackage({
        dependencies: {
            vue: "^3.2.13",
            "@vueuse/core": "^9.1.0",
            "ant-design-vue": "^3.2.10",
            axios: "^0.25.0",
            dayjs: "^1.11.5",
            "js-cookie": "^3.0.1",
            jsencrypt: "^3.0.0-rc.1",
            nprogress: "^0.2.0",
            pinia: "^2.0.17"
            // "vue-class-component": "^8.0.0-0",
            // "vue-router": "^4.0.3"
        },
        devDependencies: {
            "@types/nprogress": "^0.2.0",
            "@types/js-cookie": "^3.0.1",
            "@types/node": "^13.7.4",
            "@typescript-eslint/eslint-plugin": "^5.4.0",
            "@typescript-eslint/parser": "^5.4.0",
            "@vue/cli-plugin-eslint": "~5.0.0",
            "@vue/eslint-config-typescript": "^9.1.0",
            eslint: "^7.32.0",
            "eslint-plugin-vue": "^8.0.3",
            "@commitlint/cli": "^17.3.0",
            "@commitlint/config-conventional": "^17.3.0",
            husky: "^8.0.2",
            "lint-staged": "^13.0.3",
            prettier: "^2.7.1"
        },
        scripts: {
            check: "http-server ./dist -a 127.0.0.1 -p 5050",
            prepare: "husky install",
            lint: 'eslint --fix --ext ".js,.vue,.ts" src'
        },
        "lint-staged": {
            "*.{html,vue,css,scss}": ["prettier --write", "git add -A"],
            "*.{ts,js,vue}": ["prettier --write", "eslint --fix", "git add -A"]
        }
    });
    // 删除 vue-cli3 默认目录
    api.render(files => {
        Object.keys(files)
            .filter(
                path => path.startsWith("src/") // || path.startsWith("public/")
            )
            .forEach(path => delete files[path]);
    });

    api.render(`./template`);

    // 屏蔽 generator 之后的文件写入操作
    // writeFileTree 函数不写文件直接退出，这样 vue-cli3 在写 README.md 时会直接跳过
    api.onCreateComplete(() => {
        process.env.VUE_CLI_SKIP_WRITE = true;
    });
};
