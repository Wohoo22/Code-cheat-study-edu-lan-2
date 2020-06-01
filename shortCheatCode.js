//code tự chọn cùng đáp án lần đầu (dùng hay k cũng được)
var buttons = document.querySelectorAll('input[type="radio"]');
for(i=0;i<buttons.length;i++){
    buttons[i].click();
}


//code lấy đáp án đúng và sai lần 1
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {      
      eval(this.responseText);
    }
  }
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Cheat-Study.hanoi.edu/master/getAnsQues.js", true);
xhttp.send();
