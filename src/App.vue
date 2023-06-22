<template>
  <div class="app">
    <h1>Page with posts</h1>
    <div class="app__btns">
      <my-button @click="showDialog">Add post</my-button>
      <my-select v-model="selectedSort"
                 :options="sortOptions"
      ></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="addPost"/>
    </my-dialog>
    <post-list :posts="sortedPosts" @remove="removeItem" v-if="!isPostsLoading"/>
    <div v-if="isPostsLoading">Posts are loading...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";

export default {
  components: {MySelect, MyDialog, PostForm, PostList},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'Title'},
        {value: 'body', name: 'Body'}
      ]
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
    },
    async getPosts() {
      this.isPostsLoading = true
      try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        this.posts = res.data
      } catch (e) {
        console.log(e)
      } finally {
        this.isPostsLoading = false
      }
    },
  },
  mounted() {
    this.getPosts()
  },
  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(post2[newValue])
  //     })
  //   }
  // },
  computed:{
    sortedPosts() {
     return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
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

.app__btns {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}

</style>
