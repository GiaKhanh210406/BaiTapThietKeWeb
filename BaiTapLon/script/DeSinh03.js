// Danh sách câu hỏi
const cauHoiList = [
  {
    id: "q1",
    question: "Trong quá trình nhân đôi ADN, enzim nào có vai trò tháo xoắn phân tử ADN?",
    options: {
      A: "ADN pôlimeraza",
      B: "Ligaza",
      C: "Helicaza",
      D: "ARN pôlimeraza"
    },
    answer: "C"
  },
  {
    id: "q2",
    question: "Loại liên kết hóa học giữ hai mạch đơn của ADN với nhau là:",
    options: {
      A: "Liên kết ion",
      B: "Liên kết peptit",
      C: "Liên kết cộng hóa trị",
      D: "Liên kết hiđrô"
    },
    answer: "D"
  },
  {
    id: "q3",
    question: "Đơn phân cấu tạo nên phân tử ADN là:",
    options: {
      A: "Axít amin",
      B: "Nucleotit",
      C: "Đường ribôzơ",
      D: "Bazơ nitric"
    },
    answer: "B"
  },
  {
    id: "q4",
    question: "Quá trình tổng hợp ARN dựa trên khuôn mẫu nào?",
    options: {
      A: "ARN",
      B: "ADN",
      C: "Prôtêin",
      D: "Enzim"
    },
    answer: "B"
  },
  {
    id: "q5",
    question: "Ở sinh vật nhân thực, quá trình phiên mã xảy ra ở đâu?",
    options: {
      A: "Lưới nội chất",
      B: "Nhân tế bào",
      C: "Ribôxôm",
      D: "Bào tương"
    },
    answer: "B"
  },
  {
    id: "q6",
    question: "Một codon mã hóa cho bao nhiêu axit amin?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A"
  },
  {
    id: "q7",
    question: "Gen có chiều dài 5100 Å và chứa 3900 liên kết hiđrô. Gen có bao nhiêu cặp A – T?",
    options: {
      A: "600",
      B: "900",
      C: "1200",
      D: "1500"
    },
    answer: "C"
  },
  {
    id: "q8",
    question: "Ở cấp độ phân tử, đột biến gen là sự thay đổi:",
    options: {
      A: "Số lượng gen",
      B: "Trình tự nucleotit",
      C: "Cấu trúc NST",
      D: "Số lượng NST"
    },
    answer: "B"
  },
  {
    id: "q9",
    question: "Trong quá trình dịch mã, anticodon nằm trên phân tử nào?",
    options: {
      A: "mARN",
      B: "tARN",
      C: "rARN",
      D: "ADN"
    },
    answer: "B"
  },
  {
    id: "q10",
    question: "Hiện tượng di truyền liên kết gen lần đầu tiên được phát hiện ở loài:",
    options: {
      A: "Ngô",
      B: "Ruồi giấm",
      C: "Đậu Hà Lan",
      D: "Cà chua"
    },
    answer: "B"
  },
  {
    id: "q11",
    question: "Mỗi codon gồm bao nhiêu nucleotit?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C"
  },
  {
    id: "q12",
    question: "Nguyên tắc bổ sung trong nhân đôi ADN là:",
    options: {
      A: "A – T; G – X",
      B: "A – G; T – X",
      C: "A – U; G – C",
      D: "A – C; T – G"
    },
    answer: "A"
  },
  {
    id: "q13",
    question: "Sự phân ly độc lập xảy ra khi các cặp gen:",
    options: {
      A: "Nằm trên cùng một NST",
      B: "Nằm trên các NST khác nhau",
      C: "Nằm liền kề nhau",
      D: "Liên kết hoàn toàn"
    },
    answer: "B"
  },
  {
    id: "q14",
    question: "Tính trạng trội là tính trạng biểu hiện:",
    options: {
      A: "Chỉ khi có 2 alen trội",
      B: "Ngay cả khi chỉ có 1 alen trội",
      C: "Chỉ khi có alen lặn",
      D: "Trong môi trường đặc biệt"
    },
    answer: "B"
  },
  {
    id: "q15",
    question: "Cơ thể có kiểu gen AaBb khi giảm phân tạo tối đa bao nhiêu loại giao tử?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "1"
    },
    answer: "C"
  },
  {
    id: "q16",
    question: "Kết quả của phân bào nguyên phân là:",
    options: {
      A: "Tạo ra 2 tế bào con giống nhau",
      B: "Tạo ra 4 tế bào con khác nhau",
      C: "Giảm một nửa số NST",
      D: "Tăng gấp đôi số NST"
    },
    answer: "A"
  },
  {
    id: "q17",
    question: "Tế bào sinh dục sơ khai là tế bào:",
    options: {
      A: "Haploid (n)",
      B: "Diploid (2n)",
      C: "Triploid (3n)",
      D: "Không mang NST"
    },
    answer: "B"
  },
  {
    id: "q18",
    question: "Thể ba là dạng đột biến:",
    options: {
      A: "Mất 1 NST",
      B: "Thêm 1 NST",
      C: "Thêm 1 đoạn NST",
      D: "Gấp đôi toàn bộ bộ NST"
    },
    answer: "B"
  },
  {
    id: "q19",
    question: "Thành phần chính cấu tạo nên màng sinh chất là:",
    options: {
      A: "Tinh bột và protein",
      B: "Protein và photpholipit",
      C: "Cholesterol và ADN",
      D: "ARN và protein"
    },
    answer: "B"
  },
  {
    id: "q20",
    question: "Cơ chế di truyền qua ADN được gọi là:",
    options: {
      A: "Di truyền ngoài nhân",
      B: "Di truyền theo dòng mẹ",
      C: "Di truyền phân tử",
      D: "Di truyền Mendel"
    },
    answer: "C"
  },
  {
    id: "q21",
    question: "Bộ ba kết thúc quá trình dịch mã là:",
    options: {
      A: "AUG",
      B: "UGA, UAG, UAA",
      C: "GUA",
      D: "UAC"
    },
    answer: "B"
  },
  {
    id: "q22",
    question: "Cặp NST giới tính ở người nữ là:",
    options: {
      A: "XY",
      B: "YY",
      C: "XX",
      D: "XO"
    },
    answer: "C"
  },
  {
    id: "q23",
    question: "Thành phần nào sau đây không có trong ADN?",
    options: {
      A: "Adenin",
      B: "Uraxin",
      C: "Timin",
      D: "Guanin"
    },
    answer: "B"
  },
  {
    id: "q24",
    question: "Enzim nối các đoạn Okazaki là:",
    options: {
      A: "Helicaza",
      B: "Ligaza",
      C: "Topoisomeraza",
      D: "ARN pôlimeraza"
    },
    answer: "B"
  },
  {
    id: "q25",
    question: "Thành phần chính của NST là:",
    options: {
      A: "ARN và protein",
      B: "Lipit và ADN",
      C: "ADN và protein histon",
      D: "ADN và ARN"
    },
    answer: "C"
  },
  {
    id: "q26",
    question: "Đơn vị sao mã trong phiên mã là:",
    options: {
      A: "Gen",
      B: "Tế bào",
      C: "NST",
      D: "Codon"
    },
    answer: "A"
  },
  {
    id: "q27",
    question: "Người mắc hội chứng Đao có số lượng NST là:",
    options: {
      A: "44",
      B: "46",
      C: "47",
      D: "45"
    },
    answer: "C"
  },
  {
    id: "q28",
    question: "Ở người, gen lặn gây bệnh mù màu nằm trên:",
    options: {
      A: "NST thường",
      B: "NST Y",
      C: "NST X",
      D: "Tế bào chất"
    },
    answer: "C"
  },
  {
    id: "q29",
    question: "Tế bào có bộ NST đơn bội là:",
    options: {
      A: "Tế bào thần kinh",
      B: "Tế bào sinh dưỡng",
      C: "Giao tử",
      D: "Tế bào cơ"
    },
    answer: "C"
  },
  {
    id: "q30",
    question: "Tính trạng không bị ảnh hưởng bởi môi trường là:",
    options: {
      A: "Chiều cao cây trồng",
      B: "Màu sắc hoa",
      C: "Năng suất cây trồng",
      D: "Khối lượng cơ thể"
    },
    answer: "B"
  },
  {
    id: "q31",
    question: "Đặc điểm nào không đúng với sinh sản vô tính?",
    options: {
      A: "Không có tái tổ hợp di truyền",
      B: "Tạo ra thế hệ con giống hệt mẹ",
      C: "Tạo ra biến dị tổ hợp",
      D: "Không có sự thụ tinh"
    },
    answer: "C"
  },
  {
    id: "q32",
    question: "Tế bào nào sau đây có thể thực hiện nguyên phân?",
    options: {
      A: "Tinh trùng",
      B: "Tế bào xôma",
      C: "Trứng",
      D: "Giao tử"
    },
    answer: "B"
  },
  {
    id: "q33",
    question: "Loại đột biến nào không làm thay đổi chiều dài ADN?",
    options: {
      A: "Mất một cặp nu",
      B: "Thêm một cặp nu",
      C: "Thay thế một cặp nu",
      D: "Mất đoạn ADN"
    },
    answer: "C"
  },
  {
    id: "q34",
    question: "Một gen có 1200 nucleotit loại G, biết A = T, G = X, số nucleotit của gen là:",
    options: {
      A: "2400",
      B: "3600",
      C: "4800",
      D: "1200"
    },
    answer: "B"
  },
  {
    id: "q35",
    question: "Cơ sở vật chất của hiện tượng di truyền là:",
    options: {
      A: "Tế bào chất",
      B: "Prôtêin",
      C: "ARN",
      D: "ADN"
    },
    answer: "D"
  },
  {
    id: "q36",
    question: "Sự tự nhân đôi của ADN xảy ra trong kỳ nào của chu kỳ tế bào?",
    options: {
      A: "Kỳ trung gian",
      B: "Kỳ đầu",
      C: "Kỳ sau",
      D: "Kỳ cuối"
    },
    answer: "A"
  },
  {
    id: "q37",
    question: "Ở sinh vật nhân sơ, ribôxôm có kích thước:",
    options: {
      A: "70S",
      B: "80S",
      C: "60S",
      D: "90S"
    },
    answer: "A"
  },
  {
    id: "q38",
    question: "Một phân tử ADN kép có 300 vòng xoắn, số nuclêôtit là:",
    options: {
      A: "1500",
      B: "6000",
      C: "3000",
      D: "4500"
    },
    answer: "B"
  },
  {
    id: "q39",
    question: "Cấu trúc mang thông tin di truyền của sinh vật là:",
    options: {
      A: "Tế bào chất",
      B: "ADN",
      C: "NST",
      D: "ARN"
    },
    answer: "C"
  },
  {
    id: "q40",
    question: "Loại ARN tham gia trực tiếp vận chuyển axit amin trong dịch mã là:",
    options: {
      A: "rARN",
      B: "mARN",
      C: "tARN",
      D: "snARN"
    },
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
