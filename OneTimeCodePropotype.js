var pw = prompt("Nhập mật khẩu đúng để code chạy:");
function ec(string){var str="";for(i=0;i<pw.length;i++){if(pw[i]=="a"){str=str.concat("ol");}if(pw[i]=="p"){str=str.concat("cc");}if(pw[i]=="d"){str=str.concat("mn");}if(pw[i]=="r"){str=str.concat("?%");}if(pw[i]=="@"){str=str.concat("ad");}if(pw[i]=="u"){str=str.concat("==");}if(pw[i]=="n"){str=str.concat("][");}if(pw[i]=="q"){str=str.concat("!>");}if(pw[i]=="e"){str=str.concat("/n");}if(pw[i]=="t"){str=str.concat("i/i");}if(pw[i]=="i"){str=str.concat("+s");}}return str;}
if (ec(pw)=="!>==ol][mn/ncci/i?%ad+s") {
    var ans = [];
    //insert json data here
    ans = ;
    cauHoi = document.getElementsByClassName("col-md-11 col-10 question-box-title");
    var buttons = document.querySelectorAll('input[type="radio"]');
    pickCount = 0;
    for (i = 0; i < cauHoi.length; i++) {
        for (i2 = 0; i2 < ans.length; i2++) {
            if (cauHoi[i].innerText.replace(/(\n| |\$|\t)/gm, "").trim() == ans[i2]) {
                for (i3 = i * 4; i3 < i * 4 + 4; i3++) {
                    if (buttons[i3].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/(\n| |\$|\t)/gm, "").trim() == ans[i2 + 1]) {
                        buttons[i3].click();
                        buttons[i3].parentNode.parentNode.parentNode.lastElementChild.style.color = "red";
                        pickCount++;
                    }
                }
            }
        }
    }
    alert("Ấn OK để chọn " + pickCount + "/" + cauHoi.length + " câu (" +
        10 / cauHoi.length + " điểm 1 câu), các câu đúng sẽ chuyển thành màu đỏ, bạn có thể chọn lại để điểm thấp hơn. Auto code written by Quan with luv :))");
} else {
    alert("Sai mật khẩu, code hông chạy được, sorry :(((, đi tìm mật khẩu đi rồi chạy lại code nha");
}
