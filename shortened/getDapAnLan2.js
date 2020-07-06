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

