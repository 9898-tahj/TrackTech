import { defineStore } from 'pinia'

export const useAlertStore = defineStore("useAlertStore",{

    state:()=>({
        alertStatus: false as boolean,
        errorStatus: false as boolean,
        addVehicleModalStatus:false as boolean,
        DeviceModalStatus:false as boolean,
        vehcile_details:false as boolean,
        successStatus: false as boolean,
        editModalStatus:false as boolean,
        message: "" as string,
    }),

    getters:{
        getSuccessStatus: (state) => state.successStatus,
        getAlert:(state) => state.alertStatus,
        getError:(state) => state.errorStatus,
        getMessage:(state) => state.message,
        getAddDeviceModalStatus: (state) => state.addVehicleModalStatus,
        getCarsModalStatus: (state) => state.vehcile_details,
        getEditModalStatus: (state) => state.editModalStatus
    },

    actions:{
        changeSuccessStatus(message:string){
            this.successStatus = !this.successStatus
            this.message = message
        },
        changeAlert(message:string){
            this.alertStatus = !this.alertStatus
            this.message = message
        },
        changeError(message:string){
            this.errorStatus = !this.errorStatus
            this.message = message
        },
        changeAddVehicleModalStatus(){
            this.addVehicleModalStatus = !this.addVehicleModalStatus;
        },
        changeDeviceModalStatus(){
          this.DeviceModalStatus = !this.DeviceModalStatus;
        },
        changeVehcile_details(){
            this.vehcile_details = !this.vehcile_details
        },
        changeEditModalStatus(){
            this.editModalStatus = !this.editModalStatus
        }
    }
})