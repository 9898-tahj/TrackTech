import {defineStore} from 'pinia'
import {useAlertStore} from './useAlertStore'
import {supabase} from "../lib/supabaseClient.ts";
import type {UserMetaData} from "../Types/database.types.ts"
import router from "../router";

export const authenticationStore = defineStore('authenticationStore',{
    state:()=>({
        user:{} as UserMetaData
    }),

    getters:{
       getUser: (state) => state.user
    },

    actions:{
        async authentication(email:string, password:string){

            const alert = useAlertStore()

            const {error} = await supabase.auth.signInWithPassword({
                email:`${email}`,
                password:`${password}`
            })

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},3500)
            }else{
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
                alert.changeSuccessStatus("Please verify your account by checking your email.")
                setTimeout(()=>{alert.changeSuccessStatus("")},4500)
            }

        },

        async googleOAuthSignUp(){
            const alert = useAlertStore()

           try {

              await  supabase.auth.signInWithOAuth({
                   provider: 'google',
                   options:{ redirectTo: `${import.meta.env.VITE_REDIRECT_TO}`}
              })


           }catch (error:any){
               alert.changeError(error.message)
               setTimeout(()=>{alert.changeError("")},3500)
           }
        },

        async GetUser(){

            const { data: { session } } = await supabase.auth.getSession()

            if(session){
                this.user = session.user.user_metadata
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