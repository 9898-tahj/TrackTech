import {defineStore} from 'pinia'
import type {Database} from '../Types/database.types'
import {supabase} from "../lib/supabaseClient";
import {useAlertStore} from "./useAlertStore";
import {authenticationStore} from './useAuthenticationStore.ts'
import {computed} from 'vue'

type Device = Database['public']['Tables']['devices']['Row']
type DeviceInsert = Database['public']['Tables']['devices']['Insert']

export const useDeviceStore = defineStore('useDeviceStore',{
    state:()=>({
        Devices: [] as Device[],
        device: {} as Device
    }),

    getters:{
        get_device: (state) => state.device,
        getDevices: (state) => state.Devices
    },

    actions:{

        async fetch_all_devices_on_user_id(user_id:string){
            const alert = useAlertStore()

            let {data,error} = await supabase.
            from('devices')
                .select("*")
                .eq('user_id',user_id)

            if(data != null){
               this.Devices = data
            }

            if(error){
               alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},3500)
            }
        },

        async fetch_all_devices_by_id(id:string){
            const alert = useAlertStore()

            let {data, error} = await supabase.from('devices').select("*").eq('id', id)

            if(data != null){
                this.device = data[0];
                // alert.changeEditModalStatus()
            }

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},3500)
            }
        },

        async edit_device(_device:Device){
            const alert = useAlertStore();

            const {error} = await supabase.from('devices').update({
               device_name: _device.device_name,
               devices_type: _device.devices_type
            }).eq('id', _device.id)

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},3500)
            }else{
                await  this.fetch_all_devices_on_user_id(this.device.user_id)
                alert.changeSuccessStatus("Smart Device info update successfully.")
                setTimeout(()=>{alert.changeSuccessStatus("")},5000)
            }
        },

        async delete_device(id:string,userId:string){
            const alert = useAlertStore()

            const request = await supabase.from('vehicle').delete().eq('vehicle_id', id)

            if(request.status === 204){
                await  this.fetch_all_devices_on_user_id(userId)
                alert.changeSuccessStatus("Smart Device info deleted successfully.")
                setTimeout(()=>{alert.changeSuccessStatus("")},5000)
            }else{
                alert.changeError(request.statusText)
                setTimeout(()=>{alert.changeError("")},5000)
            }
        },

        async insert_devices_(device:DeviceInsert){

            const alert = useAlertStore()
            const auth = authenticationStore()

            await auth.get_current_user();
            let user = computed(()=>{ return auth.get_user_id })

            device.user_id = `${user.value}`

            const { data,error} = await supabase.from('devices').insert(device).select()

            if(data){ this.fetch_all_devices_on_user_id(user.value) }

            if(error){
                alert.changeError(error.message)
                setTimeout(()=>{alert.changeError("")},5000)
            }else{
                alert.changeSuccessStatus("Smart Deice added successfully.")
                setTimeout(()=>{alert.changeSuccessStatus("")},3500)
            }
        }
    }
})