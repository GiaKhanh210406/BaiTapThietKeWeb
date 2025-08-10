// Danh sách câu hỏi
const cauHoiList = [
        {
    id: "q1",
    question: "Choose the word with the underlined part pronounced differently: *ch*emistry, *ch*arity, *ch*air, *ch*ild",
    options: { A: "chemistry", B: "charity", C: "chair", D: "child" },
    answer: "A"
  },
  {
    id: "q2",
    question: "My brother stopped ______ to music because he was too tired.",
    options: { A: "listening", B: "to listen", C: "listen", D: "listened" },
    answer: "A"
  },
  {
    id: "q3",
    question: "You had better ______ at home until you feel better.",
    options: { A: "stay", B: "to stay", C: "staying", D: "stayed" },
    answer: "A"
  },
  {
    id: "q4",
    question: "He is the last person ______ I would trust.",
    options: { A: "who", B: "that", C: "whom", D: "Ø" },
    answer: "D"
  },
  {
    id: "q5",
    question: "The new airport will be built ______ the plan.",
    options: { A: "according to", B: "because of", C: "due to", D: "in spite of" },
    answer: "A"
  },
  {
    id: "q6",
    question: "Find the word OPPOSITE in meaning to: *The boy was very rude to the teacher.*",
    options: { A: "impolite", B: "careful", C: "polite", D: "honest" },
    answer: "C"
  },
  {
    id: "q7",
    question: "Tom is not used to ______ in public.",
    options: { A: "speak", B: "spoke", C: "speaking", D: "speaks" },
    answer: "C"
  },
  {
    id: "q8",
    question: "Choose the correct structure: It was not until 2000 ______ he graduated.",
    options: { A: "when", B: "that", C: "which", D: "where" },
    answer: "B"
  },
  {
    id: "q9",
    question: "Choose the correct tag question: Let’s go out, ______?",
    options: { A: "shall we", B: "will we", C: "do we", D: "can we" },
    answer: "A"
  },
  {
    id: "q10",
    question: "They haven’t seen each other ______ a long time.",
    options: { A: "since", B: "before", C: "until", D: "for" },
    answer: "D"
  },
  {
    id: "q11",
    question: "I will call you as soon as he ______.",
    options: { A: "arrives", B: "will arrive", C: "is arriving", D: "arrived" },
    answer: "A"
  },
  {
    id: "q12",
    question: "This is the first time I ______ sushi.",
    options: { A: "try", B: "have tried", C: "tried", D: "was trying" },
    answer: "B"
  },
  {
    id: "q13",
    question: "Choose the correct preposition: She is very keen ______ music.",
    options: { A: "with", B: "on", C: "of", D: "at" },
    answer: "B"
  },
  {
    id: "q14",
    question: "Mary said, “I’m going to visit my aunt tomorrow.”",
    options: {
      A: "Mary said she is going to visit her aunt the next day.",
      B: "Mary said she was going to visit her aunt the next day.",
      C: "Mary said she would visit her aunt tomorrow.",
      D: "Mary said she goes to visit her aunt tomorrow."
    },
    answer: "B"
  },
  {
    id: "q15",
    question: "John has lived in this town ______ he was ten.",
    options: { A: "since", B: "when", C: "until", D: "for" },
    answer: "A"
  },
  {
    id: "q16",
    question: "He didn't go to the party because he was tired.",
    options: {
      A: "If he wasn't tired, he would go to the party.",
      B: "If he weren't tired, he would have gone to the party.",
      C: "If he hadn’t been tired, he would have gone to the party.",
      D: "If he had been tired, he wouldn't go to the party."
    },
    answer: "C"
  },
  {
    id: "q17",
    question: "Which word is CLOSEST in meaning to: *accelerate*?",
    options: { A: "hurry", B: "slow down", C: "reduce", D: "decrease" },
    answer: "A"
  },
  {
    id: "q18",
    question: "Choose the word with different stress: *student*, *teacher*, *involve*, *father*",
    options: { A: "student", B: "teacher", C: "involve", D: "father" },
    answer: "C"
  },
  {
    id: "q19",
    question: "She suggested ______ to the cinema.",
    options: { A: "to go", B: "going", C: "go", D: "went" },
    answer: "B"
  },
  {
    id: "q20",
    question: "I like pop music, ______ my brother prefers rock.",
    options: { A: "and", B: "so", C: "but", D: "because" },
    answer: "C"
  },
  {
    id: "q21",
    question: "The man ______ lives next door is very friendly.",
    options: { A: "which", B: "who", C: "whom", D: "whose" },
    answer: "B"
  },
  {
    id: "q22",
    question: "He speaks English ______ than I do.",
    options: { A: "good", B: "well", C: "better", D: "best" },
    answer: "C"
  },
  {
    id: "q23",
    question: "I remember ______ you the key yesterday.",
    options: { A: "give", B: "to give", C: "gave", D: "giving" },
    answer: "D"
  },
  {
    id: "q24",
    question: "Choose the correct form: She didn't go to school, ______?",
    options: { A: "did she", B: "didn't she", C: "does she", D: "was she" },
    answer: "A"
  },
  {
    id: "q25",
    question: "We should concentrate ______ the lesson.",
    options: { A: "on", B: "in", C: "to", D: "at" },
    answer: "A"
  },
  {
    id: "q26",
    question: "Tom and Jerry are talking about their plan. Jerry says: 'Shall we go camping tomorrow?' Tom replies:",
    options: { A: "That’s a good idea.", B: "No, you shall not.", C: "Yes, we shall.", D: "That’s impossible." },
    answer: "A"
  },
  {
    id: "q27",
    question: "The doctor advised him ______ smoking.",
    options: { A: "stop", B: "to stop", C: "stopping", D: "stopped" },
    answer: "B"
  },
  {
    id: "q28",
    question: "He arrived ______ the station in time to catch the train.",
    options: { A: "in", B: "at", C: "to", D: "on" },
    answer: "B"
  },
  {
    id: "q29",
    question: "Your car is more economical, but ______ is faster.",
    options: { A: "my", B: "mine", C: "me", D: "I" },
    answer: "B"
  },
  {
    id: "q30",
    question: "He didn’t go to school ______ he was sick.",
    options: { A: "although", B: "because", C: "despite", D: "but" },
    answer: "B"
  },
  {
    id: "q31",
    question: "I ______ my homework when my friend came.",
    options: { A: "finished", B: "was finishing", C: "have finished", D: "am finishing" },
    answer: "B"
  },
  {
    id: "q32",
    question: "She has just bought ______.",
    options: { A: "a new interesting book", B: "an interesting new book", C: "book interesting new", D: "new interesting book" },
    answer: "B"
  },
  {
    id: "q33",
    question: "She said she ______ to Ha Noi the next day.",
    options: { A: "would go", B: "goes", C: "will go", D: "went" },
    answer: "A"
  },
  {
    id: "q34",
    question: "He worked hard ______ he passed the exam.",
    options: { A: "because", B: "so", C: "but", D: "although" },
    answer: "B"
  },
  {
    id: "q35",
    question: "This is the house ______ I was born.",
    options: { A: "where", B: "which", C: "that", D: "whose" },
    answer: "A"
  },
  {
    id: "q36",
    question: "Choose the correct sentence: /It / is / said / the / man / to / be / rich/",
    options: {
      A: "It is said to be rich the man.",
      B: "It is said the man to be rich.",
      C: "The man is said to be rich.",
      D: "It is said the man be rich."
    },
    answer: "C"
  },
  {
    id: "q37",
    question: "She prefers tea ______ coffee.",
    options: { A: "for", B: "than", C: "to", D: "rather" },
    answer: "C"
  },
  {
    id: "q38",
    question: "The film was ______ that I watched it twice.",
    options: { A: "so interesting", B: "too interesting", C: "such interesting", D: "very interesting" },
    answer: "A"
  },
  {
    id: "q39",
    question: "I regret ______ you the truth.",
    options: { A: "not to tell", B: "not tell", C: "not telling", D: "not to telling" },
    answer: "C"
  },
  {
    id: "q40",
    question: "Choose the word CLOSEST in meaning to: *vacant*",
    options: { A: "occupied", B: "empty", C: "full", D: "busy" },
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
