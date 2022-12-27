const buttons = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal');
const opr = document.querySelector(".opr")
const result = document.querySelector('.result');

let curr="";
let prev;
let opration
buttons.forEach(element=>{
    element.addEventListener('click',()=>{
        curr += element.innerHTML;
        console.log(curr)

    })
})

opr.addEventListener('click',()=>{
    opration= opr.innerHTML;
    prev = curr;
    curr ="";
    console.log(opration)

})

result.addEventListener('click',()=>{
    console.log(opration)
    console.log(curr)
    console.log(prev)
})