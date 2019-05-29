module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    "react",
    "react-hooks",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/standard",
    "prettier/react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "16.8"
    },
    "html/javascript-mime-types": ["text/javascript", "text/jsx", "text/babel"]
  },
  "parser": "babel-eslint",
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "error",
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "error",
    "no-unreachable": "error",
    "no-unused-vars": "warn",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "no-debugger": "off",
    "react/prop-types": "warn",
    "react/boolean-prop-naming": "error",
    "react/display-name": "off",
    "react/no-access-state-in-setstate": "error",
    "react/no-deprecated": "error",
    "react/no-did-update-set-state": "error",
    "react/jsx-no-undef": "error",
    "react/no-unused-prop-types": "warn",
    "react/prefer-stateless-function": "warn",
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": [
          "block-like",
          "class",
          "default",
          "export",
          "if",
          "for",
          "function",
          "switch",
          "try"
        ],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": [
          "export"
        ],
        "next": [
          "export"
        ]
      },
      {
        "blankLine": "always",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": [
          "block-like",
          "class",
          "default",
          "export",
          "if",
          "for",
          "expression",
          "function",
          "switch",
          "try"
        ]
      },
      {
        "blankLine": "any",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": [
          "const",
          "let",
          "var"
        ]
      }
    ],
    "react/jsx-boolean-value": [
      "error",
      "always"
    ],
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-closing-bracket-location": [
      "warn",
      "tag-aligned"
    ],
    "react/jsx-equals-spacing": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};
