<script setup lang="ts">
import {computed, reactive} from "vue";
import type {Database} from '../Types/database.types.ts'
import {modal_bg_movement,StaggerEffect} from '../animations/anime.ts'
import {getDarkModeStatus} from '../composables/themeComposable.ts'
import {useAlertStore} from '../store/useAlertStore.ts'
import {useMotions} from "@vueuse/motion";
import {useDeviceStore} from '../store/useDeviceStore.ts'

type Device = Database['public']['Tables']['devices']['Insert']
const modalStore = useAlertStore()
const motions = useMotions()
const store = useDeviceStore()

let device = reactive<Device>({} as Device)
let modal_status = computed(()=>{ return modalStore.getAddDeviceModalStatus})

let DeviceTyps= [
  "Smart Phone",
  "Ear Bubs",
  "Tablet",
  "Laptop"
]

function closeModal(){ modalStore.changeDeviceModalStatus() }

function Save(){
  if(JSON.stringify(device) === "{}"){
    modalStore.changeAlert('Please ensure that all field are filled.');
    setTimeout(()=>{ modalStore.changeAlert("") },3500)
  }else{
    store.insert_devices_(device)
  }
}
</script>

<template>
  <transition
      :css="false"
      @leave="( _: any, done: any ) => motions.div.leave(done)"
  >
    <div
        v-if="modal_status"
        v-motion="'div'"
        :initial="modal_bg_movement.initial"
        :enter="modal_bg_movement.enter"
        :leave="modal_bg_movement.leave"
        class="fixed inset-0 flex flex-col space-y-4 p-6 justify-center items-center overflow-hidden z-20"
        :class="getDarkModeStatus() ? 'bg-innerDark/60':'bg-gray-400/90'"
    >
      <section
          v-motion="StaggerEffect(975,0,-75)"
          class="border-2 rounded-md w-full  flex flex-col space-y-4 p-4 border-dashed"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-800 border-dashed text-white'
          :'bg-white border-teal-300 text-teal-800'"
      >

        <div
            class="flex w-full p-4 rounded-md justify-between items-center"
            :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
        >
          <h1 class="text-2xl font-semibold">
            Add Device
          </h1>

          <button
              @click="closeModal()"
              class="transition-all ease-in-out duration-700 hover:scale-150 hover:rotate-180 hover:text-red-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
            </svg>

          </button>
        </div>

        <div
         class="flex flex-col space-y-4 w-full p-4 rounded-md"
         :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
        >
          <div
           class="flex flex-col space-y-1 lg:p-2 p-1 rounded-md"
           :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
          >
            <label for="name">
              <h2>Device Name</h2>
            </label>
            <input 
              v-model="device.device_name"
              class="p-2 rounded-md outline-none focus:outline-none border-2 border-dashed"
              :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700':'bg-white'"
              placeholder="Enter device name"
              type="text"
            >
          </div>

          <div
           class="flex flex-col space-y-1 lg:p-2 p-1 rounded-md"
           :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
          >
            <label
              id="device_type"
            >
              Vehicle Type
            </label>
            <select
              id="device_type"
              v-model="device.devices_type"
              class="p-2 rounded-md outline-none focus:outline-none border-2 border-dashed"
              :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700':'bg-white'"
              required
            >
             <option value="" selected>Please select an option.</option>
              <option
                v-for="item in DeviceTyps"
                :key="item"
                :value="item"
                class="uppercase"
              >{{item}}</option>
            </select>            
          </div>
        </div>

        <button
         @click="Save()"
         class="flex w-full p-2 rounded-md justify-center items-center border-2 cursor-pointer"
         :class="getDarkModeStatus() ? '':''"
        >
          <text>Save Device</text>
        </button>

      </section>
    </div>
  </transition>
</template>
