## Usage

### eslint

`package.json`

```json
{
  "lint": "eslint '**/*.{js,ts,tsx}'",
  "lint:fix": "npm run lint -- --fix"
}
```

`.eslintrc`

```javascript
{
  "extends": "eslint-config-yceffort",
  "rules": {
    // your custom rules..
  }
}
```

`.eslintrc` typescript

```javascript
// .eslintrc 파일
{
  "extends": [
    "eslint-config-yceffort/typescript",
    ...
  ],
  "rules": {
    // your custom rules
  }
}
```

if you want to ignore certain words from `@typescript-eslint/naming-convention`,  please add these files in your project.

`naming-convention.js`

```javascript
// Edit your custom Exclude words
const excludeWords = [
  "redirect_uris",
  "client_id",
  "client_secret",
  "access_type",
];
const regex = `${excludeWords.join("|")})$`;

const defaultRule = require("eslint-config-yceffort/rules/typescript");

const extendedRules = defaultRule.rules[
  "@typescript-eslint/naming-convention"
].map((item) =>
  typeof item === "string"
    ? item
    : {
        ...item,
        filter: {
          regex: `${item.filter.regex.split(")$")[0]}|${regex}`,
          match: false,
        },
      }
);

module.exports = {
  extendedRules,
};
```

`eslintrc.js`

```javascript
const customRule = require('./naming-convention')

module.exports = {
  "extends": [
    "eslint-config-yceffort/typescript",
  ],
  "rules": {
    '@typescript-eslint/naming-convention': customRule.extendedRules
  }
}
```


### prettier

```json
{
  "prettier": "prettier '**/*.{json,yaml,md}' --check",
  "prettier:fix": "prettier '**/*.{json,yaml,md}' --write"
}
```

`.prettierrc`

```
"eslint-config-yceffort/prettierrc"
```