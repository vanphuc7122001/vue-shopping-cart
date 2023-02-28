<template>
  <header>
    <the-header/>
  </header>
</template>

<script>

import TheHeader from './components/TheHeader.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style>
  header{
    background-color: #f1f1f1;
    height: 50px;
    max-width: 100%;
    box-shadow: 0 0 3px #000;
    margin: 0 auto;
  }
</style>
