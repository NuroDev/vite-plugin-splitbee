# 🐝 vite-plugin-splitbee

A small plugin to add Splitbee support to Vite

[![License](https://img.shields.io/badge/-MIT-f56565.svg?longCache=true&style=for-the-badge)](https://github.com/nurodev/rust-cross-release/blob/main/LICENSE)
[![Vite](https://img.shields.io/badge/-vite%202.x-3eaf7c.svg?longCache=true&style=for-the-badge)](https://vitejs.dev)

## 🦄 Usage

Install the dependency
```bash
npm install --save-dev vite-plugin-splitbee # yarn add -D vite-plugin-splitbee
```

Add it to your Vite config
```typescript
// vite.config.ts
import { ViteSplitbee } from 'vite-plugin-splitbee';

export default {
  plugins: [
	  ViteSplitbee(),
  ]
}
```

## 🔧 Configuration

```typescript
export default {
  plugins: [
    ViteSplitbee({
      /// When using A/B testing, you can prevent the initial content flash by making the script blocking/synchronous (Optional) [Default: false]
      async: false;

      /// Whether to include Splitbee analytics during local development (Optional) [Default: false]
      enable_development: false;

      /// Number of milliseconds to wait before loading the Splitbee (Optional) [Default: 0]
      delay_timeout: 0;
    }),
  ]
}
```

## ⚠️ Requirements

Currently this plugin only supports Vite 2.x
