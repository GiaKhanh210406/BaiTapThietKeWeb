// Lấy tham số từ URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Xử lý khi bấm "Bắt đầu"
function batDau() {
  const soCau = parseInt(document.getElementById("soCau").value);
  const de = getQueryParam("de"); // số đề, ví dụ: 1, 2, 3...
  const mon = getQueryParam("mon"); // môn học, ví dụ: Anh, Toan...

  // Kiểm tra giới hạn 10–40
  if (isNaN(soCau) || soCau < 10 || soCau > 40) {
    alert("Vui lòng nhập số câu hợp lệ (từ 10 đến 40).");
    return;
  }

  // Lưu số câu vào localStorage
  localStorage.setItem("soCauHoi", soCau);

  // Nếu có đủ thông tin, chuyển đúng trang đề
  if (de && mon) {
    // Ví dụ: mon=Anh, de=2 → de2Anh.html
    const fileName = `de${de}${mon}.html`;
    window.location.href = fileName;
  } else {
    alert("Thiếu thông tin môn học hoặc số đề trong URL!");
  }
}

// Giới hạn input ngay khi người dùng nhập
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("soCau");
  if (input) {
    input.addEventListener("input", function () {
      if (this.value > 40) this.value = 40;
      if (this.value < 10 && this.value !== "") this.value = 10;
    });
  }
});
