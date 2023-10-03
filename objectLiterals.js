
/*
==================================================== Object ===========================================================================
    -Summary: Object trong JavaScript (đối tượng trong JavaScript) là tập hợp của các cặp key-value. Và property là tên gọi của mỗi cặp key-value.
        Giá trị (value) của một property có thể thuộc bất kỳ kiểu dữ liệu như: string, number, object, function,….
        Khi giá trị của một property là function thì tên gọi của nó là method.
        + khởi tạo Object: 
            ++ Sử dụng object literal
            ++ Sử dụng object constructor function: phụ thuộc vào kế thừa prototype nhằm giúp các chức năng trở nên hữu dụng hơn. 
            Mấu chốt của những dạng này là có thể thực thể hóa(instantiation) và được kế thừa (inherited)
            ++ Thuộc tính riêng ( own property) và thuộc tính kế thừa (inherited property): => Sử dụng hasOwnProperty để kiểm tra phải thuộc tính riêng hay không
        + Object constructor: là một phương thức đặc biệt dùng để khởi tạo 1 object và được tạo trong class
        + Object prototype: Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác
                            Dùng khi Thêm một thuộc tính và phương thức bên ngoài constructor.
        + "This": đề cập đến đối tượng mà nó thuộc về
            Đặc tính: 
                ++ Trong phương thức: This tham chiếu đối tượng truy cập phương thức( đối tượng trước dấu .)
                ++ Ngoài phương thức: this tham chiếu đến đối tượng ngoài global.
            Lưu ý: 
                ++ This trong hàm tạo sẽ đại diện cho đối tượng sẽ được tạo
                ++ This trong hàm tạo là underfined khi ở stric  mode
                ++ Các phương thức blind(), call(), apply() có thể tham chiếu đến đối tượng khác.
            
                
*/
        // var User = function( firstName, lastName ){
        //     this.firstName = firstName;
        //     this.lastName = lastName;
            
        //     this.getName = function(){
        //         return `${this.firstName} ${this.lastName}`
        //     }
        // }
        // // Object constructor
        // var userTran = new User('Huyen','Tran');
        // var userA = new User('Tran','A');
        // userTran.tuoi= 22;
        // userA.gioiTinh = "Nam";
        // console.log("Object constructor:");
        // console.log(userTran);
        // console.log(userA);

        // // Object prototype
        // console.log("Object prototype:");
        // User.prototype.statusAccount = "Inactive";
        // User.prototype.getStatusAccount = function(){
        //     return this.statusAccount;
        // }
        // console.log(userTran.getStatusAccount());

    /*----------------- Ví dụ về This trong phương thức---------------------- */
        //'use strict';
        // function Car(name, color, weight){
        //     this.name = name;
        //     this.color = color;
        //     this.weight = weight;   
        // }
        // Car.prototype.run = function(){
        //     //context

        //     // console.log(this);

        //     /* ----- This trong hàm không phải là phương thức: thì object là windows ---*/
        //     // function test(){
        //     /* ----- Arrow function không có context -> không có this -> lấy this ở hàm gần nhất -> this: mercedesS450  ---*/
        //     const test = () => {
        //         console.log(this)
        //     }
        //     test();


        // }
        // const mercedesS450 = new Car('Mercedes S450', 'black', 1200);
        // const porche = new Car('Porsche', 'yellow',1300); 
        // console.log(mercedesS450.run()) // This chính là mercedesS450
        // console.log(porche.run()) // This chính là porche

    /*----------------- Ví dụ về This ngoài phương thức---------------------- */
        // console.log(this); // trả về object là windows ( chạy file html -> console để tháy kết quả)

    /*----------------- Ví dụ về Add và delete Properties ---------------------- */
        // const person = {
        //     firstname: "John",
        //     lastname: "Doe",
        //     age: 50,
        //     eyecolor: "blue"
        // };
        // person.nationality = "English";
        // delete person["age"];
        // console.log(person); 

    /*----------------- Ví dụ về các Object lồng nhau ---------------------- */
        // const myObj = {
        //     name: "John",
        //     age: 30,
        //     name: "Jane",
        //         cars: {
        //             car1: "Ford",
        //             car2: "BMW",
        //             car3: "Fiat"
        //         }
        // }
        // // Cú pháp truy cập các thuộc tính JavaScript:
        // console.log(myObj.cars.car2); //objectName.property
        // console.log(myObj.cars["car2"]); 
        // console.log(myObj["cars"]["car2"]); //objectName["property"]
        // let p1 = "cars";
        // let p2 = "car2";
        // console.log(myObj.cars.car2);
        // let p3 = "name";
        // console.log(myObj[p3])
        // let p4 = "cars.car2";
        // console.log(myObj[p4]); //objectName[expression]

    /*----------------- Duplicate Object ---------------------- 
        - Khi duplicate một object lên, một bản sao của object đó sẽ được tạo ra. Bản sao này sẽ có tất cả các thuộc tính và giá trị giống hệt với object gốc. 
        Tuy nhiên, bản sao này sẽ là một đối tượng khác với object gốc. Điều này có nghĩa là các thay đổi đối với bản sao sẽ không ảnh hưởng đến object gốc và ngược lại.
        - (shallow copy) khi sử dụng Object.assign() hoặc spread operator (...), thay đổi giá trị trong bản sao (duplicate) sẽ tác động đến đối tượng gốc (object), và ngược lại, 
            thay đổi giá trị trong đối tượng gốc cũng sẽ tác động đến bản sao nông (shallow copy). Điều này xảy ra vì shallow copy chỉ sao chép tham chiếu đến đối tượng, không sao chép đối tượng gốc.
        - Khi sử dụng (deep copy) như JSON.parse(JSON.stringify()), thay đổi giá trị trong bản sao sẽ không làm thay đổi giá trị trong đối tượng gốc và ngược lại. 
            (deep copy) tạo ra một bản sao hoàn toàn độc lập của đối tượng, không chia sẻ tham chiếu với đối tượng gốc.
       
    */
        // const object = {
        //     name: "John Doe",
        //     age: 30,
        //     address: {
        //         street: "123 Main Street",
        //         city: "San Francisco",
        //         state: "CA",
        //     },
        // };
        
        // /* ------------------ Tạo một bản sao dùng Spread của object--------------- */
        // const duplicate = { ...object };

        // // Thay đổi giá trị của thuộc tính `address.street` của object
        // // object.address.street = "789 Elm Street";

        // // Thay đổi giá trị của thuộc tính `address.street` của duplicate
        // duplicate.address.street = "456 Elm Street";

        // // In kết quả
        // console.log("object.address.street:", object.address.street); // "789 Elm Street"
        // console.log("duplicate.address.street:", duplicate.address.street); // "456 Elm Street"

        
        // // Tạo một bản sao shallow của object
        // const duplicate = Object.assign({}, object);
        
        // // Thay đổi giá trị của thuộc tính `address.street` của object
        // // object.address.street = "789 Elm Street";
        // //Thay đổi giá trị của thuộc tính `address.street` của duplicate
        // duplicate.address.street = "456 Elm Street";

        // // In kết quả
        // console.log("object.address.street:", object.address.street); 
        // console.log("duplicate.address.street:", duplicate.address.street); 
        
        // /* ------------------ Tạo một bản sao Deep của object--------------- */
        // const deepDuplicate = JSON.parse(JSON.stringify(object));

        
        // object.address.street = "789 Oak Street";
        // // deepDuplicate.address.street = "456 Elm Street";

        // // In kết quả
        // console.log("object.address.street:", object.address.street); 
        // console.log("deepDuplicate.address.street:", deepDuplicate.address.street); 
        

        

    
    
    /*----------------- Ví dụ về Array lồng với Object ---------------------- */
        // let x = "";
        // const myObj1 = {
        // name: "John",
        // age: 30,
        // cars: [
        //     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        //     {name:"BMW", models:["320", "X3", "X5"]},
        //     {name:"Fiat", models:["500", "Panda"]}
        // ]
        // }
        // for (let i in myObj1.cars) {
        //     x += "Name: " + myObj1.cars[i].name + " ";
        //     for (let j in myObj1.cars[i].models) {
        //         x += myObj1.cars[i].models[j] +" , "  ;
        //     }
        // }
        // console.log(x);
/*  
==================================================== Object literals ===========================================================================
    -Sumary: Object literals là một cú pháp trong JavaScript để tạo đối tượng (object) trực tiếp và định nghĩa các thuộc tính và phương thức của đối tượng đó. 
    Đây là một cách tiện lợi để tạo đối tượng mà không cần sử dụng lớp (class) hoặc constructor function.
    - Syntax:
        const obj = {
            property1: value1,
            property2: value2,
            method1: function() {
                // code của method1
            },
            method2() {
                // code của method2
            }
        };
        Trong đó:
            property1 và property2 là các thuộc tính của đối tượng, và value1 và value2 là giá trị của các thuộc tính đó.
            method1 và method2 là các phương thức của đối tượng. method1 sử dụng cú pháp function expression, trong khi method2 sử dụng cú pháp function shorthand.
*/


    // const person = {
    //     name: "John",
    //     age: 30,
    //     sayHello: function() {
    //         console.log("Hello, my name is " + this.name);
    //     }
    // };
    // console.log(person.name); // "John"
    // console.log(person.age); // 30
    // person.sayHello(); // "Hello, my name is John"

/*
==================================================== JSON ===========================================================================
    - Sumary: JSON (JavaScript Object Notation) là một định dạng dữ liệu dựa trên văn bản (text-based) được sử dụng để truyền dữ liệu giữa các ứng dụng. 
    Nó được lấy cảm hứng từ cú pháp đối tượng (object) trong JavaScript, nhưng JSON có thể được sử dụng trong nhiều ngôn ngữ lập trình khác nhau.
    - Data type:  
        + Strings: {"name":"John"}
        + Numbers: {"age":30}
        + Objects: { "employee":{"name":"John", "age":30, "city":"New York"}}
        + Arrays: { "employees":["John", "Anna", "Peter"]}
        + Booleans: {"sale":true}
        + null: {"middlename":null}
    - JSON parse:
        Converting a JavaScript Object to a JSON Text:
            const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
            const obj = JSON.parse(text);
    - JSON stringify:
        converts a JavaScript object into a JSON string: 
            const obj = { name: "John", age: 25 };
            const jsonString = JSON.stringify(obj);
*/
    // const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    // const obj = JSON.parse(text);
    // obj.birth = new Date(obj.birth);
    // console.log(obj.name + ", " + obj.birth ); // "John"

    // const obj1 = { name: "John", age: 25 };
    // const jsonString = JSON.stringify(obj1);
    // console.log(jsonString);
    
/*
==========================================  Module Export  ============================================================= */
    // const { name, age } = require("./forLoop.js");
    // const defaultObj = require("./forLoop.js").default;

    // console.log(name); // Output: "John"
    // console.log(age); // Output: 25

    // console.log(defaultObj.name); // Output: "Default Name"
    // console.log(defaultObj.age); // Output: 30
    
