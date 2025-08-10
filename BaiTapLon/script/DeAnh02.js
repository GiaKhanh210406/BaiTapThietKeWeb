// Danh sách câu hỏi
const cauHoiList = [
       {
    id: "q1",
    question: "Choose the word with the underlined part pronounced differently: *th*ink, *th*rough, *th*ough, *th*ank",
    options: { A: "think", B: "through", C: "though", D: "thank" },
    answer: "C"
  },
  {
    id: "q2",
    question: "He was very ______ about the company’s future.",
    options: { A: "optimistic", B: "optimism", C: "optimist", D: "optimize" },
    answer: "A"
  },
  {
    id: "q3",
    question: "She didn’t go to class yesterday, ______?",
    options: { A: "did she", B: "does she", C: "didn’t she", D: "was she" },
    answer: "A"
  },
  {
    id: "q4",
    question: "Peter ______ a book when I came into the room.",
    options: { A: "read", B: "was reading", C: "has read", D: "reads" },
    answer: "B"
  },
  {
    id: "q5",
    question: "I won’t go out ______ it stops raining.",
    options: { A: "until", B: "if", C: "unless", D: "when" },
    answer: "C"
  },
  {
    id: "q6",
    question: "Find the word OPPOSITE in meaning to: *He’s very generous with his money.*",
    options: { A: "mean", B: "friendly", C: "honest", D: "polite" },
    answer: "A"
  },
  {
    id: "q7",
    question: "She’s looking forward to ______ her friends this weekend.",
    options: { A: "see", B: "seeing", C: "to see", D: "seen" },
    answer: "B"
  },
  {
    id: "q8",
    question: "Choose the correct sentence: They / build / this bridge / in 1995.",
    options: {
      A: "They built this bridge in 1995.",
      B: "They build this bridge in 1995.",
      C: "They were building this bridge in 1995.",
      D: "This bridge was building in 1995."
    },
    answer: "A"
  },
  {
    id: "q9",
    question: "The more you study, ______ you will get.",
    options: { A: "more knowledge", B: "the more knowledge", C: "the much knowledge", D: "the better" },
    answer: "B"
  },
  {
    id: "q10",
    question: "We have known each other ______ we were children.",
    options: { A: "since", B: "for", C: "when", D: "while" },
    answer: "A"
  },

  {
    id: "q11",
    question: "The man ______ you met yesterday is my uncle.",
    options: { A: "who", B: "which", C: "whose", D: "whom" },
    answer: "D"
  },
  {
    id: "q12",
    question: "The house ______ I was born is very old.",
    options: { A: "whose", B: "which", C: "in which", D: "in where" },
    answer: "C"
  },
  {
    id: "q13",
    question: "Choose the word with different stress: education, engineer, entertain, understand",
    options: { A: "education", B: "engineer", C: "entertain", D: "understand" },
    answer: "A"
  },
  {
    id: "q14",
    question: "Choose the best rewriting: It’s a pity that I can’t swim.",
    options: {
      A: "I wish I could swim.",
      B: "I wish I can swim.",
      C: "I hope I can swim.",
      D: "I want to swim."
    },
    answer: "A"
  },
  {
    id: "q15",
    question: "She speaks English better than ______ in her class.",
    options: { A: "anyone", B: "no one", C: "someone", D: "everyone" },
    answer: "A"
  },
  {
    id: "q16",
    question: "The air is polluted. People suffer from respiratory diseases. (Combine using 'because')",
    options: {
      A: "People suffer from respiratory diseases because the air is polluted.",
      B: "Because people suffer, the air is polluted.",
      C: "Because the diseases, the air is polluted.",
      D: "The air polluted, because diseases."
    },
    answer: "A"
  },
  {
    id: "q17",
    question: "Choose the correct transformation: 'They will finish the work soon.' (Passive)",
    options: {
      A: "The work will be finished soon.",
      B: "The work will finish soon.",
      C: "The work finishes soon.",
      D: "They will be finished by the work."
    },
    answer: "A"
  },
  {
    id: "q18",
    question: "Choose the correct form: It’s the most beautiful place I ______.",
    options: { A: "was seeing", B: "saw", C: "have ever seen", D: "see" },
    answer: "C"
  },
  {
    id: "q19",
    question: "He ______ as a taxi driver for 10 years before becoming a teacher.",
    options: { A: "worked", B: "was working", C: "has worked", D: "had worked" },
    answer: "D"
  },
  {
    id: "q20",
    question: "She hardly ever goes to the cinema, ______?",
    options: { A: "does she", B: "doesn’t she", C: "did she", D: "didn’t she" },
    answer: "A"
  },

  {
    id: "q21",
    question: "Choose the word CLOSEST in meaning to 'honest':",
    options: { A: "truthful", B: "kind", C: "polite", D: "friendly" },
    answer: "A"
  },
  {
    id: "q22",
    question: "Would you mind ______ me with this bag?",
    options: { A: "help", B: "helping", C: "to help", D: "helped" },
    answer: "B"
  },
  {
    id: "q23",
    question: "Choose the correct sentence: The book was so boring that I didn’t finish it.",
    options: {
      A: "It was such a boring book that I didn’t finish it.",
      B: "It was so a boring book that I didn’t finish it.",
      C: "So boring the book that I didn’t finish it.",
      D: "Such boring book that I didn’t finish it."
    },
    answer: "A"
  },
  {
    id: "q24",
    question: "He apologized ______ late.",
    options: { A: "to be", B: "for being", C: "being", D: "to being" },
    answer: "B"
  },
  {
    id: "q25",
    question: "Choose the word with different pronunciation: *c*old, *c*ity, *c*lean, *c*all",
    options: { A: "cold", B: "city", C: "clean", D: "call" },
    answer: "B"
  },
  {
    id: "q26",
    question: "He is very interested ______ learning languages.",
    options: { A: "in", B: "with", C: "at", D: "on" },
    answer: "A"
  },
  {
    id: "q27",
    question: "______ I was tired, I went out for a walk.",
    options: { A: "Although", B: "Despite", C: "Because", D: "Since" },
    answer: "A"
  },
  {
    id: "q28",
    question: "Choose the correct sentence: I / not / see / him / since / Monday.",
    options: {
      A: "I haven't seen him since Monday.",
      B: "I don’t see him since Monday.",
      C: "I hadn’t seen him since Monday.",
      D: "I didn’t see him since Monday."
    },
    answer: "A"
  },
  {
    id: "q29",
    question: "Your homework ______ by tomorrow.",
    options: { A: "must finish", B: "must be finished", C: "must finishing", D: "must to finish" },
    answer: "B"
  },
  {
    id: "q30",
    question: "______ going to the party, he stayed home and studied.",
    options: { A: "Instead", B: "Instead of", C: "Despite", D: "Although" },
    answer: "B"
  },
  {
    id: "q31",
    question: "They suggested that she ______ the problem to the teacher.",
    options: { A: "should report", B: "reported", C: "reporting", D: "report" },
    answer: "A"
  },
  {
    id: "q32",
    question: "The room is too small. It can’t ______ all the guests.",
    options: { A: "contain", B: "keep", C: "accommodate", D: "bring" },
    answer: "C"
  },
  {
    id: "q33",
    question: "Choose the word OPPOSITE in meaning to: *permanent*",
    options: { A: "eternal", B: "lasting", C: "temporary", D: "forever" },
    answer: "C"
  },
  {
    id: "q34",
    question: "If I ______ you, I would apologize to her.",
    options: { A: "am", B: "were", C: "was", D: "be" },
    answer: "B"
  },
  {
    id: "q35",
    question: "Choose the correct question tag: Nobody called, ______?",
    options: { A: "did they", B: "did he", C: "didn’t they", D: "does he" },
    answer: "A"
  },
  {
    id: "q36",
    question: "By the time we got to the station, the train ______.",
    options: { A: "left", B: "has left", C: "had left", D: "was leaving" },
    answer: "C"
  },
  {
    id: "q37",
    question: "You should stop smoking, ______ you’ll get sick.",
    options: { A: "and", B: "or", C: "but", D: "so" },
    answer: "B"
  },
  {
    id: "q38",
    question: "They asked me ______ I liked classical music.",
    options: { A: "that", B: "if", C: "whether or not", D: "why" },
    answer: "B"
  },
  {
    id: "q39",
    question: "Choose the best rewriting: 'He failed the exam. He didn’t study hard.'",
    options: {
      A: "He failed the exam because he didn’t study hard.",
      B: "He failed the exam so he didn’t study hard.",
      C: "He failed the exam although he didn’t study hard.",
      D: "Because he failed, he didn’t study."
    },
    answer: "A"
  },
  {
    id: "q40",
    question: "She couldn’t come to the party ______ her illness.",
    options: { A: "because", B: "because of", C: "although", D: "since" },
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
