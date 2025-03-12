<script setup lang="ts">
 import {getDarkModeStatus} from "../composables/themeComposable.ts";
 import { MglMap } from "@indoorequal/vue-maplibre-gl";
 import { jamaica_location } from "../lib/constants";
 import MapView from '../components/yourLocation.vue';
</script>

<template>
  <section class="flex w-full min-h-screen py-2 space-x-1 ">

    <div
        class="grow w-full min-h-[92vh] rounded-md border-2 border-dashed"
        :class="getDarkModeStatus() ? 'bg-Dark border-teal-950 text-teal-400'
        :'bg-white border-teal-100'"
    >
      <div class="w-full h-full">
        <mgl-map :center="jamaica_location" :zoom="1" map-style="https://tiles.openfreemap.org/styles/liberty">
          <MapView/>
        </mgl-map>
      </div>
    </div>

  </section>
</template>
