<template>
  <div class="app">
    <post-form/>
    <post-list/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  components: {PostForm, PostList},
  data() {
    return {
      posts: [
        {id: 1, title: 'title 1', body: 'description'},
        {id: 2, title: 'title 2', body: 'description'},
        {id: 3, title: 'title 3', body: 'description'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    addPost() {
      const newPost = {id: Date.now(), title: this.title, body: this.body}
      this.posts.push(newPost)
      this.title = ''
      this.body = ''
    }
  }
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

form {
  display: flex;
  flex-direction: column;
}

</style>
