// class 가 'red'인 노드만 삭제

var reds = document.querySelectorAll("li.red");
var parent = document.querySelector("ul");

for(var i=0; i<reds.length; i++) {
  parent.removeChild(reds[i]);
  
}