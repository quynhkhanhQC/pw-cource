// 1. Tính tổng từ 1 đến 100.

function sumFromOneToHundred() {
    let total = 0; // Khởi tạo biến để lưu tổng
  
    // Duyệt qua các số từ 1 đến 100
    for (let i = 1; i <= 100; i++) {
      total += i; // Cộng từng số vào tổng
    }
  
    return total; // Trả về tổng
  }
  
  const resultSum = sumFromOneToHundred();
  console.log(`Tổng từ 1 đến 100 là: ${resultSum}`); // Tổng từ 1 đến 100 là: 5050
  
// 2. In bảng cửu chương từ 2 đến 9.

  function printMultiplicationTable() {
    // Duyệt qua các số từ 2 đến 9
    for (let i = 2; i <= 9; i++) {
      console.log(`Bảng cửu chương ${i}:`);
      
      // Duyệt qua các số từ 1 đến 10 để nhân với số i
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
  
      console.log(''); // In dòng trống để phân cách giữa các bảng
    }
  }
  

  printMultiplicationTable();
  
  // 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.

  function createOddNumbersArray() {
    let oddNumbers = []; // Khởi tạo mảng rỗng để chứa các số lẻ
  
    // Duyệt qua các số từ 1 đến 99
    for (let i = 1; i <= 99; i += 2) {
      oddNumbers.push(i); // Thêm số lẻ vào mảng
    }
  
    return oddNumbers; // Trả về mảng chứa các số lẻ
  }
  

  const result = createOddNumbersArray();
  console.log(result); 

//   // 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user-1@example.com, user2@example.com, ..., user10@example.com).

function printEmails() {
    for (let i = 1; i <= 10; i++) {
      console.log(`user-${i}@example.com`);
    }
  }
  
  printEmails();

  // 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}

function calculateTotalRevenue(revenues) {
    let totalRevenue = 0; // Khởi tạo biến để lưu tổng doanh thu
  
    // Duyệt qua từng object trong mảng doanh thu
    for (let i = 0; i < revenues.length; i++) {
      totalRevenue += revenues[i].total; // Cộng tổng doanh thu của từng tháng vào biến totalRevenue
    }
  
    return totalRevenue; // Trả về tổng doanh thu
  }
  

  const revenues = [
    { month: 1, total: 200 },
    { month: 2, total: 150 },
    { month: 3, total: 300 },
    { month: 4, total: 250 },
    { month: 5, total: 400 },
    { month: 6, total: 350 },
    { month: 7, total: 500 },
    { month: 8, total: 450 },
    { month: 9, total: 600 },
    { month: 10, total: 550 },
    { month: 11, total: 700 },
    { month: 12, total: 650 }
  ];
  
  const totalRevenue = calculateTotalRevenue(revenues);
  console.log(`Tổng doanh thu trong năm là: ${totalRevenue}k`); 

  
  
  
  