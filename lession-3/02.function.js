//1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
//nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
//Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì

let weight = 55;
let height = 1.60;

function calculate_BMI(weight, height){

    const BMI = weight / (height * height);

    if (BMI < 18.5){
        return `BMI: ${BMI.toFixed(2)} - Thiếu cân`;
    }else if (BMI < 25){
        return `BMI: ${BMI.toFixed(2)} - Bình thường`;
    }else if (BMI < 30){
        return `BMI: ${BMI.toFixed(2)} - Thừa cân`;
    }else{
        return `BMI: ${BMI.toFixed(2)} - Béo phì`;
    }
}

console.log(calculate_BMI(weight, height));

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
// nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã
// chuyển đổi.
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;

function convertTemperature(temperature, type){

    let convert;
    
    if(type === 'C'){
        //Chuyển từ độ C sang độ F
        convert = temperature * 9/5 + 32;
        return `${temperature} độ C = ${convert.toFixed(2)} độ F`;
    }else if (type === 'F'){
        convert = (temperature - 32) * 5/9;
        return `${temperature} độ F = ${convert.toFixed(2)} độ C`;
    }else {
        return "Loại nhiệt độ không hợp lệ";
    }
}

console.log(convertTemperature(29, 'C'));
console.log(convertTemperature(57, 'F'));

// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong
// một mảng số.

const numbers = [5,10,11,15,20];

function sumNumberArr(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumNumberArr(numbers));

//4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
// Hàm vừa kiểm tra và lọc số nguyên tố trong mảng
function filterNumber(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
  
      // Kiểm tra số nguyên tố
      if (num > 1) {
        let isNumber = true;

        // Duyệt từ 2 đến num - 1
  
        for (let j = 2; j < num; j++) {
          if (num % j === 0) {
            isNumber = false;
            break;
          }
        }
  
        // Nếu là số nguyên tố, thêm vào mảng primeNumbers
        if (isNumber) {
            result.push(num);
        }
      }
    }
  
    return result;
  }
  
  const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19];
  const result = filterNumber(arrNumbers);
  
  console.log(result);

//   5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên
// người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// // Khai báo mảng global các object có 2 thuộc tính: name, email
// // Khai báo hàm có 2 tham số: name, newEmail
// // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
// trùng với tham số name, cập nhật giá trị email về newEmail

// Khai báo mảng global chứa các object có 2 thuộc tính: name, email
const users = [
    { name: "Đinh", email: "dinh@gmail.com" },
    { name: "Ngọc", email: "ngoc@gmail.com" },
    { name: "Quỳnh", email: "quynh@gmail.com" },
    { name: "Khanh", email: "khanh@gmail.com" }
  ];
  
  // Hàm cập nhật email theo name
  function updateEmail(name, newEmail) {
    // Duyệt qua mảng users bằng vòng for
    for (let i = 0; i < users.length; i++) {
      // Kiểm tra nếu tên người dùng trùng với tham số name
      if (users[i].name === name) {
        // Cập nhật email của người dùng đó
        users[i].email = newEmail;
        console.log(`Email của ${name} đã được cập nhật thành ${newEmail}`);
        return;
      }
    }
    console.log(`Không tìm thấy người dùng có tên là ${name}`);
  }
  
  updateEmail("Đinh", "dinh123@gmail.com");
  updateEmail("Heo", "KhanhHeo@gmail.com"); // Tên Heo không tồn tại trong mảng
  
  console.log(users);

//   6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
// mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}

function calculateAverageScore(students) {
    if (students.length === 0) return 0; // Trường hợp mảng rỗng
  
    let totalScore = 0; // Khởi tạo biến để lưu tổng điểm
  
    // Duyệt qua từng sinh viên và cộng điểm số của họ vào totalScore
    for (let i = 0; i < students.length; i++) {
      totalScore += students[i].score;
    }
  
    // Tính điểm trung bình
    let averageScore = totalScore / students.length;
  
    return averageScore;
  }
  

  const students = [
    { name: "Alex", score: 85 },
    { name: "Bella", score: 90 },
    { name: "Chris", score: 78 }
  ];
  
  console.log(calculateAverageScore(students));

//   7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
// “product 1”, price: 100 }

function areAllProductsPricedAboveZero(cart) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].price <= 0) {
        return false; // Nếu có sản phẩm có giá <= 0, trả về false
      }
    }
    return true; // Nếu không có sản phẩm nào có giá <= 0, trả về true
  }
  

  const cart = [
    { name: "product 1", price: 100 },
    { name: "product 2", price: 50 },
    { name: "product 3", price: 200 }
  ];
  
  console.log(areAllProductsPricedAboveZero(cart));

//   8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối.

function isStoreOpen(hour) {
    // Kiểm tra giờ có nằm trong khoảng từ 9 (sáng) đến 21 (tối) hay không
    if (hour >= 9 && hour <= 21) {
      console.log("Cửa hàng đang mở cửa.");
    } else {
      console.log("Cửa hàng đã đóng cửa.");
    }
  }
  
  isStoreOpen(10); // Cửa hàng đang mở cửa.
  isStoreOpen(22); // Cửa hàng đã đóng cửa.
  
//   9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
// tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.

function ticketPrice(age) {
    if (age < 5) {
      console.log("Miễn phí");
    } else if (age >= 6 && age <= 17) {
      console.log("Giá vé: 50k");
    } else if (age >= 18) {
      console.log("Giá vé: 100k");
    } else {
      console.log("Tuổi không hợp lệ");
    }
  }
  

  ticketPrice(3);  // Miễn phí
  ticketPrice(10); // Giá vé: 50k
  ticketPrice(20); // Giá vé: 100k


//   10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
//   switch...case để xử lý.

function printMonthName(month) {
    switch (month) {
      case 1:
        console.log("Tháng 1");
        break;
      case 2:
        console.log("Tháng 2");
        break;
      case 3:
        console.log("Tháng 3");
        break;
      case 4:
        console.log("Tháng 4");
        break;
      case 5:
        console.log("Tháng 5");
        break;
      case 6:
        console.log("Tháng 6");
        break;
      case 7:
        console.log("Tháng 7");
        break;
      case 8:
        console.log("Tháng 8");
        break;
      case 9:
        console.log("Tháng 9");
        break;
      case 10:
        console.log("Tháng 10");
        break;
      case 11:
        console.log("Tháng 11");
        break;
      case 12:
        console.log("Tháng 12");
        break;
      default:
        console.log("Số tháng không hợp lệ");
    }
  }
  

  printMonthName(5);  // Tháng 5
  printMonthName(12); // Tháng 12
  printMonthName(13); // Số tháng không hợp lệ

//   11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
//     6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).

function gradeClassification(score) {
    if (score >= 8) {
      console.log("Giỏi");
    } else if (score >= 6.5 && score < 8) {
      console.log("Khá");
    } else if (score >= 5 && score < 6.5) {
      console.log("Trung bình");
    } else if (score < 5) {
      console.log("Yếu");
    } else {
      console.log("Điểm không hợp lệ");
    }
  }
  

  gradeClassification(8.5); // Giỏi
  gradeClassification(7);   // Khá
  gradeClassification(5.5); // Trung bình
  gradeClassification(4);   // Yếu

//   12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
// (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)

function weatherStatus(temperature) {
    console.log(`Nhiệt độ: ${temperature} độ C`);
    
    if (temperature >= 30) {
      console.log("Thời tiết: Nóng");
    } else if (temperature >= 20) {
      console.log("Thời tiết: Mát");
    } else {
      console.log("Thời tiết: Lạnh");
    }
  }
  
  weatherStatus(32); // Nhiệt độ: 32 độ C, Thời tiết: Nóng
  weatherStatus(25); // Nhiệt độ: 25 độ C, Thời tiết: Mát
  weatherStatus(15); // Nhiệt độ: 15 độ C, Thời tiết: Lạnh


  
  
  
  
  
  
