<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    deletePost(post) {
      this.$emit('remove', post)
    }
  }
}
</script>

<template>
  <div class="post">
    <div>
      <div>{{ post.title }}</div>
      <div>{{ post.body }}</div>
    </div>
    <div>
      <my-button @click="deletePost">Delete</my-button>
    </div>
  </div>
</template>

<style scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
  display: flex;
  justify-content: space-between;
}
</style>