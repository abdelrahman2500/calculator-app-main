let arr = []
let numbers = document.querySelectorAll(".num")
let operators = document.querySelectorAll(".op")

let calc = document.querySelector(".calc")
let display = document.querySelector(".display")
let dot = document.querySelector(".dot")
let range = document.querySelector(".form-range")

display.innerHTML = 0

function sum(){
    if(arr[arr.length-1] == "+" || arr[arr.length-1] == "/" || arr[arr.length-1] == "*" || arr[arr.length-1] == "-"|| arr[arr.length-1] == "."){
        arr.pop()
        display.innerHTML = arr.length == 0 ? 0 : eval(arr.join(""))
        arr = [Number(display.innerHTML)]
    } else {
        display.innerHTML = arr.length == 0 ? 0 : eval(arr.join(""))
        arr = [Number(display.innerHTML)]
    }
}

function addOpp(e){
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
    } else {
        arr[arr.length-1] = e.innerHTML
        display.innerHTML = arr.join("")
    }
}

function addDot(e){
    let valid = true
    arr.map(el => {
        if(valid == true) {
            el == e.innerHTML ? valid = false : ""
            el.toString().indexOf(".") != -1 ? valid = false : ""
        }
    })
    if(valid){
        if(arr.length == 0){
            arr.push("0")
        }
        
        arr.push(e.innerHTML)
        display.innerHTML = arr.join("")
    }    
}

function del(){
    arr.length == 0 ? "" : arr.shift()
    display.innerHTML = arr.length == 0 ? 0 : arr.join("")
}

function reset(){
    arr = []
    display.innerHTML = 0
}

function addToArr(e){
    // console.log(e.innerHTML)
    arr.push(e.innerHTML)
    // console.log(arr)
    display.innerHTML = arr.join("")
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