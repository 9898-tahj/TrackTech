import { createWebHistory, createRouter, type RouteRecordRaw  } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"Home",
        component: function(){
            return import('../pages/index.vue')
        },
    },
    {
        path:"/login",
        name:"LoginPage",
        component: function() {
            return import("../pages/login.vue")
        }
    },
    {
        path:"/SignUp",
        name:"SignUpPage",
        component: function() {
            return import("../pages/signup.vue")
        }
    },
    {
        path:"/dashboard",
        name:"Dashboard",
        component: function() {
            return import("../pages/dashboard.vue")
        }
    }
]

const router = createRouter({history:createWebHistory(),routes})

export default router