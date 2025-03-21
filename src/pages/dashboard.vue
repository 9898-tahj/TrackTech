<script setup lang="ts">
 import {getDarkModeStatus} from "../composables/themeComposable.ts";
 import { MglMap, MglNavigationControl } from "@indoorequal/vue-maplibre-gl";
 import { jamaica_location } from "../lib/constants";
 import MapView from '../components/yourLocation.vue';
</script>

<template>
  <section class="flex w-full min-h-screen py-2 space-x-1 ">

    <div
        class="flex flex-col space-y-2 w-full min-h-[92vh] rounded-md border-2 border-dashed p-2"
        :class="getDarkModeStatus() ? 'bg-Dark border-teal-950 text-teal-400'
        :'bg-white border-teal-100'"
    >
      <mgl-map
          height="700px"
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
          class="w-full flex items-center space-x-4 px-4  py-2 rounded-md"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-400'
          :'bg-gray-100'"
      >
         <button
             class="flex flex-col justify-center items-center w-24  border-2 rounded-md p-2 text-sm font-medium cursor-pointer"
             :class="getDarkModeStatus() ? 'bg-Dark border-teal-950 text-teal-400':'bg-white border-teal-100'"
         >

           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 mb-2">
             <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
             <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
             <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
           </svg>

           Location history
         </button>

        <button
            class="flex flex-col justify-center items-center w-24  border-2 rounded-md p-2 text-sm font-medium cursor-pointer"
            :class="getDarkModeStatus() ? 'bg-Dark border-teal-950 text-teal-400':'bg-white border-teal-100'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 mb-2">
            <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
          </svg>

          Local Device
        </button>



      </div>

    </div>

  </section>
</template>
