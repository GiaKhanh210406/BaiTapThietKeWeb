// Danh sách câu hỏi
const cauHoiList = [
  {
     id: "q1",
    question: "Giới hạn lim(x→0) (sin x)/x bằng?",
    options: {
      A: "0",
      B: "1",
      C: "∞",
      D: "Không xác định"
    },
    answer: "B"
  },
  {
    id: "q2",
    question: "Đạo hàm của hàm số y = x^3 là?",
    options: {
      A: "3x^2",
      B: "x^2",
      C: "3x",
      D: "x^3"
    },
    answer: "A"
  },
  {
    id: "q3",
    question: "Tích phân ∫ x dx bằng?",
    options: {
      A: "x^2",
      B: "x^2/2 + C",
      C: "2x + C",
      D: "x + C"
    },
    answer: "B"
  },
  {
    id: "q4",
    question: "Nghiệm của phương trình sin x = 0 là?",
    options: {
      A: "x = kπ, k ∈ Z",
      B: "x = π/2 + kπ",
      C: "x = k2π",
      D: "x = π/4 + kπ"
    },
    answer: "A"
  },
  {
    id: "q5",
    question: "Số phức z = 3 + 4i có môđun là?",
    options: {
      A: "5",
      B: "7",
      C: "3",
      D: "4"
    },
    answer: "A"
  },
  {
    id: "q6",
    question: "Đạo hàm của cos x là?",
    options: {
      A: "sin x",
      B: "-sin x",
      C: "cos x",
      D: "-cos x"
    },
    answer: "B"
  },
  {
    id: "q7",
    question: "Giới hạn lim(x→+∞) 1/x bằng?",
    options: {
      A: "0",
      B: "1",
      C: "+∞",
      D: "Không tồn tại"
    },
    answer: "A"
  },
  {
    id: "q8",
    question: "Hàm số nào dưới đây đồng biến trên R?",
    options: {
      A: "y = -x^3",
      B: "y = x^3",
      C: "y = -x",
      D: "y = -x^2"
    },
    answer: "B"
  },
  {
    id: "q9",
    question: "Phương trình bậc hai x^2 - 2x + 1 = 0 có nghiệm là?",
    options: {
      A: "x = 1",
      B: "x = -1",
      C: "x = 2",
      D: "Vô nghiệm"
    },
    answer: "A"
  },
  {
    id: "q10",
    question: "Thể tích hình cầu bán kính R là?",
    options: {
      A: "(4/3)πR^3",
      B: "πR^2",
      C: "2πR^3",
      D: "(1/3)πR^3"
    },
    answer: "A"
  },
  {
    id: "q11",
    question: "Tập xác định của hàm y = 1/(x-1) là?",
    options: {
      A: "R\\{1}",
      B: "R\\{0}",
      C: "R",
      D: "(1,+∞)"
    },
    answer: "A"
  },
  {
    id: "q12",
    question: "Đạo hàm của e^x là?",
    options: {
      A: "e^x",
      B: "xe^(x-1)",
      C: "ln e",
      D: "x^e"
    },
    answer: "A"
  },
  {
    id: "q13",
    question: "∫ e^x dx bằng?",
    options: {
      A: "e^x + C",
      B: "x e^x",
      C: "ln x",
      D: "1/e^x"
    },
    answer: "A"
  },
  {
    id: "q14",
    question: "Tổng các nghiệm của x^2 - 5x + 6 = 0 bằng?",
    options: {
      A: "5",
      B: "6",
      C: "1",
      D: "-5"
    },
    answer: "A"
  },
  {
    id: "q15",
    question: "Số phức liên hợp của z = 2 - 5i là?",
    options: {
      A: "2 + 5i",
      B: "-2 + 5i",
      C: "2 - 5i",
      D: "-2 - 5i"
    },
    answer: "A"
  },
  {
    id: "q16",
    question: "Giới hạn lim(x→0) (1 - cos x)/x^2 bằng?",
    options: {
      A: "1/2",
      B: "0",
      C: "1",
      D: "∞"
    },
    answer: "A"
  },
  {
    id: "q17",
    question: "Đạo hàm của ln x là?",
    options: {
      A: "1/x",
      B: "ln x",
      C: "x",
      D: "x ln x"
    },
    answer: "A"
  },
  {
    id: "q18",
    question: "Tích phân ∫ cos x dx bằng?",
    options: {
      A: "sin x + C",
      B: "-sin x + C",
      C: "cos x + C",
      D: "tan x + C"
    },
    answer: "A"
  },
  {
    id: "q19",
    question: "Tập giá trị của hàm số y = sin x là?",
    options: {
      A: "[-1;1]",
      B: "(0;+∞)",
      C: "R",
      D: "[0;1]"
    },
    answer: "A"
  },
  {
    id: "q20",
    question: "Phương trình log_2 x = 3 có nghiệm là?",
    options: {
      A: "x = 8",
      B: "x = 6",
      C: "x = 3",
      D: "x = 2"
    },
    answer: "A"
  },
  {
    id: "q21",
    question: "Giới hạn lim(x→+∞) (2x^2 + 3)/(x^2 - 1) bằng?",
    options: {
      A: "2",
      B: "3",
      C: "0",
      D: "∞"
    },
    answer: "A"
  },
  {
    id: "q22",
    question: "Phương trình tan x = 1 có nghiệm là?",
    options: {
      A: "x = π/4 + kπ",
      B: "x = kπ",
      C: "x = π/2 + kπ",
      D: "x = -π/4 + kπ"
    },
    answer: "A"
  },
  {
    id: "q23",
    question: "Đồ thị y = x^2 có trục đối xứng là?",
    options: {
      A: "x = 0",
      B: "y = 0",
      C: "x = 1",
      D: "x = -1"
    },
    answer: "A"
  },
  {
    id: "q24",
    question: "Thể tích hình chóp có diện tích đáy B và chiều cao h là?",
    options: {
      A: "(1/3)Bh",
      B: "Bh",
      C: "(1/2)Bh",
      D: "2Bh"
    },
    answer: "A"
  },
  {
    id: "q25",
    question: "Số phức z = -1 + i có phần thực là?",
    options: {
      A: "-1",
      B: "1",
      C: "0",
      D: "-i"
    },
    answer: "A"
  },
  {
    id: "q26",
    question: "Đạo hàm của x^n (n ≠ 0) là?",
    options: {
      A: "nx^(n-1)",
      B: "x^n",
      C: "x^(n+1)",
      D: "n x"
    },
    answer: "A"
  },
  {
    id: "q27",
    question: "Giới hạn lim(x→0) sin(2x)/x bằng?",
    options: {
      A: "2",
      B: "1",
      C: "0",
      D: "∞"
    },
    answer: "A"
  },
  {
    id: "q28",
    question: "∫ 1/x dx bằng?",
    options: {
      A: "ln|x| + C",
      B: "1/x + C",
      C: "x + C",
      D: "-1/x + C"
    },
    answer: "A"
  },
  {
    id: "q29",
    question: "Tập xác định của log x là?",
    options: {
      A: "(0;+∞)",
      B: "R",
      C: "[0;+∞)",
      D: "(-∞;0)"
    },
    answer: "A"
  },
  {
    id: "q30",
    question: "Hàm số nào dưới đây nghịch biến trên R?",
    options: {
      A: "y = -x",
      B: "y = x",
      C: "y = x^3",
      D: "y = e^x"
    },
    answer: "A"
  },
  {
    id: "q31",
    question: "Giới hạn lim(x→0) (e^x - 1)/x bằng?",
    options: {
      A: "1",
      B: "0",
      C: "∞",
      D: "e"
    },
    answer: "A"
  },
  {
    id: "q32",
    question: "Đạo hàm của tan x là?",
    options: {
      A: "1/cos^2 x",
      B: "cos^2 x",
      C: "-1/sin^2 x",
      D: "sin^2 x"
    },
    answer: "A"
  },
  {
    id: "q33",
    question: "Phương trình cos x = 1 có nghiệm là?",
    options: {
      A: "x = 2kπ",
      B: "x = π + 2kπ",
      C: "x = π/2 + kπ",
      D: "x = kπ"
    },
    answer: "A"
  },
  {
    id: "q34",
    question: "Tích phân ∫ sin x dx bằng?",
    options: {
      A: "-cos x + C",
      B: "cos x + C",
      C: "-sin x + C",
      D: "tan x + C"
    },
    answer: "A"
  },
  {
    id: "q35",
    question: "Môđun của số phức z = -3i là?",
    options: {
      A: "3",
      B: "0",
      C: "-3",
      D: "i"
    },
    answer: "A"
  },
  {
    id: "q36",
    question: "Tập giá trị của cos x là?",
    options: {
      A: "[-1;1]",
      B: "(0;+∞)",
      C: "R",
      D: "[0;1]"
    },
    answer: "A"
  },
  {
    id: "q37",
    question: "Giới hạn lim(x→+∞) (x+1)/(x-1) bằng?",
    options: {
      A: "1",
      B: "0",
      C: "∞",
      D: "Không xác định"
    },
    answer: "A"
  },
  {
    id: "q38",
    question: "Phương trình log_3(x) = 2 có nghiệm là?",
    options: {
      A: "x = 9",
      B: "x = 6",
      C: "x = 3",
      D: "x = 2"
    },
    answer: "A"
  },
  {
    id: "q39",
    question: "Đạo hàm của 1/x là?",
    options: {
      A: "-1/x^2",
      B: "1/x^2",
      C: "-x^2",
      D: "x^-1"
    },
    answer: "A"
  },
  {
    id: "q40",
    question: "Giới hạn lim(x→0) (tan x)/x bằng?",
    options: {
      A: "1",
      B: "0",
      C: "∞",
      D: "Không xác định"
    },
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
