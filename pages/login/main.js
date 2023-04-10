const birthdayDay = document.querySelector("#birthday-day");
const birthdayMonth = document.querySelector("#birthday-month");
const birthdayYear = document.querySelector("#birthday-year");
const buttonHomeLogo = document.querySelector(".buttonHomeLogo");

document.title = "Đăng Ký";

for (let i = 1; i < 32; i++) {
  let option = document.createElement("option");
  option.setAttribute("value", i);
  option.innerText = i;
  birthdayDay.append(option);
}

for (let i = 1; i < 13; i++) {
  let option = document.createElement("option");
  option.setAttribute("value", i);
  option.innerText = i;
  birthdayMonth.append(option);
}

for (let i = 1980; i < 2030; i++) {
  let option = document.createElement("option");
  option.setAttribute("value", i);
  option.innerText = i;
  birthdayYear.append(option);
}
buttonHomeLogo.addEventListener("click", () => {
  location.href = "../../index.html";
});
