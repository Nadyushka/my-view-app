import {createRouter, createWebHistory} from "vue-router";
import PostsPage from "@/pages/PostsPage.vue";
import MyMain from '@/pages/MyMain.vue'
import PostPage from "@/pages/PostPage.vue";


const routes = [
    {
        path: '/',
        component: MyMain
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/posts/:id',
        component: PostPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router