import type { App } from 'vue'
import TableUi from './TableUi.vue';

// 使用install方法，在app.use挂载
(TableUi as any).install = (app: App) => {
    app.component(TableUi.name, TableUi)
}

export default TableUi

/* import type { App } from 'vue'
import TabaleUi from './TableUi.vue';
export {TabaleUi};

const components = [TabaleUi];

const install = function(app: App) {
    components.forEach((component) => {
        app.component(component.name,component);
    });
};
export default install
if (typeof window !== 'undefined' && (window as any).Vue) {install((window as any).Vue);} */

// src/index.js
/*import type { App } from 'vue'
import Hello from './TableUi.vue';
const components = [Hello];
const componentName = ['Hello'];
const install = function (Vue: App) {components.forEach((component, index) => {Vue.component(componentName[index], component);});
};
export default {install,
};
if (typeof window !== 'undefined' && (window as any).Vue) {install((window as any).Vue);}*/
