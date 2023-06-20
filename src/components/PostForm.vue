<script setup>

</script>

<template>
  <form @submit.prevent>
    <input v-bind:value="title"
           @input="title = $event.target.value "
           class="input"
           type="text"
           placeholder="add title"/>
    <input v-bind:value="body" @input="body = $event.target.value " class="input" type="text"
           placeholder="add body"/>
    <button @click="addPost" class="btn">Submit</button>
  </form>
</template>

<style scoped>

.input {
  margin-top: 15px;
  border: 1px solid teal;
  width: 100%;
  padding: 10px 15px;
}

.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  margin-top: 10px;
}

</style>