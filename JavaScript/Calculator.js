// Javascript
const dispaly = document.querySelector(".display")

const getIntoDispaly = (value) =>{
    dispaly.value+=value  
}
const Calcu = () =>{
    const d = dispaly.value
    console.log(d)
    dispaly.value = eval(dispaly.value)
}


const cleardispaly = () =>{
    dispaly.value=""
}






