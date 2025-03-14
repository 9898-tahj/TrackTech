import { defineStore } from 'pinia'

export const useAlertStore = defineStore("useAlertStore",{

    state:()=>({
        alertStatus: false as boolean,
        errorStatus: false as boolean,
        addDeviceModalStatus:false as boolean,
        successStatus: false as boolean,
        message: "" as string,
    }),

    getters:{
        getSuccessStatus: (state) => state.successStatus,
        getAlert:(state) => state.alertStatus,
        getError:(state) => state.errorStatus,
        getMessage:(state) => state.message,
        getAddDeviceModalStatus: (state) => state.addDeviceModalStatus
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
        }
    }
})