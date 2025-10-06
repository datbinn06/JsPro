const addProduct = () =>{
    event.preventDefault(); // ngan trinh duyet chuyen huong
    const tensanpham = document.querySelector('input[name="tensanpham"]').value //lay tri cua o input
    const asp = document.querySelector('input[name="anhsanpham"]').value //lay tri cua o input
    const danhmuc = document.querySelector('select[name="danhmucsanpham"]').value //lay tri cua o input
    const soluong = document.querySelector('input[name="soluongsanpham"]').value //lay tri cua o input
    const giatien = document.querySelector('input[name="giatiensanpham"]').value //lay tri cua o input


    // su dung fetch de luu tru du lieu
    //fetch('link API')
    fetch('http://localhost:3000/products',{
        method : 'POST',
         headers: {
      'Content-Type': 'application/json'
    },
        body :JSON.stringify({
            "name" :tensanpham,
            "image" :asp,
            "cat_id" :danhmuc,
            "price" : giatien,
            "soluong" :soluong,
        })
    });
    alert('Them thanh cong');
}