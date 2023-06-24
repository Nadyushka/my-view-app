<script>
export default {

}
</script>

<template>
<div class="navbar">
  <h1>Vue3</h1>
  <div class="navbar__btns">
    <my-button @click="$router.push('/')">Main</my-button>
    <my-button @click="$router.push('/posts')">My posts</my-button>
  </div>
</div>
</template>

<style scoped>
.navbar{
  height: 70px;
  background: lightgrey;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
}

.navbar__btns :first-child{
  margin-right: 10px;
}
</style>