<script setup lang="ts">
import { getDarkModeStatus } from '../composables/themeComposable';
import navigationBar from '../components/navigationBar.vue';
import { reactive, ref, onMounted } from 'vue';

// Slideshow data
const slides = reactive([
  { id: 1, src: '/gps-and-location-600x337.png', alt: 'Slide 1' },
  { id: 2, src: '/GPS-Tracking_d.webp', alt: 'Slide 2' },
  { id: 3, src: '/gps-tracking-satellites.jpg', alt: 'Slide 3' },
  { id: 4, src: '/qr-code-gps-tracking.webp', alt: 'Slide 4' },
  { id: 5, src: '/vehicle-gps-car-tracker.jpg', alt: 'Slide 5' },
]);

// State management for slideshow
const currentSlide = ref<number>(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

// Auto-slide when the component is mounted
onMounted(() => {
  setInterval(nextSlide, 5000);
});
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
      <!-- Slideshow Container -->
      <div class="lg:h-[75vh] lg:w-1/2 flex flex-col space-y-0.5 justify-center items-center">
        <h1 class="font-medium lg:text-6xl text-4xl">Welcome to TrackTech</h1>
        <h2>Lorem ipsum dolor sit.</h2>

        <!-- Slideshow -->
        <div
          class="relative w-full h-[300px] overflow-hidden rounded-3xl border-2"
          :class="getDarkModeStatus() ? 'border-teal-950' : 'border-teal-50'"
        >
          <!-- Slide Images -->
          <div
            v-for="(slide, index) in slides"
            :key="slide.id"
            :class="index === currentSlide ? 'opacity-100' : 'opacity-0'"
            class="'absolute inset-0 transition-opacity duration-700 ease-in-out'"
          >
            <img
              :src="slide.src"
              :alt="slide.alt"
              class="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <!-- Navigation Buttons -->
          <button
            @click="prevSlide"
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-800"
          >
            &#10094;
          </button>
          <button
            @click="nextSlide"
            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-800"
          >
            &#10095;
          </button>
        </div>
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
  </section>
</template>

<style scoped>
/* Transition styles for smooth sliding */
.slide-active {
  opacity: 1;
  transition: opacity 0.7s ease-in-out;
}
.slide-inactive {
  opacity: 0;
  transition: opacity 0.7s ease-in-out;
}

/* Button hover effect */
button:hover {
  background-color: rgba(55, 65, 81, 0.8); /* Darker on hover */
}

/* Video and Slide Container */
.video-container, .slide-container {
  border-radius: 1.5rem;
  overflow: hidden;
}
</style>
