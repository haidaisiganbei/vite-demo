import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 生成compoennts.d.ts组件定义文件
    // https://github.com/antfu/unplugin-vue-components
    Components({}),
    // 全局引入Vue相关API
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({ 
      imports:[
        // https://v3.cn.vuejs.org/api/
        'vue',
        // https://router.vuejs.org/zh/api/index.html
        'vue-router',
        // https://vueuse.org/functions.html
        {'@vueuse/core':["useTitle","useStorage"]}
      ]
    }),
  ]
})
