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




//dien dap an lan 2
cauHoi = document.getElementsByClassName("col-11 question-box-title");
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
                 window.location.href = url + data.Result;
		}
	})




//get dap an lan2
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

wrongAns2 = [];
dapAnSai = document.getElementsByClassName("text-danger");

for(i=3;i<dapAnSai.length;i+=3){
        var cauHoi =  dapAnSai[i-1].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
	var answer =  dapAnSai[i].parentNode.nextElementSibling.innerText.replace(/(\n| |\$|\t)/gm, "");
        wrongAns2.push(cauHoi);
	wrongAns2.push(answer); 
}
localStorage.setItem("wrongAns2",JSON.stringify(wrongAns2));




//dien dap an lan 3
cauHoi = document.getElementsByClassName("col-11 question-box-title");
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
                 window.location.href = url + data.Result;
		}
	})




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




//dien dap an lan 4
cauHoi = document.getElementsByClassName("col-11 question-box-title");
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
wrongAns3 = JSON.parse(localStorage.getItem("wrongAns3"));
for(i=0;i<cauHoi.length;i++){
    if(cauHoi[i].id == "right"){
    continue;
    }else{
        for(i2=0;i2<wrongAns3.length;i2++){
            if(cauHoi[i].innerText.replace(/(\n| |\$|\t)/gm, "") == wrongAns3[i2]){
                for(i3=i*4;i3<i*4+4;i3++){
                	if(buttons[i3].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/(\n| |\$|\t)/gm, "") == wrongAns3[i2+1]){
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
                 window.location.href = url + data.Result;
		}
	})
