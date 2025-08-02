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
    question: "Trong dao động điều hòa, gia tốc đạt cực đại khi nào?",
    options: { A: "Vận tốc bằng 0", B: "Li độ bằng 0", C: "Vận tốc cực đại", D: "Li độ cực đại" },
    answer: "D"
  },
  {
    id: "q3",
    question: "Công thức tính tần số dao động điều hòa là gì?",
    options: { A: "f = 1/T", B: "f = ω/2π", C: "f = Tω", D: "f = 2π/ω" },
    answer: "B"
  },
  {
    id: "q4",
    question: "Chu kỳ con lắc đơn phụ thuộc vào đại lượng nào?",
    options: { A: "Khối lượng vật", B: "Biên độ dao động", C: "Chiều dài dây treo và gia tốc trọng trường", D: "Lực kéo về" },
    answer: "C"
  },
  {
    id: "q5",
    question: "Điều kiện để xảy ra hiện tượng cộng hưởng cơ là?",
    options: { A: "Biên độ dao động giảm dần", B: "Tần số lực cưỡng bức bằng tần số riêng", C: "Lực cản lớn", D: "Không có lực cản" },
    answer: "B"
  },
  {
    id: "q6",
    question: "Sóng cơ truyền được trong môi trường nào sau đây?",
    options: { A: "Chân không", B: "Chỉ trong chất rắn", C: "Môi trường vật chất", D: "Chỉ trong chất lỏng" },
    answer: "C"
  },
  {
    id: "q7",
    question: "Sóng dọc là sóng có phương dao động như thế nào?",
    options: { A: "Vuông góc với phương truyền sóng", B: "Không xác định", C: "Song song với phương truyền sóng", D: "Thay đổi liên tục" },
    answer: "C"
  },
  {
    id: "q8",
    question: "Hiện tượng giao thoa sóng là kết quả của?",
    options: { A: "Hai sóng có biên độ khác nhau gặp nhau", B: "Hai sóng lệch pha gặp nhau", C: "Hai sóng kết hợp gặp nhau", D: "Hai sóng truyền theo hai phương khác nhau" },
    answer: "C"
  },
  {
    id: "q9",
    question: "Đơn vị của cảm kháng là gì?",
    options: { A: "Henry", B: "Volt", C: "Ohm", D: "Ampe" },
    answer: "C"
  },
  {
    id: "q10",
    question: "Đối với mạch RLC nối tiếp, cộng hưởng xảy ra khi nào?",
    options: { A: "Z = R", B: "Z = ZL + ZC", C: "ZL = ZC", D: "ZL = R" },
    answer: "C"
  },
  {
    id: "q11",
    question: "Hiện tượng sóng dừng xảy ra khi nào?",
    options: { A: "Hai sóng ngược pha gặp nhau", B: "Hai sóng cùng phương truyền", C: "Hai sóng ngược chiều, cùng biên độ và tần số gặp nhau", D: "Sóng bị hấp thụ hoàn toàn" },
    answer: "C"
  },
  {
    id: "q12",
    question: "Trong mạch dao động LC, đại lượng nào luôn bảo toàn?",
    options: { A: "Điện tích", B: "Công suất", C: "Điện năng", D: "Năng lượng dao động" },
    answer: "D"
  },
  {
    id: "q13",
    question: "Sóng điện từ có thể truyền trong?",
    options: { A: "Chất rắn", B: "Chân không", C: "Chất lỏng", D: "Chỉ trong kim loại" },
    answer: "B"
  },
  {
    id: "q14",
    question: "Trong sóng điện từ, điện trường và từ trường biến thiên như thế nào?",
    options: { A: "Không liên quan", B: "Cùng pha, cùng biên độ", C: "Vuông góc và cùng pha", D: "Lệch pha π/2" },
    answer: "C"
  },
  {
    id: "q15",
    question: "Quang phổ liên tục do vật nào phát ra?",
    options: { A: "Khí ở áp suất thấp", B: "Chất rắn, lỏng bị nung nóng", C: "Chân không", D: "Ánh sáng mặt trời" },
    answer: "B"
  },
  {
    id: "q16",
    question: "Tia tử ngoại có bước sóng nhỏ hơn bao nhiêu?",
    options: { A: "400 nm", B: "700 nm", C: "10 nm", D: "100 nm" },
    answer: "A"
  },
  {
    id: "q17",
    question: "Tia X được tạo ra bằng cách nào?",
    options: { A: "Đốt nóng kim loại", B: "Chiếu ánh sáng vào tinh thể", C: "Electron đập vào anốt", D: "Tia hồng ngoại bị hấp thụ" },
    answer: "C"
  },
  {
    id: "q18",
    question: "Hiện tượng quang điện ngoài xảy ra khi nào?",
    options: { A: "Ánh sáng mạnh chiếu vào kim loại", B: "Điện trường mạnh", C: "Tần số ánh sáng lớn hơn ngưỡng", D: "Dòng điện tăng" },
    answer: "C"
  },
  {
    id: "q19",
    question: "Năng lượng của phôtôn được tính bằng?",
    options: { A: "E = mc²", B: "E = hf", C: "E = qU", D: "E = 1/2mv²" },
    answer: "B"
  },
  {
    id: "q20",
    question: "Tia gamma có khả năng nào sau đây?",
    options: { A: "Truyền trong không khí", B: "Ion hóa mạnh", C: "Phát sáng", D: "Bị lệch bởi từ trường" },
    answer: "B"
  },
  {
    id: "q21",
    question: "Hiện tượng giao thoa ánh sáng chứng tỏ ánh sáng có tính chất gì?",
    options: { A: "Hạt", B: "Sóng", C: "Điện", D: "Nhiệt" },
    answer: "B"
  },
  {
    id: "q22",
    question: "Hiện tượng tán sắc ánh sáng là gì?",
    options: { A: "Ánh sáng bị hấp thụ", B: "Chia chùm sáng trắng thành nhiều màu", C: "Lệch hướng ánh sáng", D: "Phản xạ toàn phần" },
    answer: "B"
  },
  {
    id: "q23",
    question: "Thuyết lượng tử ánh sáng do ai đưa ra?",
    options: { A: "Newton", B: "Einstein", C: "Planck", D: "Young" },
    answer: "C"
  },
  {
    id: "q24",
    question: "Hiện tượng quang - phát quang là gì?",
    options: { A: "Sáng do nhiệt", B: "Phát sáng sau khi bị chiếu sáng", C: "Sáng do hóa học", D: "Do điện năng" },
    answer: "B"
  },
  {
    id: "q25",
    question: "Công thoát electron phụ thuộc vào gì?",
    options: { A: "Cường độ sáng", B: "Tần số ánh sáng", C: "Vật liệu kim loại", D: "Thời gian chiếu" },
    answer: "C"
  },
  {
    id: "q26",
    question: "Tia hồng ngoại có bước sóng như thế nào so với ánh sáng đỏ?",
    options: { A: "Ngắn hơn", B: "Dài hơn", C: "Bằng nhau", D: "Không xác định" },
    answer: "B"
  },
  {
    id: "q27",
    question: "Phản ứng hạt nhân nào sau đây là phản ứng nhiệt hạch?",
    options: { A: "Uranium phân hạch", B: "Hydro tạo Helium", C: "Carbon cháy", D: "Plutonium phân rã" },
    answer: "B"
  },
  {
    id: "q28",
    question: "Điện năng trong mạch xoay chiều thuần trở được tính bởi?",
    options: { A: "P = UI", B: "P = U²/R", C: "P = I²R", D: "Cả 3 đáp án trên đều đúng" },
    answer: "D"
  },
  {
    id: "q29",
    question: "Biến áp lý tưởng có đặc điểm gì?",
    options: { A: "Không có lõi sắt", B: "Không có tổn hao năng lượng", C: "Có dòng điện xoay chiều ra", D: "Có điện trở lớn" },
    answer: "B"
  },
  {
    id: "q30",
    question: "Tia nào trong các tia sau có khả năng đâm xuyên mạnh nhất?",
    options: { A: "Tia hồng ngoại", B: "Tia tử ngoại", C: "Tia X", D: "Tia gamma" },
    answer: "D"
  },
  {
    id: "q31",
    question: "Khi ánh sáng truyền từ không khí vào nước, hiện tượng gì xảy ra?",
    options: { A: "Góc khúc xạ lớn hơn góc tới", B: "Không thay đổi hướng truyền", C: "Tốc độ ánh sáng giảm", D: "Bước sóng tăng" },
    answer: "C"
  },
  {
    id: "q32",
    question: "Chất nào sau đây là chất dẫn điện tốt?",
    options: { A: "Silic", B: "Đồng", C: "Nhựa", D: "Gỗ" },
    answer: "B"
  },
  {
    id: "q33",
    question: "Bước sóng là gì?",
    options: { A: "Khoảng cách 2 điểm gần nhau dao động cùng pha", B: "Thời gian sóng truyền được", C: "Tốc độ sóng", D: "Biên độ dao động" },
    answer: "A"
  },
  {
    id: "q34",
    question: "Sóng cơ học truyền với tốc độ lớn nhất trong?",
    options: { A: "Chân không", B: "Chất khí", C: "Chất lỏng", D: "Chất rắn" },
    answer: "D"
  },
  {
    id: "q35",
    question: "Một photon có năng lượng càng lớn khi nào?",
    options: { A: "Tần số nhỏ", B: "Bước sóng lớn", C: "Tần số cao", D: "Biên độ lớn" },
    answer: "C"
  },
  {
    id: "q36",
    question: "Trong hiện tượng phóng xạ, hạt nhân sẽ?",
    options: { A: "Tăng khối lượng", B: "Không thay đổi", C: "Phát ra tia X", D: "Biến đổi thành hạt nhân khác" },
    answer: "D"
  },
  {
    id: "q37",
    question: "Điều kiện để ánh sáng giao thoa rõ nét?",
    options: { A: "Hai nguồn sáng bất kỳ", B: "Hai nguồn đơn sắc, cùng pha", C: "Hai nguồn lệch pha", D: "Nguồn sáng trắng" },
    answer: "B"
  },
  {
    id: "q38",
    question: "Mạch dao động LC lý tưởng không có?",
    options: { A: "Điện dung", B: "Cảm kháng", C: "Điện trở", D: "Dòng điện" },
    answer: "C"
  },
  {
    id: "q39",
    question: "Hiệu điện thế tức thời trong mạch xoay chiều là biểu thức?",
    options: { A: "U = U₀cos(ωt)", B: "U = U₀t", C: "U = U₀ + ωt", D: "U = ωt" },
    answer: "A"
  },
  {
    id: "q40",
    question: "Tốc độ truyền sóng cơ phụ thuộc vào?",
    options: { A: "Tần số sóng", B: "Biên độ sóng", C: "Môi trường truyền sóng", D: "Nguồn phát" },
    answer: "C"
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
let thoiGian = cauHoiList.length * 3 * 60; // mỗi câu 3 phút -> tổng thời gian làm bài
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
