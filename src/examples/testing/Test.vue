<template>
  <div class="karma-test">
    <h1 class="test-head">{{ msg }}</h1>

    <cdr-row :cols="3" ref="container">
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/400'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/400'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/400'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/400'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/400'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/400'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
      <cdr-col><div><img v-lazy.container="'http://lorempixel.com/400/200'" alt=""></div></cdr-col>
    </cdr-row>
  </div>
</template>

<script>
  import cdrRow from '../../components/layouts/Row';
  import cdrCol from '../../components/layouts/Col';

  export default {
    name: 'test',
    components: { cdrRow, cdrCol },
    data() {
      return {
        msg: 'Testing 1 2 3',
      };
    },
  };
</script>
