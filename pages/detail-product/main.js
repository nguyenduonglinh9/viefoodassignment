const detailproducts = document.querySelector(".detail-products");
const productdetail = JSON.parse(localStorage.getItem("detailproduct"));
const productimage = document.querySelector("#productimage");
const productname = document.querySelector("#productname");
const productprice = document.querySelector("#productprice");
const productdesc = document.querySelector("#productdesc");

productimage.setAttribute("src", productdetail.detailimage);
productname.innerText = productdetail.detailname;
productprice.innerText = productdetail.detailprice;
productdesc.innerText = productdetail.detaildesc;
