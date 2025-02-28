<script setup lang="ts">
import {authenticationStore} from '../store/useAuthenticationStore.ts'
import {getDarkModeStatus} from "../composables/themeComposable.ts";

const auth = authenticationStore()

function signOut() {auth.Logout() }
</script>

<template>
  <section
      class="w-1/5 min-h-[94vh] px-1 py-2 rounded-md flex flex-col justify-between items-center"
      :class="getDarkModeStatus() ? '':'bg-white border-teal-100'"
  >
    <div class="flex flex-col w-full space-y-2 justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16">
        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
      </svg>

    </div>

    <div></div>

    <button
        @click="signOut()"
        class="border-2 py-1 px-2 rounded-md"
    >
      Logout
    </button>

  </section>
</template>

