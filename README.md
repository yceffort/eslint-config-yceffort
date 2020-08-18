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
  "extends": "@yceffort/eslint-config-yceffort",
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
    "@yceffort/eslint-config-yceffort",    
    ...
  ],
  "rules": {
    // your custom rules
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
"@yceffort/eslint-config-yceffort/prettierrc"
```
