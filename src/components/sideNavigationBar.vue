<script setup lang="ts">
import {onMounted,computed} from "vue";
import {authenticationStore} from '../store/useAuthenticationStore.ts'
import {getDarkModeStatus} from "../composables/themeComposable.ts";
import {useThemeStore} from "../store/useThemeStore"

const theme = useThemeStore()
const auth = authenticationStore()

onMounted(()=>{ auth.GetUser() })

let user = computed(()=>{ return auth.getUser })

function signOut() {auth.Logout() }
function changeTheme(){theme.changeTheme()}
</script>

<template>
  <section
      class="w-full h-full p-1.5 rounded-md border-2 border-dashed flex flex-col justify-between items-center"
      :class="getDarkModeStatus() ? 'bg-Dark border-teal-950 text-teal-400'
      :'bg-white border-teal-100'"
  >
    <div class="flex flex-col w-full space-y-2 justify-center items-center">
      <img
          class="rounded-full"
          :class="user.picture ? ' h-24 w-24':'h-8 w-8'"
          :src="user.picture ? `${user.picture}`:'https://img.icons8.com/material-sharp/24/user-male-circle.png'"
          alt="user avatar"
      />
      <h2>{{user.email}}</h2>
    </div>

    <div>



    </div>

   <div
       class="flex justify-between items-center  w-full p-2 rounded-md"
       :class="getDarkModeStatus() ? 'bg-innerDark'
       :'bg-teal-100'"
   >

     <button
         @click="changeTheme()"
         class="border-2 rounded-md p-1.5 transition-all ease-in-out duration-500 "
         :class="getDarkModeStatus() ? 'bg-yellow-500/25 border-yellow-500 text-yellow-500'
            :'bg-innerDark/25 text-teal-800 border-teal-800'"
     >
       <svg
           v-if="getDarkModeStatus()"
           xmlns="http://www.w3.org/2000/svg"
           fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor"
           class="size-6"
       >
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
       </svg>

       <svg
           v-if="!getDarkModeStatus()"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="size-6"
       >
         <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
       </svg>


     </button>

     <button
         @click="signOut()"
         class="border-2 py-1 px-2 rounded-md"
     >
       Logout
     </button>

   </div>

  </section>
</template>

