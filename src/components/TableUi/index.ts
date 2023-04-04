import TabaleUi from './TableUi.vue';
export {TabaleUi};

const components = [TabaleUi];

const install = function(App: any) {
    components.forEach((component) => {
        App.component(component.name,component);
    });
};
export default install // 批量的引入*




// const TableLUi = {
//     install(App: any) {
//         components.forEach((item) => {
//             App.component(item.name, TabaleUi);
//         });
//     },
// };
// export default TableLUi;