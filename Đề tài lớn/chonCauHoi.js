document.getElementById("formSoCau").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn form load lại

  const soCau = document.getElementById("soCau").value;
  if (soCau < 10 || soCau > 40) {
    alert("Vui lòng chọn số câu từ 10 đến 40.");
    return;
  }

  // Lưu số câu vào localStorage
  localStorage.setItem("soCauHoi", soCau);

  // Chuyển sang trang đề thi
  window.location.href = "de1Toan.html";
});
