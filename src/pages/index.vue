<script setup lang="ts">
</script>

<template>
    <section class=" w-full flex flex-col space-y-2 bg-green-50">

      <div
          class="p-1 flex lg:flex-row flex-col lg:space-y-0  lg:space-x-1 space-x-0 space-y-4 justify-center items-center"
      >
        <div class="lg:h-[75vh] lg:w-1/2 flex flex-col space-y-0.5 justify-center items-center">
            <h1 class="font-medium lg:text-6xl text-4xl" >
              Welcome to TrackTech
            </h1>
          <h2>Lorem ipsum dolor sit.</h2>
        </div>

        <div class="flex w-1/2">
          <video
              autoplay muted loop
              class="lg:h-[75vh] object-cover lg:w-full rounded-3xl border-2 border-teal-50"
          >
            <source src="/9795083-hd_1366_720_25fps.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </section>
</template>