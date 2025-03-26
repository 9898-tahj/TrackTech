import { defineStore } from 'pinia'

export const useAlertStore = defineStore("useAlertStore",{

    state:()=>({
        alertStatus: false as boolean,
        errorStatus: false as boolean,
        addDeviceModalStatus:false as boolean,
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
        getAddDeviceModalStatus: (state) => state.addDeviceModalStatus,
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
        changeAddDeviceModalStatus(){
            this.addDeviceModalStatus = !this.addDeviceModalStatus;
        },
        changeVehcile_details(){
            this.vehcile_details = !this.vehcile_details
        },
        changeEditModalStatus(){
            this.editModalStatus = !this.editModalStatus
        }
    }
})