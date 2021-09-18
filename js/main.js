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
                display.innerHTML = arr.length == 0 ? 0 : eval(arr.join("")) == Infinity || eval(arr.join("")) == -Infinity || isNaN(eval(arr.join(""))) ? "Error" : eval(arr.join(""))
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
        arr =[]
        // arr.push(0)
        display.innerHTML = arr.join("")
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




window.addEventListener("keydown", function(e){
    if(e.keyCode == 110 ){
        let s = document.createElement("p")
        s.innerHTML = e.key
        console.log(s.innerHTML)
        addDot(s)
    } else if (e.keyCode == 48 || e.keyCode == 49 || e.keyCode == 50 || e.keyCode == 51 || e.keyCode == 52 || e.keyCode == 53 || 
        e.keyCode == 54 || e.keyCode == 55 || e.keyCode == 56 || e.keyCode == 57 || e.keyCode == 96 || e.keyCode == 97 || e.keyCode == 98 ||
        e.keyCode == 99 || e.keyCode == 100 || e.keyCode == 101 || e.keyCode == 102 || e.keyCode == 103 || e.keyCode == 104 || e.keyCode == 105 ){
        let s = document.createElement("p")
        s.innerHTML = e.key
        console.log(s.innerHTML)
        addToArr(s)
    } else if(e.keyCode == 106 || e.keyCode == 107 || e.keyCode == 109 || e.keyCode == 111){
        let s = document.createElement("p")
        s.innerHTML = e.key
        console.log(s.innerHTML)
        addOpp(s)
    } else if(e.keyCode == 187 || e.keyCode == 13){
        let s = document.createElement("p")
        s.innerHTML = e.key
        console.log(s.innerHTML)
        sum()
    } else if(e.keyCode == 8){
        let s = document.createElement("p")
        s.innerHTML = e.key
        console.log(s.innerHTML)
        del()
    }
})