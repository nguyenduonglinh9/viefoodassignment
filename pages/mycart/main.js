const payingButton = document.querySelector(".payingButton");
const tabCart = document.querySelector('.tabcart');
const tabPay = document.querySelector('.tabpay');
const pay = document.querySelector('.pay');
const buttonHomeLogo = document.querySelector(".buttonHomeLogo");

document.title = "Đơn Hàng Của Tôi";

payingButton.addEventListener('click', () => {
    tabCart.style.display = 'none';
    tabPay.style.display = 'flex'
    pay.style.color = "rgb(215, 75, 51)";
});

buttonHomeLogo.addEventListener('click', () => {
    location.href="../../index.html"
})