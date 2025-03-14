<script setup lang="ts">
import {onMounted,computed} from "vue";
import {authenticationStore} from '../store/useAuthenticationStore.ts'
import {getDarkModeStatus} from "../composables/themeComposable.ts";
import {useThemeStore} from "../store/useThemeStore"
import {useAlertStore} from "../store/useAlertStore.ts";

const theme = useThemeStore()
const auth = authenticationStore()
const modal = useAlertStore()

onMounted(()=>{ auth.GetUser() })

let user = computed(()=>{ return auth.getUser })

function signOut() {auth.Logout() }
function changeTheme(){theme.changeTheme()}
function openAddDeviceComponent(){ modal.changeAddDeviceModalStatus()}
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

    <div
        class="flex flex-col w-full space-y-6 justify-center items-center p-2 rounded-md"
        :class="getDarkModeStatus() ? 'bg-innerDark '
        :'bg-gray-100'"
    >

      <button
          @click="openAddDeviceComponent()"
          class="flex justify-center items-center space-x-2 border-2 rounded-md w-full p-1 font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
          : 'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
        </svg>
        <text>Add Device</text>
      </button>

      <button
          class="flex justify-center items-center space-x-2 border-2 rounded-md w-full p-1 font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
          : 'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
        </svg>

        <text>GeoFence</text>
      </button>

    </div>

   <div
       class="flex justify-between items-center  w-full p-2 rounded-md"
       :class="getDarkModeStatus() ? 'bg-innerDark':'bg-gray-100'"
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

