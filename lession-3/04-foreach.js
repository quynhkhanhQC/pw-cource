// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
// 1
// 2
// 3

function printArrayElements(arr) {
    arr.forEach(element => {
      console.log(element);
    });
  }
  

  const array = [1, 2, 3];
  printArrayElements(array);
  
//   2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2,
//     3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3

function calculateArrayStats(arr) {
    let sum = 0;
    let max = arr[0]; // Khởi tạo giá trị lớn nhất là phần tử đầu tiên
    let min = arr[0]; // Khởi tạo giá trị nhỏ nhất là phần tử đầu tiên
  
    arr.forEach(element => {
      sum += element; // Tính tổng
      if (element > max) {
        max = element; // Tìm giá trị lớn nhất
      }
      if (element < min) {
        min = element; // Tìm giá trị nhỏ nhất
      }
    });
  
    console.log(`Tổng: ${sum}`);
    console.log(`Giá trị lớn nhất: ${max}`);
    console.log(`Giá trị nhỏ nhất: ${min}`);
  }
  
  // Ví dụ sử dụng:
  const arraySum = [1, 2, 3];
  calculateArrayStats(arraySum);

//   3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví
// dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]

function doubleArrayElements(arr) {
    let newArray = [];
  
    arr.forEach(element => {
      newArray.push(element * 2); // Nhân đôi mỗi phần tử và thêm vào mảng mới
    });
  
    return newArray; // Trả về mảng mới
  }
  

  const arrayOld = [1, 2, 3];
  const doubledArray = doubleArrayElements(arrayOld);
  console.log(doubledArray); 
  
  