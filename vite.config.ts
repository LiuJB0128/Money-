import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true, // 自动转换
      mergeProps: true // 自动帮你把 class属性 / style属性 / onXXX属性 绑定到子组件的根元素上
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://121.196.236.94:3000/',
      }
    }
  }
})
