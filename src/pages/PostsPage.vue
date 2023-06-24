<template>
  <div>
    <h1>Page with posts</h1>
    <div class="app__btns">
      <my-button @click="showDialog">Add post</my-button>
      <my-select v-model="selectedSort"
                 :options="sortOptions"
      ></my-select>
    </div>
    <my-input v-model="searchQuery" placeholder="Search.."/>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="addPost"/>
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removeItem"
        v-if="!isPostsLoading"/>

    <div v-if="isPostsLoading">Posts are loading...</div>
    <div ref="observer" class="observer"></div>

    <!--    Pagination-->
    <!--    <div class="page__wrapper">-->
    <!--      <div-->
    <!--          v-for="page in totalPage"-->
    <!--          :key="page"-->
    <!--          :class="{'current-page': currentPage === page}"-->
    <!--          @click='setCurrentPage(page)'>-->
    <!--        {{ page }}-->
    <!--      </div>-->
    <!--    </div>-->
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
      searchQuery: '',
      sortOptions: [
        {value: 'title', name: 'Title'},
        {value: 'body', name: 'Body'}
      ],
      currentPage: 1,
      limit: 10,
      totalPage: 0,
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
    // setCurrentPage(pageNumber) {
    //   this.currentPage = pageNumber
    // },
    async getPosts() {
      this.isPostsLoading = true
      try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit)
        this.posts = res.data
      } catch (e) {
        console.log(e)
      } finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts() {
      try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.currentPage += 1
        this.posts = [...this.posts, ...res.data]

      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.getPosts()

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    }
    // eslint-disable-next-line no-unused-vars
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPage) {
        this.loadMorePosts()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.observer)
  },
  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //   })
    // }
    // currentPage(){
    //   this.getPosts()
    // }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style>


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

/*.page__wrapper {*/
/*  display: flex;*/
/*  margin: 10px 10px;*/
/*}*/

/*.page__wrapper div {*/
/*  margin: 0px 10px;*/
/*  cursor: pointer;*/
/*}*/

/*.current-page {*/
/*  border: 2px solid teal;*/
/*  padding: 1px; */
/*}*/

</style>
