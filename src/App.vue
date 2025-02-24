<script setup lang="ts">
import {PageLoadAnimation} from "./animations/anime.ts"
import navigationBar from "./components/navigationBar.vue";
</script>

<template>
  <section
      class="flex flex-col w-full font-serif text-teal-900 bg-gray-200"
  >
    <navigationBar/>
    <router-view v-slot="{ Component }">
      <component
          v-motion="PageLoadAnimation"
          :is="Component"
      />
    </router-view>
  </section>
</template>

