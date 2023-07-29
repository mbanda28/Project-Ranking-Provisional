const btn = document.getElementById('buton')
const rightContainer = document.querySelector('#container-2')
const leftContainer = document.querySelector('#container-1')
const o1 = document.querySelector('.ul1')
const o2 = document.querySelector('.ul2')
const o3 = document.querySelector('.ul3')
const o4 = document.querySelector('.ul4')
const o5 = document.querySelector('.ul5')
const valor = document.querySelector('.valor')


btn.addEventListener('click', () => {
    console.log('hola')
    if (rightContainer.style.display === 'none' && leftContainer.style.display === 'none'){
        rightContainer.style.display = ""
        leftContainer.style.display = ""
    } else {
        rightContainer.style.display = 'absolute'
        leftContainer.style.display = 'none'
    }
}) 


o1.addEventListener('click', ()=> {
    valor.innerHTML = "1"
    o1.style.backgroundColor = "var(--Medium-Grey)";
    colorNormal1()
})
o2.addEventListener('click', ()=> {
    valor.innerHTML = "2"
    o2.style.backgroundColor = "var(--Medium-Grey)";
    colorNormal2()
})
o3.addEventListener('click', ()=> {
    valor.innerHTML = "3"
    o3.style.backgroundColor = "var(--Medium-Grey)";
    colorNormal3()
})
o4.addEventListener('click', ()=> {
    valor.innerHTML = "4"
    o4.style.backgroundColor = "var(--Medium-Grey)";
    colorNormal4()
})
o5.addEventListener('click', ()=> {
    valor.innerHTML = "5"
    o5.style.backgroundColor = "var(--Medium-Grey)";
    colorNormal5()
})

function colorNormal2 (){
    if (o2.style.backgroundColor = "var(--Medium-Grey" ){
        o1.style.backgroundColor = "var(--Very-Dark-Blue)"
        o3.style.backgroundColor = "var(--Very-Dark-Blue)"
        o4.style.backgroundColor = "var(--Very-Dark-Blue)"
        o5.style.backgroundColor = "var(--Very-Dark-Blue)"
    }
}
function colorNormal1 (){
    if (o1.style.backgroundColor = "var(--Medium-Grey" ){
        o2.style.backgroundColor = "var(--Very-Dark-Blue)"
        o3.style.backgroundColor = "var(--Very-Dark-Blue)"
        o4.style.backgroundColor = "var(--Very-Dark-Blue)"
        o5.style.backgroundColor = "var(--Very-Dark-Blue)"
    }
}
function colorNormal3 (){
    if (o3.style.backgroundColor = "var(--Medium-Grey" ){
        o1.style.backgroundColor = "var(--Very-Dark-Blue)"
        o2.style.backgroundColor = "var(--Very-Dark-Blue)"
        o4.style.backgroundColor = "var(--Very-Dark-Blue)"
        o5.style.backgroundColor = "var(--Very-Dark-Blue)"
    }
}
function colorNormal4 (){
    if (o4.style.backgroundColor = "var(--Medium-Grey" ){
        o1.style.backgroundColor = "var(--Very-Dark-Blue)"
        o3.style.backgroundColor = "var(--Very-Dark-Blue)"
        o2.style.backgroundColor = "var(--Very-Dark-Blue)"
        o5.style.backgroundColor = "var(--Very-Dark-Blue)"
    }
}
function colorNormal5 (){
    if (o5.style.backgroundColor = "var(--Medium-Grey" ){
        o1.style.backgroundColor = "var(--Very-Dark-Blue)"
        o3.style.backgroundColor = "var(--Very-Dark-Blue)"
        o4.style.backgroundColor = "var(--Very-Dark-Blue)"
        o2.style.backgroundColor = "var(--Very-Dark-Blue)"
    }
}