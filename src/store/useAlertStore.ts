import { defineStore } from 'pinia'

export const useAlertStore = defineStore("useAlertStore",{

    state:()=>({
        alertStatus: false as boolean,
        errorStatus: false as boolean,
        successStatus: false as boolean,
        message: "" as string,
    }),

    getters:{
        getSuccessStatus: (state) => state.successStatus,
        getAlert:(state) => state.alertStatus,
        getError:(state) => state.errorStatus,
        getMessage:(state) => state.message
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
        }
    }
})