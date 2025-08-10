// Danh sách câu hỏi
const cauHoiList = [
       {
    id: "q1",
    question: "Dao động điều hòa có dạng x = Acos(ωt + φ). Đại lượng ω được gọi là gì?",
    options: { A: "Biên độ", B: "Tần số góc", C: "Pha ban đầu", D: "Chu kỳ" },
    answer: "B"
  },
  {
    id: "q2",
    question: "Biên độ dao động là gì?",
    options: { A: "Giá trị trung bình của li độ", B: "Vận tốc cực đại", C: "Độ lệch lớn nhất của vật khỏi vị trí cân bằng", D: "Tần số dao động" },
    answer: "C"
  },
  {
    id: "q3",
    question: "Chu kỳ dao động T được tính bằng công thức nào sau đây?",
    options: { A: "T = 2π/ω", B: "T = ω/2π", C: "T = Aω", D: "T = 1/ω" },
    answer: "A"
  },
  {
    id: "q4",
    question: "Tần số dao động f liên hệ với chu kỳ T bởi công thức nào?",
    options: { A: "f = 2πT", B: "f = 1/T", C: "f = T/2π", D: "f = Tω" },
    answer: "B"
  },
  {
    id: "q5",
    question: "Dao động cưỡng bức là dao động:",
    options: { A: "Có biên độ không đổi", B: "Tự do", C: "Chịu tác dụng của lực biến thiên tuần hoàn", D: "Không cần lực tác dụng" },
    answer: "C"
  },
  {
    id: "q6",
    question: "Hiện tượng cộng hưởng xảy ra khi:",
    options: { A: "Tần số lực cưỡng bức bằng tần số riêng của hệ", B: "Biên độ cực tiểu", C: "Hệ bị tắt dần nhanh", D: "Không có lực cản" },
    answer: "A"
  },
  {
    id: "q7",
    question: "Năng lượng toàn phần của dao động điều hòa:",
    options: { A: "Biến thiên tuần hoàn", B: "Không đổi", C: "Bằng 0", D: "Tăng dần theo thời gian" },
    answer: "B"
  },
  {
    id: "q8",
    question: "Pha dao động là biểu thức nào sau đây?",
    options: { A: "Acos(ωt + φ)", B: "ωt + φ", C: "ωt", D: "φ" },
    answer: "B"
  },
  {
    id: "q9",
    question: "Chuyển động nào sau đây là dao động điều hòa?",
    options: { A: "Chuyển động tròn đều", B: "Chuyển động ném ngang", C: "Chuyển động theo đường parabol", D: "Chuyển động tịnh tiến đều" },
    answer: "A"
  },
  {
    id: "q10",
    question: "Trong dao động điều hòa, li độ x là hàm nào của thời gian?",
    options: { A: "Hàm bậc nhất", B: "Hàm tuyến tính", C: "Hàm sin hoặc cos", D: "Hàm logarit" },
    answer: "C"
  },
  {
    id: "q11",
    question: "Đại lượng nào sau đây không phụ thuộc vào thời gian trong dao động điều hòa?",
    options: { A: "Li độ", B: "Gia tốc", C: "Pha", D: "Biên độ" },
    answer: "D"
  },
  {
    id: "q12",
    question: "Một vật dao động với biên độ A và tần số f. Quãng đường vật đi được trong một chu kỳ là:",
    options: { A: "4A", B: "2A", C: "A", D: "8A" },
    answer: "A"
  },
  {
    id: "q13",
    question: "Đơn vị của tần số góc ω là:",
    options: { A: "rad/s", B: "Hz", C: "s", D: "m/s" },
    answer: "A"
  },
  {
    id: "q14",
    question: "Dao động tắt dần là dao động có:",
    options: { A: "Biên độ tăng dần theo thời gian", B: "Biên độ giảm dần theo thời gian", C: "Tần số tăng dần", D: "Chu kỳ bằng 0" },
    answer: "B"
  },
  {
    id: "q15",
    question: "Công thức tính vận tốc trong dao động điều hòa là:",
    options: { A: "v = Aωcos(ωt + φ)", B: "v = Aωsin(ωt + φ)", C: "v = -Aωsin(ωt + φ)", D: "v = Aω" },
    answer: "C"
  },
  {
    id: "q16",
    question: "Một vật thực hiện dao động điều hòa với biên độ A và tần số f. Vận tốc cực đại của vật là:",
    options: { A: "2πAf", B: "πAf", C: "Af", D: "A/f" },
    answer: "A"
  },
  {
    id: "q17",
    question: "Đơn vị của chu kỳ dao động là:",
    options: { A: "Hz", B: "s", C: "m", D: "rad/s" },
    answer: "B"
  },
  {
    id: "q18",
    question: "Dao động tự do là dao động:",
    options: { A: "Do ngoại lực duy trì", B: "Không có lực tác dụng", C: "Do hệ tự thực hiện sau khi bị kích thích ban đầu", D: "Không có ma sát" },
    answer: "C"
  },
  {
    id: "q19",
    question: "Pha ban đầu của dao động điều hòa cho biết:",
    options: { A: "Biên độ dao động", B: "Chu kỳ dao động", C: "Tình trạng dao động ban đầu", D: "Tần số dao động" },
    answer: "C"
  },
  {
    id: "q20",
    question: "Tần số dao động có đơn vị là:",
    options: { A: "rad", B: "s", C: "Hz", D: "rad/s" },
    answer: "C"
  },

  // 20 câu còn lại tiếp theo
  {
    id: "q21",
    question: "Năng lượng dao động điều hòa phụ thuộc vào:",
    options: { A: "Biên độ", B: "Pha ban đầu", C: "Chu kỳ", D: "Vận tốc" },
    answer: "A"
  },
  {
    id: "q22",
    question: "Trong dao động điều hòa, lực hồi phục có độ lớn:",
    options: { A: "Không đổi", B: "Tỉ lệ với vận tốc", C: "Tỉ lệ với li độ", D: "Tỉ lệ nghịch với thời gian" },
    answer: "C"
  },
  {
    id: "q23",
    question: "Điều kiện để xảy ra hiện tượng cộng hưởng cơ học là:",
    options: { A: "Lực cản nhỏ", B: "Tần số cưỡng bức bằng tần số riêng", C: "Biên độ nhỏ", D: "Lực cưỡng bức lớn" },
    answer: "B"
  },
  {
    id: "q24",
    question: "Dao động duy trì là dao động:",
    options: { A: "Do ngoại lực biến thiên duy trì", B: "Tự nhiên của hệ", C: "Do tác dụng ban đầu", D: "Do năng lượng được cung cấp bù lại hao hụt" },
    answer: "D"
  },
  {
    id: "q25",
    question: "Công thức liên hệ giữa vận tốc và li độ trong dao động điều hòa là:",
    options: { A: "v² = ω²x²", B: "v² = A²ω² - x²ω²", C: "v² = A² + ω²x²", D: "v² = x² - A²ω²" },
    answer: "B"
  },
  {
    id: "q26",
    question: "Gia tốc trong dao động điều hòa có dạng:",
    options: { A: "a = -ω²x", B: "a = ω²x", C: "a = ωx", D: "a = -Ax" },
    answer: "A"
  },
  {
    id: "q27",
    question: "Dao động cơ học tắt dần có năng lượng:",
    options: { A: "Tăng theo thời gian", B: "Không đổi", C: "Giảm dần theo thời gian", D: "Lúc tăng lúc giảm" },
    answer: "C"
  },
  {
    id: "q28",
    question: "Cường độ âm là:",
    options: { A: "Năng lượng truyền đi trong 1 đơn vị thời gian", B: "Độ to của âm", C: "Độ cao của âm", D: "Độ biến thiên áp suất" },
    answer: "A"
  },
  {
    id: "q29",
    question: "Đơn vị của mức cường độ âm là:",
    options: { A: "dB", B: "W/m²", C: "Hz", D: "s" },
    answer: "A"
  },
  {
    id: "q30",
    question: "Âm cơ bản là:",
    options: { A: "Âm có tần số cao nhất", B: "Âm có cường độ lớn", C: "Âm có tần số nhỏ nhất", D: "Âm bé nhất" },
    answer: "C"
  },

  // 10 câu cuối
  {
    id: "q31",
    question: "Sóng dọc là sóng có phương dao động:",
    options: { A: "Vuông góc với phương truyền sóng", B: "Không xác định", C: "Cùng phương với phương truyền sóng", D: "Tròn đều" },
    answer: "C"
  },
  {
    id: "q32",
    question: "Đơn vị của bước sóng là:",
    options: { A: "m/s", B: "Hz", C: "m", D: "rad" },
    answer: "C"
  },
  {
    id: "q33",
    question: "Hai nguồn phát sóng kết hợp khi:",
    options: { A: "Cùng biên độ", B: "Cùng tần số và độ lệch pha không đổi", C: "Cùng pha", D: "Cùng cường độ" },
    answer: "B"
  },
  {
    id: "q34",
    question: "Sóng cơ truyền được trong:",
    options: { A: "Chân không", B: "Mọi môi trường", C: "Chất rắn, lỏng, khí", D: "Chỉ trong chất rắn" },
    answer: "C"
  },
  {
    id: "q35",
    question: "Tốc độ truyền sóng phụ thuộc vào:",
    options: { A: "Biên độ sóng", B: "Nguồn phát", C: "Môi trường truyền sóng", D: "Tần số" },
    answer: "C"
  },
  {
    id: "q36",
    question: "Khi sóng cơ truyền từ môi trường này sang môi trường khác thì:",
    options: { A: "Tần số thay đổi", B: "Bước sóng thay đổi", C: "Biên độ không đổi", D: "Vận tốc không đổi" },
    answer: "B"
  },
  {
    id: "q37",
    question: "Sóng ngang là sóng có phương dao động:",
    options: { A: "Vuông góc với phương truyền sóng", B: "Cùng phương truyền", C: "Theo đường xoắn", D: "Không xác định" },
    answer: "A"
  },
  {
    id: "q38",
    question: "Điều kiện để xảy ra giao thoa sóng là hai sóng:",
    options: { A: "Cùng biên độ", B: "Cùng pha", C: "Cùng tần số và có hiệu số pha không đổi", D: "Ngược pha" },
    answer: "C"
  },
  {
    id: "q39",
    question: "Cực đại giao thoa xảy ra tại vị trí có hiệu đường đi:",
    options: { A: "Lẻ λ/2", B: "Chẵn λ/2", C: "Lẻ λ", D: "Lẻ π" },
    answer: "B"
  },
  {
    id: "q40",
    question: "Bước sóng là:",
    options: { A: "Khoảng cách giữa hai điểm gần nhau nhất dao động cùng pha", B: "Khoảng cách giữa hai đỉnh sóng", C: "Khoảng cách giữa hai điểm gần nhau dao động ngược pha", D: "Độ dài của sóng" },
    answer: "A"
  }
];

// Hiển thị đề thi
function hienThiDe(cauHoiList) {
  const deThiDiv = document.getElementById("deThi"); // lấy thẻ có id="deThi"
  deThiDiv.innerHTML = ""; // Giả sử ban đầu hiển thị đề có 20 câu → sau đó bạn bấm nút "Làm lại", hàm hienThiDe() được gọi lại → nội dung đề cũ vẫn còn, và đề mới sẽ bị thêm vào bên dưới → kết quả là đề bị nhân đôi.
  //duyệt qua từng câu hỏi và đánh số thứ tự từng câu
  cauHoiList.forEach((cauHoi, thuTuCau) => {
    //tạo str để hiển thị câu hỏi
    let str = `<p><strong>Câu ${thuTuCau + 1}:</strong> ${cauHoi.question}</p>`;
    //duyệt qua từng đáp án A B C D của câu hỏi
    for (let luaChon in cauHoi.options) {
      //str += là để nối thêm nội dụng của từng đáp án ABCD,nối tiếp của  let str = `<p<strongCâu ${thuTuCau + 1}:</strong ${cauHoi.question}</p`;
      //nếu ko có + thì đáp án sẽ bị ghi đè chuỗi,sẽ chỉ hiện đáp án D
      //name="${cauHoi.id}" để nhóm có cùng id lại , ví dụ: nhóm các id: q1 là của câu hỏi số 1
      //vavalue="${luaChon}" là đáp án mà người dùng chọn
      //${luaChon}. ${cauHoi.options[luaChon]} hiển thị nội dung của đáp án, nếu ko có chỉ hiện dấu chấm tròn để chọn
      str += `
        <label>
          <input type="radio" name="${cauHoi.id}" value="${luaChon}">
           ${luaChon}. ${cauHoi.options[luaChon]}
        </label><br>`;
    }
    //thêm tất cả các câu hỏi vào div (vì div id="deThi"></div ở bên trang html),phân cách nhau bằng br
    deThiDiv.innerHTML += str + "<br>";
  });
}

// Chấm điểm
function chamDiem() {
   //tạo số câu đúng là 0
  let soCauDung = 0;
//duyệt qua câu hỏi
  cauHoiList.forEach(cauHoi => {
    /*input[name="${cauHoi.id}"]: tìm tất cả các input radio có thuộc tính name là q1, q2, v.v.

    Giải thích tại sao lại name:Trong cauHoiList, "q1" là ID của câu hỏi trong dữ liệu JavaScript,
    nhưng khi hiển thị lên HTML, nó được dùng làm name cho nhóm radio button.

    :checked: chọn radio button mà người dùng đã chọn , nếu chưa chọn gì là null */
    let luaChon = document.querySelector(`input[name="${cauHoi.id}"]:checked`);
/* Kiểm tra xem:

Người dùng có chọn câu trả lời không (luaChon khác null)

Và lựa chọn đó có đúng không (luaChon.value === cauHoi.answer)

→ Nếu đúng thì tăng biến soCauDung thêm 1. */
    if (luaChon && luaChon.value === cauHoi.answer) {
      soCauDung++;
    }
  });
//hiển thị kết quả ra màn hình
  document.getElementById("ketQua").innerHTML = 
  `✅ Bạn làm đúng <strong>${soCauDung}/${cauHoiList.length}</strong> câu.`;

alert(`✅ Bạn làm đúng ${soCauDung}/${cauHoiList.length} câu.`);
}

// Khóa lựa chọn
function khoaLuaChon() {
  //lấy tất cả lựa chọn có type bằng radio
  let tatCa = document.querySelectorAll('input[type="radio"]');
  //duyệt qua từng cái biến tatCa , với mỗi phân tử gán input.disabled = true,nghĩa là vô hiệu hóa nút chọn và ko thể nhấn chọn nữa
  tatCa.forEach(input => input.disabled = true);
}

// Bắt sự kiện khi người đùng chọn nút "Nộp bài"
document.querySelector(".subMit").addEventListener("click", function () {
  chamDiem(); //chấm điểm
  clearInterval(demNguoc);//dừng đếm ngược
  khoaLuaChon();//khóa đáp án
});

// Đồng hồ đếm ngược
let thoiGian = soCau * 3 * 60; // mỗi câu 3 phút -> tổng thời gian làm bài
//khai báo const dongHo ko thay đổi địa chỉ, document.getElementById("demNguoc"):tìm và lấy thẻ có id là demNguoc
const dongHo = document.getElementById("demNguoc");
//let demNguoc = setInterval(() => { ... }, 1000);
//setInterval(...): Lệnh này tạo ra một hàm chạy lặp lại mỗi 1000 mili giây (1 giây).
let demNguoc = setInterval(() => {
  let phut = Math.floor(thoiGian / 60); // tính phút
  let giay = thoiGian % 60; // tính giây

/*Dòng này dùng để hiển thị đồng hồ lên giao diện HTML.
${phut.toString().padStart(2, "0")}:
Chuyển số phút thành chuỗi,giống với số giây
Nếu chỉ có 1 chữ số (ví dụ 9), thì thêm số 0 đằng trước → thành 09.*/
  dongHo.textContent = `${phut.toString().padStart(2, "0")}:${giay.toString().padStart(2, "0")}`;

  thoiGian--; // Giảm thời gian xuống

  if (thoiGian < 0) { // Khi hết giờ, tự động chấm và dừng làm bài
    //clearInterval(...) là hàm trong JavaScript dùng để dừng một bộ đếm thời gian đã được tạo bằng
    clearInterval(demNguoc);
    chamDiem(); //chấm điểm
    khoaLuaChon();//khóa lựa chọn
  }
}, 1000);

// Gọi hiển thị đề ra màn hình html
hienThiDe(cauHoiList);

// Hiển thị số câu hỏi trong ngân hàng đề
//getElementById("soCauHoi") sẽ tìm đến phần tử HTML có id = "soCauHoi"
//.textContent: Dùng để gán nội dung chữ cho phần tử đó.
//cauHoiList.length: Lấy số phần tử (số câu hỏi) trong mảng cauHoiList.
//.length sẽ trả về số lượng phần tử trong mảng.
document.getElementById("soCauHoi").textContent = cauHoiList.length;
