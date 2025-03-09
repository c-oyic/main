import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"], // 生效文件
    extends: [
      // 继承的规则，eslint、vue、typescript、prettier内置规则
      eslint.configs.recommended,
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginVue.configs["flat/recommended"],
      ...pluginVue.configs["flat/essential"]
    ],
    languageOptions: {
      ecmaVersion: "latest", // 使用最新的ECMAScript版本
      sourceType: "module", // 使用ECMAScript模块
      globals: {
        // 全局变量
        ...globals.browser,
        ...globals.node,
        defineProps: "readonly",
        defineEmits: "readonly",
        defineModel: "readonly",
        defineExpose: "readonly",
        defineOptions: "readonly",
        defineSlots: "readonly"
      },
      parserOptions: {
        // 解析器选项
        parser: tseslint.parser // 使用typescript-eslint解析器
      }
    }
  },
  eslintConfigPrettier // eslint-config-prettier规则，解决prettier和eslint冲突部分
];
