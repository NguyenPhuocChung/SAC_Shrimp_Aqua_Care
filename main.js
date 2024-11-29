document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    const targetId = this.getAttribute("href"); // Lấy giá trị id của section
    const targetElement = document.querySelector(targetId); // Truy cập tới section đó

    // Cuộn mượt tới section
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const animateElement = document.querySelector(".animate-at-5100px"); // Phần tử cần animation

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 6100 && window.scrollY < 6200) {
      // Kiểm tra vị trí cuộn (từ 5100px đến 5200px)
      animateElement.classList.add("visible"); // Hiển thị animation khi cuộn tới 5100px
    } else {
      animateElement.classList.remove("visible"); // Ẩn animation khi cuộn ra khỏi vùng 5100px
    }
  });
});
