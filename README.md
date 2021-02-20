# 🐝 vite-plugin-splitbee

A small plugin to add Splitbee support to Vite

[![License](https://img.shields.io/badge/-MIT-f56565.svg?longCache=true&style=for-the-badge)](https://github.com/NuroDev/vite-plugin-splitbee/blob/main/LICENSE)
[![Vite](https://img.shields.io/badge/-vite%202.x-3eaf7c.svg?longCache=true&style=for-the-badge)](https://vitejs.dev)
[![Version](https://img.shields.io/npm/v/vite-plugin-splitbee?label=%20&style=for-the-badge)](https://www.npmjs.com/package/vite-plugin-splitbee)
[![Downloads](https://img.shields.io/npm/dm/vite-plugin-splitbee?label=%20&logo=Docusign&logoColor=white&style=for-the-badge)](https://www.npmjs.com/package/vite-plugin-splitbee)

## 🦄 Usage

Install the dependency
```bash
npm install --save-dev vite-plugin-splitbee # yarn add -D vite-plugin-splitbee
```

Add it to your Vite config
```typescript
// vite.config.ts
import Splitbee from 'vite-plugin-splitbee';

export default {
  plugins: [
    Splitbee(),
  ]
}
```

## 🔧 Configuration

```typescript
export default {
    plugins: [
        Splitbee({
            // To use Splitbee on another subdomain.
            // Token can be found in project settings
            token: 'YOUR_TOKEN', 

            // Enable cookie-less mode. Defaults to `false`
            disableCookie: false,

            // Set custom urls when using proxying
            scriptUrl: "https://cdn.splitbee.io/sb.js",
            apiUrl: "https://hive.splitbee.io",
        }),
    ],
}
```

## ⚠️ Requirements

Currently this plugin only supports Vite 2.x
