<template>
  <div id="app" class="container-fluid">

  <cdr-row :cols="4">
    <cdr-col>
      <div><img src="" alt="" v-lazy="'https://placeimg.com/640/480/any'"></div>
    </cdr-col>
    <cdr-col>
      <div><img src="" alt="" v-lazy="'https://placeimg.com/640/680/any'"></div>
    </cdr-col>
    <cdr-col>
      <div><img src="" alt="" v-lazy="'https://placeimg.com/640/460/any'"></div>
    </cdr-col>
    <cdr-col>
      <div><img src="" alt="" v-lazy="'https://placeimg.com/640/640/any'"></div>
    </cdr-col>
    <cdr-col>
      <div><img src="" alt="" v-lazy="'https://placeimg.com/700/480/any'"></div>
    </cdr-col>
    <cdr-col>
      <div><img src="" alt="" v-lazy="'https://placeimg.com/640/480/any'"></div>
    </cdr-col>
    <cdr-col>
      <div><img src="" alt="" v-lazy="'https://placeimg.com/640/280/any'"></div>
    </cdr-col>
    <cdr-col>
      <div><img src="" alt="" v-lazy="'https://placeimg.com/640/500/any'"></div>
    </cdr-col>
  </cdr-row>


  <icons></icons>
  <headings></headings>
  <anchors></anchors>
  <buttons></buttons>
  <grid></grid>
  <test data-backstop="test"></test>

  </div>
</template>

<script>
  import Components from './components/_index';
  // add examples
  import examples from './examples/_index';

  Object.keys(examples).forEach((key) => {
    Components[key] = examples[key];
  });
  // end add examples

  export default {
    name: 'app',
    components: Components,
  };
</script>

<style>
img[lazy=loading] {
  background-color: red;
  width: 100px;
  height: 100px;
}
</style>
