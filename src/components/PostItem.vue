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
    <div class="post__body">
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Body:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
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

.post__body {
  width: 90%
}

.post__btns :first-child{
  margin-right: 5px;
}
</style>