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
