// Ajax로 json.txt받아와서 console에 받은 josn.txt 띄우기
/*
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function() {
    console.log(this.responseText);
    console.log(typeof this.responseText); // 타입: String
});
oReq.open("GET", "./json.txt");
oReq.send();
*/

// Ajax로 받아온 json.txt Json object로 바꾼 후 DOM API로 요소 추가
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function() {
    var jsonobj = JSON.parse(this.responseText); // JOSN object로 바꾸기
    
    console.log(jsonobj.exercise[0]); // key가 favorites인 value에서 첫번째(index는 0) 값가져오기.

    var sport = jsonobj.exercise[0];
    var div = document.querySelector(".body_div");
    div.innerHTML += ("<br> <span>" + sport +"</span>");

});
oReq.open("GET", "./json.txt");
oReq.send();

