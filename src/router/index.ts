import { createWebHistory, createRouter, type RouteRecordRaw  } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"Home",
        component: function(){
            return import('../pages/index.vue')
        }
    }
]

const router = createRouter({history:createWebHistory(),routes})

export default router