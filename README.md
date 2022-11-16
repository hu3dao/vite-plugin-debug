# vite-plugin-debug

**English** | [中文](./README.zh-CN.md)

## Introduction

Vite-plugin-debug is a vite plugin that dynamically enables mobile web page debugging based on specific url parameters, Built-in vconsole and eruda debugging tools

- [vconsole github](https://github.com/Tencent/vConsole)
- [eruda github](https://github.com/liriliri/eruda)

![demo1](https://photo.zastatic.com/images/cms/banner/20221116/9614313180637697.png)

![demo2](https://photo.zastatic.com/images/cms/banner/20221116/102229775584454018.png)

## Installation

```bash
npm install vite-plugin-debug -D
# or
yarn add vite-plugin-debug -D
# or
pnpm add vite-plugin-debug -D
```

## Config

### enabled

- intro：Whether to enable plugin
- type：boolean
- default：true

### apply

- intro：Apply the plugin only for serve or build，value is undefined，Apply the plugin for serve and build
- type：'serve' | 'build' | undefined
- default：undefined

### tool

- intro：Which built-in debugging tool to use
- type：'vconsole' | 'eruda'
- default：vconsole

### src

- intro：The cdn of the debugging tool，**use src，must use code**
- type：string | undefined
- default：undefined
- example：https://cdn.bootcdn.net/ajax/libs/vConsole/3.14.7/vconsole.min.d.ts

### code

- intro：Run the debugging tool init method code，**use code，must use src**
- type：string | undefined
- default：undefined
- example：new window.VConsole();

### enabledByKey

- intro：Enable the debugging tool dynamically based on specific url parameters
- type：string
- default：debug,

### enabledByValue

- intro：Check whether the value of **enabledByKey** meets the condition
- type：string
- default：'1'

## Usage

- no params

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [vue(), debug()],
});
```

- not enabled

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [vue(), debug({ enabled: false })],
});
```

- apply the plugin only for serve

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [vue(), debug({ apply: 'serve' })],
});
```

- custom src and code

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [
    vue(),
    debug({
      src: 'https://unpkg.com/eruda@2.5.0/eruda.js',
      code: 'eruda.init();',
    }),
  ],
});
```

- custom enabledByKey and enabledByValue

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [vue(), debug({ enabledByKey: 'open', enabledByValue: 'true' })],
});
```

- complete config

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [
    vue(),
    debug({
      enabled: true,
      apply: 'serve',
      src: 'https://unpkg.com/eruda@2.5.0/eruda.js',
      code: 'eruda.init();',
      enabledByKey: 'open',
      enabledByValue: 'true',
    }),
  ],
});
```

![demo3](https://photo.zastatic.com/images/cms/banner/20221116/10469491998317490.png)

![demo4](https://photo.zastatic.com/images/cms/live/imitation/20221116/10974393864137853.png)

## License

[MIT](LICENSE)
