// var parent = document.querySelector(".parent-container");
// console.log(parent);
// var children = parent.children;
// console.log(children);
// var childrenNodes = parent.childNodes;
// console.log(childrenNodes);


// var sibling = document.querySelector(".three");
// console.log(sibling);
// console.log(sibling.previousElementSibling);
// console.log(sibling.nextElementSibling);



// function print() {
//     var uname = document.getElementById('name').value;
//     console.log(uname);
//     var pass = document.getElementById("pass").value;

//     if (pass == "admin") {
//         alert("Login Successfull!!");
//         alert(`Name: ${uname} \n Password: ${pass}`);
//     } else
// {
//     alert("Enter corrent Password")
// }

// };

// function print() {
//     var opt1 = document.getElementById("opt1");
//     var opt2 = document.getElementById("opt2");

//     if (opt1.checked) {
//         alert(`Option 1 is clicked!! ${opt1.value}`)
//     }
//     else if (opt2.checked) {
//         alert(`Option 2 is clicked!! ${opt2.value}`)
//     } else {
//         alert("Nothing is clicked!!")
//     }

//     var select = document.getElementById("s");
//     console.log(select);
//     console.log(select.options[select.selectedIndex].value);
    
//     if (select.options[select.selectedIndex].value == 'One'){
//         alert("The value is one")
//     }
//     else if (select.options[select.selectedIndex].value.toLowerCase() == 'two'){
//         alert("The value is two")
//     }
//     else if (select.options[select.selectedIndex].value == 'Three'){
//         alert("The value is three")
//     }

// }


var display = (val) => {
    document.getElementById("display").value += val;
}



var equal = () => {
    var x = document.getElementById("display").value;
    var y = eval(x);
    document.getElementById("display").value = y;
}

var clr = () => {
    document.getElementById("display").value = " ";
}


