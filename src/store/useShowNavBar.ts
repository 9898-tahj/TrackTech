import {defineStore} from 'pinia'

export const useShowNavBar = defineStore('useShowNavBar',{

    state:()=>({
        showNavBar:true as boolean,
        showSidebar:true as boolean,
    }),

    getters:{
        getShowNavBar: (state) => state.showNavBar,
        getShowSideBar: (state) => state.showSidebar
    },

    actions:{
       changeNavBarStatus(){
           this.showNavBar = !this.showNavBar
       }
    }
})