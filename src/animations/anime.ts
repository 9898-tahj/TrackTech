export const PageLoadAnimation ={
    initial:{
        opacity: 0,
        x: 100,
    },
    enter:{
        opacity: 1,
        x:0,
        transition:{
            ease:'ease-in-out',
            type:'spring',
            stiffness:65
        }
    }
}