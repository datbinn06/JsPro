// callback cơ bản
function sayHello(name) {
  return "Xin chào " + name;
}

function processUser(callback) {
  let name = "Đạt";
  return callback(name); // gọi callback
}

console.log(processUser(sayHello)); // Xin chào Đạt


//tính toán callback
function add(a, b) {
     return a + b; 
}
function multiply(a, b) {
     return a * b;
    
}

function calculate(a, b, operation) {
  return operation(a, b); // gọi callback
}

console.log(calculate(5, 10, add));      // 15
console.log(calculate(5, 10, multiply)); // 50


//callbacl với mảng 
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num * 2);
});


//callback bat dong bo
console.log("Bắt đầu");

setTimeout(function() {
  console.log("Đang chạy sau 2 giây...");
}, 2000);

console.log("Kết thúc");
