// 1. In ra tất cả các ký tự của một chuỗi. Ví dụ chuỗi Playwright

function printStringCharacters(str) {
    for (let char of str) {
      console.log(char);
    }
  }
  
  // Ví dụ sử dụng:
  const string = "Playwright";
  printStringCharacters(string);

//   2. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
// cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3
// thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.

function findFirstAndLastPosition(arr, value) {
    let firstPosition = -1;  // Lưu vị trí đầu tiên
    let lastPosition = -1;   // Lưu vị trí cuối cùng
  
    let index = 0;  // Biến chỉ số cho vòng lặp
    for (let element of arr) {
      if (element === value) {
        // Nếu tìm thấy giá trị đầu tiên, gán cho firstPosition
        if (firstPosition === -1) {
          firstPosition = index;
        }
        // Luôn cập nhật lastPosition mỗi khi tìm thấy giá trị
        lastPosition = index;
      }
      index++;  // Tăng chỉ số mỗi lần lặp
    }
  
    if (firstPosition !== -1) {
      console.log(`Vị trí đầu tiên: ${firstPosition}`);
      console.log(`Vị trí cuối cùng: ${lastPosition}`);
    } else {
      console.log(`Không tìm thấy giá trị ${value} trong mảng.`);
    }
  }
  

  const array = [1, 2, 3, 4, 3, 55, 23];
  findFirstAndLastPosition(array, 3);
  
//   3. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
// ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
// “y”, “a”, “l”, “P”]

function reverseStringToArray(str) {
    let reversedArray = [];  // Khởi tạo mảng rỗng để chứa các ký tự nghịch đảo
  
    // Duyệt qua từng ký tự trong chuỗi
    for (let char of str) {
      // Thêm ký tự vào đầu mảng để tạo thứ tự nghịch đảo
      reversedArray.unshift(char);
    }
  
    return reversedArray;  // Trả về mảng đã nghịch đảo
  }
  

  const stringReverse = "Playwright";
  const reversedArray = reverseStringToArray(stringReverse);
  console.log(reversedArray);  //  ["t", "h", "g", "i", "r", "w", "y", "a", "l", "P"]

//   4. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
//     1, 2, 4,5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]

function findUniqueElements(arr) {
    let elementCount = {};  // Đối tượng để đếm số lần xuất hiện của các phần tử
    let uniqueElements = [];  // Mảng chứa các phần tử duy nhất
  
    // Duyệt qua từng phần tử của mảng và đếm số lần xuất hiện
    for (let element of arr) {
      if (elementCount[element]) {
        elementCount[element]++;
      } else {
        elementCount[element] = 1;
      }
    }
  
    // Lọc ra các phần tử xuất hiện đúng 1 lần
    for (let element in elementCount) {
      if (elementCount[element] === 1) {
        uniqueElements.push(Number(element));  // Chuyển thành số trước khi thêm vào mảng
      }
    }
  
    return uniqueElements;  // Trả về mảng các phần tử duy nhất
  }
  

  const arrayFind = [1, 2, 3, 1, 2, 4, 5];
  const unique = findUniqueElements(arrayFind);
  console.log(unique);  // [3, 4, 5]
  
  