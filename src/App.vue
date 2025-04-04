<script setup lang="ts">
import {PageLoadAnimation} from "./animations/anime.ts"
import {computed} from "vue"
import SideNavigation from "./components/sideNavigationBar.vue";
import {useShowNavBar} from "./store/useShowNavBar"
import {getDarkModeStatus} from "./composables/themeComposable.ts"
import alertComponent from './components/alert.vue'
import errorComponent from './components/error.vue'
import successModal from "./components/successModal.vue";
import VehicleComponent from "./components/addVehicleComponent.vue";
import VehicleDetails from "./components/VechileDetails.vue";
import editVehicle from "./components/editVehicle.vue";
import DeviceModal from "./components/addDeviceModal.vue";
import Modal from "./components/deviceModal.vue"

  const store = useShowNavBar()
  let showNavbar = computed<boolean>(() => {return store.getShowNavBar })
</script>

<template>
  <section
    class="flex lg:flex-row flex-col space-x-0 space-y-2 lg:space-y-0 lg:space-x-2 px-1 w-full 
    font-poppins transition-all ease-in-out duration-700 lg:overflow-hidden"
    :class="getDarkModeStatus() ? 'bg-innerDark' : 'bg-gray-200 text-teal-900'"
  >
    <div v-if="showNavbar" class="lg:flex hidden py-2">
      <SideNavigation/>
    </div>

    <div v-if="showNavbar" class="lg:hidden flex py-2">
    </div>

    <router-view v-slot="{ Component }">
      <component
        v-motion="PageLoadAnimation"
        :is="Component"
      />
    </router-view>

    <alertComponent/>
    <errorComponent/>
    <successModal/>

    <VehicleComponent/>
    <VehicleDetails/>
    <editVehicle/>

    <DeviceModal/>
    <Modal/>
  </section>
</template>

