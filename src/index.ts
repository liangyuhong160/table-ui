import TabaleUi from './components//TableUi/TableUi.vue';
export {TabaleUi};

const components = [TabaleUi];

const install = function(App: any) {
    components.forEach(comp => App.use(comp))
    // components.forEach((component) => {
    //     App.component(component.name,component);
    // });
};
export default { install } // 批量的引入*
