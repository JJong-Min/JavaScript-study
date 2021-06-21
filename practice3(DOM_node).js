// section 태그의 자손 중에 blue라는 클래스를 가지고 있는 노드가 있다면
// 그 하위에 있는 h2 노드를 삭제


var bluenodes=document.querySelectorAll("section .blue");

for (var i=0; i<bluenodes.length; i++) {
  var section = bluenodes[i].closest("section");
  var h2 = section.querySelector("h2");
  section.removeChild(h2);
  
}