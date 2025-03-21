<script setup lang="ts">
import {computed} from "vue";
import {modal_bg_movement,StaggerEffect} from '../animations/anime.ts'
import {getDarkModeStatus} from '../composables/themeComposable.ts'
import {useAlertStore} from '../store/useAlertStore.ts'
import {useMotions} from "@vueuse/motion";
const motions = useMotions()

let alertStore = useAlertStore()
let modalStatus = computed<boolean>(()=>{return alertStore.getAddDeviceModalStatus})


function closeModal(){ alertStore.changeAddDeviceModalStatus()  }
</script>

<template>
  <transition
      :css="false"
      @leave="( _: any, done: any ) => motions.div.leave(done)"
  >
    <div
        v-if="modalStatus"
        v-motion="'div'"
        :initial="modal_bg_movement.initial"
        :enter="modal_bg_movement.enter"
        :leave="modal_bg_movement.leave"
        class="fixed inset-0 flex flex-col space-y-4 p-6 justify-center items-center overflow-hidden z-20"
        :class="getDarkModeStatus() ? 'bg-innerDark/60':'bg-gray-700/50'"
    >
      <section
          v-motion="StaggerEffect(975,0,-75)"
          class="border-2 rounded-md w-full h-full flex flex-col space-y-4 p-4 border-dashed"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-800 border-dashed text-white'
          :'bg-white border-teal-300 text-teal-800'"
      >

          <div
              class="flex w-full p-4 rounded-md justify-between items-center"
              :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
          >
            <h1>
              Add New Device
            </h1>

            <button
                @click="closeModal()"
                class="transition-all ease-in-out duration-700 hover:scale-150 hover:rotate-180 hover:text-red-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
              </svg>

            </button>
          </div>

          <div
              class="flex flex-col space-y-4 p-4 border-dashed"
              :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
          >
              <div>
                <label>

                </label>
                <input>
              </div>

              <div>
                <label>

                </label>
                <input>
              </div>
          </div>

      </section>
    </div>
  </transition>
</template>
