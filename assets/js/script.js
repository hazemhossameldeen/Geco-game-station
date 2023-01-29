let nav = document.getElementById('nav-btn');
let wrapperOne = document.getElementById('nav-wrapper-1');
let wrapperTwo = document.getElementById('nav-wrapper-2');

nav.onclick=()=>{
    wrapperOne.classList.toggle("active")
    wrapperTwo.classList.toggle("active")
}
