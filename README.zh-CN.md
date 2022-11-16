# vite-plugin-debug

**中文** | [English](./README.md)

## 介绍

vite-plugin-debug 是一个能够根据 url 的特定参数动态启用移动端调试工具的 vite 插件，内置了 vconsole 和 eruda 两款调试工具

- [vconsole 地址](https://github.com/Tencent/vConsole)
- [eruda 地址](https://github.com/liriliri/eruda)

![demo1](https://photo.zastatic.com/images/cms/banner/20221116/9614313180637697.png)

![demo2](https://photo.zastatic.com/images/cms/banner/20221116/102229775584454018.png)

## 安装

```bash
npm install vite-plugin-debug -D
# or
yarn add vite-plugin-debug -D
# or
pnpm add vite-plugin-debug -D
```

## 配置

### enabled

- 说明：是否开启插件功能
- 类型：boolean
- 默认值：true

### apply

- 说明：在特定环境下启用插件，undefined 表示在 serve 和 build 都启用
- 类型：'serve' | 'build' | undefined
- 默认值：undefined

### tool

- 说明：使用哪个内置的调试工具
- 类型：'vconsole' | 'eruda'
- 默认值：vconsole

### src

- 说明：调试工具的 cdn 地址，**传了 src 参数，则 code 参数必传**
- 类型：string | undefined
- 默认值：undefined
- 示例：https://cdn.bootcdn.net/ajax/libs/vConsole/3.14.7/vconsole.min.d.ts

### code

- 说明：运行调试工具初始化方法的代码，**传了 code 参数，则 src 参数必传**
- 类型：string | undefined
- 默认值：undefined
- 示例：new window.VConsole();

### enabledByKey

- 说明：根据 url 的什么参数来动态开启调试工具
- 类型：string
- 默认值：debug,

### enabledByValue

- 说明：判断 url 的 **enabledByKey** 参数对应值是否满足开启条件
- 类型：string
- 默认值：'1'

## 用法

- 不带参数

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [vue(), debug()],
});
```

- 不开启

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [vue(), debug({ enabled: false })],
});
```

- 只在 serve 环境下开启

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [vue(), debug({ apply: 'serve' })],
});
```

- 自定义 src 和 code

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

- 自定义 enabledByKey 和 enabledByValue

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import debug from 'vite-plugin-debug';

export default defineConfig({
  plugins: [vue(), debug({ enabledByKey: 'open', enabledByValue: 'true' })],
});
```

- 完整演示

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
