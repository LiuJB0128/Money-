import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true, // 自动转换
      mergeProps: true // 自动帮你把 class属性 / style属性 / onXXX属性 绑定到子组件的根元素上
    })
  ]
})
