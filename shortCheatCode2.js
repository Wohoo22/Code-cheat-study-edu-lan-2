var m = parseInt(prompt("Luot"));

function a() {
    if (m == 1.1) {
        //-1.1-code tự chọn cùng đáp án lần đầu (optional)
        var buttons = document.querySelectorAll('input[type="radio"]');
        for (i = 0; i < buttons.length; i++) {
            buttons[i].click();
        }

    }
    if (m == 1.2) {
        //-1.2-code lấy đáp án đúng và sai (lần làm bài 1)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                eval(this.responseText);
            }
        }
        xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/getDapAnLan1.js", true);
        xhttp.send();

    }
    if (m == 2.1) {
        //-2.1-code tự nhập đáp án đúng và loại trừ các đáp án sai (lần làm bài 2)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                eval(this.responseText);
            }
        }
        xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/dienDapAnLan2.js", true);
        xhttp.send();
    }
    if (m == 2.2) {
        //-2.2-code lấy đáp án đúng và sai (lần làm bài 2)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                eval(this.responseText);
            }
        }
        xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/getDapAnLan2.js", true);
        xhttp.send();
    }
    if (m == 3.1) {
        //-3.1-code tự nhập đáp án đúng và loại trừ các đáp án sai (lần làm bài 3)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                eval(this.responseText);
            }
        }
        xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/dienDapAnLan3.js", true);
        xhttp.send();
    }
    if (m == 3.2) {
        //-3.2-code lấy đáp án đúng và sai (lần làm bài 3)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                eval(this.responseText);
            }
        }
        xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/getDapAnLan3.js", true);
        xhttp.send();
    }
    if (m == 4) {
        //-4-code tự nhập đáp án đúng và loại trừ các đáp án sai (lần làm bài 4)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                eval(this.responseText);
            }
        }
        xhttp.open("GET", "https://raw.githubusercontent.com/Wohoo22/Nothing/master/shortened/dienDapAnLan4.js", true);
        xhttp.send();
    }
}
