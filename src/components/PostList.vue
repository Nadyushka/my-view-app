<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}

</script>

<template>
  <div v-if="posts.length > 0">
    <h3>Users list</h3>
    <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
    />
  </div>
  <h3 v-else style="color:red">There are no posts</h3>
</template>

<style scoped>

</style>