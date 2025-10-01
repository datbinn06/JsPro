let a =10;
let b = 20;
const button = document.getElementById('demo');
const hienthi = document.getElementById('hienthi');
const ketqua = document.getElementById('ketqua');

button.addEventListener("click",()=>{
    ketqua.innerHTML=a+b;
})
