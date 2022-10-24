import type { Plugin } from 'vite';
import { IDebugConfig } from './types';

export default function debug(config: IDebugConfig = {}): Plugin {
  const {
    enabled = true,
    apply = undefined,
    tool = 'vconsole',
    src = undefined,
    code = undefined,
    enabledByKey = 'debug',
    enabledByValue = '1',
  } = config;
  const preset = {
    vconsole: {
      src: `https://unpkg.com/vconsole@latest/dist/vconsole.min.js`,
      code: `new window.VConsole();`,
    },
    eruda: {
      src: `//cdn.bootcdn.net/ajax/libs/eruda/2.3.3/eruda.js`,
      code: `eruda.init();`,
    },
  };
  return {
    name: 'vite-plugin-vsconsole',
    apply,
    transformIndexHtml(html) {
      if (enabled) {
        return {
          html,
          tags: [
            {
              tag: 'script',
              attrs: {
                src: src || preset[tool]['src'],
              },
              injectTo: 'body',
            },
            {
              tag: 'script',
              children: `var urlSearchParams = new URLSearchParams(location.search)
  var value = urlSearchParams.get('${enabledByKey}')
  if(value && value === '${enabledByValue}') {
    ${code || preset[tool]['code']}
  }
`,
              injectTo: 'body',
            },
          ],
        };
      }
      return html;
    },
  };
}
