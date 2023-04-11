const slider = document.querySelector(".slider");
const sliderBody = document.querySelector(".sliderbody");
const listproducts = document.querySelector(".listproducts");
const listnews = document.querySelector(".listnews");
const buttonHomeLogo = document.querySelector(".buttonHomeLogo");
const slideImages = ["/assets/image/slide_1.jpg", "./assets/image/slide_2.jpg"];
const products = [
  {
    name: "Xà lách trộn kiểu Nga",
    price: 59000,
    image: "./assets/image/product1.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Tomato SP",
    price: 68000,
    image: "./assets/image/product2.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Supreme",
    price: 269000,
    image: "./assets/image/product3.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Súp rau",
    price: 29000,
    image: "/assets/image/product4.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Súp gà kem sữa",
    price: 39000,
    image: "/assets/image/product5.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Shup tôm",
    price: 160000,
    image: "./assets/image/product6.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Seafood Pesto",
    price: 269000,
    image: "./assets/image/product7.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Seafood Chowder",
    price: 59000,
    image: "./assets/image/product8.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Seafood Black Pepper",
    price: 259000,
    image: "./assets/image/product9.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Seafood",
    price: 69000,
    image: "./assets/image/product10.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Salad cá ngừ",
    price: 49000,
    image: "./assets/image/product11.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Salad bắp cải",
    price: 39000,
    image: "./assets/image/product12.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Pizza Sốt Cà Bò",
    price: 190000,
    image: "/assets/image/product13.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Pizza Thịt Lợn",
    price: 210000,
    image: "/assets/image/product14.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Pizza Supreme",
    price: 259000,
    image: "./assets/image/product15.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Pizza bốn mùa",
    price: 380000,
    image: "/assets/image/product16.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Bánh phủ socola",
    price: 49000,
    image: "/assets/image/product17.jpg",
    desc: "Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.",
  },
  {
    name: "Cơm rang thập cẩm",
    price: 59000,
    image: "./assets/image/product18.jpg",
    desc: "Món cơm rang trộm thập cẩm các nguyên liệu từ hải sản tới bò, heo",
  },
  {
    name: "Bánh ngọt mật ong",
    price: 109000,
    image: "./assets/image/product19.jpg",
    desc: "Món bánh phủ mật ong ngọt ngào",
  },
  {
    name: "Salad trộn kiểu Pháp",
    price: 99000,
    image: "./assets/image/product20.jpg",
    desc: "Món salad trộn kiểu Pháp cùng phô mai chua",
  },
  {
    name: "Pizza thập cẩm",
    price: 129000,
    image: "/assets/image/product21.jpg",
    desc: "Pizza thập cẩm sự kết hợp giữa ba nguyên liệu : Hải sản, bò, heo",
  },
  {
    name: "Soup cay Hàn Quốc",
    price: 109000,
    image: "/assets/image/product22.png",
    desc: "Món soup cay đến từ Hàn Quốc",
  },
  {
    name: "Mỳ ý cơ bản",
    price: 59000,
    image: "/assets/image/product23.jpg",
    desc: "Món mỳ ý trộn sốt cà chua đơn giản",
  },
  {
    name: "Phở Việt Nam",
    price: 109000,
    image: "/assets/image/product24.jpg",
    desc: "Món Phở đặc trưng của Việt Nam, tô bình thường",
  },
  {
    name: "Phở Việt Nam",
    price: 129000,
    image: "/assets/image/product25.jpg",
    desc: "Món Phở đặc trưng của Việt Nam, tô đặt biệt",
  },
];
const news = [
  {
    title: "Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạn",
    date: "07/01/2023",
    content:
      "Tặng 1 pizza cỡ M (áp dụng cho tất cả các loại pizza trừ số 3, 11 và 12) Quý khách vui lòng mang theo chứng minh thư nhân dân hoặc các giấy tờ tương đương thể hiện ngày sinh nhật trùng với ngày nhận bánh Mỗi khách hàng chỉ được nhận 1 bánh tặng miễn phí Chỉ áp dụng với các đơn hàng có giá trị trên 250.000đ Cửa hàng tặng miễn phí tối đa 10 bánh/ 1 ngày cho 10 người đăng kí đầu tiên",
    image: "./assets/image/product14.jpg",
  },
  {
    title:
      "Khuyến mãi thứ 2, thứ 4, thứ 6 hàng tuần Khuyến mãi thứ 2, thứ 4, thứ 6 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho thứ 2, thứ 4, thứ 6 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "./assets/image/product17.jpg",
  },
  {
    title: "Khuyến mãi thứ 3, thứ 5 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho ngày thứ 3 và thứ 5 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "./assets/image/product12.jpg",
  },
  {
    title: "Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạn",
    date: "07/01/2023",
    content:
      "Tặng 1 pizza cỡ M (áp dụng cho tất cả các loại pizza trừ số 3, 11 và 12) Quý khách vui lòng mang theo chứng minh thư nhân dân hoặc các giấy tờ tương đương thể hiện ngày sinh nhật trùng với ngày nhận bánh Mỗi khách hàng chỉ được nhận 1 bánh tặng miễn phí Chỉ áp dụng với các đơn hàng có giá trị trên 250.000đ Cửa hàng tặng miễn phí tối đa 10 bánh/ 1 ngày cho 10 người đăng kí đầu tiên",
    image: "./assets/image/product8.jpg",
  },
  {
    title: "Khuyến mãi thứ 3, thứ 5 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho ngày thứ 3 và thứ 5 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "./assets/image/product1.jpg",
  },
  {
    title: "Khuyến mãi thứ 3, thứ 5 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho ngày thứ 3 và thứ 5 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "./assets/image/product12.jpg",
  },
  {
    title: "Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạn",
    date: "07/01/2023",
    content:
      "Tặng 1 pizza cỡ M (áp dụng cho tất cả các loại pizza trừ số 3, 11 và 12) Quý khách vui lòng mang theo chứng minh thư nhân dân hoặc các giấy tờ tương đương thể hiện ngày sinh nhật trùng với ngày nhận bánh Mỗi khách hàng chỉ được nhận 1 bánh tặng miễn phí Chỉ áp dụng với các đơn hàng có giá trị trên 250.000đ Cửa hàng tặng miễn phí tối đa 10 bánh/ 1 ngày cho 10 người đăng kí đầu tiên",
    image: "./assets/image/product8.jpg",
  },
  {
    title: "Khuyến mãi thứ 3, thứ 5 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho ngày thứ 3 và thứ 5 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "./assets/image/product1.jpg",
  },
];

document.title = "Trang Chủ VIE FOOD";

slideImages.map((image, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", image);
  img.style.width = "100%";
  slider.append(img);
});

setInterval(() => {
  slider.append(slider.children[0]);
}, 5000);

products.map((product, index) => {
  let div = document.createElement("div");

  let pName = document.createElement("p");
  pName.innerText = product.name;
  let pPrice = document.createElement("p");
  pPrice.innerText = product.price;
  pPrice.style.color = "#5b0700";
  pPrice.style.fontFamily = "sans-serif";
  pPrice.style.fontStyle = "normal";
  pPrice.style.fontWeight = "400";
  pPrice.style.fontSize = "16px";
  pPrice.style.lineHeight = "23px";
  let img = document.createElement("img");
  img.addEventListener("click", () => {
    localStorage.setItem(
      "detailproduct",
      JSON.stringify({
        detailimage: product.image,
        detailname: product.name,
        detailprice: product.price,
        detaildesc: product.desc,
      })
    );
    location.href = "../../pages/detail-product/index.html";
  });
  img.setAttribute("src", product.image);
  img.style.width = "200px";
  img.style.height = "150px";
  let button = document.createElement("button");
  button.style.width = "fit-content";
  button.style.height = "fit-content";
  let pButton = document.createElement("p");
  pButton.innerText = "MUA HÀNG";
  pButton.style.fontFamily = "sans-serif";
  pButton.style.fontStyle = "normal";
  pButton.style.fontWeight = "400";
  pButton.style.fontSize = "14px";
  pButton.style.lineHeight = "23px";
  pButton.addEventListener("click", () => {
    // localStorage.setItem(
    //   "myCart",
    //   JSON.stringify([{
    //     detailimage: product.image,
    //     detailname: product.name,
    //     detailprice: product.price,
    //     detaildesc: product.desc,
    //   }])
    // );
    var myCart = JSON.parse(localStorage.getItem("myCart"));
    if (myCart == null) {
      localStorage.setItem(
        "myCart",
        JSON.stringify([
          {
            detailimage: product.image,
            detailname: product.name,
            detailprice: product.price,
            detaildesc: product.desc,
          },
        ])
      );
      location.href = "../../pages/mycart/index.html";
    } else {
      const newCart = [...myCart];
      newCart.push({
        detailimage: product.image,
        detailname: product.name,
        detailprice: product.price,
        detaildesc: product.desc,
      });
      console.log(newCart);
      localStorage.setItem("myCart", JSON.stringify(newCart));
      location.href = "../../pages/mycart/index.html";
    }
  });
  let imgCart = document.createElement("img");
  imgCart.setAttribute("src", "./assets/image/shopping-cart.png");
  imgCart.style.width = "20px";
  imgCart.style.height = "20px";
  button.append(pButton);
  button.append(imgCart);
  div.append(img);
  div.append(pName);
  div.append(pPrice);
  div.append(button);
  sliderBody.append(div);
  // let button = document.createElement("div");
});

setInterval(() => {
  sliderBody.append(sliderBody.children[0]);
}, 4000);

products.map((product, index) => {
  let div = document.createElement("div");
  let pName = document.createElement("p");
  pName.innerText = product.name;
  let pPrice = document.createElement("p");
  pPrice.innerText = product.price;
  pPrice.style.color = "#5b0700";
  pPrice.style.fontFamily = "sans-serif";
  pPrice.style.fontStyle = "normal";
  pPrice.style.fontWeight = "400";
  pPrice.style.fontSize = "16px";
  pPrice.style.lineHeight = "23px";
  let img = document.createElement("img");
  img.setAttribute("src", product.image);
  img.addEventListener("click", () => {
    localStorage.setItem(
      "detailproduct",
      JSON.stringify({
        detailimage: product.image,
        detailname: product.name,
        detailprice: product.price,
        detaildesc: product.desc,
      })
    );
    location.href = "../../pages/detail-product/index.html";
  });
  let button = document.createElement("button");
  button.style.width = "fit-content";
  button.style.height = "fit-content";
  let pButton = document.createElement("p");
  pButton.innerText = "MUA HÀNG";
  pButton.style.fontFamily = "sans-serif";
  pButton.style.fontStyle = "normal";
  pButton.style.fontWeight = "400";
  pButton.style.fontSize = "14px";
  pButton.style.lineHeight = "23px";
  let imgCart = document.createElement("img");
  imgCart.setAttribute("src", "/assets/image/shopping-cart.png");
  imgCart.style.width = "20px";
  imgCart.style.height = "20px";
  button.append(pButton);
  button.append(imgCart);
  div.append(img);
  div.append(pName);
  div.append(pPrice);
  div.append(button);
  listproducts.append(div);
  pButton.addEventListener('click', () => {
    var myCart = JSON.parse(localStorage.getItem("myCart"));
    if (myCart == null) {
      localStorage.setItem(
        "myCart",
        JSON.stringify([
          {
            detailimage: product.image,
            detailname: product.name,
            detailprice: product.price,
            detaildesc: product.desc,
          },
        ])
      );
      location.href = "../../pages/mycart/index.html";
    } else {
      const newCart = [...myCart];
      newCart.push({
        detailimage: product.image,
        detailname: product.name,
        detailprice: product.price,
        detaildesc: product.desc,
      });
      console.log(newCart);
      localStorage.setItem("myCart", JSON.stringify(newCart));
      location.href = "../../pages/mycart/index.html";
    }
  })
  // let button = document.createElement("div");
});

news.map((item, index) => {
  let div = document.createElement("div");

  let pName = document.createElement("p");
  pName.innerText = item.title;
  pName.style.fontFamily = "sans-serif";
  pName.style.fontStyle = "normal";
  pName.style.fontWeight = "400";
  pName.style.fontSize = "14px";
  pName.style.lineHeight = "20px";
  pName.addEventListener("click", () => {
    localStorage.setItem(
      "detailnew",
      JSON.stringify({
        detailtitle: item.title,
        detaildate: item.date,
        detailcontent: item.content,
        detailimage: item.image,
      })
    );
    location.href = "../../pages/detail-new/index.html";
  });
  let pPrice = document.createElement("p");
  pPrice.innerText = item.content;
  pPrice.style.color = "#5b0700";
  pPrice.style.fontFamily = "sans-serif";
  pPrice.style.fontStyle = "normal";
  pPrice.style.fontWeight = "400";
  pPrice.style.fontSize = "12px";
  pPrice.style.lineHeight = "17px";
  let img = document.createElement("img");
  img.setAttribute("src", item.image);
  let button = document.createElement("button");
  button.style.width = "fit-content";
  button.style.height = "fit-content";
  div.append(img);
  div.append(pName);
  div.append(pPrice);
  listnews.append(div);
});

setInterval(() => {
  listnews.append(listnews.children[0]);
}, 4000);

buttonHomeLogo.addEventListener("click", () => {
  location.href = "index.html";
});
