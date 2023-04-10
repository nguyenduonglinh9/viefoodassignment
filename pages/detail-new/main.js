const detailnew = JSON.parse(localStorage.getItem("detailnew"));
const detailtitle = document.querySelector("#detailtitle");
const detaildate = document.querySelector("#detaildate");
const detailcontent = document.querySelector("#detailcontent");
const listPost = document.querySelector(".box-body");

document.title = "Tin Tức";
const buttonHomeLogo = document.querySelector(".buttonHomeLogo");

buttonHomeLogo.addEventListener("click", () => {
  location.href = "../../index.html";
});

detailtitle.innerText = detailnew.detailtitle;
detaildate.innerText = detailnew.detaildate;
detailcontent.innerText = detailnew.detailcontent;

const news = [
  {
    title: "Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạn",
    date: "07/01/2023",
    content:
      "Tặng 1 pizza cỡ M (áp dụng cho tất cả các loại pizza trừ số 3, 11 và 12) Quý khách vui lòng mang theo chứng minh thư nhân dân hoặc các giấy tờ tương đương thể hiện ngày sinh nhật trùng với ngày nhận bánh Mỗi khách hàng chỉ được nhận 1 bánh tặng miễn phí Chỉ áp dụng với các đơn hàng có giá trị trên 250.000đ Cửa hàng tặng miễn phí tối đa 10 bánh/ 1 ngày cho 10 người đăng kí đầu tiên",
    image: "/assets/image/product14.jpg",
  },
  {
    title:
      "Khuyến mãi thứ 2, thứ 4, thứ 6 hàng tuần Khuyến mãi thứ 2, thứ 4, thứ 6 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho thứ 2, thứ 4, thứ 6 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "/assets/image/product17.jpg",
  },
  {
    title: "Khuyến mãi thứ 3, thứ 5 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho ngày thứ 3 và thứ 5 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "/assets/image/product12.jpg",
  },
  {
    title: "Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạn",
    date: "07/01/2023",
    content:
      "Tặng 1 pizza cỡ M (áp dụng cho tất cả các loại pizza trừ số 3, 11 và 12) Quý khách vui lòng mang theo chứng minh thư nhân dân hoặc các giấy tờ tương đương thể hiện ngày sinh nhật trùng với ngày nhận bánh Mỗi khách hàng chỉ được nhận 1 bánh tặng miễn phí Chỉ áp dụng với các đơn hàng có giá trị trên 250.000đ Cửa hàng tặng miễn phí tối đa 10 bánh/ 1 ngày cho 10 người đăng kí đầu tiên",
    image: "/assets/image/product8.jpg",
  },
  {
    title: "Khuyến mãi thứ 3, thứ 5 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho ngày thứ 3 và thứ 5 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "/assets/image/product1.jpg",
  },
  {
    title: "Khuyến mãi thứ 3, thứ 5 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho ngày thứ 3 và thứ 5 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "/assets/image/product12.jpg",
  },
  {
    title: "Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạn",
    date: "07/01/2023",
    content:
      "Tặng 1 pizza cỡ M (áp dụng cho tất cả các loại pizza trừ số 3, 11 và 12) Quý khách vui lòng mang theo chứng minh thư nhân dân hoặc các giấy tờ tương đương thể hiện ngày sinh nhật trùng với ngày nhận bánh Mỗi khách hàng chỉ được nhận 1 bánh tặng miễn phí Chỉ áp dụng với các đơn hàng có giá trị trên 250.000đ Cửa hàng tặng miễn phí tối đa 10 bánh/ 1 ngày cho 10 người đăng kí đầu tiên",
    image: "/assets/image/product8.jpg",
  },
  {
    title: "Khuyến mãi thứ 3, thứ 5 hàng tuần",
    date: "07/01/2023",
    content:
      "Áp dụng cho ngày thứ 3 và thứ 5 hàng tuần Áp dụng cho các hình thức: giao bánh và mang về Không áp dụng ngày lễ, tết",
    image: "/assets/image/product1.jpg",
  },
];

news.map((itemnew, index) => {
  let div = document.createElement("div");
  div.style.display = "flex";
  div.style.margin = "10px 10px";
  div.style.borderBottom = "1px dotted rgb(221,221,221)";
  div.style.height = "110px";
  let divContent = document.createElement("div");
  let divImg = document.createElement("div");
  divImg.style.width = "fit-content";
  divImg.style.height = "fit-content";

  let img = document.createElement("img");
  img.style.transition = "all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1)";
  img.style.width = "100px";
  img.setAttribute("src", itemnew.image);
  let pTitle = document.createElement("p");
  pTitle.innerText = itemnew.title;
  pTitle.style.fontFamily = "sans-serif";
  pTitle.style.fontStyle = "normal";
  pTitle.style.fontWeight = "700";
  pTitle.style.fontSize = "12px";
  pTitle.style.lineHeight = "17px";
  pTitle.style.color = "rgb(51,51,51)";
  pTitle.style.cursor = "pointer";
  pTitle.style.padding = "0px 10px";
  pTitle.addEventListener("mouseover", () => {
    pTitle.style.color = "rgb(215, 75, 51)";
  });
  pTitle.addEventListener("mouseout", () => {
    pTitle.style.color = "rgb(51,51,51)";
  });
  pTitle.addEventListener("click", () => {
    localStorage.setItem(
      "detailnew",
      JSON.stringify({
        detailtitle: itemnew.title,
        detaildate: itemnew.date,
        detailcontent: itemnew.content,
        detailimage: itemnew.image,
      })
    );
    location.href = "../../pages/detail-new/index.html";
  });
  let pDate = document.createElement("p");
  pDate.innerText = itemnew.date;
  pDate.style.fontFamily = "sans-serif";
  pDate.style.fontStyle = "italic";
  pDate.style.fontWeight = "400";
  pDate.style.fontSize = "11px";
  pDate.style.lineHeight = "16px";
  pDate.style.color = "#aaaaaa";
  pDate.style.cursor = "pointer";
  pDate.style.padding = "10px 10px";

  let pContent = document.createElement("p");
  pContent.innerText = itemnew.content;
  pContent.style.fontFamily = "sans-serif";
  pContent.style.fontStyle = "normal";
  pContent.style.fontWeight = "400";
  pContent.style.fontSize = "14px";
  pContent.style.lineHeight = "25px";
  pContent.style.cursor = "pointer";
  pContent.style.maxWidth = "500px";
  pContent.style.display = "-webkit-box";
  pContent.style.webkitLineClamp = "1";
  pContent.style.webkitBoxOrient = "vertical";
  pContent.style.overflow = "hidden";
  pContent.style.padding = "0px 10px";

  divImg.append(img);
  divContent.append(pTitle);
  divContent.append(pContent);
  div.append(divImg);
  div.append(divContent);
  listPost.append(div);
});
