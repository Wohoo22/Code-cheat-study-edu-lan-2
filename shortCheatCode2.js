//code tự chọn cùng đáp án lần đầu va copy code getDapAn lan 1
function copyStringToClipboard (str) {var el = document.createElement('textarea');el.value = str;el.setAttribute('readonly', '');el.style = {position: 'absolute', left: '-9999px'};document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);}
var buttons = document.querySelectorAll('input[type="radio"]');
for(i=0;i<buttons.length;i++){
    buttons[i].click();
}
//code lấy đáp án đúng và sai (lần làm bài 1)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        copyStringToClipboard(this.responseText);
    }
}
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/getDapAnLan1.js", true);
xhttp.send();



//code tự nhập đáp án đúng và loại trừ các đáp án sai (lần làm bài 2)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {      
      eval(this.responseText);
    }
  }
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/dienDapAnLan2.js", true);
xhttp.send();


//code lấy đáp án đúng và sai (lần làm bài 2)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {      
      eval(this.responseText);
    }
  }
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/getDapAnLan2.js", true);
xhttp.send();


//code tự nhập đáp án đúng và loại trừ các đáp án sai (lần làm bài 3)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {      
      eval(this.responseText);
    }
  }
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/dienDapAnLan3.js", true);
xhttp.send();


//code lấy đáp án đúng và sai (lần làm bài 3)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {      
      eval(this.responseText);
    }
  }
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/getDapAnLan3.js", true);
xhttp.send();


//code tự nhập đáp án đúng và loại trừ các đáp án sai (lần làm bài 4)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {      
      eval(this.responseText);
    }
  }
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/dienDapAnLan4.js", true);
xhttp.send();


//Get array dap an da chon in test cho vao storage de copy
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


//doi mau dap an da chon
var buttons = document.querySelectorAll('input[type="radio"]');
for(i=0; i<buttons.length; i++){
    if(buttons[i].checked){
        buttons[i].parentNode.parentNode.parentNode.lastElementChild.style.color="red";
    }
}
