// // 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student
// = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10

function printObjectProperties(obj) {
    for (let key in obj) {
      console.log(`${key}=${obj[key]}`);
    }
  }
  
  const student1 = { name: "Alex", age: 10 };
  printObjectProperties(student1);

//   2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
// student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
// 30 (=10+20).

function calculateTotalNumericValues(obj) {
    let total = 0; // Khởi tạo biến tổng
  
    for (let key in obj) {
      // Kiểm tra xem giá trị có phải là số hay không
      if (typeof obj[key] === 'number') {
        total += obj[key]; // Cộng giá trị vào tổng
      }
    }
  
    return total; // Trả về tổng
  }
  

  const student2 = { name: "Alex", age: 10, salary: 20 };
  const total = calculateTotalNumericValues(student2);
  console.log(`Tổng các giá trị số: ${total}`); 

//   3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
// student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng
// [“name”, “age”]

function getObjectKeys(obj) {
    let keysArray = []; // Khởi tạo mảng rỗng để chứa các tên thuộc tính
  
    for (let key in obj) {
      keysArray.push(key); // Thêm tên thuộc tính vào mảng
    }
  
    return keysArray; // Trả về mảng chứa các tên thuộc tính
  }
  

  const student3 = { name: "Alex", age: 10 };
  const keys = getObjectKeys(student3);
  console.log(keys); 
  
  
  