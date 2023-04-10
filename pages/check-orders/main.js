const button = document.querySelector('button');
const notification = document.querySelector('.notification');
const buttonHomeLogo = document.querySelector(".buttonHomeLogo");

document.title = "Kiểm Tra Đơn Hàng";

button.addEventListener('click', () => {
    notification.innerHTML = `<p>Không tìm thấy đơn hàng trong hệ thống. Vui lòng kiểm tra lại mã đơn hàng hoặc số điện thoại của bạn</p>`
})
buttonHomeLogo.addEventListener('click', () => {
    location.href = '../../index.html'
})