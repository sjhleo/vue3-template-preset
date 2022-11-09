module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/vue3-essential",
        // "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "@typescript-eslint/no-explicit-any": "off", //关闭any类型警告
        //关闭eslint检查文件名是否为驼峰命名
        "vue/multi-word-component-names": "off",
        "vue/html-indent": [
            "error",
            4
        ],
        "vue/html-self-closing": "off",
        "vue/max-attributes-per-line": "off",
        "vue/multiline-html-element-content-newline": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/html-closing-bracket-newline": "off"
    }
};
