//get dap an lan 3
ans = JSON.parse(localStorage.getItem("ans"));
dapAn = document.getElementsByClassName("text-success");
for(i=2;i<dapAn.length;i+=3){
    	var cauHoi =  dapAn[i-1].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
	var answer =  dapAn[i].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
    if(ans.includes(cauHoi)){
        continue;
    }else{    
    	ans.push(cauHoi);
	ans.push(answer); 
    }
}
localStorage.setItem("ans",JSON.stringify(ans));

wrongAns3 = [];
dapAnSai = document.getElementsByClassName("text-danger");

for(i=3;i<dapAnSai.length;i+=3){
        var cauHoi =  dapAnSai[i-1].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
	var answer =  dapAnSai[i].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
        wrongAns3.push(cauHoi);
	wrongAns3.push(answer); 
}
localStorage.setItem("wrongAns3",JSON.stringify(wrongAns3));
//code tự nhập đáp án đúng và loại trừ các đáp án sai (lần làm bài 4)
function copyStringToClipboard (str) {var el = document.createElement('textarea');el.value = str;el.setAttribute('readonly', '');el.style = {position: 'absolute', left: '-9999px'};document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {      
      copyStringToClipboard(this.responseText);
    }
  }
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/dienDapAnLan4.js", true);
xhttp.send();
