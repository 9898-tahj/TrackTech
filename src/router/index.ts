import { createWebHistory, createRouter, type RouteRecordRaw  } from 'vue-router'
import {useShowNavBar} from "../store/useShowNavBar"

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
    },
    {
        path:"/settings",
        name:"Settings",
        component: function() {
            return import("../pages/settings.vue")
        }
    }
]

const router = createRouter({history:createWebHistory(),routes})

router.beforeEach((to,_from, next) => {

    const store = useShowNavBar();

    if(to.path === "/" || to.path === "/SignUp" || to.path === "/login"){
       if(store.getShowNavBar === true){
           store.changeNavBarStatus()
       }
       next()
    }else{
        next()
    }

    // if(to.path === "/") {
    //     if(store.getShowNavBar === false){
    //         store.changeNavBarStatus()
    //         store.changeSidebarStatus()
    //     }
    //     next()
    // }else{
    //    if(store.getShowNavBar === true){
    //        store.changeNavBarStatus()
    //        store.changeSidebarStatus()
    //    }
    //    next()
    // }
})

export default router