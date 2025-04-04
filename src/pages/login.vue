<script setup lang="ts">
import {ref} from 'vue'
import {StaggerEffect} from '../animations/anime.ts'
import {getDarkModeStatus} from '../composables/themeComposable.ts'
import {useAlertStore} from '../store/useAlertStore.ts'
import {authenticationStore} from "../store/useAuthenticationStore.ts";

const alertStore = useAlertStore()
const authStore = authenticationStore()

  let username = ref<string>('')
  let password = ref<string>('')

  function login() {
    if (!username.value || !password.value) {
        alertStore.changeAlert("Please ensure the username or password is entered correctly.")
        setTimeout(()=>{alertStore.changeAlert("")},3500)
    }else{
      authStore.authentication(username.value, password.value)
    }
  }

  function SignUpInWithGoogle() { authStore.googleOAuthSignUp() }
</script>

<template>
  <section class="w-full min-h-screen flex p-1 space-x-1 ">

    <div
      v-motion="StaggerEffect(715,0,-100)"
      class="lg:flex lg:flex-auto hidden w-full border-2 rounded-2xl bg-cover bg-[url(https://images.unsplash.com/photo-1594935975218-a3596da034a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
      :class="getDarkModeStatus() ? '':'border-teal-100' "
    >
    </div>

    <div
        v-motion="StaggerEffect(725,0,100)"
        class="flex-auto w-full border-2 rounded-2xl p-2"
        :class=" getDarkModeStatus() ? 'bg-Dark text-white border-teal-950' : 'bg-gray-100 border-teal-100' "
    >
      <div class="w-full h-full flex flex-col justify-between p-1">


       <div class="flex w-full flex-col space-y-4">
         <h1 class="font-semibold lg:text-6xl leading-tight">
           Welcome Back 👋🏾
         </h1>
         <h3>Glad to see you again.</h3>
       </div>

        <div
            class="w-full p-2 rounded-md flex flex-col space-y-6"
            :class="getDarkModeStatus() ? 'bg-innerDark' : 'bg-white '"
        >
          <div class="flex justify-center items-center w-full p-2">
            <button
                @click="SignUpInWithGoogle()"
                class="flex justify-center items-center space-x-2 font-medium border-2 p-1.5 rounded-xl cursor-pointer border-t-[#fbbc05] border-b-[#ea4335] border-r-[#673ab7] border-l-[#4285f4] "
                :class="getDarkModeStatus() ? 'bg-Dark' : 'bg-[#fafafa]'"
            >
              <img width="32" height="32" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
              <h1 class="text-[#34a853]">SignIn With Google</h1>
            </button>
          </div>

            <div class="flex flex-col space-y-1 w-full">
              <label for="username">
                Email Address
              </label>
              <input
                  id="username"
                  v-model="username"
                  class="w-full p-1 rounded-md border-2 outline-none transition-all ease-in-out duration-500"
                  :class="getDarkModeStatus() ? 'bg-Dark border-teal-900 focus:border-green-500'
                  : 'bg-teal-50 border-teal-100 focus:border-indigo-500'"
                  type="text"
              >
            </div>

          <div class="flex flex-col space-y-1 w-full">
            <label for="password">
              Password
            </label>
            <input
                id="username"
                v-model="password"
                class="w-full p-1 rounded-md border-2 outline-none transition-all ease-in-out duration-500"
                :class="getDarkModeStatus() ? 'bg-Dark border-teal-900 focus:border-green-500'
                :'bg-teal-50 border-teal-100 focus:border-indigo-500'"
                type="password"
            >
          </div>

          <div class="flex justify-between items-center w-full px-2">
            <a
                href="#"
                class="font-medium text-indigo-500"
            >
              Forget Password
            </a>

            <router-link
                to="/SignUp"
                class="font-medium text-green-500"
            >
              <h2>Don't have an account?</h2>
            </router-link>
          </div>
        </div>

        <div class="flex w-full justify-center items-center">
          <button
              @click="login()"
              class="p-2 rounded-md border-2 w-1/2 font-medium"
          >
            Login
          </button>
        </div>



      </div>
    </div>
  </section>
</template>
