<script>

export default ({
  name: 'my-button'
})
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style>
.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  margin-top: 10px;
}
</style>