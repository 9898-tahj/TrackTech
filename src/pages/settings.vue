<script setup lang="ts">

  import {getDarkModeStatus} from "../composables/themeComposable.ts";

</script>

<template>
  <section class="flex w-full min-h-screen py-2 space-x-1 ">
    <div
        class="flex flex-col space-y-2 w-full min-h-[92vh] rounded-md border-2 border-dashed p-2"
        :class="getDarkModeStatus() ? 'bg-Dark border-teal-950 text-teal-400'
        :'bg-white border-teal-100'"
    >

    </div>
  </section>
</template>
