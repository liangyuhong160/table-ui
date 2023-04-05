import type { App } from 'vue'
import TableUi from './TableUi'

// 所有组件列表
const components = [
    TableUi
]

// 定义 install 方法
const install = (app: App): void => {
    // 遍历注册所有组件
    components.forEach(component => app.component(component.name, component))
}

const VueReportUi = {
    install
}

export {
    TableUi
}

export default VueReportUi