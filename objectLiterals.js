
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
/*

    const person = {
        name: "John",
        age: 30,
        sayHello: function() {
            console.log("Hello, my name is " + this.name);
        }
    };
    console.log(person.name); // "John"
    console.log(person.age); // 30
    person.sayHello(); // "Hello, my name is John"
*/
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
    const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    const obj = JSON.parse(text);
    obj.birth = new Date(obj.birth);
    console.log(obj.name + ", " + obj.birth ); // "John"

    const obj1 = { name: "John", age: 25 };
    const jsonString = JSON.stringify(obj1);
    console.log(jsonString);
/*
==========================================  Module Export  =============================================================
    const { name, age } = require("./forLoop.js");
    const defaultObj = require("./forLoop.js").default;

    console.log(name); // Output: "John"
    console.log(age); // Output: 25

    console.log(defaultObj.name); // Output: "Default Name"
    console.log(defaultObj.age); // Output: 30
*/