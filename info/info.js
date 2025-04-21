// Optional: For highlighting navbar item if needed
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function () {
      document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
  