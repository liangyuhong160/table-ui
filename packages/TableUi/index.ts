import type { App } from 'vue'
import TableUi from './TableUi.vue';

// 使用install方法，在app.use挂载
(TableUi as any).install = (app: App) => {
    app.component(TableUi.name, TableUi)
}

export default TableUi

