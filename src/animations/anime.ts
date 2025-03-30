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

export const StaggerEffect = (delay:number, x:number, y:number) =>{
    return {
        initial: {
            y: y || 0,
            x: x || 0,
            opacity: 0,
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: delay,
                type: 'Spring',
                stiffness: 75,
                ease: "easeInOut",
            }
        }
    }
}

export const modal_bg_movement = {
    initial:{
        y:-100,
        opacity:0
    },
    enter:{
        y:0,
        opacity:1,
        transition:{
            type:'spring',
            stiffness: 75
        }
    },
    leave:{
        y:-100,
        opacity:0,
        transition:{
            type:'spring',
            stiffness: 75
        }
    }
}
