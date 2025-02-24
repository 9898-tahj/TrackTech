import {defineStore} from 'pinia'
import {supabase} from '../lib/supabaseClient'

export const authenticationStore = defineStore('authenticationStore',{
    state:()=>({
        user:{}
    }),

    getters:{
        getUser: (state) => state.user
    },

    actions:{
        async authentication(email:string, password:string){

            const {data,error} = await supabase.auth.signInWithPassword({
                email:`${email}`,
                password:`${password}`
            })

            if(error){
                alert(error.message)
            }

            if(data){
                this.user = data
            }
        }
    },
})