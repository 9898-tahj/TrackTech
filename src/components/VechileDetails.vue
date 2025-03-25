<script setup lang="ts">
import {useMotions} from "@vueuse/motion";
import {modal_bg_movement,StaggerEffect} from '../animations/anime.ts'
import {getDarkModeStatus} from "../composables/themeComposable.ts";
import {useAlertStore} from '../store/useAlertStore.ts'
import {useVehicleStore} from '../store/useVehicleStore.ts'
import {authenticationStore} from "../store/useAuthenticationStore.ts"
import {computed,onMounted} from "vue";

  const motions = useMotions()
  const alertStore = useAlertStore();
  const vehicleStore = useVehicleStore();
  const authStore = authenticationStore()

  onMounted(async () => {
    await  authStore.get_current_user()
    let userId = computed<string>(() => { return authStore.currentUser_Id })
    await vehicleStore.Fetch_All_Vehicles(userId.value)
  })

  let modalStatus = computed<boolean>(()=>{return alertStore.getCarsModalStatus})
  let cars = computed(() => { return vehicleStore.get_all_vehicles })

  function closeModal(){ alertStore.changeVehcile_details()}
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
        :class="getDarkModeStatus() ? 'bg-innerDark/95':'bg-gray-400/90'"
    >
      <section
          v-motion="StaggerEffect(975,0,-75)"
          class="border-2 rounded-md w-full  flex flex-col space-y-4 p-4 border-dashed"
          :class="getDarkModeStatus() ? 'bg-innerDark border-teal-800 border-dashed text-white'
          :'bg-white border-teal-300 text-teal-800'"
      >
        <div
            class="flex w-full p-4 rounded-md justify-between items-center"
            :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
        >
          <h1 class="text-2xl font-semibold">
            My Vehicles
          </h1>

          <button
              @click="closeModal()"
              class="transition-all ease-in-out duration-700 hover:scale-150 hover:rotate-180 hover:text-red-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
            </svg>

          </button>
        </div>

            <table
                class="border-separate border-spacing-2 border-2 table-auto rounded-lg"
                :class="getDarkModeStatus() ? 'bg-Dark'
                :'bg-gray-100 border-teal-400 border-dashed'"
            >
              <thead>
                <tr>
                  <th
                      class="border-2 p-1 rounded-lg"
                      :class="getDarkModeStatus() ? 'border-teal-800 text-white' : ''"
                  >
                    Vehicle Type
                  </th>
                  <th
                      class="border-2 p-1 rounded-lg"
                      :class="getDarkModeStatus() ? 'border-teal-800 text-white' : ''"
                  >
                    Serial #
                  </th>
                  <th
                      class="border-2 p-1 rounded-lg"
                      :class="getDarkModeStatus() ? 'border-teal-800 text-white' : ''"
                  >
                    Make
                  </th>
                  <th
                      class="border-2 p-1 rounded-lg"
                      :class="getDarkModeStatus() ? 'border-teal-800 text-white' : 'bg-white'"
                  >
                    Model
                  </th>
                  <th
                      class="border-2 p-1 rounded-lg"
                      :class="getDarkModeStatus() ? 'border-teal-800 text-white' : 'bg-white'"
                  >
                    Year
                  </th>
                  <th
                      class="border-2 p-1 rounded-lg"
                      :class="getDarkModeStatus() ? 'border-teal-800 text-white' : 'bg-white'"
                  >
                    Vin #
                  </th>
                  <th
                      class="border-2 p-1 rounded-lg"
                      :class="getDarkModeStatus() ? 'border-teal-800 text-white' : 'bg-white'"
                  >
                    Color
                  </th>
                  <th
                      class="border-2 p-1 rounded-lg"
                      :class="getDarkModeStatus() ? 'border-teal-800 text-white' : 'bg-white'"
                  >
                    License Plate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                    v-for="item in cars"
                    :key="item.vehicle_id"
                >
                  <td class="text-center p-1 rounded-lg capitalize font-medium"> {{item.vehicle_type}} </td>
                  <td class="text-center p-1 rounded-lg capitalize font-medium"> {{item.serial_number}} </td>
                  <td class="text-center p-1 rounded-lg capitalize font-medium"> {{item.make}} </td>
                  <td class="text-center p-1 rounded-lg capitalize font-medium"> {{item.model}} </td>
                  <td class="text-center p-1 rounded-lg capitalize font-medium"> {{item.year}} </td>
                  <td class="text-center p-1 rounded-lg capitalize font-medium"> {{item.vin}} </td>
                  <td class="text-center p-1 rounded-lg capitalize font-medium"> {{item.color}} </td>
                  <td class="text-center p-1 rounded-lg capitalize font-medium"> {{item.license_plate}} </td>
                  <td class="p-1 capitalize font-medium">
                    <button
                        class="p-1 rounded-md border-2 transition-all ease-in-out duration-700 cursor-pointer hover:scale-125"
                        :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700 text-700 hover:bg-indigo-500/10 hover:text-indigo-500 hover:border-indigo-500'
                        :'bg-white border-teal-300 hover:bg-indigo-500/10 hover:text-indigo-500 hover:border-indigo-500'"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                      </svg>

                    </button>
                  </td>
                  <td class="p-1 capitalize font-medium">
                    <button
                        class="p-1 rounded-md border-2 transition-all ease-in-out duration-700 cursor-pointer hover:scale-125"
                        :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700 text-700 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500'
                        :'bg-white border-teal-300 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500'"

                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

      </section>
    </div>
  </transition>
</template>
