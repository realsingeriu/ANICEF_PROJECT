// 네브바 자바스크립트
const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const icon = document.querySelector(".navbar_icons");

// 토글 버튼 클릭 시 active 클래스가 없으면 적용 , 다시 클릭하면 사라짐
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
});
