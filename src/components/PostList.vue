<script setup>

</script>

<template>
  <div class="post" v-for="post in posts" v-bind:key="post.id">
    <div>{{ post.title }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>

<style scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
}
</style>