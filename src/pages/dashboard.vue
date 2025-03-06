<script setup lang="ts">
 import {getDarkModeStatus} from "../composables/themeComposable.ts";
</script>

<template>
  <section class="flex w-full min-h-screen py-2 space-x-1 ">

    <div
        class="grow w-full min-h-[92vh] rounded-md border-2"
        :class="getDarkModeStatus() ? ''
        :'bg-white border-teal-100'"
    >
    </div>


  </section>
</template>
