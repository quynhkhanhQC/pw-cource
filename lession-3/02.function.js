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
  
