import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 生成compoennts.d.ts组件定义文件
    // https://github.com/antfu/unplugin-vue-components
    Components({})
  ]
})
