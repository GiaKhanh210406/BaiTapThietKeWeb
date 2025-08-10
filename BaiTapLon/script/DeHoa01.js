// Danh sách câu hỏi
const cauHoiList = [
      {
    id: "q1",
    question: "Nguyên tố nào sau đây thuộc nhóm kim loại kiềm?",
    options: { A: "Ca", B: "Na", C: "Al", D: "Mg" },
    answer: "B"
  },
  {
    id: "q2",
    question: "Công thức của axit axetic là:",
    options: { A: "CH3OH", B: "C2H5OH", C: "CH3COOH", D: "HCOOH" },
    answer: "C"
  },
  {
    id: "q3",
    question: "Trong dãy điện hóa kim loại, kim loại nào có tính khử mạnh nhất?",
    options: { A: "Cu", B: "Zn", C: "K", D: "Fe" },
    answer: "C"
  },
  {
    id: "q4",
    question: "Sản phẩm chính khi đốt cháy hoàn toàn etan (C2H6) là:",
    options: { A: "CO và H2O", B: "CO2 và H2", C: "CO2 và H2O", D: "C và H2" },
    answer: "C"
  },
  {
    id: "q5",
    question: "Cặp chất nào sau đây là đồng phân của nhau?",
    options: { A: "C2H6 và C3H8", B: "C2H6O và C2H6O", C: "CH4 và C2H2", D: "C2H4 và C3H6" },
    answer: "B"
  },
  {
    id: "q6",
    question: "Phản ứng tráng bạc xảy ra với hợp chất nào sau đây?",
    options: { A: "Ancol", B: "Aldehit", C: "Axit", D: "Este" },
    answer: "B"
  },
  {
    id: "q7",
    question: "Polime nào sau đây là polime thiên nhiên?",
    options: { A: "Teflon", B: "PVC", C: "Protein", D: "Polietilen" },
    answer: "C"
  },
  {
    id: "q8",
    question: "Tên gọi của CH3–CH2–OH là:",
    options: { A: "Etanol", B: "Metanol", C: "Etanal", D: "Axit axetic" },
    answer: "A"
  },
  {
    id: "q9",
    question: "Trong phản ứng este hóa, chất xúc tác thường dùng là:",
    options: { A: "NaOH", B: "HCl", C: "H2SO4 đặc", D: "HNO3" },
    answer: "C"
  },
  {
    id: "q10",
    question: "Peptit là sản phẩm ngưng tụ của các phân tử:",
    options: { A: "Glucozơ", B: "Axit béo", C: "Axit amin", D: "Este" },
    answer: "C"
  },
  {
    id: "q11",
    question: "Kim loại nào sau đây phản ứng được với nước ở điều kiện thường?",
    options: { A: "Al", B: "Zn", C: "Fe", D: "Na" },
    answer: "D"
  },
  {
    id: "q12",
    question: "Hợp chất nào sau đây là este?",
    options: { A: "CH3COOH", B: "CH3COOCH3", C: "CH3CH2OH", D: "CH3CHO" },
    answer: "B"
  },
  {
    id: "q13",
    question: "Phân tử nào sau đây thuộc loại monosaccarit?",
    options: { A: "Saccarozơ", B: "Tinh bột", C: "Glucozơ", D: "Xenlulozơ" },
    answer: "C"
  },
  {
    id: "q14",
    question: "Kim loại nào sau đây được điều chế bằng phương pháp điện phân nóng chảy?",
    options: { A: "Fe", B: "Al", C: "Cu", D: "Ag" },
    answer: "B"
  },
  {
    id: "q15",
    question: "Số oxi hóa của N trong HNO3 là:",
    options: { A: "+3", B: "+5", C: "+1", D: "-3" },
    answer: "B"
  },
  {
    id: "q16",
    question: "Sản phẩm thủy phân chất béo trong môi trường kiềm là:",
    options: { A: "Este", B: "Glucozơ", C: "Glycerol và muối axit béo", D: "Xà phòng và nước" },
    answer: "C"
  },
  {
    id: "q17",
    question: "Nhóm chức của axit cacboxylic là:",
    options: { A: "–OH", B: "–CHO", C: "–COOH", D: "–COO–" },
    answer: "C"
  },
  {
    id: "q18",
    question: "Glucozơ thuộc loại hợp chất:",
    options: { A: "Este", B: "Ancol", C: "Aldehit", D: "Aldehit đa chức" },
    answer: "D"
  },
  {
    id: "q19",
    question: "Công thức của saccarozơ là:",
    options: { A: "C6H12O6", B: "C12H22O11", C: "C2H5OH", D: "CH3COOH" },
    answer: "B"
  },
  {
    id: "q20",
    question: "Thủy phân tinh bột tạo thành:",
    options: { A: "Glucozơ", B: "Fructozơ", C: "Saccarozơ", D: "Xenlulozơ" },
    answer: "A"
  },

  // 20 câu tiếp theo
  {
    id: "q21",
    question: "Polime nào sau đây được dùng làm tơ nhân tạo?",
    options: { A: "Teflon", B: "Polietilen", C: "Tơ nilon-6,6", D: "PVC" },
    answer: "C"
  },
  {
    id: "q22",
    question: "Cấu tạo của amin giống với:",
    options: { A: "Ancol", B: "Este", C: "Amoniac", D: "Axit" },
    answer: "C"
  },
  {
    id: "q23",
    question: "Axit amino axetic có công thức là:",
    options: { A: "CH3COOH", B: "NH2CH2COOH", C: "CH3CH2COOH", D: "C6H5NH2" },
    answer: "B"
  },
  {
    id: "q24",
    question: "Chất nào sau đây là dẫn xuất của benzen?",
    options: { A: "Phenol", B: "Metan", C: "Etan", D: "Propan" },
    answer: "A"
  },
  {
    id: "q25",
    question: "Hợp chất nào sau đây có phản ứng tráng bạc?",
    options: { A: "CH3OH", B: "CH3CHO", C: "CH3COOH", D: "CH3CH2OH" },
    answer: "B"
  },
  {
    id: "q26",
    question: "Nhôm tác dụng với dung dịch NaOH tạo ra khí gì?",
    options: { A: "CO2", B: "O2", C: "H2", D: "NO2" },
    answer: "C"
  },
  {
    id: "q27",
    question: "Kim loại nào sau đây không phản ứng với dung dịch HCl loãng?",
    options: { A: "Fe", B: "Al", C: "Cu", D: "Zn" },
    answer: "C"
  },
  {
    id: "q28",
    question: "Ion nào trong dung dịch gây màu xanh lam?",
    options: { A: "Fe³⁺", B: "Cu²⁺", C: "Al³⁺", D: "Zn²⁺" },
    answer: "B"
  },
  {
    id: "q29",
    question: "Khí nào sau đây làm mất màu nước brom?",
    options: { A: "CO2", B: "CH4", C: "C2H2", D: "C2H6" },
    answer: "C"
  },
  {
    id: "q30",
    question: "Hiện tượng nào chứng tỏ phản ứng hóa học đã xảy ra?",
    options: { A: "Màu sắc thay đổi", B: "Có khí bay lên", C: "Tạo kết tủa", D: "Cả 3 hiện tượng trên" },
    answer: "D"
  },
  {
    id: "q31",
    question: "Chất nào sau đây có tính lưỡng tính?",
    options: { A: "NaOH", B: "HCl", C: "Al(OH)₃", D: "Ba(OH)₂" },
    answer: "C"
  },
  {
    id: "q32",
    question: "Công thức phân tử của phenol là:",
    options: { A: "C6H6", B: "C6H5OH", C: "C2H5OH", D: "C6H5NH2" },
    answer: "B"
  },
  {
    id: "q33",
    question: "Chất nào phản ứng được với Na tạo khí H2?",
    options: { A: "CH3CHO", B: "CH3COOH", C: "CH3OH", D: "C2H5Cl" },
    answer: "C"
  },
  {
    id: "q34",
    question: "Dãy chất nào sau đây đều là axit mạnh?",
    options: { A: "HCl, H2SO4, HNO3", B: "HCOOH, H3PO4, CH3COOH", C: "H2SO3, HClO, HBr", D: "CH3COOH, HNO2, HClO2" },
    answer: "A"
  },
  {
    id: "q35",
    question: "Sản phẩm chính khi đốt cháy glucozơ là:",
    options: { A: "CO và H2O", B: "CO2 và H2", C: "CO2 và H2O", D: "C và H2" },
    answer: "C"
  },
  {
    id: "q36",
    question: "Thành phần chính của khí thiên nhiên là:",
    options: { A: "CO2", B: "CH4", C: "C2H6", D: "H2" },
    answer: "B"
  },
  {
    id: "q37",
    question: "Thủy phân xenlulozơ tạo ra:",
    options: { A: "Fructozơ", B: "Saccarozơ", C: "Glucozơ", D: "Tinh bột" },
    answer: "C"
  },
  {
    id: "q38",
    question: "Tơ nilon-6,6 được tạo ra từ phản ứng của:",
    options: { A: "Glucozơ và axit", B: "Axit và rượu", C: "Axit và amin", D: "Ancol và amin" },
    answer: "C"
  },
  {
    id: "q39",
    question: "Axit nào sau đây là axit béo?",
    options: { A: "HCl", B: "HNO3", C: "CH3COOH", D: "C17H35COOH" },
    answer: "D"
  },
  {
    id: "q40",
    question: "Chất béo là:",
    options: { A: "Este của axit béo và glycerol", B: "Muối của axit béo", C: "Ancol", D: "Protein" },
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
