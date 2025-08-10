// Danh sách câu hỏi
const cauHoiList = [
  {
    id: "q1",
    question: "Chất nào sau đây là este?",
    options: { A: "C2H5OH", B: "CH3COOH", C: "CH3COOC2H5", D: "C2H6" },
    answer: "C"
  },
  {
    id: "q2",
    question: "Amin nào sau đây thuộc loại amin bậc hai?",
    options: { A: "CH3NH2", B: "(CH3)2NH", C: "NH3", D: "C2H5NH2" },
    answer: "B"
  },
  {
    id: "q3",
    question: "Sản phẩm chính khi xà phòng hóa tristearin là:",
    options: { A: "Glyxerol và muối natri stearat", B: "Glyxerol và etyl stearat", C: "Stearic và glyxerol", D: "Natri stearat và nước" },
    answer: "A"
  },
  {
    id: "q4",
    question: "Kim loại nào sau đây không phản ứng với dung dịch HCl loãng?",
    options: { A: "Fe", B: "Zn", C: "Ag", D: "Al" },
    answer: "C"
  },
  {
    id: "q5",
    question: "Chất nào sau đây không làm đổi màu quỳ tím?",
    options: { A: "HCl", B: "NaOH", C: "CH3COOH", D: "C2H5OH" },
    answer: "D"
  },
  {
    id: "q6",
    question: "Chất nào có phản ứng tráng bạc?",
    options: { A: "CH3CHO", B: "CH3COOH", C: "CH3OH", D: "C2H5OH" },
    answer: "A"
  },
  {
    id: "q7",
    question: "Chất nào sau đây thuộc loại đipeptit?",
    options: { A: "H2NCH2COOH", B: "Gly-Ala", C: "Gly-Gly-Gly", D: "NH2CH2COONa" },
    answer: "B"
  },
  {
    id: "q8",
    question: "Dung dịch chất nào sau đây làm xanh quỳ tím?",
    options: { A: "Axit axetic", B: "Glyxin", C: "Amoniac", D: "NaCl" },
    answer: "C"
  },
  {
    id: "q9",
    question: "Nhôm phản ứng với dung dịch nào tạo ra khí H2?",
    options: { A: "NaCl", B: "NaOH", C: "BaCl2", D: "FeCl3" },
    answer: "B"
  },
  {
    id: "q10",
    question: "Trong công nghiệp, nhôm được điều chế bằng phương pháp nào?",
    options: { A: "Điện phân Al2O3 nóng chảy", B: "Điện phân dung dịch AlCl3", C: "Khử Al2O3 bằng H2", D: "Khử Al2O3 bằng CO" },
    answer: "A"
  },
  {
    id: "q11",
    question: "Dung dịch glucozơ phản ứng với:",
    options: { A: "NaOH đặc", B: "Cu(OH)2 ở nhiệt độ thường", C: "NaCl", D: "HCl" },
    answer: "B"
  },
  {
    id: "q12",
    question: "Este nào sau đây có mùi chuối chín?",
    options: { A: "Isoamyl axetat", B: "Etyl axetat", C: "Metyl fomat", D: "Propyl axetat" },
    answer: "A"
  },
  {
    id: "q13",
    question: "Chất nào sau đây là amin thơm?",
    options: { A: "CH3NH2", B: "C6H5NH2", C: "(CH3)2NH", D: "C2H5NH2" },
    answer: "B"
  },
  {
    id: "q14",
    question: "Hợp chất nào sau đây có khả năng tham gia phản ứng trùng hợp?",
    options: { A: "Etilen", B: "Ethan", C: "Ancol etylic", D: "Axit axetic" },
    answer: "A"
  },
  {
    id: "q15",
    question: "Phản ứng nào dùng để nhận biết phenol?",
    options: { A: "Với dung dịch brom", B: "Với NaCl", C: "Với HCl", D: "Với nước" },
    answer: "A"
  },
  {
    id: "q16",
    question: "Chất nào sau đây làm mất màu dung dịch brom?",
    options: { A: "Benzen", B: "Ancol etylic", C: "Etilen", D: "Toluene" },
    answer: "C"
  },
  {
    id: "q17",
    question: "Phân đạm cung cấp nguyên tố nào cho cây trồng?",
    options: { A: "Kali", B: "Photpho", C: "Nitơ", D: "Lưu huỳnh" },
    answer: "C"
  },
  {
    id: "q18",
    question: "Nhận biết axit fomic bằng phản ứng:",
    options: { A: "Với dung dịch NaOH", B: "Với dung dịch brom", C: "Với NaCl", D: "Với nước" },
    answer: "B"
  },
  {
    id: "q19",
    question: "Tơ nilon-6,6 được tạo thành từ phản ứng trùng ngưng giữa:",
    options: { A: "Axit adipic và hexametylenđiamin", B: "Axit axetic và metylamin", C: "Glyxin và alanin", D: "Phenol và formaldehit" },
    answer: "A"
  },
  {
    id: "q20",
    question: "Chất nào sau đây vừa tác dụng với HCl vừa tác dụng với NaOH?",
    options: { A: "Glyxin", B: "NaCl", C: "C2H5OH", D: "CH3COOH" },
    answer: "A"
  },
  {
    id: "q21",
    question: "Để điều chế khí H2 trong phòng thí nghiệm, người ta thường dùng:",
    options: { A: "Zn và HCl", B: "Cu và HCl", C: "Fe2O3 và CO", D: "NaOH và Al" },
    answer: "A"
  },
  {
    id: "q22",
    question: "Trong các dung dịch sau, dung dịch nào là chất điện li yếu?",
    options: { A: "HCl", B: "CH3COOH", C: "NaOH", D: "NaCl" },
    answer: "B"
  },
  {
    id: "q23",
    question: "Phản ứng giữa axit và bazơ tạo thành:",
    options: { A: "Nước và muối", B: "Hidro và oxi", C: "Bazơ và oxit", D: "Nước và axit" },
    answer: "A"
  },
  {
    id: "q24",
    question: "Chất nào không có khả năng tham gia phản ứng tráng bạc?",
    options: { A: "Glucozơ", B: "Axit fomic", C: "Etanol", D: "Anđehit fomic" },
    answer: "C"
  },
  {
    id: "q25",
    question: "Thành phần chính của thủy tinh là:",
    options: { A: "SiO2", B: "CaCO3", C: "NaCl", D: "Al2O3" },
    answer: "A"
  },
  {
    id: "q26",
    question: "Saccarozơ thuộc loại:",
    options: { A: "Monosaccarit", B: "Đisaccarit", C: "Polisaccarit", D: "Axit amin" },
    answer: "B"
  },
  {
    id: "q27",
    question: "Hóa chất nào dùng để phân biệt glucozơ và saccarozơ?",
    options: { A: "Cu(OH)2", B: "H2SO4", C: "AgNO3/NH3", D: "NaOH" },
    answer: "C"
  },
  {
    id: "q28",
    question: "Thủy phân protein thu được:",
    options: { A: "Axit amin", B: "Peptit", C: "Ancol", D: "Đường" },
    answer: "A"
  },
  {
    id: "q29",
    question: "Công thức phân tử của glucozơ là:",
    options: { A: "C6H12O6", B: "C6H10O5", C: "C12H22O11", D: "C2H5OH" },
    answer: "A"
  },
  {
    id: "q30",
    question: "Chất nào sau đây thuộc loại polime thiên nhiên?",
    options: { A: "Tơ visco", B: "Polietilen", C: "Tinh bột", D: "Nilon-6" },
    answer: "C"
  },
  {
    id: "q31",
    question: "Số liên kết pi trong phân tử axetilen là:",
    options: { A: "1", B: "2", C: "3", D: "0" },
    answer: "B"
  },
  {
    id: "q32",
    question: "Phản ứng nào sau đây là phản ứng oxi hóa khử?",
    options: { A: "NaOH + HCl → NaCl + H2O", B: "Fe + HCl → FeCl2 + H2", C: "NaCl + AgNO3 → AgCl + NaNO3", D: "BaCl2 + H2SO4 → BaSO4 + HCl" },
    answer: "B"
  },
  {
    id: "q33",
    question: "Chất nào sau đây là bazơ mạnh?",
    options: { A: "NH3", B: "NaOH", C: "CH3NH2", D: "Ba(OH)2" },
    answer: "B"
  },
  {
    id: "q34",
    question: "Khi đốt cháy hoàn toàn glucozơ, sản phẩm tạo ra là:",
    options: { A: "CO2 và H2", B: "CO2 và H2O", C: "CO và H2O", D: "C và H2O" },
    answer: "B"
  },
  {
    id: "q35",
    question: "Chất nào sau đây là oxit lưỡng tính?",
    options: { A: "CO2", B: "CaO", C: "Al2O3", D: "Na2O" },
    answer: "C"
  },
  {
    id: "q36",
    question: "Ứng dụng chính của NaHCO3 trong thực tế là:",
    options: { A: "Thuốc muối", B: "Thuốc nổ", C: "Tẩy trắng", D: "Chất dẻo" },
    answer: "A"
  },
  {
    id: "q37",
    question: "Tơ tằm thuộc loại:",
    options: { A: "Tơ bán tổng hợp", B: "Tơ tổng hợp", C: "Tơ thiên nhiên", D: "Tơ nhân tạo" },
    answer: "C"
  },
  {
    id: "q38",
    question: "Kim loại nào dẫn điện tốt nhất?",
    options: { A: "Sắt", B: "Đồng", C: "Nhôm", D: "Bạc" },
    answer: "D"
  },
  {
    id: "q39",
    question: "Thành phần chính của phân lân supe đơn là:",
    options: { A: "Ca(H2PO4)2", B: "KCl", C: "NaNO3", D: "NH4NO3" },
    answer: "A"
  },
  {
    id: "q40",
    question: "Tác nhân gây mưa axit chủ yếu là:",
    options: { A: "CO2 và CO", B: "NO2 và SO2", C: "CH4 và CO2", D: "O2 và N2" },
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
