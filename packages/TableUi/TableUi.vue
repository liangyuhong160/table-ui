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
import 'ant-design-vue/lib/form/style';
import 'ant-design-vue/lib/input/style';
</script>
<script lang="ts">
export default {
  name: 'TableUi',
};
</script>

<style scoped>

</style>