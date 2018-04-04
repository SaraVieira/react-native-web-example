module.exports = {
  parser: require.resolve("babel-eslint"),

  env: {
    es6: true
  },

  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    require.resolve("eslint-config-prettier"),
    require.resolve("eslint-config-prettier/react")
  ],

  plugins: ["import", "jest", "prettier", "react"],

  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        singleQuote: true,
        jsxBracketSameLine: false,
        semi: false,
        useTabs: false,
        printWidth: 80,
        tabWidth: 2
      }
    ]
  },
  "settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".native.js", ".ios.js", ".android.js"]
			}
		}
	},
  overrides: {
    files: ["**/__tests__/**/*.js", "**/?(*.)(spec|test).js"],
    env: {
      jest: true
    }
  }
};
