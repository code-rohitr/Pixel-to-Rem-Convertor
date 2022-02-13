

// variables

const pxl_input = document.querySelector(".pxl-input")
const rem_input = document.querySelector(".rem-input")



pxl_input.addEventListener("keyup", ()=>{

    rem_input.value = pxl_input.value/16
})

rem_input.addEventListener("keyup", ()=>{

    pxl_input.value = 16 * rem_input.value
})