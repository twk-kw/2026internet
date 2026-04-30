(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const form = document.querySelector(".contact-form");
  const msg = document.getElementById("form-message");

  if (form && msg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      msg.textContent = "현재는 예시 폼입니다.";
    });
  }
})();