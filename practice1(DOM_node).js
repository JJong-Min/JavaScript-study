// strawberty 밑에 요소 추가

var mango = document.createElement("li");
var mangoText = document.createTextNode('mango');
mango.appendChild(mangoText);

var parent = document.querySelector("ul");

parent.appendChild(mango);


// insertBefore메서드를 사용해서, orange와  banana 사이에 새로운 과일을 추가
var base = document.querySelector("li:nth-child(3)");
var new_ele = document.createElement("li");
var new_text = document.createTextNode("pineapple");
new_ele.appendChild(new_text);
parent.insertBefore(new_ele, base);

//  insertAdjacentHTML메서드를  사용해서, orange와 banana 사이에 새로운 과일을 추가

base.insertAdjacentHTML("beforebegin", "<li>pineapple</li>")

// apple을 grape 와 strawberry 사이로 옮기기
var apple = document.querySelector("li:nth-child(1)");
var strawberry = document.querySelector("li:nth-child(7)");

parent.insertBefore(apple, strawberry);

