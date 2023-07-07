const popupBtn = document.getElementById('popup-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-model');
const number_elements = document.querySelectorAll('td.n');
const square_elements = document.querySelectorAll('td.s');
const cube_elements = document.querySelectorAll('td.c');

popupBtn.onclick = ()=>{
    popup.classList.add('open')
}
closeBtn.onclick = ()=>{
    popup.classList.remove('open')
}

number_elements.forEach((e, i)=>{
    const x = parseInt(e.innerHTML)
    const square = x*x;
    const cube = x*x*x;
    square_elements[i].innerHTML = square;
    cube_elements[i].innerHTML = cube;
});

