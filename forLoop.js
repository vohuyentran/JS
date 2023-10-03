/* 
==========================================   For Loop   =============================================================
    - Sumary: Tạo vòng lặp thực thi 1 số lần khối mã bằng các option khác nhau
    - Syntax for loop: 
        for (initializer; condition; iterator) {
            // statements
        }
        Initializer: Khai báo và khởi tạo một biến
        condition: condition là một biểu thức boolean xác định xem for có nên thực hiện lần lặp tiếp theo hay không.
        iterator:   Thực hiện câu lệnh sau mỗi lần lặp
        
*/

    // console.log("A simple JavaScript for loop example");
    // for (let i = 1; i < 5; i++) {
    //     console.log(i);
    // }

    // console.log("for loop without the initializer");
    // let b = 1;
    // for (; b < 10; b += 2) {
    //     console.log(b);
    // }

    // console.log("for loop without the condition");
    // for (let c = 1; ; c += 2) {
    //     console.log(c);
    //     if (c > 10) {
    //     break;
    //     }
    // }

    // console.log("for loop statement without any expression");
    // let d = 1;
    // for (;;) {
    //     if (d > 10) {
    //         break;
    //     }
    // console.log(d);
    // d += 2;
    // }

    // console.log("for loop without the loop body ");
    // let sum = 0;
    // for (let i = 0; i <= 9; i++, sum += i);
    // console.log(sum);


/* 
==========================================   FLoop For In    =============================================================
    - Sumary: The JavaScript for in statement loops through the properties of an Object/ Array:
    - Syntax for in loop:
        for (key in object) {
            // code block to be executed
        }
        for (variable in array) {
            code
        }
*/

    // const object = {fname:"Huyen", lname:"Tran", age:22};
    // let text = "";
    // for (let x in object) {
    //     text += object[x];
    // }
    // console.log(text);

    // const arrays = ['vo', 'huyen', 'tran', 'intern', 22];
    // let txt = "";
    // for (let x in arrays) {
    //   txt += arrays[x];
    // }
    // console.log(txt);


/* 
==========================================  Loop For Of  =============================================================
    - Sumary: The JavaScript for of statement loops through the values of an iterable object.
            It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
    - Syntax for in loop:
        for (variable of iterable) {
            // code block to be executed
        }
    - Browser support: Chrome 38, Edge 12, Firefox 51, Safari 7, Opera 25
    For/of is not supported in Internet Explorer.
    - 

*/

    // const cars = ["BMW", "Volvo", "Mini"];
    // let txtCars = "";
    // for (let x of cars) {
    //     txtCars += x;
    // }
    // console.log(txtCars);

    // let language = "JavaScript";
    // let txtLanguage = "";
    // for (let x of language) {
    //     txtLanguage += x;
    // }
    // console.log(txtLanguage);

/* 
==========================================  Loop While  =============================================================
    - Sumary: The while loop loops through a block of code as long as a specified condition is true.
    - Syntax for in loop:
        while (condition) {
            // code block to be executed
        }

        The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
        do {
            // code block to be executed
        }
        while (condition);
*/
 
    // let text = "";
    // let i = 0;
    // while (i < 10) {
    //     text += " The number is " + i + '\;';
    //     i++;
    // }
    // console.log(text)

    // let textDoWhile = ""
    // let j = 9;
    // do {
    //     textDoWhile += " The number is " + j + '\;';
    //     j++;
    // }
    // while (j < 10);
    // console.log(textDoWhile)


/* 
==========================================  Module Export  =============================================================
    - Sumary: module export là cách để xuất (export) các giá trị, đối tượng, hoặc hàm từ một module để có thể sử dụng chúng trong các module khác. 
    Điều này giúp tổ chức mã nguồn và tạo ra sự tách biệt và tái sử dụng trong ứng dụng lớn.
        Có hai phương pháp chính để xuất các giá trị từ một module trong JavaScript "named exports" và "default export".
    - Syntax: 
        + Name exports:
            Sử dụng từ khóa export trước mỗi giá trị, đối tượng hoặc hàm mà chúng ta muốn xuất.
            Để import giá trị đã được xuất, bạn cần sử dụng tên giống như khi xuất chúng.
        + Default export:
            Sử dụng từ khóa export default trước giá trị, đối tượng hoặc hàm mà chúng ta muốn xuất.
            Một module chỉ có thể có một giá trị default export.
            Default export không yêu cầu tên khi import, bạn có thể đặt tên bất kỳ cho giá trị khi import
*/

    const name = "John";
    const age = 25;

    module.exports = {
    name,
    age,
    };

    module.exports.default = {
    name: "Default Name",
    age: 30,
    };

