import {defineStore} from 'pinia'
import {useAlertStore} from './useAlertStore'
import {supabase} from "../lib/supabaseClient.ts";
import router from "../router";

export const authenticationStore = defineStore('authenticationStore',{
    state:()=>({
        user:{}
    }),

    getters:{
        getUser: (state) => state.user
    },

    actions:{
        async authentication(email:string, password:string){

            const alert = useAlertStore()

            const {data,error} = await supabase.auth.signInWithPassword({
                email:`${email}`,
                password:`${password}`
            })

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},3500)
            }else{
                this.user = data
                await router.push('/dashboard')
            }

        },

        async registerUsers(_first_name:string,_lastname:string,email:string,password:string){

            const alert = useAlertStore()

            const {data, error} = await supabase.auth.signUp({
                email:email,
                password:password
            })

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},3500)
            }

            if(data){
                // const { error } = await supabase.from('user_table')
                // .insert( {
                //     user_id: `${data.user.id}`,
                //     first_name:`${first_name}`,
                //     last_name:`${lastname}`,
                //     email:`${email}`
                // })
                //
                // if(error){
                //     alert.changeError(error.message)
                //     setTimeout(()=>{alert.changeError("")},3500)
                // }
                //
                // if(data){
                //     this.user = data
                // }
                await router.push('/dashboard')
            }

        },

        async GetUser(){

            const { data: { user } } = await supabase.auth.getUser()

            if(user){
                this.user = user
            }
        },

        async Logout(){
            const alert = useAlertStore()
            let { error } = await supabase.auth.signOut()

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},3500)
            }else{
                await router.push('/')
            }
        }
    },
})