import { defineStore } from 'pinia'
import {computed} from "vue";
import type { Database } from '../Types/database.types'
import {supabase} from "../lib/supabaseClient";
import {useAlertStore} from "./useAlertStore";
import {authenticationStore} from './useAuthenticationStore.ts'

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
        async Fetch_All_Vehicles(user_id:string){

            const alert = useAlertStore()

            let {data,error} = await supabase.
            from('vehicle')
                .select("*")
                .eq('user_id',user_id)

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
            const auth = authenticationStore()

            await auth.get_current_user();
            let user = computed(()=>{ return auth.get_user_id })

            vehicle.user_id = `${user.value}`

            const { error} = await supabase.from('vehicle').insert(vehicle)

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},5000)
            }else{
                alert.changeSuccessStatus("Vehicle added successfully.")
                setTimeout(()=>{alert.changeSuccessStatus("")},3500)
            }

        }
    }
})