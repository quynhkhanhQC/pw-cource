//1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021

}

console.log('Năm sản xuất xe ' + car.year);

//2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này. 

let person = {
    name: 'Quỳnh Khanh',
    address: {
        street: 'Quốc lộ 22',
        city: 'Hồ Chí Minh',
        country: 'Hóc Môn'
    }
}

console.log('Địa chỉ: ' + person.address.street + ', ' + person.address.country + ', ' + person.address.city);

//3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english

let student = {
    name: 'Quỳnh Khanh',
    grades: {
        math: 10,
        english: 9
    }
}

console.log('Điểm môn toán: ' + student.grades['math']);

//4. Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.

let products = {
    'MacBook': 2000,
    'Iphone': 1000,
    'IMac': 5000

}

for (let property in products){
    console.log(`${property} có giá là ${products[property]}`);
}

//5. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới. 

let settings = {
    volume: 50,
    brightness: 30
}

settings.volume = 40;
console.log(settings);

//6. Tạo một object bike và sau đó thêm thuộc tính color vào object đó 
 let bike = {
    make: 'Honda',
    model: 'KHQ785'
 }

 bike.color = 'Black';
 console.log(bike);

//7. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này 

let employee = {
    'name': 'Quỳnh Khanh',
    'age': 29
}

delete employee.age;
console.log(employee);

//8.

const school = {

    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]

}
console.log(school);



