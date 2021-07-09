// 경고창 띄우는 함수 만들기
function hello(){
	alert('안녕!');
}

// 콘솔창에 결과 보여주는 함수 만들기
function hello(){
	console.log('안녕!');
}

// 문자열 모두 대문자로 바꾸기
let myname = 'Ratel'
myname.toUpperCase()

// 문자열 쪼개기
let myemail = 'ratel@gmail.com'
let result = myemail.split('@') // 결과: ['test','gmail.com']
let result2 = result[1].split('.') // 결과: ['gmail','com']
result2[0] // 결과: gmail
result2[1] // 결과: com

// 특정 문자를 다른 문자로 바꾸기
let txt = '순두부,김치,된장'
let names = txt.split(','); // ['순두부','김치','된장']
let result = names.join('-'); // '순두부-김치-된장'

// 두 숫자를 입력받으면 더한 결과를 돌려주는 함수 만들기
function sum(num1, num2) {
    let result = num1 + num2
	  console.log(result) // 콘솔에 출력
	  return result      // 반환값
}

// if문 연습하기
let x = 40

if (x>=20) {
    alert("만원입니다.")
} else if (x>10) {
    alert("육천원입니다.")
} else {
    alert("삼천오백원입니다.")
}

// 반복문 연습하기
for (let i = 0; i < 100; i++) {
	console.log(i);
}

// 반복문 이용하여 1부터 10까지 합 구하기
let sum = 0
for (let i=1;i<=10;i++) {
    sum += i
}
console.log(sum)




