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
