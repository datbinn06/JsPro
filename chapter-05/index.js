let a =10;
let b = 20;
const button = document.getElementById('demo');
const hienthi = document.getElementById('hienthi');
const ketqua = document.getElementById('ketqua');

button.addEventListener("click",()=>{
    ketqua.innerHTML=a+b;
})
button.addEventListener("click", () => {
    ketQua.innerHTML = a + b;
    // lưu dữ liệu vào localStorage
    localStorage.setItem("ketQua", ketQua.innerHTML);
});

// xóa dữ liệu từ localStorage
button2.addEventListener("click", () => {
    localStorage.removeItem("ketQua");
});

// lấy dữ liệu từ localStorage
const ketQuaLocalStorage = JSON.parse(localStorage.getItem("ketQua"));
hienthi.innerHTML = ketQuaLocalStorage;