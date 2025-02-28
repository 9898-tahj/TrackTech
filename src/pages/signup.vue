<script setup lang="ts">
import {ref} from 'vue'
import {StaggerEffect} from '../animations/anime.ts'
import {getDarkModeStatus} from '../composables/themeComposable.ts'
import {useAlertStore} from '../store/useAlertStore.ts'
import {authenticationStore} from "../store/useAuthenticationStore.ts";

const alertStore = useAlertStore()
const authStore = authenticationStore()

let first_name = ref<string>('')
let last_name = ref<string>('')
let email = ref<string>('')
let password = ref<string>('')

  function register() {
    if (!email.value || !password.value || !last_name.value || !first_name.value) {
      alertStore.changeAlert("Please ensure the all information is entered correctly.")
      setTimeout(() => {
        alertStore.changeAlert("")
      }, 3500)
    } else {
      authStore.registerUsers(first_name.value, last_name.value, email.value, password.value)
    }
  }

</script>

<template>
  <section class="w-full min-h-screen flex p-1 space-x-1 ">

    <div
        v-motion="StaggerEffect(715,0,-100)"
        class="flex-auto w-full border-2 rounded-2xl bg-cover bg-[url(https://images.unsplash.com/photo-1504999968522-8765b15c8aee?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
        :class=" getDarkModeStatus() ? '':'border-teal-100' "
    >

    </div>

    <div
        v-motion="StaggerEffect(725,0,100)"
        class="flex-auto w-full border-2 rounded-2xl p-2"
        :class=" getDarkModeStatus() ? 'bg-Dark text-white border-teal-950' : 'bg-gray-100 border-teal-100' "
    >
      <div class="w-full h-full flex flex-col justify-between px-1 py-2">


        <div class="flex w-full flex-col space-y-4">
          <h1 class="font-semibold lg:text-6xl leading-tight">
            Hello there
          </h1>
          <h3>Glad that you can join us.</h3>
        </div>

        <div
            class="w-full p-2 rounded-md flex flex-col space-y-6"
            :class="getDarkModeStatus() ? 'bg-innerDark' : 'bg-white '"
        >
          <div class="flex flex-col space-y-1 w-full">
            <label for="first_name">
              First Name:
            </label>
            <input
                id="first_name"
                v-model="first_name"
                class="w-full p-1 rounded-md border-2 outline-none transition-all ease-in-out duration-500"
                type="text"
            >
          </div>

          <div class="flex flex-col space-y-1 w-full">
            <label for="last_name">
              Last Name:
            </label>
            <input
                id="last_name"
                v-model="last_name"
                class="w-full p-1 rounded-md border-2 outline-none transition-all ease-in-out duration-500"
                type="text"
            >
          </div>

          <div class="flex flex-col space-y-1 w-full">
            <label for="username">
              Email Address
            </label>
            <input
                id="username"
                v-model="email"
                class="w-full p-1 rounded-md border-2 outline-none transition-all ease-in-out duration-500"
                type="email"
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
                type="password"
            >
          </div>
        </div>

        <div class="flex w-full justify-center items-center">
          <button
              @click="register()"
              class="p-2 rounded-md border-2 w-1/2 font-medium"
          >
            Register
          </button>
        </div>

      </div>
    </div>

  </section>
</template>
