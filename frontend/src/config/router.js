import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home/Home.vue'
import AdminPages from '../components/admin/AdminPages.vue'
import ArticlesByCategory from '../components/article/ArticlesByCategory.vue'

Vue.use(VueRouter)

const routes = [{
        name: 'home',
        path: '/',
        component: Home

    }, {

        name: 'adminPages',
        path: '/admin',
        component: AdminPages
    }, {

        name: 'articlesByCategory',
        path: '/categories/:id/articles',
        component: ArticlesByCategory
    }
]


export default new VueRouter({
    mode: 'history',
    routes: routes
})

