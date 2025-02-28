<script setup lang="ts">
import {computed} from "vue";
import {modal_bg_movement,StaggerEffect} from '../animations/anime.ts'
import {getDarkModeStatus} from '../composables/themeComposable.ts'
import {useAlertStore} from '../store/useAlertStore.ts'
import {useMotions} from "@vueuse/motion";
const motions = useMotions()

let alertStore = useAlertStore()
let error = computed<boolean>(()=>{return alertStore.getError})
let message = computed<string>(()=>{return alertStore.getMessage})

function closeModal(){ alertStore.changeError(""); }
</script>

<template>
  <Transition
      :css="false"
      @leave="( _:any, done:any ) => motions.div.leave(done)"
  >

    <div
        v-if="error"
        v-motion="'div'"
        :initial="modal_bg_movement.initial"
        :enter="modal_bg_movement.enter"
        :leave="modal_bg_movement.leave"
        class="fixed inset-0 flex flex-col space-y-4 p-6 justify-center items-center overflow-hidden z-20"
        :class="getDarkModeStatus() ? 'bg-innerDark/60':'bg-red-500/25'"
    >
      <section
          v-motion="StaggerEffect(575,-100,0)"
          class="border-2 rounded-md lg:w-1/2 w-[18rem]  flex flex-col space-y-4 py-6 items-center"
          :class="getDarkModeStatus() ? 'bg-teal-950 border-red-500 border-dashed text-red-500'
          :'bg-indigo-50 border-red-500 text-red-700'"
      >
        <div class="flex justify-center space-x-4 items-center w-full">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
          >
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clip-rule="evenodd" />
          </svg>

          <h2 class="text-2xl overline font-semibold">
            Error
          </h2>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
          >
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clip-rule="evenodd" />
          </svg>
        </div>

        <p class="font-semibold text-lg w-full text-center">{{ message }}</p>

        <button
            @click="closeModal()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
          </svg>

        </button>
      </section>
    </div>

  </transition>
</template>
