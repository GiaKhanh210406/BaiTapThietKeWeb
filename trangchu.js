// Tìm kiếm môn học
document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let subjects = document.querySelectorAll(".subject-box");

  subjects.forEach((subject) => {
    let text = subject.querySelector("h4").textContent.toLowerCase();
    subject.style.display = text.includes(filter) ? "" : "none";
  });
});
const toggleBtn = document.getElementById("toggle-theme");
// lịch nhắc

function setReminder() {
  const timeInput = document.getElementById("studyTime").value;
  if (!timeInput) {
    alert("Vui lòng chọn thời gian trước!");
    return;
  }
  const studyTime = new Date(timeInput).getTime();
  const now = new Date().getTime();
  const delay = studyTime - now;

  if (delay <= 0) {
    alert("Thời gian phải lớn hơn hiện tại!");
    return;
  }

  alert("⏳ Đã lưu lịch học!");
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
  }, delay);
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
