var pw = prompt("Nhập mật khẩu đúng để code chạy:");

function ec(string) {
    var str = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] == "a") {
            str = str.concat("ol");
        }
        if (string[i] == "p") {
            str = str.concat("cc");
        }
        if (string[i] == "d") {
            str = str.concat("mn");
        }
        if (string[i] == "r") {
            str = str.concat("?%");
        }
        if (string[i] == "@") {
            str = str.concat("ad");
        }
        if (string[i] == "u") {
            str = str.concat("==");
        }
        if (string[i] == "n") {
            str = str.concat("][");
        }
        if (string[i] == "q") {
            str = str.concat("!>");
        }
        if (string[i] == "e") {
            str = str.concat("/n");
        }
        if (string[i] == "t") {
            str = str.concat("i/i");
        }
        if (string[i] == "i") {
            str = str.concat("+s");
        }
    }
    return str;
}



var ans = [];
ans= [
    "Thểtíchcủakhốicầungoạitiếpkhốilậpphươngcóđộdàicạnhbằnga\\sqrt{3}là:",
    "\\frac{9\\pi{{a}^{3}}}{2}.",
    "Chohàmsốy={{x}^{3}}-3{{x}^{2}}+2.Khẳngđịnhnàosauđâylàđúng?",
    "Hàmsốđạtcựctiểutạix=2vàđạtcựcđạitạix=0.",
    "Chosốphứcz=3-2i.Sốphứcliênhợpcủasốphứczlà",
    "\\overline{z}=3+2i.",
    "Hàmsốy=\\frac{2x-1}{x+1}cóbaonhiêuđiểmcựctrị?",
    "0.",
    "TrongkhônggianOxyz,chomặtphẳngmặtphẳng\\left(P\\right):2x-y+3=0.Vectơpháptuyếncủamặtphẳng\\left(P\\right)cótoạđộlà",
    "\\overrightarrow{n}=\\left(2;-1;\\,0\\right).",
    "Chohàmsốy=f\\left(x\\right)cóđồthịnhưhìnhvẽbêndưới.Hàmsốđãchonghịchbiếntrênkhoảngnàodướiđây?",
    "\\left(\\frac{1}{3};\\frac{\\sqrt{2}}{2}\\right).",
    "TrongkhônggianOxyz,chohaiđiểmA\\left(1;-1;2\\right),B\\left(3;1;0\\right).ToạđộtrungđiểmMcủađoạnthẳngABlà",
    "M\\left(2;0;1\\right).",
    "Hàmsốnàodướiđâycóđồthịnhưhìnhvẽtrên",
    "y={{x}^{3}}-3x+1.",
    "TrongkhônggianOxyz,chođiểmI\\left(-1;2;3\\right).Mặtcầu\\left(S\\right)cótâmIvàtiếpxúcvớimặtphẳng\\left(Oxz\\right)cóphươngtrìnhlà",
    "{{\\left(x+1\\right)}^{2}}+{{\\left(y-2\\right)}^{2}}+{{\\left(z-3\\right)}^{2}}=4.",
    "Chokhốinóncóđộdàiđườngsinhbằng2a,gócgiữađườngsinhvàđáybằng{{60}^{\\text{o}}}.Thểtíchcủakhốinónđãcholà",
    "\\frac{\\pi{{a}^{3}}\\sqrt{3}}{3}.",
    "Họnguyênhàmcủahàmsốf\\left(x\\right)=x-{{e}^{x}}là",
    "\\frac{{{x}^{2}}}{2}-{{e}^{x}}+C.",
    "Hàmsốy={{x}^{\\sqrt{2}}}cóđạohàmlà",
    "y'=\\sqrt{2}.{{x}^{\\sqrt{2}-1}}.",
    "Chohàmsốf\\left(x\\right)=\\left\\{\\begin{align}&{{x}^{2}},\\,\\,x\\ge1\\\\&2x,\\,\\,x<1\\\\\\end{align}\\right..Tíchphân\\int\\limits_{0}^{2}{f\\left(x\\right)\\text{d}x}bằng",
    "\\frac{10}{3}.",
    "TrongkhônggianOxyz,chocácđiểmA\\left(2;0;0\\right),B\\left(0;-2;0\\right).CóbaonhiêuđiểmMthuộctrụcOzsaochotamgiácMABcântạiM?",
    "Vôsố.",
    "TrênmặtphẳngtọađộOxy,đồthịhàmsốnàodướiđâyđốixứngvớiđồthịhàmsốy={{5}^{x}}quađườngthẳngy=x\\,\\,?",
    "y={{\\log}_{5}}x.",
    "Sốgiaođiểmcủađồthịhàmsốy={{x}^{4}}-5{{x}^{2}}+4vớitrụchoànhlà",
    "4.",
    "TrongmặtphẳngtoạđộOxy,tậphợpcácđiểmbiểudiễnchocácsốphứczthoảmãnđiềukiện\\left|z-3+2i\\right|=\\left|1+2i\\right|là",
    "ĐườngtròntâmI\\left(3;-2\\right),bánkínhR=\\sqrt{5}.",
    "Chohàmsốy={{x}^{3}}+3{{x}^{2}}-9x+1.GọiM,mlầnlượtlàgiátrịlớnnhấtvàgiátrịnhỏnhấtcủahàmsốtrênđoạn\\left[0;4\\right].KhiđóM+2mbằng?",
    "69.",
    "TrongkhônggianOxyz,mặtphẳng\\left(P\\right):2x-2y+z-1=0cắtmặtcầu\\left(S\\right):{{x}^{2}}+{{y}^{2}}+{{z}^{2}}+2x-4y-2z-3=0theomộtđườngtròncóbánkínhbằng",
    "\\sqrt{5}.",
    "Xéthaisốphức{{z}_{1}},{{z}_{2}}tuỳý.Phátbiểunàosauđâysai?",
    "\\left|{{z}_{1}}+{{z}_{2}}\\right|=\\left|{{z}_{1}}\\right|+\\left|{{z}_{2}}\\right|.",
    "Chohàmsốy=f\\left(x\\right)xácđịnhtrên\\mathbb{R}\\backslash\\left\\{0\\right\\}cóbảngbiếnthiênnhưhìnhvẽ.Sốnghiệmcủaphươngtrình{{f}^{2}}(x)+f(x)=0là",
    "5.",
    "Mộtkhốitrụcóthiếtdiệnquatrụclàmộthìnhvuông.Biếtdiệntíchxungquanhcủakhốitrụbằng16\\pi.Thểtíchcủakhốitrụbằng",
    "16\\pi.",
    "ChohìnhlăngtrụđứngABC.A'B'C'cóđáylàtamgiácđềucạnha,A'Btạovớimặtphẳngđáygóc60{}^\\circ.ThểtíchkhốilăngtrụABC.A'B'C'bằng",
    "\\frac{3{{a}^{3}}}{4}.",
    "Diệntíchphầnhìnhphẳnggạchchéotronghìnhvẽđượctínhtheocôngthứcnào?",
    "\\int\\limits_{a}^{b}{\\left[g\\left(x\\right)-f\\left(x\\right)\\right]\\text{d}x}+\\int\\limits_{b}^{c}{\\left[f\\left(x\\right)-g\\left(x\\right)\\right]\\text{d}x}.",
    "TrongkhônggianOxyz,chođiểmA\\left(1;-1;2\\right)vàhaimặtphẳng\\left(\\alpha\\right):2x+y-z+1=0,\\left(\\beta\\right):x+2y+z+3=0.Mặtphẳng\\left(P\\right)điquađiểmAvàvuônggócvớicảhaimặtphẳng\\left(\\alpha\\right),\\left(\\beta\\right)cóphươngtrìnhlà",
    "x-y+z-4=0.",
    "Từmộthộpchứa10thẻđánhsốtừ1đến10.Sốcáchlấyrahaithẻcósốghitrênthẻđềulàsốnguyêntốbằng",
    "6.",
    "TrongkhônggianOxyz,chomặtphẳng\\left(P\\right):x-y+z+1=0vàđườngthẳngd:\\frac{x-1}{2}=\\frac{y}{1}=\\frac{z+2}{-1}\\cdotXét\\Deltalàđườngthẳngsongsongvớimặtphẳng\\left(P\\right),đồngthờivuônggócvớiđườngthẳngd.Vectơnàosauđâylàvectơchỉphươngcủađườngthẳng\\Delta?",
    "\\overrightarrow{u}=\\left(0;1;1\\right).",
    "Tổngsốđườngtiệmcậncủađồthịhàmsốy=\\frac{\\sqrt{{{x}^{2}}+1}}{x-1}là",
    "3.",
    "ChohìnhchópđềuS.ABCcóAB=a,\\SA=2a.Cosincủagócgiữamặtbênvàmặtđáybằng",
    "\\frac{\\sqrt{5}}{15}\\cdot",
    "Chocấpsốcộng\\left({{u}_{n}}\\right)có{{u}_{5}}=2;{{u}_{7}}=8thì{{u}_{6}}bằng",
    "5.",
    "Mệnhđềnàodướiđâysai?",
    "\\int{{{f}^{2}}\\left(x\\right)dx}={{\\left(\\int{f\\left(x\\right)dx}\\right)}^{2}}vớimọihàmf\\left(x\\right)liêntụctrên\\mathbb{R}.",
    "Cóbaonhiêugiátrịnguyênâmcủamđểphươngtrình{{7}^{{{x}^{2}}-2x}}={{2}^{m}}cónghiệm?",
    "2.",
    "TrongkhônggianOxyz,cóbaonhiêuđườngthẳng\\Deltavuônggócvớimặtphẳng\\left(P\\right):x+2y-z+3=0vàsongsongvớiđườngthẳngd:\\frac{x-1}{2}=\\frac{y}{1}=\\frac{z+2}{4}\\,\\,?",
    "Vôsố.",
    "Chohìnhphẳng(H)đượcgiớihạnbởicácđườngx=1,x=e,y=0vày=\\lnx.Thểtích(V)củakhốitrònxoaytạothànhkhiquay(H)xungquanhtrụcOxđượctínhtheocôngthức",
    "V=\\pi\\int\\limits_{1}^{e}{{{\\ln}^{2}}x\\text{d}x}.",
    "Vớihaisốthựca,\\,\\,bbấtkỳthỏamãna>1,\\,\\,b>1và{{\\log}_{b}}2={{\\log}_{a}}2+{{\\log}_{{{a}^{2}}}}2,khẳngđịnhnàosauđâyđúng?",
    "{{b}^{3}}={{a}^{2}}.",
    "Chohàmsốy=a{{x}^{4}}+b{{x}^{2}}+c,\\\\left(a\\ne0\\right)cóbảngbiếnthiênnhưsau:Trongcácsốa,bvàccóbaonhiêusốdương?",
    "1.",
    "ĐồthịhàmsốnàodướiđâynhậnhaitrụctọađộOx,\\,\\,Oylàmtiệmcận?",
    "y={{x}^{-2}}.",
    "Vớisốthựcadươngchotrước,phươngtrình{{\\log}_{3}}{{x}^{2}}=2{{\\log}_{3}}acótậpnghiệmlà",
    "\\left\\{a;-a\\right\\}.",
    "Chohàmsốy=f\\left(x\\right)liêntụctrênR,hàmsốf'\\left(x\\right)cóđồthịnhưhìnhvẽbêndướiHàmsốg\\left(x\\right)=3f\\left({{x}^{2}}-2\\right)-\\frac{3}{2}{{x}^{4}}-3{{x}^{2}}+2đạtgiátrịlớnnhấttrên\\left[-2;2\\right]bằng",
    "g\\left(0\\right).",
    "CholăngtrụABC.A'B'C'cóđáyABClàtamgiácvuôngtạiA,AB=a,AC=a\\sqrt{3};hìnhchiếuvuônggóccủaA'trênmặtphẳng\\left(ABC\\right)làtrọngtâmtamgiácABCvàAA'=\\frac{a\\sqrt{241}}{6}.GọiMlàtrungđiểmcạnhAC.KhoảngcáchgiữahaiđườngthẳngMC'vàAB'bằng",
    "\\frac{15a}{\\sqrt{669}}.",
    "Đồthịcủacáchàmsốy={{a}^{x}};y={{a}^{-x}};y=2\\,\\,\\,\\left(a>1\\right)đôimộtcắtnhaulầnlượttạibađiểmA,\\,\\,B,\\,\\,Cphânbiệt,khôngthẳnghàng.BiếttamgiácABCđều,khẳngđịnhnàosauđâyđúng?",
    "a\\in\\left[3;4\\right).",
    "ChođồthịbiểuthịvậntốccủahaichấtđiểmAvàBxuấtphátcùngmộtlúc,bêncạnhnhauvàtrêncùngmộtconđường.BiếtđồthịbiểudiễnvậntốccủachấtđiểmAlàmộtđườngParabol,đồthịbiểudiễnvậntốccủachấtđiểmBlàmộtđườngthẳngnhưhìnhvẽsau.Hỏisaukhiđiđược3giây,khoảngcáchgiữahaichấtđiểmlàbaonhiêumét?",
    "90\\,m.",
    "ChokhốitrụcóthiếtdiệnquatrụcOO'làmộthìnhvuôngcạnhbằng2.Mặtphẳng\\left(P\\right)quatrungđiểmIcủaOO'vàtạovớimặtphẳngchứađáygóc{{30}^{\\text{o}}}.Diệntíchcủathiếtdiệndo\\left(P\\right)cắtkhốitrụgầnsốnàosauđâynhất?",
    "3,6.",
    "Haiđốithủngangtàinhau,cùngthiđấuvớinhauđểtranhchứcvôđịch.Ngườithắngcuộclàngườiđầutiênthắngđược6vánđấu.Hếtbuổisáng,ngườiIđãthắng5ván,cònngườiIIchỉmớithắng3ván.Buổichiềuhaingườisẽtiếptụcthiđấu.XácsuấtđểngườiIvôđịchbằng",
    "\\frac{7}{8}.",
    "Cóbaonhiêugiátrịnguyêncủathamsốmđểhàmsốy={{\\left(m-1\\right)}^{2}}{{x}^{4}}-\\left({{m}^{2}}-2020m\\right){{x}^{2}}+3cóđúngmộtcựctrị?",
    "2021.",
    "Chohàmsốy=f\\left(x\\right)cóđạohàmliêntụctrên\\mathbb{R}vàđồthịcủahàmsốy=f'\\left(x\\right)nhưhìnhvẽ.Hàmsốg\\left(x\\right)=f\\left(x-m\\right)-\\frac{1}{2}{{\\left(x-m-1\\right)}^{2}}+2020vớimlàthamsốthực.GọiSlàtậpcácgiátrịnguyêndươngcủamđểhàmsốy=g\\left(x\\right)đồngbiếntrênkhoảng\\left(4;6\\right).TổnggiátrịcácphầntửcủaSbằng",
    "19.",
    "Chohàmsốy=f\\left(x\\right)cóđạohàmliêntụctrên\\left[0;1\\right],thỏamãn{{\\left[f'\\left(x\\right)\\right]}^{2}}=4.\\left[2{{x}^{2}}+1-f\\left(x\\right)\\right]vớimọixthuộcđoạn\\left[0;1\\right]vàf\\left(1\\right)=2.GiátrịI=\\int\\limits_{0}^{1}{xf\\left(x\\right).\\text{d}x}bằng",
    "\\frac{3}{4}.",
    "Cóbaonhiêugiátrịnguyêncủathamsốmđểđồthịhàmsốy={{x}^{3}}-13x+mcắttrụchoànhtạibađiểmđềucóhoànhđộnguyên?",
    "2.",
    "ChohìnhchópS.ABCcóđáylàtamgiáccântạiA,\\widehat{BAC}=120{}^\\circ,BC=2avàSA=SB=SC=\\frac{a\\sqrt{39}}{3}.GọiGlàtrọngtâmcủatamgiácSAB.ThểtíchcủakhốichópG.ABCbằng",
    "\\frac{{{a}^{3}}}{9}.",
    "Cóbaonhiêugiátrịnguyêncủathamsốmđểphươngtrình\\frac{\\ln\\left(2{{x}^{2}}+2\\right)}{\\ln\\left({{x}^{2}}+2\\right)}=\\frac{\\ln\\left[2{{x}^{2}}+2+{{\\left({{x}^{3}}-3x-m\\right)}^{2}}\\right]}{\\ln\\left[{{x}^{2}}+2+{{\\left({{x}^{3}}-3x-m\\right)}^{2}}\\right]}cóđúng3nghiệmphânbiệt?",
    "3."
];
cauHoi = document.getElementsByClassName("col-md-11 col-10 question-box-title");
var buttons = document.querySelectorAll('input[type="radio"]');
pickCount = 0;

if (ec(pw) == atob("IT49PW9sXVttbi9uY2NpL2k/JWFkK3M=")) {
    document.getElementsByTagName("h1")[0].insertAdjacentHTML("beforebegin", "<div id='hack' style='text-align: center;'>LAUNCHING...</div><div id='myProgress' style='width: 100%;background-color: #d8f0de;'><div id='myBar' style='width: 1%;height: 30px;background-color: green;'></div></div><div style='text-align: center;'>AUTOBOT CREATED BY QUAN WITH LUV :D</div><div style='text-align: center;'><img src='https://image.flaticon.com/icons/svg/3076/3076339.svg' alt='heck' width='80' height='70'></div><br>");
    var i = 0;

    function move() {
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
	    var timeOut = setTimeout(function(){
		    clearInterval(id);
					       },7500);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width += 0.15;
                    elem.style.width = width + "%";
                }
            }
        }
    }
    window.scrollTo(0, 0);
    move();
    var do_alert = setTimeout(function() {
        for (i = 0; i < cauHoi.length; i++) {
            for (i2 = 0; i2 < ans.length; i2++) {
                if (cauHoi[i].innerText.replace(/\s/g, "") == ans[i2]) {
                    for (i3 = i * 4; i3 < i * 4 + 4; i3++) {
                        if (buttons[i3].parentNode.parentNode.parentNode.lastElementChild.innerText.replace(/\s/g, "") == ans[i2 + 1]) {
                            buttons[i3].click();
                            buttons[i3].parentNode.parentNode.parentNode.lastElementChild.style.color = "red";
                            pickCount++;
                        }
                    }
                }
            }
        }
	var elem = document.getElementById("myBar");
        elem.style.width = "100%";
	document.getElementById('hack').innerText = "DONE!!!";
        alert("Ấn OK để chọn " + pickCount + "/" + cauHoi.length + " câu (" +
            10 / cauHoi.length + " điểm 1 câu), " + (cauHoi.length - pickCount) + " câu bị lỗi, các câu đúng đã được chọn, bạn có thể chọn lại để điểm thấp hơn.");
    }, 7500);
} else {
    alert("Sai mật khẩu, code hông chạy được, sorry :((, đi tìm mật khẩu đi rồi chạy lại code nha.");
}
