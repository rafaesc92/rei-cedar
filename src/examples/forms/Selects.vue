<template>
  <div class="form-example">
    <h2>Selects</h2>
    <cdr-select label="Normal" v-model="select1">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </cdr-select>
    <p>select1 = {{select1}}</p>
  </div>
</template>

<script>
import Components from '../../components/_index';

export default {
  name: 'selects',
  components: Components,
  data() {
    return {
      select1: '',
    };
  },
};
</script>

<style>
  .form-example {
    padding: 10px;
  }
</style>
