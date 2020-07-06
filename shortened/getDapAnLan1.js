function copyStringToClipboard (str) {var el = document.createElement('textarea');el.value = str;el.setAttribute('readonly', '');el.style = {position: 'absolute', left: '-9999px'};document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);}
//get dap an lan 1
ans =[];
dapAn = document.getElementsByClassName("text-success");
for(i=2;i<dapAn.length;i+=3){
    var cauHoi =  dapAn[i-1].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
	var answer =  dapAn[i].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
    ans.push(cauHoi);
	ans.push(answer); 
}
localStorage.setItem("ans",JSON.stringify(ans));
wrongAns = [];
dapAnSai = document.getElementsByClassName("text-danger");
for(i=3;i<dapAnSai.length;i+=3){
        var cauHoi =  dapAnSai[i-1].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
	var answer =  dapAnSai[i].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
        wrongAns.push(cauHoi);
	wrongAns.push(answer); 
}
localStorage.setItem("wrongAns",JSON.stringify(wrongAns));
//code tự nhập đáp án đúng và loại trừ các đáp án sai (lần làm bài 2)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {      
      copyStringToClipboard(this.responseText);
    }
  }
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/dienDapAnLan2.js", true);
xhttp.send();
