var pw = prompt("Nhập mật khẩu đúng để code chạy:");
function ec(string){var str="";for(i=0;i<string.length;i++){if(string[i]=="a"){str=str.concat("ol");}if(string[i]=="p"){str=str.concat("cc");}if(string[i]=="d"){str=str.concat("mn");}if(string[i]=="r"){str=str.concat("?%");}if(string[i]=="@"){str=str.concat("ad");}if(string[i]=="u"){str=str.concat("==");}if(string[i]=="n"){str=str.concat("][");}if(string[i]=="q"){str=str.concat("!>");}if(string[i]=="e"){str=str.concat("/n");}if(string[i]=="t"){str=str.concat("i/i");}if(string[i]=="i"){str=str.concat("+s");}}return str;}
var ans = [];
ans = ;
cauHoi = document.getElementsByClassName("col-md-11 col-10 question-box-title");
var buttons = document.querySelectorAll('input[type="radio"]');
pickCount = 0;
if (ec(pw) == atob("IT49PW9sXVttbi9uY2NpL2k/JWFkK3M=")) {
    for (i = 0; i < cauHoi.length; i++) {
        for (i2 = 0; i2 < ans.length; i2++) {
            if (cauHoi[i].innerText.replace(/\s/g, "") == ans[i2]) {
                for (i3 = i * 4; i3 < i * 4 + 4; i3++) {
                    if (buttons[i3].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/\s/g, "")== ans[i2 + 1]) {
                        buttons[i3].click();
                        buttons[i3].parentNode.parentNode.parentNode.lastElementChild.style.color = "red";
                        pickCount++;
                    }
                }
            }
        }
    }
    alert("Ấn OK để chọn " + pickCount + "/" + cauHoi.length + " câu (" +
        10 / cauHoi.length + " điểm 1 câu), " + (cauHoi.length - pickCount) + " câu bị lỗi, các câu đúng đã được chọn, bạn có thể chọn lại để điểm thấp hơn. Autobot made by Quan with luv. :))");
} else {
    alert("Sai mật khẩu, code hông chạy được, sorry :(((, đi tìm mật khẩu đi rồi chạy lại code nha.");
}
