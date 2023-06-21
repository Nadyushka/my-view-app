<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-button @click="showDialog">Add post</my-button>
    <my-dialog v-model:show="dialogVisible" >
      <post-form @create="addPost"/>
    </my-dialog>
    <post-list :posts="posts" @remove="removeItem"/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";

export default {
  components: {MyDialog, PostForm, PostList},
  data() {
    return {
      posts: [
        {id: 1, title: 'title 1', body: 'description'},
        {id: 2, title: 'title 2', body: 'description'},
        {id: 3, title: 'title 3', body: 'description'},
      ],
      dialogVisible: false
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removeItem(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    }
  },

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
