let dashBtn = document.querySelector("#dash");
let invoBtn = document.querySelector("#invo");
let propBtn = document.querySelector("#prop");
let servicBtn = document.querySelector("#servic");
let transaBtn = document.querySelector("#transa");
let projectsBtn = document.querySelector("#projects");
let customersBtn = document.querySelector("#customers");
let settingsBtn = document.querySelector("#settings");
let logoutBtn = document.querySelector("#logout");

let onclickValue = "0";

dashBtn.addEventListener("click", function dashOnclick() {
  onclickValue = "0";
});
invoBtn.addEventListener("click", function invo() {
  onclickValue = "1";
});
propBtn.addEventListener("click", () => {
  onclickValue = "2";
});
servicBtn.addEventListener("click", () => {
  onclickValue = "3";
});
transaBtn.addEventListener("click", () => {
  onclickValue = "4";
});
projectsBtn.addEventListener("click", () => {
  onclickValue = 5;
});
customersBtn.addEventListener("click", () => {
  onclickValue = 6;
});
settingsBtn.addEventListener("click", () => {
  onclickValue = 7;
});
transaBtn.addEventListener("click", () => {
  logoutBtn = 8;
});
