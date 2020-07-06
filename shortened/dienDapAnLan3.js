function copyStringToClipboard (str) {var el = document.createElement('textarea');el.value = str;el.setAttribute('readonly', '');el.style = {position: 'absolute', left: '-9999px'};document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);}
//dien dap an lan 3
cauHoi = document.getElementsByClassName("col-md-11 col-10 question-box-title");
ans = JSON.parse(localStorage.getItem("ans"));
var buttons = document.querySelectorAll('input[type="radio"]');
for(i=0;i<cauHoi.length;i++){
	for(i2=0; i2<ans.length; i2++){
		if(cauHoi[i].innerText.replace(/(\n| |\$|\t)/gm, "") == ans[i2]){
            		
			for(i3=i*4; i3<i*4+4; i3++){
				if(buttons[i3].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/(\n| |\$|\t)/gm, "") == ans[i2+1]){
					buttons[i3].click();
					buttons[i3].parentNode.parentNode.parentNode.lastElementChild.style.color="red";
					cauHoi[i].id = "right";
					for(i4=i*4; i4<i*4+4; i4++){
						buttons[i4].className  = "right";
					}
				}
			}
		}
	}
}
wrongAns = JSON.parse(localStorage.getItem("wrongAns"));
for(i=0;i<cauHoi.length;i++){
    if(cauHoi[i].id == "right"){
    continue;
    }else{
        for(i2=0;i2<wrongAns.length;i2++){
            if(cauHoi[i].innerText.replace(/(\n| |\$|\t)/gm, "") == wrongAns[i2]){
                for(i3=i*4;i3<i*4+4;i3++){
                	if(buttons[i3].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/(\n| |\$|\t)/gm, "") == wrongAns[i2+1]){
                        	buttons[i3].className  = "wrong";
                    	}
                }
            }
         }
     }
}
wrongAns2 = JSON.parse(localStorage.getItem("wrongAns2"));
for(i=0;i<cauHoi.length;i++){
    if(cauHoi[i].id == "right"){
    continue;
    }else{
        for(i2=0;i2<wrongAns2.length;i2++){
            if(cauHoi[i].innerText.replace(/(\n| |\$|\t)/gm, "") == wrongAns2[i2]){
                for(i3=i*4;i3<i*4+4;i3++){
                	if(buttons[i3].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/(\n| |\$|\t)/gm, "") == wrongAns2[i2+1]){
                        	buttons[i3].className  = "wrong";
                    	}
                }
            }
         }
     }
}
for(i=0;i<buttons.length;i++){
    if(buttons[i].className == "" ){
        buttons[i].click();
    }
}
$.ajax({
         type: "POST",
         url: "/home/saveusertestresult",
         cache: "false",
         data: {
                ExamId: parseInt(prompt("Nhập số")),
                AnswerPerQuestions: ConvertLocalStoreDataToServerType(testResultLocalObject),
                SubmitType: 2,
                },
         success: function (data) {         
               
		}
	})
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {      
      copyStringToClipboard(this.responseText);
    }
  }
xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/getDapAnLan3.js", true);
xhttp.send();
