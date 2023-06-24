<template>
  <my-navbar></my-navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

import MyNavbar from "@/components/UI/MyNavbar.vue";

export default {
  components: {MyNavbar}
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.app {
  padding: 15px;
}

</style>
