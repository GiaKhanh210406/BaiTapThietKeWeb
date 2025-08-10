// Danh sách câu hỏi
const cauHoiList = [
  {
    id: "q1",
    question: "Trong cấu trúc của tế bào, bào quan nào là nơi diễn ra quá trình hô hấp hiếu khí?",
    options: { A: "Lưới nội chất", B: "Ti thể", C: "Ribôxôm", D: "Bộ máy Gôngi" },
    answer: "B"
  },
  {
    id: "q2",
    question: "Loại ARN nào mang thông tin di truyền từ gen đến ribôxôm?",
    options: { A: "rARN", B: "tARN", C: "mARN", D: "ARN polymerase" },
    answer: "C"
  },
  {
    id: "q3",
    question: "Trong giảm phân, sự trao đổi chéo xảy ra ở kỳ nào?",
    options: { A: "Kỳ trung gian", B: "Kỳ đầu I", C: "Kỳ giữa I", D: "Kỳ cuối I" },
    answer: "B"
  },
  {
    id: "q4",
    question: "Thành phần nào sau đây của cấu trúc nhiễm sắc thể đóng vai trò quan trọng trong phân chia tế bào?",
    options: { A: "Tâm động", B: "Đầu mút", C: "Vùng nhân", D: "Chromatin" },
    answer: "A"
  },
  {
    id: "q5",
    question: "Gen là một đoạn của phân tử ADN có chức năng:",
    options: { A: "Vận chuyển axit amin", B: "Mang thông tin mã hóa chuỗi polipeptit", C: "Tổng hợp glucôzơ", D: "Tạo năng lượng" },
    answer: "B"
  },
  {
    id: "q6",
    question: "Trong mã di truyền, bộ ba AUG có vai trò:",
    options: { A: "Kết thúc dịch mã", B: "Không mã hóa", C: "Mã hóa axit amin Metionin và mở đầu", D: "Mã hóa axit amin Lysin" },
    answer: "C"
  },
  {
    id: "q7",
    question: "Đột biến điểm là:",
    options: { A: "Mất đoạn lớn ADN", B: "Lặp đoạn", C: "Thêm hoặc mất 1 cặp nucleotit", D: "Thay đổi vị trí tâm động" },
    answer: "C"
  },
  {
    id: "q8",
    question: "Nhiễm sắc thể ở sinh vật nhân thực được cấu tạo từ:",
    options: { A: "ARN và protein", B: "ADN và histon", C: "Lipid và ADN", D: "Protein và glucid" },
    answer: "B"
  },
  {
    id: "q9",
    question: "Cơ thể dị hợp Aa tự thụ phấn sẽ cho tỷ lệ kiểu gen là:",
    options: { A: "1AA : 2Aa : 1aa", B: "3Aa : 1aa", C: "1Aa : 1aa", D: "2AA : 2aa" },
    answer: "A"
  },
  {
    id: "q10",
    question: "Trong quần thể ngẫu phối, tần số alen không đổi qua các thế hệ là do:",
    options: { A: "Chọn lọc tự nhiên", B: "Di nhập gen", C: "Sự ngẫu nhiên của quá trình phân ly", D: "Không có tác động của các nhân tố tiến hóa" },
    answer: "D"
  },

  // Tiếp tục từ q11 đến q40...
  {
    id: "q11",
    question: "Đặc điểm nổi bật của di truyền ngoài nhân là:",
    options: { A: "Di truyền theo dòng mẹ", B: "Biến dị tổ hợp", C: "Tái tổ hợp gen", D: "Liên kết gen" },
    answer: "A"
  },
  {
    id: "q12",
    question: "Động vật nào sau đây có hệ tuần hoàn hở?",
    options: { A: "Giun đất", B: "Chim", C: "Châu chấu", D: "Cá" },
    answer: "C"
  },
  {
    id: "q13",
    question: "Sinh vật nhân sơ không có bào quan nào sau đây?",
    options: { A: "Ribôxôm", B: "Ti thể", C: "Thành tế bào", D: "Màng sinh chất" },
    answer: "B"
  },
  {
    id: "q14",
    question: "Sự nhân đôi của ADN diễn ra theo nguyên tắc:",
    options: { A: "Bổ sung và song song", B: "Khuôn mẫu và bổ sung", C: "Bổ sung và bán bảo toàn", D: "Tự do và ngẫu nhiên" },
    answer: "C"
  },
  {
    id: "q15",
    question: "Cây đậu Hà Lan của Menđen có bao nhiêu cặp tính trạng tương phản được nghiên cứu?",
    options: { A: "4", B: "5", C: "6", D: "7" },
    answer: "D"
  },
  {
    id: "q16",
    question: "Pha sáng trong quang hợp ở thực vật diễn ra tại:",
    options: { A: "Chất nền lục lạp", B: "Tế bào mô mềm", C: "Màng tilacoit", D: "Màng sinh chất" },
    answer: "C"
  },
  {
    id: "q17",
    question: "Enzim amilaza có vai trò:",
    options: { A: "Phân giải protein", B: "Thủy phân chất béo", C: "Thủy phân tinh bột", D: "Tạo thành ATP" },
    answer: "C"
  },
  {
    id: "q18",
    question: "Loài là một đơn vị:",
    options: { A: "Tiến hóa cơ bản", B: "Phân loại cao nhất", C: "Chỉ có ở thực vật", D: "Không có khả năng sinh sản" },
    answer: "A"
  },
  {
    id: "q19",
    question: "Một gen có 3000 nucleotit, số liên kết hidro trong gen là:",
    options: { A: "3000", B: "4500", C: "6000", D: "9000" },
    answer: "B"
  },
  {
    id: "q20",
    question: "Trong chuỗi thức ăn, sinh vật tiêu thụ bậc 1 là:",
    options: { A: "Động vật ăn thịt", B: "Động vật ăn thực vật", C: "Thực vật", D: "Sinh vật phân giải" },
    answer: "B"
  },
  {
    id: "q21",
    question: "Quá trình tổng hợp protein xảy ra ở đâu trong tế bào?",
    options: { A: "Ti thể", B: "Ribôxôm", C: "Nhân tế bào", D: "Bộ máy Gôngi" },
    answer: "B"
  },
  {
    id: "q22",
    question: "Loài có bộ NST 2n = 24. Sau nguyên phân từ 1 tế bào, tạo ra bao nhiêu NST con?",
    options: { A: "24", B: "48", C: "96", D: "12" },
    answer: "C"
  },
  {
    id: "q23",
    question: "Quần thể là gì?",
    options: { A: "Tập hợp nhiều loài khác nhau", B: "Tập hợp sinh vật sống chung trong khu vực", C: "Tập hợp cá thể cùng loài, sống chung, có khả năng sinh sản", D: "Tập hợp hệ sinh thái" },
    answer: "C"
  },
  {
    id: "q24",
    question: "Cấu trúc nào giúp vi khuẩn bám vào bề mặt và trao đổi chất?",
    options: { A: "Lông roi", B: "Màng sinh chất", C: "Ti thể", D: "Lông bám" },
    answer: "D"
  },
  {
    id: "q25",
    question: "Ở người, bệnh nào sau đây là do đột biến gen lặn nằm trên NST thường?",
    options: { A: "Máu khó đông", B: "Bạch tạng", C: "Mù màu", D: "Hồng cầu hình liềm" },
    answer: "B"
  },
  {
    id: "q26",
    question: "Theo Menđen, mỗi tính trạng do bao nhiêu cặp gen quy định?",
    options: { A: "Một cặp alen", B: "Hai cặp alen", C: "Một gen", D: "Một nhiễm sắc thể" },
    answer: "A"
  },
  {
    id: "q27",
    question: "Sự phân ly độc lập của các cặp alen xảy ra trong quá trình nào?",
    options: { A: "Nguyên phân", B: "Giảm phân", C: "Thụ tinh", D: "Phân bào" },
    answer: "B"
  },
  {
    id: "q28",
    question: "Đặc điểm của mã di truyền là:",
    options: { A: "Đặc hiệu, không gối lên nhau", B: "Không đặc hiệu", C: "Có tính gối lên nhau", D: "Mỗi bộ ba mã hóa nhiều axit amin" },
    answer: "A"
  },
  {
    id: "q29",
    question: "Đột biến nào sau đây không làm thay đổi số lượng gen?",
    options: { A: "Mất đoạn", B: "Chuyển đoạn", C: "Lặp đoạn", D: "Đảo đoạn" },
    answer: "D"
  },
  {
    id: "q30",
    question: "Thành phần chủ yếu của màng sinh chất là:",
    options: { A: "Photpholipit và protein", B: "Protein và đường", C: "Lipit và ADN", D: "Protein và ARN" },
    answer: "A"
  },
  {
    id: "q31",
    question: "Thụ tinh là sự kết hợp giữa:",
    options: { A: "Một trứng và một tinh trùng", B: "Một trứng và hai tinh trùng", C: "Hai noãn", D: "Tinh trùng và tế bào xôma" },
    answer: "A"
  },
  {
    id: "q32",
    question: "Cây có kiểu gen AaBb khi tự thụ phấn, tỷ lệ phân ly kiểu hình là bao nhiêu?",
    options: { A: "9:3:3:1", B: "1:1:1:1", C: "3:1", D: "1:2:1" },
    answer: "A"
  },
  {
    id: "q33",
    question: "Loài vi sinh vật nào có khả năng cố định nitơ?",
    options: { A: "Xạ khuẩn", B: "Rhizobium", C: "Penicillium", D: "E.coli" },
    answer: "B"
  },
  {
    id: "q34",
    question: "Hệ tuần hoàn kín có đặc điểm:",
    options: { A: "Máu chảy trong hệ mạch", B: "Máu tiếp xúc trực tiếp với mô", C: "Không có tim", D: "Chỉ có ở động vật không xương sống" },
    answer: "A"
  },
  {
    id: "q35",
    question: "Nguyên nhân chính gây biến động số lượng cá thể trong quần thể là:",
    options: { A: "Đột biến gen", B: "Sinh sản và tử vong", C: "Biến dị tổ hợp", D: "Di nhập và di xuất" },
    answer: "B"
  },
  {
    id: "q36",
    question: "Tập hợp sinh vật và môi trường sống của nó tạo thành:",
    options: { A: "Quần xã", B: "Quần thể", C: "Hệ sinh thái", D: "Cộng đồng" },
    answer: "C"
  },
  {
    id: "q37",
    question: "Quy luật tác động cộng gộp của gen là hiện tượng:",
    options: { A: "Nhiều gen cùng quy định một tính trạng", B: "Một gen quy định nhiều tính trạng", C: "Gen không hoạt động", D: "Alen trội hoàn toàn" },
    answer: "A"
  },
  {
    id: "q38",
    question: "Ở người, nhóm máu được quy định bởi bao nhiêu alen?",
    options: { A: "2", B: "3", C: "4", D: "6" },
    answer: "B"
  },
  {
    id: "q39",
    question: "Giới hạn sinh thái là:",
    options: { A: "Khoảng giá trị bất kỳ", B: "Khoảng các điều kiện sống thuận lợi", C: "Khoảng giá trị môi trường cho phép sinh vật tồn tại và phát triển", D: "Mức độ chịu đựng của con người" },
    answer: "C"
  },
  {
    id: "q40",
    question: "Chất hữu cơ được tổng hợp trong quang hợp chủ yếu là:",
    options: { A: "Protein", B: "Tinh bột", C: "Lipit", D: "Vitamin" },
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
