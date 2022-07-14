// La ham duoc truyen qua doi so
// Khi goi ham khac

function myfunction(param){
    if(typeof param === "function"){
        param("Hoc lap trinh");
    }
    
}

function myCallback(value){
    console.log("Value : ", value)
}


myfunction(myCallback);