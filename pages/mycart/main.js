const payingButton = document.querySelector(".payingButton");
const tabCart = document.querySelector(".tabcart");
const tabPay = document.querySelector(".tabpay");
const pay = document.querySelector(".pay");
const buttonHomeLogo = document.querySelector(".buttonHomeLogo");
const listCart = document.querySelector(".listCart");
const backtohome = document.querySelector(".backtohome");
const dilivery = document.querySelector("#dilivery");
const control = document.querySelector(".controls");
const control2 = document.querySelector(".controls2");
const hoanthanh = document.querySelector(".hoanthanh");
const tabdone = document.querySelector(".tabdone");
const done = document.querySelector(".done");

let tongtiensanpham = 0;
backtohome.addEventListener("click", () => {
  location.href = "../../pages/list-product/index.html";
});

const listCartLocal = JSON.parse(localStorage.getItem("myCart"));

if (listCartLocal != null) {
  listCartLocal.map((item, index) => {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.padding = "10px 15px";
    div.style.width = "100%";
    div.style.textAlign = "center";
    let img = document.createElement("img");
    let Divimg = document.createElement("div");
    Divimg.style.flex = "1";
    img.setAttribute("src", item.detailimage);
    img.style.width = "100px";
    Divimg.append(img);
    let pName = document.createElement("p");
    pName.innerText = item.detailname;
    pName.style.flex = "1";
    let pPrice = document.createElement("p");
    pPrice.style.flex = "1";
    pPrice.innerText = item.detailprice;
    let input = document.createElement("input");
    input.style.height = "50px";
    input.style.flex = "1";
    input.style.border = "1px solid black";
    input.style.padding = "5px";
    input.style.borderRadius = "3px";
    input.setAttribute("type", "number");
    input.setAttribute("value", 1);

    let total = document.createElement("p");
    total.innerText = parseInt(pPrice.textContent) * input.value;
    total.style.flex = "1";

    input.addEventListener("change", () => {
      total.innerText = parseInt(pPrice.textContent) * input.value;
      //   tongtiensanpham = tongtiensanpham + parseInt(total.textContent);
    });
    div.append(Divimg);
    div.append(pName);
    div.append(pPrice);
    div.append(input);
    listCart.append(div);
    div.append(total);
  });
}

document.title = "Đơn Hàng Của Tôi";

payingButton.addEventListener("click", () => {
  [...listCart.children].map((item, index) => {
    tongtiensanpham = tongtiensanpham + parseInt(item.lastChild.textContent);
  });
  console.log(tongtiensanpham);
  tabCart.style.display = "none";
  tabPay.style.display = "flex";
  pay.style.color = "rgb(215, 75, 51)";
  dilivery.addEventListener("change", () => {
    pDilivery.innerText = parseInt(dilivery.value);
    pTotalThanhToan.innerText =
      parseInt(pTotal.textContent) + parseInt(pDilivery.textContent);
  });
  control.style.display = "none";
  control2.style.display = "flex";
  hoanthanh.addEventListener("click", () => {
    tabPay.style.display = "none";
    tabdone.style.display = "flex";
    done.style.color = "rgb(215, 75, 51)";
    localStorage.removeItem("myCart");
    control2.style.display = 'none';
  });
  const pTotal = document.createElement("p");
  const pDilivery = document.createElement("p");
  const pTotalThanhToan = document.createElement("p");
  pDilivery.innerText = parseInt(dilivery.value);
  pTotal.innerText = tongtiensanpham;
  pTotalThanhToan.innerText =
    parseInt(pTotal.textContent) + parseInt(pDilivery.textContent);
  pTotal.style.color = "red";
  pDilivery.style.color = "red";
  pTotalThanhToan.style.color = "red";

  tabPay.children[2].children[1].append(pTotal);
  tabPay.children[2].children[2].append(pDilivery);
  tabPay.children[2].children[3].append(pTotalThanhToan);
});

buttonHomeLogo.addEventListener("click", () => {
  location.href = "../../index.html";
});
