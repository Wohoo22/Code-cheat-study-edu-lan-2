//code tự chọn cùng đáp án lần đầu va copy code getDapAn lan 1
var buttons = document.querySelectorAll('input[type="radio"]');
for(i=0;i<buttons.length;i++){
    buttons[i].click();
}
function copyStringToClipboard (str) {var el = document.createElement('textarea');el.value = str;el.setAttribute('readonly', '');el.style = {position: 'absolute', left: '-9999px'};document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        copyStringToClipboard(this.responseText);
    }
}
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/getDapAnLan1.js", true);
xhttp.send();




//case 1: 10 diem (lay json dap an o phan chi tiet bai lam)
ans =[];
dapAn = document.getElementsByClassName("text-success");
for(i=2;i<dapAn.length;i+=3){
    	var cauHoi =  dapAn[i-1].parentNode.nextElementSibling.innerText.replace(/\s/g, "");
	var answer =  dapAn[i].parentNode.nextElementSibling.innerText.replace(/\s/g, "");
    	ans.push(cauHoi);
	ans.push(answer); 
}
localStorage.setItem("ans",JSON.stringify(ans));




//case 2: <10 --> get dap an o phan lam bai sau khi lam dung:
//pickRightAnswer
cauHoi = document.getElementsByClassName("col-md-11 col-10 question-box-title");
ans = JSON.parse(localStorage.getItem("ans"));
var buttons = document.querySelectorAll('input[type="radio"]');
pickCount=0;
for(i=0;i<cauHoi.length;i++){
	for(i2=0; i2<ans.length; i2++){
		if(cauHoi[i].innerText.replace(/\s/g, "") == ans[i2]){
			for(i3=i*4; i3<i*4+4; i3++){
				if(buttons[i3].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/\s/g, "") == ans[i2+1]){
					buttons[i3].click();
					buttons[i3].parentNode.parentNode.parentNode.lastElementChild.style.color="red";
					pickCount++;
				}
			}
		}
	}
}
alert("Ấn OK để chọn "+pickCount+"/"+cauHoi.length+" câu ("
      +10/cauHoi.length+" điểm 1 câu), các câu đúng sẽ chuyển thành màu đỏ, bạn có thể chọn lại để điểm thấp hơn.");
//getAnswerInTest
cauHoi = document.getElementsByClassName("col-md-11 col-10 question-box-title");
var dapAn = [];
var buttons = document.querySelectorAll('input[type="radio"]');
for(i=0; i<buttons.length; i++){
    if(buttons[i].checked){
        dapAn.push(buttons[i].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/\s/g, ""));
    }
}
var lastAns = [];
for(i=0;i<cauHoi.length;i++){
	lastAns .push(cauHoi[i].innerText.replace(/\s/g, ""));
	lastAns .push(dapAn[i]);
}
localStorage.setItem("lastAnswerPicked",JSON.stringify(lastAns));

