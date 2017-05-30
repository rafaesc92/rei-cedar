<template>
  <div class="container">
    <cdr-heading :level="1" :modifier="['spruce-dsp-80']">Brand.ai demo</cdr-heading>
    <cdr-a href="https://www.rei.com" :modifier="['standalone']">A standalone link</cdr-a>
    <p>
      <cdr-icon url="/static/rei-icons.svg#icon-rei-star-100"></cdr-icon>
      <cdr-icon url="/static/rei-icons.svg#icon-rei-star-100"></cdr-icon>
      <cdr-icon url="/static/rei-icons.svg#icon-rei-star-100"></cdr-icon>
      <cdr-icon url="/static/rei-icons.svg#icon-rei-star-100"></cdr-icon>
      <cdr-icon url="/static/rei-icons.svg#icon-rei-star-100"></cdr-icon>
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eaque, dignissimos ipsum amet vero excepturi eum illum impedit, perferendis nobis adipisci doloribus voluptatibus distinctio nemo velit harum odit vel! Odio.</p>
    <cdr-button>Primary Button</cdr-button>
  </div>
</template>

<script>
import Components from '../components/_index';

export default {
  name: 'demo',
  components: Components,
};
</script>
