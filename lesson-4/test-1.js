
// Hành tinh khởi đầu:
let departurePlanet = "Trái Đất";

// Nhiệm vụ:
let mission = "Khám phá vũ trụ";

// Phi hành đoàn:
const crew = ['Uyên Thanh', 'Lan Anh', 'Minh Trang Bui', 'Nguyễn Duyên', 
    'Trường Lâm', 'Lê Long', 'An Khánh Nguyễn', 'Tuấn Phạm', 'Âu Dương Thoại', 'Phạm Thu Thủy'];

// Khởi động Tàu:
function launchShip(crew){

    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K9!`;
}

// Kết nối với Trung tâm Điều khiển:
const connectToCentralControl = launchShip(crew);
console.log(connectToCentralControl);

//2. Du hành đến hành tinh bí ẩn

function calculateDistance(speed, time){
    return speed * time;
}

const speed = 1000;
const time = 24;

const distance = calculateDistance(speed, time);
console.log(`Khoảng cách tàu vũ trụ K9 tới hành tinh là ${distance} km.`);

// 3. Hành tinh kỳ lạ

function convertTimeToHex(time){
    return time.toString(16);
}

const timeDecimal = 120;
const timeToHex = convertTimeToHex(timeDecimal);

console.log(`thời gian trên hành tinh này ${timeDecimal} được tính theo hệ thập lục phân của là ${timeToHex}`);

// 4. Khám phá kho báu

const code = "K9 Challenge";
function decryptCode(code){
   let decrypted = '';

   // Duyệt qua từng ký tự trong chuỗi
   for(let char of code){
    // Kiểm tra nếu là chữ viết thường thì chuyển thành chữ viết hoa

    if(char === char.toLowerCase()){
        decrypted += char.toUpperCase();

    }
    // Ngược lại nếu là chữ hoa thì chuyển thành viết thường

    else if(char === char.toUpperCase()){
        decrypted += char.toLowerCase();
    }
    // Nếu là ký tự khác chữ cái thì giữ nguyên -> dấu cách
    else{
        decrypted += char;
    }
   }
   return decrypted;
}

const decrypedCode = decryptCode(code);
console.log(`Kết quả giải mật mã ${code} là ${decrypedCode}`);

// 5. Trở về Trái Đất

function returnToEarth(){
    return  `Chuẩn bị trở về Trái Đất!`;
}
const wellComBackToEarch = returnToEarth();
console.log(wellComBackToEarch);
