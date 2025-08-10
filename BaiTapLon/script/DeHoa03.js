// Danh sách câu hỏi
const cauHoiList = [
  {
    id: "q1",
    question: "Chất nào sau đây là este của axit axetic?",
    options: { A: "CH3COOH", B: "CH3COONa", C: "CH3COOC2H5", D: "CH3CH2OH" },
    answer: "C"
  },
  {
    id: "q2",
    question: "Công thức phân tử của glucozơ là:",
    options: { A: "C6H12O6", B: "C12H22O11", C: "C2H5OH", D: "C6H10O5" },
    answer: "A"
  },
  {
    id: "q3",
    question: "Dung dịch nào làm quỳ tím hóa đỏ?",
    options: { A: "NaOH", B: "CH3COOH", C: "C2H5OH", D: "NH3" },
    answer: "B"
  },
  {
    id: "q4",
    question: "Tơ nào sau đây là tơ tổng hợp?",
    options: { A: "Tơ visco", B: "Tơ capron", C: "Tơ tằm", D: "Tơ xenlulozơ axetat" },
    answer: "B"
  },
  {
    id: "q5",
    question: "Kim loại nào sau đây tác dụng với nước ở điều kiện thường?",
    options: { A: "Fe", B: "Na", C: "Al", D: "Cu" },
    answer: "B"
  },
  {
    id: "q6",
    question: "Tên gọi của hợp chất CH3NH2 là:",
    options: { A: "Metylamin", B: "Etylamin", C: "Đimetylamin", D: "Anilin" },
    answer: "A"
  },
  {
    id: "q7",
    question: "Phản ứng giữa glucozơ với Cu(OH)2 tạo ra dung dịch màu:",
    options: { A: "Xanh lam", B: "Nâu đỏ", C: "Không màu", D: "Tím" },
    answer: "A"
  },
  {
    id: "q8",
    question: "Chất nào sau đây có thể trùng hợp tạo polime?",
    options: { A: "CH4", B: "C2H4", C: "C2H5OH", D: "CH3COOH" },
    answer: "B"
  },
  {
    id: "q9",
    question: "Axit aminoaxetic có công thức là:",
    options: { A: "H2NCH2COOH", B: "CH3CH(NH2)COOH", C: "CH3COOH", D: "H2NCH2CH2COOH" },
    answer: "A"
  },
  {
    id: "q10",
    question: "Kim loại nào sau đây có tính khử mạnh nhất?",
    options: { A: "Na", B: "Fe", C: "Cu", D: "Ag" },
    answer: "A"
  },
  {
    id: "q11",
    question: "Chất nào sau đây là amin thơm?",
    options: { A: "CH3NH2", B: "C6H5NH2", C: "C2H5NH2", D: "(CH3)2NH" },
    answer: "B"
  },
  {
    id: "q12",
    question: "Hợp chất nào dưới đây có phản ứng tráng bạc?",
    options: { A: "Axit axetic", B: "Anđehit fomic", C: "Ancol etylic", D: "Glyxin" },
    answer: "B"
  },
  {
    id: "q13",
    question: "Chất nào sau đây không dẫn điện?",
    options: { A: "Dung dịch NaCl", B: "C2H5OH nguyên chất", C: "Dung dịch HCl", D: "Dung dịch NaOH" },
    answer: "B"
  },
  {
    id: "q14",
    question: "Phân tử nào sau đây chứa liên kết peptit?",
    options: { A: "Gly-Ala", B: "CH3CH2OH", C: "CH3COOH", D: "CH3NH2" },
    answer: "A"
  },
  {
    id: "q15",
    question: "Ancol etylic không phản ứng với chất nào sau đây?",
    options: { A: "CuO đun nóng", B: "Na", C: "HCl", D: "NaOH" },
    answer: "D"
  },
  {
    id: "q16",
    question: "Chất nào sau đây làm mất màu dung dịch KMnO4?",
    options: { A: "Etan", B: "Ancol etylic", C: "Anken", D: "Benzen" },
    answer: "C"
  },
  {
    id: "q17",
    question: "Axit nitric HNO3 là một:",
    options: { A: "Axit yếu", B: "Axit trung bình", C: "Axit mạnh", D: "Bazơ" },
    answer: "C"
  },
  {
    id: "q18",
    question: "Ancol bậc ba có công thức là:",
    options: { A: "CH3CH2OH", B: "(CH3)3COH", C: "CH3OH", D: "CH3CH(OH)CH3" },
    answer: "B"
  },
  {
    id: "q19",
    question: "Dung dịch NaOH có pH khoảng:",
    options: { A: "3", B: "5", C: "7", D: "13" },
    answer: "D"
  },
  {
    id: "q20",
    question: "Chất nào là bazơ mạnh?",
    options: { A: "NH3", B: "CH3NH2", C: "NaOH", D: "NaHCO3" },
    answer: "C"
  },
  {
    id: "q21",
    question: "Tên gọi của CH3COOH là:",
    options: { A: "Axit metanoic", B: "Axit axetic", C: "Axit propionic", D: "Axit fomic" },
    answer: "B"
  },
  {
    id: "q22",
    question: "Polime nào sau đây là polime thiên nhiên?",
    options: { A: "Tơ nilon-6,6", B: "Tơ axetat", C: "Tinh bột", D: "Tơ capron" },
    answer: "C"
  },
  {
    id: "q23",
    question: "Chất nào là muối của axit cacboxylic?",
    options: { A: "NaCl", B: "CH3COONa", C: "C2H5OH", D: "NaOH" },
    answer: "B"
  },
  {
    id: "q24",
    question: "Thủy phân hoàn toàn protein thu được:",
    options: { A: "Glyxin", B: "Các amino axit", C: "Este", D: "Ancol" },
    answer: "B"
  },
  {
    id: "q25",
    question: "Dung dịch glucozơ hòa tan được Cu(OH)2 cho dung dịch màu:",
    options: { A: "Tím", B: "Đỏ", C: "Xanh lam", D: "Nâu đỏ" },
    answer: "C"
  },
  {
    id: "q26",
    question: "Tên gọi của CH3CH2COOH là:",
    options: { A: "Axit metanoic", B: "Axit axetic", C: "Axit propionic", D: "Axit fomic" },
    answer: "C"
  },
  {
    id: "q27",
    question: "Trong công nghiệp, Fe được điều chế bằng cách:",
    options: { A: "Điện phân FeCl3", B: "Nhiệt luyện quặng hematit", C: "Điện phân Fe2O3", D: "Nhiệt phân Fe(OH)3" },
    answer: "B"
  },
  {
    id: "q28",
    question: "Chất nào phản ứng với HCl sinh ra khí H2?",
    options: { A: "Cu", B: "Fe", C: "Ag", D: "Au" },
    answer: "B"
  },
  {
    id: "q29",
    question: "Chất nào là dẫn xuất halogen?",
    options: { A: "CH3Cl", B: "CH3OH", C: "CH4", D: "CH3COOH" },
    answer: "A"
  },
  {
    id: "q30",
    question: "Phản ứng giữa axit và bazơ là phản ứng:",
    options: { A: "Trùng hợp", B: "Trung hòa", C: "Oxi hóa", D: "Thế" },
    answer: "B"
  },
  {
    id: "q31",
    question: "Hợp chất nào dưới đây là chất điện li mạnh?",
    options: { A: "CH3COOH", B: "NaOH", C: "NH3", D: "H2CO3" },
    answer: "B"
  },
  {
    id: "q32",
    question: "Kim loại nào dẫn điện tốt nhất?",
    options: { A: "Sắt", B: "Nhôm", C: "Đồng", D: "Bạc" },
    answer: "D"
  },
  {
    id: "q33",
    question: "Glucozơ là một:",
    options: { A: "Ancol đa chức", B: "Axit hữu cơ", C: "Anđehit đơn chức", D: "Amino axit" },
    answer: "A"
  },
  {
    id: "q34",
    question: "Tên gọi của C6H5OH là:",
    options: { A: "Phenol", B: "Benzenol", C: "Anilin", D: "Cả A và B đúng" },
    answer: "D"
  },
  {
    id: "q35",
    question: "Chất nào dưới đây là xeton?",
    options: { A: "CH3CHO", B: "CH3COCH3", C: "CH3CH2OH", D: "HCOOH" },
    answer: "B"
  },
  {
    id: "q36",
    question: "Chất nào dưới đây là chất béo?",
    options: { A: "Glyxerol", B: "Tristearin", C: "Ancol etylic", D: "Phenol" },
    answer: "B"
  },
  {
    id: "q37",
    question: "Este nào có mùi dứa chín?",
    options: { A: "Isoamyl axetat", B: "Etyl butirat", C: "Etyl propionat", D: "Metyl fomat" },
    answer: "B"
  },
  {
    id: "q38",
    question: "Amino axit là hợp chất chứa:",
    options: { A: "Nhóm –COOH", B: "Nhóm –NH2", C: "Cả –COOH và –NH2", D: "Nhóm –CHO" },
    answer: "C"
  },
  {
    id: "q39",
    question: "Chất nào làm quỳ tím hóa xanh?",
    options: { A: "Axit axetic", B: "Phenol", C: "Glyxin", D: "NaOH" },
    answer: "D"
  },
  {
    id: "q40",
    question: "Tính chất nào dưới đây là của kim loại?",
    options: { A: "Dẫn điện", B: "Không tan trong HCl", C: "Dễ bay hơi", D: "Không phản ứng với oxi" },
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
