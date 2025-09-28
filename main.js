document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling cho các liên kết nội bộ (giữ nguyên)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Dark mode toggle
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Kiểm tra localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode'; // Update icon
  } else {
    toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
      localStorage.setItem("theme", "light");
      toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
  });
});
