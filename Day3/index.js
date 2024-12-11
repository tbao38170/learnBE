//author Trần Gia Bảo
//Bài tập 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    // constructor() {
    //     this.name = "";
    //     this.age = 0;
    //     this.grade = "";
    //   }
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.displayInfoStudent = function () {
        console.log('====================================');
        console.log("Name : ".concat(this.name));
        console.log("Age : ".concat(this.age));
        console.log("Grade: ".concat(this.grade));
        console.log('====================================');
    };
    return Student;
}());
// Ví dụ sử dụng:
var student1 = new Student("Trần Gia Bảo", 19, "Đại học đừng học đại");
student1.displayInfoStudent();
//Bài tập 02
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        if (balance === void 0) { balance = 0; }
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // gửi tiềN
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("S\u1ED1 ti\u1EC1n \u0111\u00E3 g\u1EEDi: ".concat(amount, "$. S\u1ED1 d\u01B0 m\u1EDBi: ").concat(this.balance, "$"));
        }
        else {
            console.log("amount > 0 -- số tiền ko âm.");
        }
    };
    // rút tiền
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log("R\u00FAt ti\u1EC1n: ".concat(amount, "$. S\u1ED1 d\u01B0 m\u1EDBi: ").concat(this.balance, "$"));
        }
        else {
            console.log("Tài khoản ko đủ tiền hoặc số tiền rút ko hợp lệ.");
        }
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, interestRate) {
        var _this = _super.call(this, accountNumber, balance) || this; // gọi lại contructor trên lớp cha 
        _this.interestRate = interestRate;
        return _this;
    }
    // lính lãi
    SavingAccount.prototype.calculateInterest = function () {
        return this.balance * this.interestRate / 100;
    };
    return SavingAccount;
}(BankAccount));
var bankAccount1 = new BankAccount("375803101", 1000);
bankAccount1.deposit(500);
bankAccount1.withdraw(200);
var savingAccount1 = new SavingAccount("375803101", 1000, 5);
console.log("S\u1ED1 ti\u1EC1n l\u00E3i t\u00EDnh \u0111\u01B0\u1EE3c : ".concat(savingAccount1.calculateInterest(), "$"));
console.log('===================================================================');
//   Bài tâp 3
var Book = /** @class */ (function () {
    function Book(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("S\u00E1ch \"".concat(book.title, "\" th\u00EAm s\u00E1ch v\u00E0o th\u01B0 vi\u1EC7n."));
    };
    Library.prototype.removeBook = function (ISBN) {
        var length = this.books.length;
        this.books = this.books.filter(function (book) { return book.ISBN !== ISBN; });
        this.books.length < length ?
            console.log("\u0110\u00E3 xo\u00E1 ".concat(ISBN, " ra kh\u1ECFi th\u01B0 vi\u1EC7n")) : console.log("ko tìm thấy sách ");
    };
    Library.prototype.findBook = function (title) {
        var book1 = new Book('', '', '');
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title.toLowerCase() === title.toLowerCase()) {
                book1 = this.books[i];
            }
        }
        if (book1) {
            return book1;
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y cu\u1ED1n s\u00E1ch c\u00F3 t\u00EAn \"".concat(title, "\"."));
            return null;
        }
    };
    return Library;
}());
var library = new Library();
// Tạo một vài cuốn sách
var book1 = new Book("OOP", "Edward", "147");
var book2 = new Book("MTT", "Brian", "258");
var book3 = new Book("CSDL Oracal", "Peter", "369");
var book4 = new Book("BackEnd", "Handa Lee", "123");
var book5 = new Book("FontEnd", "Newgarth", "456");
// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
var foundBook = library.findBook("backend");
if (foundBook) {
    console.log("S\u00E1ch: \"".concat(foundBook.title, "\" t\u00E1c gi\u1EA3 ").concat(foundBook.author, "."));
}
library.removeBook("258");
library.findBook("1984");
console.log('====================================');
//=======================================================================================
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    // Tính diện tích hình chữ nhật
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
// Hinh tron
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    // Tính diện tích hình tròn
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var rectangle = new Rectangle(2, 4);
console.log("Di\u1EC7n t\u00EDch h\u00ECnh ch\u1EEF nh\u1EADt: ".concat(rectangle.calculateArea(), " m\u00B2"));
var circle = new Circle(7);
console.log("Di\u1EC7n t\u00EDch h\u00ECnh tr\u00F2n: ".concat(circle.calculateArea(), " m\u00B2"));
//=========================================================
console.log('================================================================');
// Bai 05
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getInfos = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position, ", Salary: $").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, position, salary, teamSize) {
        var _this = _super.call(this, name, position, salary) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.getInfos = function () {
        return "".concat(_super.prototype.getInfos.call(this), ", Team Size: ").concat(this.teamSize);
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, position, salary, programmingLanguages) {
        var _this = _super.call(this, name, position, salary) || this;
        _this.programmingLanguages = programmingLanguages;
        return _this;
    }
    // Override getDetails để thêm thông tin về ngôn ngữ lập trình
    Developer.prototype.getInfos = function () {
        return "".concat(_super.prototype.getInfos.call(this), ", Programming Languages: ").concat(this.programmingLanguages.join(", "));
    };
    return Developer;
}(Employee));
// Tạo danh sách nhân viên và in thông tin chi tiết
var employees = [
    new Manager("manager1", "Manager", 80000, 10),
    new Developer("dev1", "Developer", 60000, ["JavaScript", "TypeScript"]),
    new Developer("dev2", "Developer", 70000, ["Python", "Java", "C#"]),
];
console.log("Thông tin nhân viên");
employees.map(function (item) { return console.log(item.getInfos()); });
