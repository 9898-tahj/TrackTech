<script setup lang="ts">
import { getDarkModeStatus } from '../composables/themeComposable';
import navigationBar from '../components/navigationBar.vue';
import { reactive, ref, onMounted } from 'vue';

// Auto-slide when the component is mounted
onMounted(() => { setInterval(nextSlide, 5000);});

let count = ref<number>(0);
// Slideshow data
let slides = reactive([
  {
    id: 1,
    src: ' https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Slide 1'
  },
  {
    id: 2,
    src: '  https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Slide 2'
  },
  {
    id: 3,
    src: '  https://images.unsplash.com/photo-1666281466387-0639381c5680?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Slide 3'
  }
])

function nextSlide(){
   if (count.value != slides.length  - 1) {
     count.value++;
   }else{
     count.value = 0;
   }
}

function prevSlide(){
  if(count.value != 0){
    count.value--;
  }
}
</script>

<template>
  <section
    class="min-h-svh w-full flex flex-col space-y-2"
    :class="getDarkModeStatus() ? 'bg-innerDark text-white' : 'bg-green-50'"
  >
    <!-- Navigation Bar -->
    <navigationBar />

    <!-- Main Content -->
    <div
      class="p-1 flex lg:flex-row flex-col lg:space-y-0 lg:space-x-1 space-x-0 space-y-4 justify-center items-center"
    >

      <div class="lg:h-[75vh] lg:w-1/2 flex flex-col space-y-0.5 justify-center items-center">

        <!-- Welcome Container -->
        <h1 class="font-medium lg:text-6xl text-4xl">
          Welcome to TrackTech
        </h1>
        <h2>Lorem ipsum dolor sit.</h2>

      </div>

      <!-- Video Section -->
      <div class="flex w-1/2">
        <video
          autoplay muted loop
          class="lg:h-[75vh] object-cover lg:w-full rounded-3xl border-2"
          :class="getDarkModeStatus() ? 'border-teal-950' : 'border-teal-50'"
        >
          <source src="/9795083-hd_1366_720_25fps.mp4" type="video/mp4" />
        </video>
      </div>

    </div>


    <!-- Slideshow Container -->
    <div
        class="w-full p-2 flex flex-col space-y-4 justify-center items-center"
        :class="getDarkModeStatus() ? 'bg-Dark'
        : 'bg-white'"
    >
        <h1>Image Gallery</h1>

      <section
          class="w-full border-2 border-dashed rounded-2xl h-[32rem] flex justify-between items-center p-2 space-x-2"
          :class="getDarkModeStatus() ? 'border-teal-900 bg-innerDark' : 'border-teal-100 bg-green-50'"
      >
          <button
              @click="prevSlide()"
              :disabled="count === 0"
              class="cursor-pointer h-full rounded-2xl p-1 border-2 transition ease-in-out duration-700 hover:-translate-x-2"
              :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-6xl'
             : 'bg-white hover:bg-white hover:border-green-500 hover:text-green-500 hover:shadow-5xl'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 rotate-180">
              <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
            </svg>
          </button>


           <img
               class="object-cover h-full w-full rounded-xl transition ease-in-out duration-700"
               :src="slides[count].src"
               :alt="slides[count].alt"
           >

         <button
             @click="nextSlide()"
             :disabled="count === slides.length -1"
             class="cursor-pointer h-full rounded-2xl p-1 border-2 transition ease-in-out duration-700 hover:translate-x-2"
             :class="getDarkModeStatus() ? 'bg-innerDark border-teal-950 text-teal-600 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
             : 'bg-white hover:bg-white hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
         >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 ">
             <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
           </svg>
         </button>

      </section>
    </div>

  </section>
</template>


