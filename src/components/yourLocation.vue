<script setup lang="ts">
import {
  useMap,
  MglPopup,
  MglScaleControl,
  MglFullscreenControl,
  MglGeolocateControl
} from '@indoorequal/vue-maplibre-gl';
import { ref, watchEffect } from 'vue';
import { getLocation } from '../lib/map_apis';
import {jamaica_location} from '../lib/constants.ts'

const coordinates = ref(jamaica_location);

const mapRef = useMap();

watchEffect(  async () => {

  if (!mapRef.isLoaded || !mapRef.map) return;

  try{
    const location = await getLocation();

    if( location !== jamaica_location){
      coordinates.value = location;
      mapRef.map.flyTo({ center: location, zoom: 16 });
    }

  }catch (err:any){
      alert(err.message)
  }
})

</script>

<template>
  <mgl-popup v-if="mapRef.isLoaded" :close-on-click="false" :coordinates="coordinates">
    <h3 class="text-lg text-teal-950 font-semibold text-center">Approximately Location</h3>
  </mgl-popup>
  <mgl-fullscreen-control/>
  <mgl-scale-control/>
  <mgl-geolocate-control/>
</template>