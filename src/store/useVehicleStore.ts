import { defineStore } from 'pinia'
//import {computed} from "vue";
import type { Database } from '../Types/database.types'
import {supabase} from "../lib/supabaseClient";
import {useAlertStore} from "./useAlertStore";
//import {authenticationStore} from '../store/useAuthenticationStore'

type _Vehicle = Database["public"]['Tables']['vehicle']['Row'][]
type _vehicle = Database["public"]['Tables']['vehicle']['Row']
type _vehicle_insert = Database["public"]['Tables']['vehicle']['Insert']

export const useVehicleStore = defineStore("useVehicleStore",{
    state:()=>({
        Vehicles: [] as _Vehicle,
        vehicle: {} as _vehicle
    }),

    getters:{
        get_all_vehicles: (state) => state.Vehicles,
        get_vehicle: (state) => state.vehicle
    },

    actions:{
        async Fetch_All_Vehicles(_user_id:string){

            const alert = useAlertStore()

            let {data,error} = await supabase.
            from('vehicle').select("*")


            if(data != null){
               this.Vehicles = data
            }

            if(error){
               alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},3500)
            }
        },

        async fetch_vehicle_by_id(id:string){

            const alert = useAlertStore()

            let {data, error} = await supabase.from('vehicle').select("*").eq('vehicle_id', id)

            if(data != null){
                this.vehicle = data[0];
            }

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},3500)
            }
        },

        async add_vehicle(vehicle:_vehicle_insert){

            const alert = useAlertStore()
            //const auth = authenticationStore()

           // let user = computed(()=>{ return auth.getUser })

            const {data, error} = await supabase.from('vehicle').insert(vehicle)

            if(data != null){
                alert.changeSuccessStatus("Vehicle added successfully.")
                setTimeout(()=>{alert.changeSuccessStatus("")},3500)
            }

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},5000)
            }

        }
    }
})