const button = document.querySelector("button");
const notification = document.querySelector(".notification");
const buttonHomeLogo = document.querySelector(".buttonHomeLogo");
const result = document.querySelector(".result2");
const timkiem = document.querySelector(".timkiem");

document.title = "Kiểm Tra Đơn Hàng";
const donhang = [
  {
    madonhang: 123456,
    danhsachhang: [
      {
        name: "Pizza Thập Cẩm",
        price: 129000,
        soluong: 2,
      },
      {
        name: "Phở Việt Nam",
        price: 109000,
        soluong: 2,
      },
    ],
    tongtien: 300000,
    trangthai: "ĐANG XỬ LÝ",
  },
];

button.addEventListener("click", () => {
  const array = donhang.find((item, index) => {
    return item.madonhang == parseInt(timkiem.value);
  });

  if (array == undefined) {
    notification.innerHTML = `<p>Không tìm thấy đơn hàng trong hệ thống. Vui lòng kiểm tra lại mã đơn hàng hoặc số điện thoại của bạn</p>`;
  } else {
    notification.innerHTML = `<p>Đã tìm thấy đơn hàng của bạn</p>`;
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.textAlign = "center";
    div.style.border = "1px solid rgb(201,199,199)";

    let divListHang = document.createElement("div");
    divListHang.style.flex = "1";
    array.danhsachhang.map((item2, index2) => {
      let Pname = document.createElement("p");
      Pname.innerText = item2.name;
      Pname.style.margin = "5px 0px";
      divListHang.append(Pname);
    });
    let Ptongtien = document.createElement("p");
    Ptongtien.innerText = array.tongtien;
    Ptongtien.style.flex = "1";
    Ptongtien.style.textAlign = "center";
    Ptongtien.style.lineHeight = "3";
    let Ptrangthai = document.createElement("p");
    Ptrangthai.innerText = array.trangthai;
    Ptrangthai.style.flex = "1";
    Ptrangthai.style.lineHeight = "3";
    let Pmadonhang = document.createElement("p");
    Pmadonhang.innerText = array.madonhang;
    Pmadonhang.style.flex = "1";
    Pmadonhang.style.lineHeight = "3";
    div.append(Pmadonhang);
    div.append(divListHang);
    div.append(Ptongtien);
    div.append(Ptrangthai);
    result.append(div);
  }
});
buttonHomeLogo.addEventListener("click", () => {
  location.href = "../../index.html";
});
