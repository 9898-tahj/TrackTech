<script setup lang="ts">
import {onMounted,computed} from "vue";
import {authenticationStore} from '../store/useAuthenticationStore.ts'
import {getDarkModeStatus} from "../composables/themeComposable.ts";

const auth = authenticationStore()

onMounted(()=>{ auth.GetUser() })

let user = computed(()=>{ return auth.getUser })

function signOut() {auth.Logout() }
</script>

<template>
  <section
      class="w-full h-full px-1 py-2 rounded-md flex flex-col justify-between items-center"
      :class="getDarkModeStatus() ? '':'bg-white border-teal-100'"
  >
    <div class="flex flex-col w-full space-y-2 justify-center items-center">
      <img
          class="rounded-full"
          :class="user.picture ? ' h-24 w-24':'h-8 w-8'"
          :src="user.picture ? `${user.picture}`:'https://img.icons8.com/material-sharp/24/user-male-circle.png'"
          alt="user avatar"
      >
      <h2>{{user.email}}</h2>

    </div>

    <div></div>

    <button
        @click="signOut()"
        class="border-2 py-1 px-2 rounded-md"
    >
      Logout
    </button>

  </section>
</template>

