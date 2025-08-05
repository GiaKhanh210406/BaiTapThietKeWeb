// Danh sách câu hỏi
const cauHoiList = [
  {
    id: "q1", // id cho từng câu hỏi
    question: "1 + 1 = ?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    answer: "B",
  },
  {
    id: "q2",
    question: "Đạo hàm của hàm số y = x^2 là?",
    options: {
      A: "2x",
      B: "x",
      C: "x^2",
      D: "1",
    },
    answer: "A",
  },
  {
    id: "q3",
    question: "Giá trị lớn nhất của hàm số y = -x^2 + 4x + 5 là?",
    options: {
      A: "9",
      B: "5",
      C: "4",
      D: "1",
    },
    answer: "A",
  },
  {
    id: "q4",
    question: "Hàm số y = sin(x) có tập xác định là?",
    options: {
      A: "R\\{0}",
      B: "[0; π]",
      C: "(-∞; ∞)",
      D: "(0; ∞)",
    },
    answer: "C",
  },
  {
    id: "q5",
    question: "Tích phân của hàm số f(x) = x từ 0 đến 2 là?",
    options: {
      A: "2",
      B: "4",
      C: "1",
      D: "2",
    },
    answer: "B",
  },
  {
    id: "q6",
    question: "Hàm số y = e^x có đạo hàm là?",
    options: {
      A: "e^x",
      B: "x * e^x",
      C: "x^e",
      D: "ln(x)",
    },
    answer: "A",
  },
  {
    id: "q7",
    question: "Phương trình lượng giác sin(x) = 0 có nghiệm là?",
    options: {
      A: "x = π/2 + kπ",
      B: "x = kπ",
      C: "x = π + k2π",
      D: "x = 0",
    },
    answer: "B",
  },
  {
    id: "q8",
    question: "Giới hạn lim(x→0) (sin x)/x bằng?",
    options: {
      A: "0",
      B: "1",
      C: "∞",
      D: "Không xác định",
    },
    answer: "B",
  },
  {
    id: "q9",
    question: "Hàm số nào sau đây là hàm số chẵn?",
    options: {
      A: "y = x^3",
      B: "y = x^2",
      C: "y = x + 1",
      D: "y = √x",
    },
    answer: "B",
  },
  {
    id: "q10",
    question: "Tập xác định của hàm số y = √(x - 1) là?",
    options: {
      A: "x ≥ 1",
      B: "x > 1",
      C: "x < 1",
      D: "x ≤ 1",
    },
    answer: "A",
  },
  {
    id: "q11",
    question: "Hàm số y = |x - 1| có đạo hàm tại x = 1 không?",
    options: {
      A: "Không có",
      B: "Có, bằng 1",
      C: "Có, bằng -1",
      D: "Có, bằng 0",
    },
    answer: "A",
  },
  {
    id: "q12",
    question: "Đạo hàm cấp hai của hàm số y = x^3 là?",
    options: {
      A: "6x",
      B: "3x^2",
      C: "3x",
      D: "0",
    },
    answer: "A",
  },
  {
    id: "q13",
    question: "Giới hạn lim(x→0) (1 - cos x)/x^2 bằng?",
    options: {
      A: "1/2",
      B: "0",
      C: "∞",
      D: "Không xác định",
    },
    answer: "A",
  },
  {
    id: "q14",
    question: "Phương trình log₂(x) = 3 có nghiệm là?",
    options: {
      A: "x = 8",
      B: "x = 3",
      C: "x = 2",
      D: "x = 9",
    },
    answer: "A",
  },
  {
    id: "q15",
    question: "Đạo hàm của hàm số y = sin(x) là?",
    options: {
      A: "cos(x)",
      B: "-sin(x)",
      C: "tan(x)",
      D: "-cos(x)",
    },
    answer: "A",
  },
  {
    id: "q16",
    question: "Giá trị của cos(π) là?",
    options: {
      A: "-1",
      B: "0",
      C: "1",
      D: "Không xác định",
    },
    answer: "A",
  },
  {
    id: "q17",
    question: "Hàm số y = √(x^2 - 4) xác định khi?",
    options: {
      A: "x ≤ -2 hoặc x ≥ 2",
      B: "x > -2",
      C: "x ≥ -2",
      D: "x ∈ R",
    },
    answer: "A",
  },
  {
    id: "q18",
    question: "Hàm số y = tan(x) có tập xác định là?",
    options: {
      A: "R \\ {π/2 + kπ}",
      B: "R",
      C: "R \\ {0}",
      D: "R \\ {kπ}",
    },
    answer: "A",
  },
  {
    id: "q19",
    question: "Tập xác định của log(x - 1) là?",
    options: {
      A: "x > 1",
      B: "x ≥ 1",
      C: "x < 1",
      D: "x ≠ 1",
    },
    answer: "A",
  },
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
  cauHoiList.forEach((cauHoi) => {
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
  document.getElementById(
    "ketQua"
  ).innerHTML = `✅ Bạn làm đúng <strong>${soCauDung}/${cauHoiList.length}</strong> câu.`;
}

// Khóa lựa chọn
function khoaLuaChon() {
  //lấy tất cả lựa chọn có type bằng radio
  let tatCa = document.querySelectorAll('input[type="radio"]');
  //duyệt qua từng cái biến tatCa , với mỗi phân tử gán input.disabled = true,nghĩa là vô hiệu hóa nút chọn và ko thể nhấn chọn nữa
  tatCa.forEach((input) => (input.disabled = true));
}

// Bắt sự kiện khi người đùng chọn nút "Nộp bài"
document.querySelector(".subMit").addEventListener("click", function () {
  chamDiem(); //chấm điểm
  clearInterval(demNguoc); //dừng đếm ngược
  khoaLuaChon(); //khóa đáp án
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
  dongHo.textContent = `${phut.toString().padStart(2, "0")}:${giay
    .toString()
    .padStart(2, "0")}`;

  thoiGian--; // Giảm thời gian xuống

  if (thoiGian < 0) {
    // Khi hết giờ, tự động chấm và dừng làm bài
    //clearInterval(...) là hàm trong JavaScript dùng để dừng một bộ đếm thời gian đã được tạo bằng
    clearInterval(demNguoc);
    chamDiem(); //chấm điểm
    khoaLuaChon(); //khóa lựa chọn
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
