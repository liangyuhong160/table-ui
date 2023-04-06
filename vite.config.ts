import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: 'less' })]
      // 如果需要自定义主题色，则需要配置importStyle: 'less',并安装less: npm install less --save-dev

    })
  ],
 /* build: {
    outDir: "table-ui", //输出文件名称
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), //指定组件编译入口文件
      name: "table-ui",
      fileName: "table-ui",
    }, //库编译模式配置
  }*/

  build: {
   /* lib: { // 构建为库。如果指定了 build.lib，build.cssCodeSplit 会默认为 false。
      // __dirname的值是vite.config.ts文件所在目录
      entry: resolve(__dirname, 'packages/TableUi/index.ts'),  // entry是必需的，因为库不能使用HTML作为入口。
      name: 'VueReportUi', // 暴露的全局变量
      fileName: '@lyhzwf/table-ui' // 输出的包文件名，默认是package.json的name选项
    },*/
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'TableUi',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled: true // 允许在less文件中使用js
      }
    }

  }
})
