<script setup lang="ts">
 import {getDarkModeStatus} from "../composables/themeComposable.ts";
 import { MglMap, MglNavigationControl } from "@indoorequal/vue-maplibre-gl";
 import { jamaica_location } from "../lib/constants";
 import { useAlertStore } from "../store/useAlertStore.ts"
 import MapView from '../components/yourLocation.vue';

 const alertStore = useAlertStore();

 function get_car_details(){ alertStore.changeVehcile_details(); }
</script>

<template>
  <section class="flex w-full min-h-screen py-2 space-x-1 ">

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
            class="flex justify-center items-center cursor-pointer space-x-2 border-2 rounded-md  py-1
            px-4 font-medium transition-all ease-in-out duration-700 hover:-translate-y-2"
            :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
             :'bg-gray-100 hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
        >

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
            <path fill-rule="evenodd" d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z" clip-rule="evenodd" />
          </svg>

          <text>Vehicle GPS Settings</text>
        </button>

      </div>

    </div>

  </section>
</template>
