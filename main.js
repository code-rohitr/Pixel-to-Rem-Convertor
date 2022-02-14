

// variables

const pxl_input = document.querySelector(".pxl-input")
const rem_input = document.querySelector(".rem-input")



pxl_input.addEventListener("keyup", ()=>{
    
    if(isNaN(pxl_input.value)){
        pxl_input.value = ""
    }

    rem_input.value = pxl_input.value/16
})

rem_input.addEventListener("keyup", ()=>{

    if(isNaN(rem_input.value)){
        rem_input.value = ""
    }
    pxl_input.value = 16 * rem_input.value
})

