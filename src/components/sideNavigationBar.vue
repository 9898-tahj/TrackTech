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
function openVehicleModal(){ modal.changeAddVehicleModalStatus()}
function openDeviceModal(){ modal.changeDeviceModalStatus() }
</script>

<template>
  <section
      class="w-full h-full p-1.5 rounded-md border-2 border-dashed flex flex-col justify-between items-center"
      :class="getDarkModeStatus() ? 'bg-Dark border-teal-950 text-teal-400'
      :'bg-white border-teal-100'"
  >
    <div
        class="flex flex-col w-full space-y-2 justify-center items-center p-1 rounded-md"
        :class="getDarkModeStatus() ? 'bg-innerDark' : ''"
    >
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

      <router-link
          to="/dashboard"
          class="flex justify-center items-center cursor-pointer space-x-2 border-2 rounded-md w-full p-1 font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
          : 'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
          <path fill-rule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clip-rule="evenodd" />
        </svg>

        <h2>Home</h2>
      </router-link>

      <button
          @click="openVehicleModal()"
          class="flex justify-center items-center cursor-pointer space-x-2 border-2 rounded-md w-full p-1 font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
          : 'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
        </svg>
        <text>Add Vehicle</text>
      </button>

      <button
          @click="openDeviceModal()"
          class="flex justify-center items-center cursor-pointer space-x-2 border-2 rounded-md w-full p-1 font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
          : 'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clip-rule="evenodd" />
        </svg>
        <text>Add Device</text>
      </button>

      <button
          class="flex justify-center items-center cursor-pointer space-x-2 border-2 rounded-md w-full p-1 font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
          : 'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
        </svg>

        <text>GeoFence</text>
      </button>


      <router-link
          to="/settings"
          class="flex justify-center items-center cursor-pointer space-x-2 border-2 rounded-md w-full p-1 font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
          : 'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
          <path fill-rule="evenodd" d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z" clip-rule="evenodd" />
        </svg>
        <h2>Settings</h2>
      </router-link>

    </div>

   <div
       class="flex justify-between items-center  w-full p-2 rounded-md"
       :class="getDarkModeStatus() ? 'bg-innerDark':'bg-gray-100'"
   >

     <button
         @click="changeTheme()"
         class="border-2 rounded-md p-1.5 transition-all ease-in-out duration-500 cursor-pointer"
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
         class="border-2 py-1 px-2 rounded-md cursor-pointer"
     >
       Logout
     </button>

   </div>

  </section>
</template>

