<script setup lang="ts">
import { useMap,  MglPopup } from '@indoorequal/vue-maplibre-gl';
import { jamaica_location } from '../lib/constants';
import { ref, watchEffect } from 'vue';
import { getLocation } from '../lib/map_apis';
import { getDarkModeStatus } from '../composables/themeComposable'

const coordinates = ref(jamaica_location);
const mapRef = useMap();

watchEffect(async () => {
  if (!mapRef.isLoaded || !mapRef.map) return;

  const location = await getLocation();
  if (location !== jamaica_location) {
    coordinates.value = location;
    mapRef.map.flyTo({ center: location, zoom: 14 });
  }
})
</script>
<template>
  <mgl-popup v-if="mapRef.isLoaded" :close-on-click="false" :coordinates="coordinates">
    <div
        class="flex flex-col space-y-4 justify-center items-center font-semibold text-xl"
        :class="getDarkModeStatus() ? 'text-teal-700'
        :'text-indigo-500'"
    >
      <h3>Approximate Location.</h3>
    </div>
  </mgl-popup>
</template>