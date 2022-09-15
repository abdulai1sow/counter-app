     //1. Create a new variable called 'total' and assign it the div with the id of 'total'
const total = document.querySelector('#total')

  //2. Create Six Functions (add, subtract, multiplyBy2, divideby5, multiplyBy5, divideBy5)
  // Example: 
  function add(){
    //update the value of the total variable textContent
    // use an alert to alert the user
  }

        //3. Attach Functions to Buttons

let addBtn = document.querySelector('#add')
addBtn.addEventListener('click', function () {
  total.textContent = Number(total.textContent) + 1

})

let subtractBtn = document.querySelector('#subtract')
subtractBtn.addEventListener('click', function () {
  total.textContent = Number(total.textContent) -1
})

let multiplyBy2 = document.querySelector('#mult-2')
multiplyBy2.addEventListener('click', function (){
  total.textContent = Number(total.textContent) *2
})

let div2 = document.querySelector('#div-2')
div2.addEventListener('click', function () {
  total.textContent = Number(total.textContent) /2
})

let mult5 = document.querySelector('#mult-5')
mult5.addEventListener('click', function () {
  total.textContent = Number(total.textContent) *5
})

let div5 = document.querySelector('#div-5')
div5.addEventListener('click', function () {
  total.textContent = Number(total.textContent) / 5
})

//< button id = "reset" > RESET</ >
let resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', function () {
  total.textContent = 0
  console.log(total.textContent = 0);
})















