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
            /// Provide a custom API url to use instead of the default Splitbee one (Optional) [Default: 'https://hive.splitbee.io']
            api_url: string,

            /// When using A/B testing, you can prevent the initial content flash by making the script blocking/synchronous (Optional) [Default: false]
            async: boolean,

            /// Whether to include Splitbee analytics during local development (Optional) [Default: false]
            dev: boolean,

            /// Whether to enable cookie-less mode (Optional) [Default: false]
            disable_cookie: boolean,

            /// To use Splitbee on another subdomain you can provide a project token. This can be found in project settings (Optional)
            token: string,

            /// URL to Splitbee script to load (Optional) [Default: 'https://cdn.splitbee.io/sb.js']
            url: string,
        }),
    ],
}
```

## ⚠️ Requirements

Currently this plugin only supports Vite 2.x
