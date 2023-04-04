import { defineComponent as t, openBlock as o, createElementBlock as c } from "vue";
const a = {
  name: "table-ui"
}, s = /* @__PURE__ */ t({
  ...a,
  setup(e) {
    return (n, _) => (o(), c("div", null, "测试"));
  }
}), l = [s], r = function(e) {
  l.forEach((n) => {
    e.component(n.name, n);
  });
}, m = { install: r };
export {
  s as TabaleUi,
  m as default
};
