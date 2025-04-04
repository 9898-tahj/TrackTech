<script setup lang="ts">
 import {getDarkModeStatus} from "../composables/themeComposable.ts";
 import { MglMap, MglNavigationControl } from "@indoorequal/vue-maplibre-gl";
 import { jamaica_location } from "../lib/constants";
 import { useAlertStore } from "../store/useAlertStore.ts"
 import MapView from '../components/yourLocation.vue';

 const alertStore = useAlertStore();

 function get_car_details(){ alertStore.changeVehcile_details(); }
 function get_devices(){ alertStore.change_device_details(); }
</script>

<template>
  <section class="flex w-full min-h-screen py-2 space-x-1">
    <div
      class="flex flex-col space-y-2 w-full min-h-[96vh] rounded-md border-2 border-dashed p-2"
      :class="getDarkModeStatus() ? 'bg-Dark border-teal-950 text-teal-400'
      :'bg-white border-teal-100'"
    >

      <mgl-map
          height="100%"
          width="100%"
          :center="jamaica_location"
          :zoom="1"
          :map-style="getDarkModeStatus() ? 'https://api.maptiler.com/maps/toner-v2/style.json?key=s9ir98CaGWD8XA9PEIsC'
          :' https://tiles.openfreemap.org/styles/liberty'"
      >
        <mgl-navigation-control />
        <MapView/>
      </mgl-map>

      <div class="flex w-full">
        <h1 class="font-semibold">
          Additional Options
        </h1>
      </div>

      <div
          class="w-full flex items-center space-x-2 px-4  py-2 rounded-md"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-400'
          :'bg-gray-100'"
      >
        <button
             @click="get_car_details()"
             class="flex justify-center items-center cursor-pointer space-x-2 border-2 rounded-md py-1 px-4
             font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
             :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
             :'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
         >

           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
             <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
             <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
             <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
           </svg>

           <text>My Vehicles</text>
        </button>

        <button
            @click="get_devices()"
            class="flex justify-center items-center cursor-pointer space-x-2 border-2 rounded-md py-1 px-4
            font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
            :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
            :'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
         >
            <span class="flex justify-center items-center space-x-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M10.5 18a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                <path fill-rule="evenodd" d="M7.125 1.5A3.375 3.375 0 0 0 3.75 4.875v14.25A3.375 3.375 0 0 0 7.125 22.5h9.75a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 16.875 1.5h-9.75ZM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 0 1 6 19.125V4.875Z" clip-rule="evenodd" />
              </svg>
            </span>
            <text>My Devices</text>
        </button>

      </div>

    </div>
  </section>
</template>
