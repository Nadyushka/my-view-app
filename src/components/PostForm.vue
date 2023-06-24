<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPosts() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent>
    <my-input
        v-model.trim="post.title"
        placeholder="add title"
        v-focus
    />
    <my-input
        v-bind:value="post.body"
        @input="post.body = $event.target.value"
        placeholder="add body"/>
    <my-button @click="createPosts" class="btn">Submit</my-button>
  </form>
</template>

<style scoped>

</style>