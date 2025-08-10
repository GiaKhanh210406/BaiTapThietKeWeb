// Danh sách câu hỏi
const cauHoiList = [
  {
    id: "q1",
    question: "Chu kỳ dao động của con lắc lò xo phụ thuộc vào đại lượng nào sau đây?",
    options: { A: "Khối lượng vật và độ cứng lò xo", B: "Biên độ", C: "Pha ban đầu", D: "Vị trí ban đầu" },
    answer: "A"
  },
  {
    id: "q2",
    question: "Một vật dao động điều hòa, khi qua vị trí cân bằng thì đại lượng nào cực đại?",
    options: { A: "Li độ", B: "Gia tốc", C: "Vận tốc", D: "Pha" },
    answer: "C"
  },
  {
    id: "q3",
    question: "Con lắc đơn dao động với chu kỳ T trong điều kiện lý tưởng phụ thuộc vào:",
    options: { A: "Khối lượng", B: "Biên độ", C: "Chiều dài dây và gia tốc trọng trường", D: "Lực kéo về" },
    answer: "C"
  },
  {
    id: "q4",
    question: "Khi biên độ dao động tăng gấp đôi, cơ năng dao động điều hòa sẽ:",
    options: { A: "Không đổi", B: "Tăng gấp đôi", C: "Tăng gấp 4 lần", D: "Giảm một nửa" },
    answer: "C"
  },
  {
    id: "q5",
    question: "Lực phục hồi trong dao động điều hòa luôn hướng:",
    options: { A: "Theo chiều chuyển động", B: "Về vị trí biên", C: "Ngược chiều vận tốc", D: "Về vị trí cân bằng" },
    answer: "D"
  },
  {
    id: "q6",
    question: "Trong dao động điều hòa, gia tốc đạt cực đại tại:",
    options: { A: "Vị trí cân bằng", B: "Biên", C: "Trung điểm giữa biên và cân bằng", D: "Mọi vị trí" },
    answer: "B"
  },
  {
    id: "q7",
    question: "Pha dao động quyết định:",
    options: { A: "Giá trị vận tốc ban đầu", B: "Hướng dao động", C: "Trạng thái dao động ban đầu", D: "Biên độ" },
    answer: "C"
  },
  {
    id: "q8",
    question: "Trong dao động điều hòa, cơ năng bằng:",
    options: { A: "Thế năng cực đại", B: "Động năng cực đại", C: "Tổng động năng và thế năng tại mọi thời điểm", D: "0" },
    answer: "C"
  },
  {
    id: "q9",
    question: "Con lắc đơn dao động nhỏ có tần số được tính bằng:",
    options: { A: "f = √(g/l)", B: "f = 1/(2π)√(l/g)", C: "f = 2π√(l/g)", D: "f = √(l/g)" },
    answer: "B"
  },
  {
    id: "q10",
    question: "Tốc độ truyền sóng cơ học phụ thuộc vào:",
    options: { A: "Biên độ", B: "Tần số nguồn", C: "Môi trường truyền", D: "Bước sóng" },
    answer: "C"
  },
  {
    id: "q11",
    question: "Đơn vị đo của năng lượng dao động điều hòa là:",
    options: { A: "N", B: "J", C: "Hz", D: "W" },
    answer: "B"
  },
  {
    id: "q12",
    question: "Con lắc lò xo nằm ngang có tần số f phụ thuộc vào:",
    options: { A: "Chiều dài lò xo", B: "Lực kéo về", C: "Khối lượng và độ cứng", D: "Trọng lực" },
    answer: "C"
  },
  {
    id: "q13",
    question: "Sóng cơ không thể truyền qua:",
    options: { A: "Chân không", B: "Chất khí", C: "Chất lỏng", D: "Chất rắn" },
    answer: "A"
  },
  {
    id: "q14",
    question: "Một sóng cơ có bước sóng λ và tần số f, tốc độ truyền sóng v được tính bằng:",
    options: { A: "v = f/λ", B: "v = λ/f", C: "v = λf", D: "v = f²λ" },
    answer: "C"
  },
  {
    id: "q15",
    question: "Trong giao thoa sóng, vị trí cực đại xảy ra khi hiệu đường đi bằng:",
    options: { A: "kλ", B: "(2k+1)λ/2", C: "kλ/2", D: "(2k+1)π" },
    answer: "A"
  },
  {
    id: "q16",
    question: "Trong sóng cơ, năng lượng truyền đi:",
    options: { A: "Không phụ thuộc môi trường", B: "Tăng theo thời gian", C: "Giảm theo khoảng cách", D: "Không đổi" },
    answer: "C"
  },
  {
    id: "q17",
    question: "Giao thoa sóng xảy ra khi:",
    options: { A: "Hai sóng cùng tần số, cùng biên độ", B: "Hai sóng lệch pha", C: "Hai sóng cùng tần số và hiệu số pha không đổi", D: "Hai sóng cùng biên độ" },
    answer: "C"
  },
  {
    id: "q18",
    question: "Hiện tượng sóng dừng là:",
    options: { A: "Sóng truyền qua vật cản", B: "Sóng bị phản xạ và giao thoa với sóng tới", C: "Sóng bị hấp thụ", D: "Sóng truyền mãi không đổi" },
    answer: "B"
  },
  {
    id: "q19",
    question: "Điện áp xoay chiều có dạng u = U₀cos(ωt + φ), thì đại lượng U₀ là:",
    options: { A: "Biên độ", B: "Tần số", C: "Điện trở", D: "Công suất" },
    answer: "A"
  },
  {
    id: "q20",
    question: "Giá trị hiệu dụng của điện áp xoay chiều là:",
    options: { A: "U₀", B: "U₀/2", C: "U₀/√2", D: "√2U₀" },
    answer: "C"
  },
  {
    id: "q21",
    question: "Tần số góc ω của dòng xoay chiều được tính bằng:",
    options: { A: "ω = 2πf", B: "ω = f/2π", C: "ω = 1/2π", D: "ω = πf" },
    answer: "A"
  },
  {
    id: "q22",
    question: "Trong mạch RLC nối tiếp, tổng trở Z được tính bởi:",
    options: { A: "Z = R + XL + XC", B: "Z = √(R² + (XL - XC)²)", C: "Z = R² + XL + XC", D: "Z = √(XL² + XC²)" },
    answer: "B"
  },
  {
    id: "q23",
    question: "Cộng hưởng xảy ra khi trong mạch RLC:",
    options: { A: "R = 0", B: "XL = XC", C: "Z = 0", D: "Điện áp bằng 0" },
    answer: "B"
  },
  {
    id: "q24",
    question: "Hiện tượng cảm kháng xảy ra khi dòng điện xoay chiều đi qua:",
    options: { A: "Cuộn cảm", B: "Điện trở", C: "Tụ điện", D: "Bóng đèn" },
    answer: "A"
  },
  {
    id: "q25",
    question: "Đơn vị của cảm kháng là:",
    options: { A: "Ohm", B: "Henry", C: "Farad", D: "Watt" },
    answer: "A"
  },
  {
    id: "q26",
    question: "Hệ số công suất trong mạch điện xoay chiều là:",
    options: { A: "cosφ", B: "tanφ", C: "Z/R", D: "P/U" },
    answer: "A"
  },
  {
    id: "q27",
    question: "Đơn vị của điện dung là:",
    options: { A: "Ω", B: "H", C: "F", D: "W" },
    answer: "C"
  },
  {
    id: "q28",
    question: "Trong mạch điện xoay chiều chỉ có tụ điện, dòng điện:",
    options: { A: "Cùng pha với điện áp", B: "Trễ pha π/2", C: "Sớm pha π/2", D: "Vuông pha" },
    answer: "C"
  },
  {
    id: "q29",
    question: "Điện áp hiệu dụng giữa hai đầu điện trở R là U, công suất tiêu thụ trên R là:",
    options: { A: "P = U²/R", B: "P = U/R²", C: "P = U.R", D: "P = R²/U" },
    answer: "A"
  },
  {
    id: "q30",
    question: "Mạch điện xoay chiều RLC nối tiếp có cộng hưởng khi:",
    options: { A: "Z = R", B: "Z = 0", C: "Z = XC + XL", D: "XC = XL" },
    answer: "D"
  },
  {
    id: "q31",
    question: "Sóng điện từ truyền được trong:",
    options: { A: "Chân không", B: "Chất rắn", C: "Chất lỏng", D: "Chỉ chất khí" },
    answer: "A"
  },
  {
    id: "q32",
    question: "Sóng điện từ có bản chất là:",
    options: { A: "Sóng cơ", B: "Sóng dọc", C: "Dao động của điện tích", D: "Dao động của điện trường và từ trường" },
    answer: "D"
  },
  {
    id: "q33",
    question: "Điện từ trường biến thiên tạo ra:",
    options: { A: "Từ trường tĩnh", B: "Sóng cơ học", C: "Sóng điện từ", D: "Lực hấp dẫn" },
    answer: "C"
  },
  {
    id: "q34",
    question: "Sóng điện từ có vận tốc bằng:",
    options: { A: "Âm thanh trong không khí", B: "Ánh sáng trong chân không", C: "Cơ học", D: "Vận tốc dòng điện" },
    answer: "B"
  },
  {
    id: "q35",
    question: "Sóng mang trong truyền thanh có vai trò:",
    options: { A: "Truyền âm thanh đi xa", B: "Làm sạch tín hiệu", C: "Tăng công suất phát", D: "Phát hiện tín hiệu" },
    answer: "A"
  },
  {
    id: "q36",
    question: "Tín hiệu âm thanh được truyền đi xa nhờ:",
    options: { A: "Sóng cơ", B: "Sóng âm", C: "Sóng điện từ", D: "Sóng ánh sáng" },
    answer: "C"
  },
  {
    id: "q37",
    question: "Bức xạ điện từ có bước sóng dài nhất là:",
    options: { A: "Tia X", B: "Tia tử ngoại", C: "Sóng vô tuyến", D: "Ánh sáng khả kiến" },
    answer: "C"
  },
  {
    id: "q38",
    question: "Phát biểu nào sau đây đúng với sóng điện từ?",
    options: { A: "Không truyền trong chân không", B: "Có tần số luôn bằng nhau", C: "Truyền được trong chân không", D: "Cần môi trường đàn hồi" },
    answer: "C"
  },
  {
    id: "q39",
    question: "Sóng ánh sáng là một dạng:",
    options: { A: "Sóng cơ", B: "Sóng điện từ", C: "Sóng dọc", D: "Sóng ngang" },
    answer: "B"
  },
  {
    id: "q40",
    question: "Ứng dụng của sóng điện từ là:",
    options: { A: "Nấu ăn", B: "Truyền thông tin", C: "Tạo âm thanh", D: "Làm mát" },
    answer: "B"
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
