<script setup lang="ts">
import { useMap, MglScaleControl,  MglFullscreenControl, MglMarker,  MglGeolocateControl } from '@indoorequal/vue-maplibre-gl';
import { jamaica_location } from '../lib/constants';
import { ref, watchEffect } from 'vue';
import { getLocation } from '../lib/map_apis';
import type { LngLatLike } from "maplibre-gl";
//import { getDarkModeStatus } from '../composables/themeComposable'

const coordinates = ref(jamaica_location);
const mapRef = useMap();

watchEffect(  async () => {
  if (!mapRef.isLoaded || !mapRef.map) return;

  const location =  await getLocation();
  if (location !== jamaica_location) {
    coordinates.value = location;
    mapRef.map.flyTo({ center: location, zoom: 15 });
  }else{
    mapRef.map.flyTo({ center: location, zoom: 15 });
  }
})

</script>

<template>
  <mgl-marker :coordinates="coordinates" color="#615efe" />
  <mgl-fullscreen-control/>
  <mgl-scale-control/>
  <mgl-geolocate-control/>
</template>