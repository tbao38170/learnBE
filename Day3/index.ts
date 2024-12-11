//author Trần Gia Bảo
//Bài tập 1

class Student {
    name: string;
    age: number;
    grade: string;
  
    // constructor() {
    //     this.name = "";
    //     this.age = 0;
    //     this.grade = "";
    //   }

    constructor(name: string, age: number, grade: string) {
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
    
    displayInfoStudent(): void {
    console.log('====================================');
    console.log(`Name : ${this.name}`);
    console.log(`Age : ${this.age}`);
    console.log(`Grade: ${this.grade}`);
    console.log('====================================');
    }
}
  
  // Ví dụ sử dụng:
  const student1 = new Student("Trần Gia Bảo", 19, "Đại học đừng học đại");
  student1.displayInfoStudent();
  
  //Bài tập 02
class BankAccount {
    accountNumber: string;
    balance: number;
  
    constructor(accountNumber: string, balance: number = 0) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
    // gửi tiềN
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Số tiền đã gửi: ${amount}$. Số dư mới: ${this.balance}$`);
      } else {
        console.log("amount > 0 -- số tiền ko âm.");
      }
    }
    // rút tiền
    withdraw(amount: number): void {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Rút tiền: ${amount}$. Số dư mới: ${this.balance}$`);
      } else {
        console.log("Tài khoản ko đủ tiền hoặc số tiền rút ko hợp lệ.");
      }
    }
  }
  
  class SavingAccount extends BankAccount {
    interestRate: number; // têm lãi suất
  
    constructor(accountNumber: string, balance: number, interestRate: number) {
      super(accountNumber, balance);  // gọi lại contructor trên lớp cha 
      this.interestRate = interestRate;
    }
    // lính lãi
    calculateInterest(): number {
      return this.balance * this.interestRate / 100;
    }
  }
  
  const bankAccount1 = new BankAccount("375803101", 1000);
  bankAccount1.deposit(500);
  bankAccount1.withdraw(200);
  
  const savingAccount1 = new SavingAccount("375803101", 1000, 5);
  console.log(`Số tiền lãi tính được : ${savingAccount1.calculateInterest()}$`);
  console.log('===================================================================');

//   Bài tâp 3
class Book {
    title: string;
    author: string;
    ISBN: string;
  
    constructor(title: string, author: string, ISBN: string) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
    }
}
  
class Library {
    books: Book[];
  
    constructor() {
      this.books = [];
    }

    addBook(book: Book): void {
      this.books.push(book);
      console.log(`Sách "${book.title}" thêm sách vào thư viện.`);
    }

    removeBook(ISBN: string): void {
        const length = this.books.length;
        this.books = this.books.filter(book => book.ISBN !== ISBN); 
         this.books.length < length ?
          console.log(`Đã xoá ${ISBN} ra khỏi thư viện`) : console.log("ko tìm thấy sách ");
      }

    findBook(title: string): Book | null {
        let book1 = new Book('','','');
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].title.toLowerCase() === title.toLowerCase()) {
            book1 =  this.books[i]; 
            
          }
        }
        if(book1){
            return book1;
        }else{
            console.log(`Không tìm thấy cuốn sách có tên "${title}".`);
            return null;
        }
       
      }
  }
  
  const library = new Library();
  
  // Tạo một vài cuốn sách
  const book1 = new Book("OOP", "Edward", "147");
  const book2 = new Book("MTT", "Brian", "258");
  const book3 = new Book("CSDL Oracal", "Peter", "369");
  const book4 = new Book("BackEnd", "Handa Lee", "123");
  const book5 = new Book("FontEnd", "Newgarth", "456");
  
  // Thêm sách vào thư viện
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  library.addBook(book4);
  library.addBook(book5);
  

  const foundBook = library.findBook("backend");
  if (foundBook) {
    console.log(`Sách: "${foundBook.title}" tác giả ${foundBook.author}.`);
  }
  library.removeBook("258");
  library.findBook("1984");
  console.log('====================================');
  //=======================================================================================

abstract class Shape {
  abstract calculateArea(): number;  
}


class Rectangle extends Shape { // hinh chu naht
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // Tính diện tích hình chữ nhật
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Hinh tron
class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Tính diện tích hình tròn
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(2, 4);
console.log(`Diện tích hình chữ nhật: ${rectangle.calculateArea()} m²`);

const circle = new Circle(7);
console.log(`Diện tích hình tròn: ${circle.calculateArea()} m²`);

//=========================================================
console.log('================================================================');

// Bai 05
class Employee {
    name: string;
    position: string;
    salary: number;
  
    constructor(name: string, position: string, salary: number) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getInfos(): string {
      return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`;
    }
  }
  
  class Manager extends Employee {
    teamSize: number;
  
    constructor(name: string, position: string, salary: number, teamSize: number) {
      super(name, position, salary);  
      this.teamSize = teamSize;
    }
  
    
    getInfos(): string {
      return `${super.getInfos()}, Team Size: ${this.teamSize}`;
    }
  }
  
 
  class Developer extends Employee {
    programmingLanguages: string[];
  
    constructor(name: string, position: string, salary: number, programmingLanguages: string[]) {
      super(name, position, salary);  
      this.programmingLanguages = programmingLanguages;
    }
  
    // Override getDetails để thêm thông tin về ngôn ngữ lập trình
    getInfos(): string {
      return `${super.getInfos()}, Programming Languages: ${this.programmingLanguages.join(", ")}`;
    }
  }
  
  // Tạo danh sách nhân viên và in thông tin chi tiết
  const employees: Employee[] = [
    new Manager("manager1", "Manager", 80000, 10),
    new Developer("dev1", "Developer", 60000, ["JavaScript", "TypeScript"]),
    new Developer("dev2", "Developer", 70000, ["Python", "Java","C#"]),
  ];
  console.log("Thông tin nhân viên");
  employees.map(item =>console.log(item.getInfos()));
  
