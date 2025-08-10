// Danh sách câu hỏi
const cauHoiList = [
  {
    id: "q1",
    question: "Quá trình tự nhân đôi ADN xảy ra ở pha nào của chu kỳ tế bào?",
    options: { A: "Pha G1", B: "Pha G2", C: "Pha S", D: "Nguyên phân" },
    answer: "C"
  },
  {
    id: "q2",
    question: "Trong cấu trúc của NST điển hình ở sinh vật nhân thực, histon có vai trò gì?",
    options: { A: "Mang thông tin di truyền", B: "Cắt mạch ADN", C: "Liên kết các bazơ nitơ", D: "Đóng gói ADN" },
    answer: "D"
  },
  {
    id: "q3",
    question: "Phân tử nào sau đây tham gia trực tiếp vào quá trình dịch mã?",
    options: { A: "rARN", B: "tARN", C: "ADN", D: "Ligaza" },
    answer: "B"
  },
  {
    id: "q4",
    question: "Trong cơ thể sinh vật, quá trình phiên mã diễn ra ở đâu?",
    options: { A: "Ribôxôm", B: "Tế bào chất", C: "Nhân tế bào", D: "Lưới nội chất" },
    answer: "C"
  },
  {
    id: "q5",
    question: "Gen có cấu trúc gồm các vùng nào?",
    options: { A: "Vùng mã hóa và vùng không mã hóa", B: "Vùng khuôn và vùng sao mã", C: "Vùng điều hòa, mã hóa và kết thúc", D: "Vùng khởi đầu và vùng kết thúc" },
    answer: "C"
  },
  {
    id: "q6",
    question: "Cơ chế di truyền ở cấp độ phân tử là quá trình:",
    options: { A: "Tổng hợp prôtêin", B: "Phiên mã và dịch mã", C: "Tự nhân đôi ADN", D: "Nhân đôi, phiên mã và dịch mã" },
    answer: "D"
  },
  {
    id: "q7",
    question: "Biến dị tổ hợp phát sinh do:",
    options: { A: "Đột biến gen", B: "Giao phối", C: "Tác động của môi trường", D: "Đột biến cấu trúc NST" },
    answer: "B"
  },
  {
    id: "q8",
    question: "Tác nhân nào sau đây gây đột biến gen?",
    options: { A: "Tia tử ngoại", B: "Axit", C: "Khói bụi", D: "Vitamin" },
    answer: "A"
  },
  {
    id: "q9",
    question: "Đột biến nào sau đây có thể không làm thay đổi trình tự axit amin?",
    options: { A: "Thay thế cặp nucleotit", B: "Mất cặp nucleotit", C: "Thêm cặp nucleotit", D: "Chuyển đoạn NST" },
    answer: "A"
  },
  {
    id: "q10",
    question: "Phép lai phân tích là phép lai giữa cá thể mang tính trạng trội với:",
    options: { A: "Cá thể cùng kiểu hình", B: "Cá thể mang tính trạng trội khác", C: "Cá thể mang tính trạng lặn", D: "Cá thể F2" },
    answer: "C"
  },

  {
    id: "q11",
    question: "Theo Menđen, mỗi tính trạng do bao nhiêu cặp gen quy định?",
    options: { A: "Một cặp alen", B: "Hai gen không alen", C: "Một gen trội", D: "Một gen lặn" },
    answer: "A"
  },
  {
    id: "q12",
    question: "Hiện tượng di truyền liên kết gen là hiện tượng:",
    options: { A: "Các gen nằm trên NST khác nhau", B: "Các gen cùng nằm trên một NST", C: "Các gen không hoạt động", D: "Các gen di truyền độc lập" },
    answer: "B"
  },
  {
    id: "q13",
    question: "Sự phân li độc lập các cặp NST xảy ra trong quá trình:",
    options: { A: "Nguyên phân", B: "Thụ tinh", C: "Giảm phân", D: "Phân bào" },
    answer: "C"
  },
  {
    id: "q14",
    question: "Nhiễm sắc thể giới tính của nam giới là:",
    options: { A: "XX", B: "XY", C: "YY", D: "XO" },
    answer: "B"
  },
  {
    id: "q15",
    question: "Ở người, bệnh nào sau đây là do đột biến lệch bội?",
    options: { A: "Bệnh pheninketo niệu", B: "Bệnh máu khó đông", C: "Hội chứng Down", D: "Bệnh bạch tạng" },
    answer: "C"
  },
  {
    id: "q16",
    question: "Dạng đột biến nào gây ra mất một đoạn NST?",
    options: { A: "Mất đoạn", B: "Lặp đoạn", C: "Chuyển đoạn", D: "Đảo đoạn" },
    answer: "A"
  },
  {
    id: "q17",
    question: "Phát biểu nào sau đây là đúng về gen ngoài nhân?",
    options: { A: "Di truyền theo dòng mẹ", B: "Di truyền theo dòng bố", C: "Di truyền phân ly", D: "Không được di truyền" },
    answer: "A"
  },
  {
    id: "q18",
    question: "Quần thể sinh vật là:",
    options: { A: "Tập hợp nhiều loài", B: "Tập hợp sinh vật sống trong môi trường", C: "Tập hợp cá thể cùng loài, sống trong không gian xác định", D: "Tập hợp sinh vật sống chung khu vực" },
    answer: "C"
  },
  {
    id: "q19",
    question: "Dạng chọn lọc nào làm tăng sự thích nghi trong quần thể?",
    options: { A: "Chọn lọc nhân tạo", B: "Chọn lọc ổn định", C: "Chọn lọc phân hóa", D: "Chọn lọc tự nhiên" },
    answer: "D"
  },
  {
    id: "q20",
    question: "Tiêu chuẩn quan trọng để xác định hai cá thể thuộc cùng một loài là:",
    options: { A: "Cùng môi trường sống", B: "Cùng kiểu gen", C: "Có thể giao phối sinh con và con sinh sản được", D: "Cùng kích thước" },
    answer: "C"
  },

  // Từ q21 đến q40: tiếp tục với chủ đề tiến hóa, sinh thái, công nghệ gen, biến dị, sinh sản,...
  {
    id: "q21",
    question: "Tháp sinh thái nào luôn có dạng chuẩn?",
    options: { A: "Sinh khối", B: "Số lượng", C: "Năng lượng", D: "Khối lượng" },
    answer: "C"
  },
  {
    id: "q22",
    question: "Loài đóng vai trò chủ đạo trong hệ sinh thái là:",
    options: { A: "Loài ưu thế", B: "Loài đặc trưng", C: "Loài xâm lấn", D: "Loài ngẫu nhiên" },
    answer: "A"
  },
  {
    id: "q23",
    question: "Mối quan hệ giữa cây tầm gửi và cây chủ là:",
    options: { A: "Hỗ trợ", B: "Cộng sinh", C: "Kí sinh", D: "Cạnh tranh" },
    answer: "C"
  },
  {
    id: "q24",
    question: "Nhân tố chủ yếu làm biến đổi tần số alen trong quần thể là:",
    options: { A: "Giao phối không ngẫu nhiên", B: "Đột biến", C: "Chọn lọc tự nhiên", D: "Di nhập gen" },
    answer: "C"
  },
  {
    id: "q25",
    question: "Cơ sở vật chất của di truyền là:",
    options: { A: "ARN", B: "ADN", C: "Prôtêin", D: "Enzim" },
    answer: "B"
  },
  {
    id: "q26",
    question: "Sự nhân đôi của ADN bắt đầu tại:",
    options: { A: "Vùng kết thúc", B: "Vùng mã hóa", C: "Nguồn gốc nhân đôi", D: "Tâm động" },
    answer: "C"
  },
  {
    id: "q27",
    question: "Gen có khả năng tự nhân đôi là nhờ:",
    options: { A: "Cấu trúc phân tử", B: "Tính đặc hiệu", C: "Nguyên tắc bổ sung", D: "Tính bán bảo toàn" },
    answer: "C"
  },
  {
    id: "q28",
    question: "Sự sống đầu tiên hình thành trên Trái Đất là:",
    options: { A: "Tế bào nhân chuẩn", B: "Sinh vật đa bào", C: "Tế bào nhân sơ", D: "Động vật nguyên sinh" },
    answer: "C"
  },
  {
    id: "q29",
    question: "Một quần thể ổn định khi có:",
    options: { A: "Sự biến động mạnh", B: "Sự phân bố không đều", C: "Sự phân bố ngẫu nhiên", D: "Tần số alen không đổi" },
    answer: "D"
  },
  {
    id: "q30",
    question: "Đơn vị tiến hóa cơ sở là:",
    options: { A: "Cá thể", B: "Loài", C: "Quần thể", D: "Quần xã" },
    answer: "C"
  },

  // q31 đến q40 tiếp tục chủ đề biến dị, sinh thái, công nghệ sinh học...
  {
    id: "q31",
    question: "Enzim cắt giới hạn thường được dùng trong:",
    options: { A: "Nhân bản vô tính", B: "Chuyển gen", C: "Tạo dòng vô tính", D: "Sao chép ADN" },
    answer: "B"
  },
  {
    id: "q32",
    question: "Sự phân bố cá thể theo nhóm giúp sinh vật:",
    options: { A: "Giảm cạnh tranh", B: "Dễ tìm nơi cư trú", C: "Tăng khả năng sống sót", D: "Tăng khả năng sinh sản" },
    answer: "C"
  },
  {
    id: "q33",
    question: "Tập hợp cá thể khác loài sống trong không gian và thời gian xác định là:",
    options: { A: "Quần xã", B: "Quần thể", C: "Quần cư", D: "Hệ sinh thái" },
    answer: "A"
  },
  {
    id: "q34",
    question: "Tác động của chọn lọc tự nhiên lên quần thể là:",
    options: { A: "Tăng đột biến", B: "Duy trì đột biến", C: "Làm thay đổi tần số alen", D: "Tạo ra đột biến mới" },
    answer: "C"
  },
  {
    id: "q35",
    question: "Điều kiện xảy ra cân bằng di truyền theo Hardy – Weinberg là:",
    options: { A: "Quần thể có kích thước nhỏ", B: "Không có chọn lọc tự nhiên", C: "Có đột biến", D: "Giao phối có chọn lọc" },
    answer: "B"
  },
  {
    id: "q36",
    question: "Một gen có 2 alen, số kiểu gen tối đa là:",
    options: { A: "1", B: "2", C: "3", D: "4" },
    answer: "C"
  },
  {
    id: "q37",
    question: "Cây chuyển gen là cây được tạo ra bằng cách:",
    options: { A: "Lai giống", B: "Biến đổi môi trường", C: "Đưa gen lạ vào", D: "Nuôi cấy mô" },
    answer: "C"
  },
  {
    id: "q38",
    question: "Cơ chế duy trì ổn định thông tin di truyền là:",
    options: { A: "Phiên mã", B: "Dịch mã", C: "Nhân đôi ADN", D: "Tổng hợp protein" },
    answer: "C"
  },
  {
    id: "q39",
    question: "Hiện tượng nào tạo ra kiểu hình mới không do gen?",
    options: { A: "Đột biến", B: "Biến dị tổ hợp", C: "Đột biến cấu trúc", D: "Thường biến" },
    answer: "D"
  },
  {
    id: "q40",
    question: "Tính trạng di truyền liên kết với giới tính nằm trên:",
    options: { A: "NST thường", B: "NST giới tính X", C: "NST giới tính Y", D: "Ty thể" },
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
