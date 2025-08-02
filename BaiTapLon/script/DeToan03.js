// Danh sách câu hỏi
const cauHoiList = [
  {
   id: "q1",
    question: "Giới hạn lim(x→+∞) (5x^2 - 1)/(2x^2 + 3) bằng?",
    options: {
      A: "5/2",
      B: "2/5",
      C: "∞",
      D: "0"
    },
    answer: "A"
  },
  {
    id: "q2",
    question: "Đạo hàm của hàm số y = 1/x là?",
    options: {
      A: "-1/x^2",
      B: "1/x^2",
      C: "-x^2",
      D: "x^-1"
    },
    answer: "A"
  },
  {
    id: "q3",
    question: "Tích phân ∫ 3x^2 dx bằng?",
    options: {
      A: "x^3 + C",
      B: "3x^3 + C",
      C: "x^2 + C",
      D: "3x^2 + C"
    },
    answer: "A"
  },
  {
    id: "q4",
    question: "Nghiệm của phương trình tan x = 0 là?",
    options: {
      A: "x = kπ",
      B: "x = π/2 + kπ",
      C: "x = 2kπ",
      D: "x = π/4 + kπ"
    },
    answer: "A"
  },
  {
    id: "q5",
    question: "Số phức z = 1 - √3 i có môđun là?",
    options: {
      A: "2",
      B: "√3",
      C: "1",
      D: "0"
    },
    answer: "A"
  },
  {
    id: "q6",
    question: "Đạo hàm của hàm số y = ln x là?",
    options: {
      A: "1/x",
      B: "ln x",
      C: "x",
      D: "x ln x"
    },
    answer: "A"
  },
  {
    id: "q7",
    question: "Giới hạn lim(x→0+) ln x bằng?",
    options: {
      A: "-∞",
      B: "0",
      C: "∞",
      D: "1"
    },
    answer: "A"
  },
  {
    id: "q8",
    question: "Hàm số nào dưới đây nghịch biến trên R?",
    options: {
      A: "y = -x^3",
      B: "y = x^3",
      C: "y = e^x",
      D: "y = x"
    },
    answer: "A"
  },
  {
    id: "q9",
    question: "Phương trình x^2 + 2x + 1 = 0 có nghiệm là?",
    options: {
      A: "x = -1",
      B: "x = 1",
      C: "x = 0",
      D: "x = ±1"
    },
    answer: "A"
  },
  {
    id: "q10",
    question: "Diện tích hình vuông cạnh a là?",
    options: {
      A: "a^2",
      B: "2a",
      C: "4a",
      D: "a"
    },
    answer: "A"
  },
  {
    id: "q11",
    question: "Tập xác định của hàm y = 1/√(x+2) là?",
    options: {
      A: "(-2,+∞)",
      B: "[−2,+∞)",
      C: "R",
      D: "(0,+∞)"
    },
    answer: "A"
  },
  {
    id: "q12",
    question: "Đạo hàm của sin(3x) là?",
    options: {
      A: "3cos(3x)",
      B: "cos(3x)",
      C: "-3cos(3x)",
      D: "-sin(3x)"
    },
    answer: "A"
  },
  {
    id: "q13",
    question: "∫ e^(2x) dx bằng?",
    options: {
      A: "(1/2)e^(2x) + C",
      B: "e^(2x) + C",
      C: "2e^(2x) + C",
      D: "-e^(2x) + C"
    },
    answer: "A"
  },
  {
    id: "q14",
    question: "Tổng các nghiệm của phương trình x^2 - 7x + 10 = 0 bằng?",
    options: {
      A: "7",
      B: "-7",
      C: "10",
      D: "-10"
    },
    answer: "A"
  },
  {
    id: "q15",
    question: "Số phức liên hợp của z = -2 + i là?",
    options: {
      A: "-2 - i",
      B: "2 - i",
      C: "-2 + i",
      D: "2 + i"
    },
    answer: "A"
  },
  {
    id: "q16",
    question: "Giới hạn lim(x→0) (sin 3x)/x bằng?",
    options: {
      A: "3",
      B: "0",
      C: "1",
      D: "∞"
    },
    answer: "A"
  },
  {
    id: "q17",
    question: "Đạo hàm của a^x (a>0, a≠1) là?",
    options: {
      A: "a^x ln a",
      B: "ln a",
      C: "x a^(x-1)",
      D: "a^x"
    },
    answer: "A"
  },
  {
    id: "q18",
    question: "Tích phân ∫ 1/x dx bằng?",
    options: {
      A: "ln|x| + C",
      B: "1/x + C",
      C: "x + C",
      D: "-1/x + C"
    },
    answer: "A"
  },
  {
    id: "q19",
    question: "Tập giá trị của hàm số y = -cos x là?",
    options: {
      A: "[-1;1]",
      B: "[0;1]",
      C: "(0;+∞)",
      D: "R"
    },
    answer: "A"
  },
  {
    id: "q20",
    question: "Phương trình log_2 x = 4 có nghiệm là?",
    options: {
      A: "x = 16",
      B: "x = 8",
      C: "x = 2",
      D: "x = 4"
    },
    answer: "A"
  },
  {
    id: "q21",
    question: "Giới hạn lim(x→+∞) (3x + 5)/(x - 1) bằng?",
    options: {
      A: "3",
      B: "0",
      C: "∞",
      D: "1"
    },
    answer: "A"
  },
  {
    id: "q22",
    question: "Phương trình cos x = -1 có nghiệm là?",
    options: {
      A: "x = π + 2kπ",
      B: "x = kπ",
      C: "x = π/2 + kπ",
      D: "x = 2kπ"
    },
    answer: "A"
  },
  {
    id: "q23",
    question: "Đồ thị y = x^2 - 1 có trục đối xứng là?",
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
    question: "Thể tích hình trụ bán kính R và chiều cao h là?",
    options: {
      A: "πR^2 h",
      B: "2πRh",
      C: "(1/3)πR^2 h",
      D: "πRh"
    },
    answer: "A"
  },
  {
    id: "q25",
    question: "Số phức z = -4i có phần thực là?",
    options: {
      A: "0",
      B: "-4",
      C: "4",
      D: "i"
    },
    answer: "A"
  },
  {
    id: "q26",
    question: "Đạo hàm của √x là?",
    options: {
      A: "1/(2√x)",
      B: "√x",
      C: "x/2",
      D: "2√x"
    },
    answer: "A"
  },
  {
    id: "q27",
    question: "Giới hạn lim(x→0) (1 - cos 3x)/x^2 bằng?",
    options: {
      A: "9/2",
      B: "1/2",
      C: "3/2",
      D: "∞"
    },
    answer: "A"
  },
  {
    id: "q28",
    question: "∫ sin(2x) dx bằng?",
    options: {
      A: "-(1/2)cos(2x) + C",
      B: "-cos(2x) + C",
      C: "cos(2x) + C",
      D: "(1/2)cos(2x) + C"
    },
    answer: "A"
  },
  {
    id: "q29",
    question: "Tập xác định của hàm số log(x-2) là?",
    options: {
      A: "(2;+∞)",
      B: "[2;+∞)",
      C: "R",
      D: "(-∞;2)"
    },
    answer: "A"
  },
  {
    id: "q30",
    question: "Hàm số nào dưới đây đồng biến trên R?",
    options: {
      A: "y = 2^x",
      B: "y = -x^2",
      C: "y = -e^x",
      D: "y = -x^3"
    },
    answer: "A"
  },
  {
    id: "q31",
    question: "Giới hạn lim(x→0) (e^x - 1 - x)/x^2 bằng?",
    options: {
      A: "1/2",
      B: "0",
      C: "1",
      D: "∞"
    },
    answer: "A"
  },
  {
    id: "q32",
    question: "Đạo hàm của cot 2x là?",
    options: {
      A: "-2/sin^2(2x)",
      B: "-1/sin^2(2x)",
      C: "2/sin^2(2x)",
      D: "1/sin^2(2x)"
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
    id: "q35",
    question: "Môđun của số phức z = -2 - 2i là?",
    options: {
      A: "2√2",
      B: "2",
      C: "4",
      D: "√2"
    },
    answer: "A"
  },
  {
    id: "q36",
    question: "Tập giá trị của hàm số y = -|x| là?",
    options: {
      A: "(-∞;0]",
      B: "[0;+∞)",
      C: "R",
      D: "[−1;1]"
    },
    answer: "A"
  },
  {
    id: "q37",
    question: "Giới hạn lim(x→+∞) (2x^3 - 1)/(x^3 + 5) bằng?",
    options: {
      A: "2",
      B: "0",
      C: "∞",
      D: "1"
    },
    answer: "A"
  },
  {
    id: "q38",
    question: "Phương trình log_3(x) = 4 có nghiệm là?",
    options: {
      A: "x = 81",
      B: "x = 12",
      C: "x = 64",
      D: "x = 9"
    },
    answer: "A"
  },
  {
    id: "q39",
    question: "Đạo hàm của (x^2 + 1)^(1/2) là?",
    options: {
      A: "x/√(x^2+1)",
      B: "1/√(x^2+1)",
      C: "x^2/√(x^2+1)",
      D: "2x√(x^2+1)"
    },
    answer: "A"
  },
  {
    id: "q40",
    question: "Giới hạn lim(x→0) (tan x - x)/x^3 bằng?",
    options: {
      A: "1/3",
      B: "0",
      C: "1",
      D: "∞"
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
