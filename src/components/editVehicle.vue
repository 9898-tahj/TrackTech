<script setup lang="ts">
import {useMotions} from "@vueuse/motion";
import {modal_bg_movement,StaggerEffect} from '../animations/anime.ts'
import {getDarkModeStatus} from "../composables/themeComposable.ts";
import {useAlertStore} from '../store/useAlertStore.ts'
import {useVehicleStore} from '../store/useVehicleStore.ts'
import {computed,} from "vue";
import type {Database} from "../Types/database.types.ts";

  type _vehicle_ = Database["public"]['Tables']['vehicle']['Row']

  const motions = useMotions()
  const alertStore = useAlertStore();
  const vehicleStore = useVehicleStore();

  let modalStatus = computed<boolean>(()=>{return alertStore.getEditModalStatus})
  let vehicle = computed<_vehicle_>(()=>{ return vehicleStore.get_vehicle})


  let v_types = [
    "hatchback",
    "coupe",
    "sedan",
    "sedan/saloon",
    "SUV",
    "van",
    "pick truck",
    "sport utility vehicles",
    "supercars & hyper cars",
    "sport car",
    "luxury",
    "pony car",
    "convertible",
    "minivan",
    "wagon",
    "crossover",
    "hybrid",
    "electric vehicle",
    "commercial vehicle"
  ]

  function closeModal(){
    alertStore.changeEditModalStatus()
  }

  function SaveChanges(){
      if(
          Object.keys(vehicle.value).length === 1
      ){
        alertStore.changeAlert("Please ensure that updated vehicle information present.")
        setTimeout(()=>{alertStore.changeAlert("")}, 5000)
      }else{
            vehicleStore.edit_vehicle_by_id(vehicle.value)
      }
  }
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
        :class="getDarkModeStatus() ? 'bg-innerDark/60':'bg-gray-400/90'"
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
              Edit Vehicle
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

          <div
            class=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 rounded-md"
            :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
          >
            <div
                class="flex flex-col space-y-1 lg:p-2 p-1 rounded-md"
                :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
            >

              <label
                  id="vehicle_type"
              >
                Vehicle Type
              </label>

              <select
                  id="vehicle_type"
                  v-model="vehicle.vehicle_type"
                  class="p-2 rounded-md outline-none focus:outline-none border-2 border-dashed"
                  :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700':'bg-white'"
                  required
              >
                <option value="" selected>Please select an option.</option>
                <option
                    v-for="item in v_types"
                    :key="item"
                    :value="item"
                    class="uppercase"
                >{{item}}</option>
              </select>
            </div>

            <div
                class="flex flex-col space-y-1 lg:p-2 p-1 rounded-md"
                :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
            >
              <label
                  id="vehicle_make"
              >
                Vehicle Make
              </label>
              <input
                  id="vehicle_make"
                  v-model="vehicle.make"
                  class="p-2 rounded-md outline-none focus:outline-none border-2 border-dashed"
                  :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700':'bg-white'"
                  placeholder="Enter vehicle make"
                  required
              />
            </div>

            <div
                class="flex flex-col space-y-1 lg:p-2 p-1 rounded-md"
                :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
            >
              <label
                  id="vehicle_model"
              >
                Vehicle Model
              </label>
              <input
                  id="vehicle_model"
                  v-model="vehicle.model"
                  class="p-2 rounded-md outline-none focus:outline-none border-2 border-dashed"
                  :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700':'bg-white'"
                  placeholder="Enter vehicle model"
                  required
              />
            </div>

            <div
                class="flex flex-col space-y-1 lg:p-2 p-1 rounded-md"
                :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
            >
              <label
                  id="serial_number"
              >
                Serial #
              </label>
              <input
                  id="serial_number"
                  v-model="vehicle.serial_number"
                  class="p-2 rounded-md outline-none focus:outline-none border-2 border-dashed"
                  :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700':'bg-white'"
                  placeholder="Enter vehicle serial number"
                  required
              />
            </div>

            <div
                class="flex flex-col space-y-1 lg:p-2 p-1 rounded-md"
                :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
            >
              <label
                  id="vin"
              >
                Vin Number
              </label>
              <input
                  id="vin"
                  v-model="vehicle.vin"
                  class="p-2 rounded-md outline-none focus:outline-none border-2 border-dashed"
                  :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700':'bg-white'"
                  placeholder="Enter vehicle vin number"
                  required
              />
            </div>

            <div
                  class="flex flex-col space-y-1 lg:p-2 p-1 rounded-md"
                  :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
              >
                <label
                    id="color"
                >
                 Colour
                </label>
                <input
                    id="color"
                    v-model="vehicle.color"
                    class="p-2 rounded-md outline-none focus:outline-none border-2 border-dashed"
                    :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700':'bg-white'"
                    placeholder="Enter vehicle vin number"
                    required
                />
              </div>

            <div
                  class="flex flex-col space-y-1 lg:p-2 p-1 rounded-md lg:col-span-2 col-span-1"
                  :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
              >
                <label
                    id="license_plate"
                >
                  License Plate #
                </label>
                <input
                    id="license_plate"
                    v-model="vehicle.license_plate"
                    class="p-2 rounded-md outline-none focus:outline-none border-2 border-dashed"
                    :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700':'bg-white'"
                    placeholder="Enter vehicle vin number"
                    required
                />
              </div>

          </div>

         <div
            class="flex w-full p-4 rounded-md justify-center items-center"
            :class="getDarkModeStatus() ? 'bg-Dark':'bg-gray-100'"
        >
          <button
              @click="SaveChanges()"
              class="border-2 py-2 px-4 w-full rounded-md flex justify-center items-center space-x-2 cursor-pointer
              transition-all ease-in-out duration-700 hover:-translate-y-2"
              :class="getDarkModeStatus() ? 'bg-innerDark border-teal-700 text-teal-700 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-3xl'
              :'bg-white hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 hover:shadow-4xl'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
            </svg>
            Save Changes
          </button>
        </div>

      </section>

    </div>
  </transition>
</template>
