// Danh sách câu hỏi
const cauHoiList = [
      {
    id: "q1",
    question: "Choose the word with the underlined part pronounced differently: *b*omb, *b*uild, *b*lend, *b*urn",
    options: { A: "bomb", B: "build", C: "blend", D: "burn" },
    answer: "B"
  },
  {
    id: "q2",
    question: "She is ______ intelligent girl I’ve ever met.",
    options: { A: "more", B: "the most", C: "most", D: "much" },
    answer: "B"
  },
  {
    id: "q3",
    question: "It was ______ a difficult question that no one could answer it.",
    options: { A: "too", B: "such", C: "so", D: "very" },
    answer: "C"
  },
  {
    id: "q4",
    question: "They were watching TV ______ the lights went out.",
    options: { A: "when", B: "while", C: "until", D: "before" },
    answer: "A"
  },
  {
    id: "q5",
    question: "He is thought ______ the suspect in that robbery.",
    options: { A: "being", B: "to be", C: "was", D: "been" },
    answer: "B"
  },
  {
    id: "q6",
    question: "Choose the word OPPOSITE in meaning to: *The city was bustling with people.*",
    options: { A: "noisy", B: "silent", C: "crowded", D: "peaceful" },
    answer: "D"
  },
  {
    id: "q7",
    question: "Would you mind ______ me a hand with the washing up?",
    options: { A: "give", B: "to give", C: "giving", D: "gave" },
    answer: "C"
  },
  {
    id: "q8",
    question: "Neither Peter nor his parents ______ at home.",
    options: { A: "is", B: "was", C: "are", D: "being" },
    answer: "C"
  },
  {
    id: "q9",
    question: "If he ______ more carefully, he wouldn’t have caused the accident.",
    options: { A: "drives", B: "drove", C: "driven", D: "had driven" },
    answer: "D"
  },
  {
    id: "q10",
    question: "Choose the correct reported speech: “Don’t touch that wire,” she said.",
    options: {
      A: "She said me don’t touch that wire.",
      B: "She told me not touch that wire.",
      C: "She told me not to touch that wire.",
      D: "She said to not touch that wire."
    },
    answer: "C"
  },

  {
    id: "q11",
    question: "The teacher asked him ______ late.",
    options: { A: "why he is", B: "why was he", C: "why he was", D: "why is he" },
    answer: "C"
  },
  {
    id: "q12",
    question: "Choose the word CLOSEST in meaning to: *comprehensive*",
    options: { A: "careless", B: "complete", C: "partial", D: "simple" },
    answer: "B"
  },
  {
    id: "q13",
    question: "The man ______ we met yesterday is a famous artist.",
    options: { A: "whom", B: "which", C: "whose", D: "what" },
    answer: "A"
  },
  {
    id: "q14",
    question: "He talked about the book ______ he read last week.",
    options: { A: "who", B: "whose", C: "which", D: "what" },
    answer: "C"
  },
  {
    id: "q15",
    question: "You should concentrate ______ your work.",
    options: { A: "in", B: "at", C: "on", D: "to" },
    answer: "C"
  },
  {
    id: "q16",
    question: "Choose the correct structure: It was such a cold day ______ we stayed indoors.",
    options: { A: "as", B: "that", C: "so", D: "too" },
    answer: "B"
  },
  {
    id: "q17",
    question: "When we arrived, the film ______ already.",
    options: { A: "has started", B: "had started", C: "was starting", D: "starts" },
    answer: "B"
  },
  {
    id: "q18",
    question: "Choose the correct verb form: She denied ______ the money.",
    options: { A: "taking", B: "take", C: "took", D: "to take" },
    answer: "A"
  },
  {
    id: "q19",
    question: "He always tries to make his wife ______ happy.",
    options: { A: "feel", B: "feels", C: "feeling", D: "to feel" },
    answer: "A"
  },
  {
    id: "q20",
    question: "Choose the correct question tag: Let’s go for a walk, ______?",
    options: { A: "shall we", B: "do we", C: "will we", D: "can we" },
    answer: "A"
  },

  {
    id: "q21",
    question: "Peter regrets ______ Mary’s feelings last night.",
    options: { A: "to hurt", B: "hurting", C: "hurt", D: "hurts" },
    answer: "B"
  },
  {
    id: "q22",
    question: "We haven’t met each other ______ last year.",
    options: { A: "since", B: "for", C: "during", D: "from" },
    answer: "A"
  },
  {
    id: "q23",
    question: "Tom asked me where I ______ the previous day.",
    options: { A: "went", B: "go", C: "had gone", D: "have gone" },
    answer: "C"
  },
  {
    id: "q24",
    question: "Choose the correct sentence transformation: They built this bridge in 2010.",
    options: {
      A: "This bridge was built in 2010.",
      B: "This bridge is built in 2010.",
      C: "This bridge has been built in 2010.",
      D: "This bridge is being built in 2010."
    },
    answer: "A"
  },
  {
    id: "q25",
    question: "I’m not very good ______ drawing.",
    options: { A: "at", B: "in", C: "on", D: "with" },
    answer: "A"
  },
  {
    id: "q26",
    question: "Mary: “Thank you very much!” — Tom: “______.”",
    options: { A: "Nothing", B: "You’re welcome", C: "Don’t worry", D: "That’s all right" },
    answer: "B"
  },
  {
    id: "q27",
    question: "They are not used to ______ up early.",
    options: { A: "get", B: "got", C: "getting", D: "to getting" },
    answer: "C"
  },
  {
    id: "q28",
    question: "The teacher made the students ______ their homework.",
    options: { A: "do", B: "to do", C: "did", D: "doing" },
    answer: "A"
  },
  {
    id: "q29",
    question: "We’re looking forward to ______ from you soon.",
    options: { A: "hear", B: "heard", C: "hearing", D: "be hearing" },
    answer: "C"
  },
  {
    id: "q30",
    question: "Choose the word CLOSEST in meaning to: *vacant*",
    options: { A: "occupied", B: "busy", C: "available", D: "dirty" },
    answer: "C"
  },

  {
    id: "q31",
    question: "The new law will come ______ effect next year.",
    options: { A: "on", B: "in", C: "into", D: "with" },
    answer: "C"
  },
  {
    id: "q32",
    question: "I’ll lend you the money ______ you pay it back soon.",
    options: { A: "unless", B: "provided", C: "in case", D: "until" },
    answer: "B"
  },
  {
    id: "q33",
    question: "He’s not really interested in ______ tennis.",
    options: { A: "play", B: "to play", C: "playing", D: "played" },
    answer: "C"
  },
  {
    id: "q34",
    question: "She is the woman ______ car was stolen.",
    options: { A: "which", B: "who", C: "whose", D: "that" },
    answer: "C"
  },
  {
    id: "q35",
    question: "Choose the word with different stress: apply, offer, visit, enter",
    options: { A: "apply", B: "offer", C: "visit", D: "enter" },
    answer: "A"
  },
  {
    id: "q36",
    question: "We can’t go out because it ______ now.",
    options: { A: "rains", B: "rain", C: "is raining", D: "was raining" },
    answer: "C"
  },
  {
    id: "q37",
    question: "Choose the correct sentence: /tʃaɪld/",
    options: { A: "child", B: "choice", C: "chemistry", D: "check" },
    answer: "A"
  },
  {
    id: "q38",
    question: "_________ is the activity of going for long walks in the country for pleasure.",
    options: { A: "Hiking", B: "Driving", C: "Swimming", D: "Climbing" },
    answer: "A"
  },
  {
    id: "q39",
    question: "Choose the correct expression: “I’m sorry I broke the vase.” – “______”",
    options: { A: "Not at all", B: "Never mind", C: "Of course", D: "You’re welcome" },
    answer: "B"
  },
  {
    id: "q40",
    question: "What time do you usually ______ up in the morning?",
    options: { A: "get", B: "getted", C: "got", D: "getting" },
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
