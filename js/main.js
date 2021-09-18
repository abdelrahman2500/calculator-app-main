let arr = []
let numbers = document.querySelectorAll(".num")
let operators = document.querySelectorAll(".op")

let calc = document.querySelector(".calc")
let display = document.querySelector(".display")
let dot = document.querySelector(".dot")
let range = document.querySelector(".form-range")

display.innerHTML = 0

function sum(){
    arr.map(el => {
        if(String(el)[0] == "0" && String(el)[1] == "0"){
            String(el)[0] = ""
            sum()
        } else {
            // console.log(arr)
        }
        
    })
    for(let i =0; i<= arr.length; i++){
        if(i == arr.length-1){
            if(arr[arr.length-1] == "+" || arr[arr.length-1] == "/" || arr[arr.length-1] == "*" || arr[arr.length-1] == "-"){
                arr.pop()
                display.innerHTML = arr.length == 0 ? 0 : (arr.join(""))
                // arr = [Number(display.innerHTML)]
                sum();
            }else if(arr[arr.length-1] == "."){
                arr.pop()
                display.innerHTML = arr.length == 0 ? 0 : (arr.join(""))
                // arr = [Number(display.innerHTML)]
                sum();
            } else {
                display.innerHTML = arr.length == 0 ? 0 : eval(arr.join("")) == Infinity || isNaN(eval(arr.join(""))) ? "Error" : eval(arr.join(""))
                isNaN(arr[arr.length-1]) ? arr[0] = [0] : arr = [Number(display.innerHTML)]
                console.log(arr)
                console.log(display.innerHTML)
                break;
            }
        }
    }
}

function addOpp(e){
    if(display.innerHTML == "Error"){
        arr.push(e.innerHTML)
        display.innerHTML = arr.join("")
    } else {
        if(arr[arr.length-1] != "+" && arr[arr.length-1] != "/" && arr[arr.length-1] != "*" && arr[arr.length-1] != "-"){
            if(arr.length == 0){
                if( e.innerHTML == "*" || e.innerHTML == "/") {
    
                } else {
                    arr.push(e.innerHTML)
                    display.innerHTML = arr.join("")
                }
            } else {
                arr.push(e.innerHTML)
                display.innerHTML = arr.join("")
            }
        } 
        else {
           arr[arr.length-1] = e.innerHTML
           display.innerHTML = arr.join("")
       }
    }
    // else if (String(arr[arr.length-1]).indexOf(".") == -1){
    //     arr[arr.length-1] = arr[arr.length-1] + "0"
        
    //     arr.push(e.innerHTML)
    //     display.innerHTML = arr.join("")
    //     console.log(arr)
    // }else if(arr[arr.length-1] = "."){
    //     arr.pop()
    //     arr[arr.length-1] = e.innerHTML
    //     display.innerHTML = arr.join("")
    // }
}

function addDot(e){
    if(display.innerHTML == "Error"){
        arr = []
        arr.push(e.innerHTML)
        display.innerHTML = arr.join("")
    } else { 

        if(String(arr[arr.length-1]).indexOf(".") != -1){
    
        } else {
            if(arr.length == 0) {
                arr.push(e.innerHTML)
                display.innerHTML = arr.join("")
                // console.log(arr)
            } else {
                if(arr[arr.length-1] != "+" && arr[arr.length-1] != "/" && arr[arr.length-1] != "*" && arr[arr.length-1] != "-"){
                    arr[arr.length-1] = arr[arr.length-1] + e.innerHTML 
                    console.log(arr)
                    display.innerHTML = arr.join("")
                } else {
                    arr.push(e.innerHTML)
                    display.innerHTML = arr.join("")
                }
            }
        }
    }   
}

function del(){
    let last = String(arr[arr.length-1]).slice(0 ,-1)
    arr.length == 0 ? "" : String(arr[arr.length-1]).length == 1 || isNaN(arr[arr.length-1]) == true ? arr.pop() : arr[arr.length-1] = last
    display.innerHTML = arr.length == 0 ? 0 : arr.join("")
}

function reset(){
    arr = []
    display.innerHTML = 0
}

function addToArr(e){
    // console.log(e.innerHTML)
    // arr.push(e.innerHTML)
    if(display.innerHTML == "Error"){
        arr = []
        arr.push(e.innerHTML)
        display.innerHTML = arr.join("")
    } else {
        if(arr.length>0){
            if(arr[arr.length-1] != "+" && arr[arr.length-1] != "/" && arr[arr.length-1] != "*" && arr[arr.length-1] != "-"){
                if(String(arr[arr.length-1]) == "0"){
                    arr.pop()
                    arr.push(e.innerHTML)
                    display.innerHTML = arr.join("")
                } else {
                    arr[arr.length-1] = arr[arr.length-1] + e.innerHTML 
                    // console.log(arr)
                    display.innerHTML = arr.join("")
    
                }
            } else {
                // if(e.innerHTML == "0"){
                    
                // } else {
                    
                // }
                arr.push(e.innerHTML)
                display.innerHTML = arr.join("")
            }
        } else {
            if(e.innerHTML == "0"){
    
            } else {
                arr.push(e.innerHTML)
                display.innerHTML = arr.join("")
                
            }
        }
    }
}

// num.addEventListener("click", addToArr(this))

numbers.forEach(num => num.addEventListener("click", () => addToArr(num)))
operators.forEach(op => op.addEventListener("click", () => addOpp(op)))
dot.addEventListener("click" , () => addDot(dot))

// change theme

range.addEventListener("change", function(e){
    // console.log(e.target.value)
    switch (e.target.value) {
        case "0":
            calc.classList.add("theme-one")
            calc.classList.remove("theme-two")
            calc.classList.remove("theme-three")
            break;
        case "1":
            calc.classList.remove("theme-one")
            calc.classList.add("theme-two")
            calc.classList.remove("theme-three")
            break;
        case "2":
            calc.classList.remove("theme-one")
            calc.classList.remove("theme-two")
            calc.classList.add("theme-three")
            break;
        default:
            break;
    }
    // calc.classList.
})


// display.addEventListener("change", function(){
//     let aa = display.innerHTML
//     display.innerHTML != aa ? "true" : "ddz"
//     arr.map(el => {
//         String(el).indexOf("0") == 0 && String(el).indexOf("0") == 1 ? String(el).indexOf("0") = "" : ""
//     })
//     console.log(arr, "ok")
// })