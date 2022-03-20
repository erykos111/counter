function setvariable(){
    document.getElementById("counter").value = 0
}


function increase(){
    var number = document.getElementById("counter").value
    number = number + 1
    document.getElementById("counter").value = number
    counter.innerText = number
    console.log(number)

}

function decrease(){
    var number = document.getElementById("counter").value
    number = number - 1
    document.getElementById("counter").value = number
    counter.innerText = number

}

function reset(){
    var number = document.getElementById("counter").value
    number = 0
    counter.innerText = number

}