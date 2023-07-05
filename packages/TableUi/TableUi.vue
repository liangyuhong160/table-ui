<template>
  <div>测试333</div>
<!--  <a-input placeholder="Username"></a-input>-->
  <a-form>
    <a-form-item>
      <a-input placeholder="Username">
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input type="password" placeholder="Password">
      </a-input>
    </a-form-item>
  </a-form>

</template>

<script lang="ts" setup>
import {Form, FormItem} from 'ant-design-vue/lib/form';
import Input from 'ant-design-vue/lib/input';
import 'ant-design-vue/lib/form/style/css';
import 'ant-design-vue/lib/input/style/css';
function deepClone(obj) {
  if (typeof obj !== 'object') return obj;
  if (obj === null) return obj;
  if (obj instanceof RegExp) return obj;
  if (obj instanceof Date) return obj;
  let newObj = new obj.constructor();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}
</script>
<script lang="ts">
export default {
  name: 'TableUi',
};
</script>

<style lang="less" scoped>
@import 'ant-design-vue/lib/form/style';
@import 'ant-design-vue/lib/input/style';
</style>