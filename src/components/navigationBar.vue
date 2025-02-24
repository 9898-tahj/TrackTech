<script setup lang="ts">
  interface option{ title: string,link: string,}
  let Options:option[] = [
    {
      title:'Home',
      link:'/'
    },
    {
      title:'Login',
      link:'/login',
    },
    {
      title:'SignUp',
      link:'/SignUp',
    }
  ]
</script>

<template>
  <section
      class="w-full p-1 flex justify-center items-center bg-gray-50"
  >
      <nav class="flex justify-between items-center p-2 bg-white w-full rounded-md">
        <h1>logo</h1>

        <div class="flex space-x-4">
          <router-link
              v-for="item in Options"
              :key="item.title"
              :to="item.link"
          >
              <h2>
                {{item.title}}
              </h2>
          </router-link>
        </div>

        <button class="border-2 rounded-md px-4 py-0.5">
           <h2>
             change theme
           </h2>
        </button>
      </nav>
  </section>
</template>

