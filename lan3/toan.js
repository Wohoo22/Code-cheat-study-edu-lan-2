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
    "Nguyênhàmcủahàmsốf\\left(x\\right)=\\frac{1}{{{\\cos}^{2}}\\frac{x}{2}}là",
    "2\\tan\\frac{x}{2}+C.",
    "TrongkhônggianvớihệtrụctọađộOxyz,chomặtphẳng\\left(P\\right):x-y+2z=0.Phươngtrìnhmặtphẳng\\left(Q\\right)chứatrụchoànhvàtạovới\\left(P\\right)mộtgócnhỏnhấtlà",
    "y-2z=0.",
    "ThểtíchVcủakhốitrụtrònxoaycódiệntíchđáySvàchiềucaohđượctínhbởicôngthứcnàodướiđây?",
    "V=Sh.",
    "ChohìnhlậpphươngABCD.{A}'{B}'{C}'{D}'tâmOvàcócạnhbằng1.GọiSlàđiểmnằmtrêntia{B}'Osaocho\\overrightarrow{OS}=2\\overrightarrow{{B}'O}.Thểtíchcủakhốiđadiện{A}'{B}'{C}'{D}'SABbằng",
    "\\frac{7}{6}.",
    "Chobiết\\int\\limits_{0}^{2}{\\frac{x-1}{{{x}^{2}}+4x+3}}\\text{d}x=a\\ln5+b\\ln3,với\\,a,b\\in\\mathbb{Q}.BiểuthứcT={{a}^{2}}+{{b}^{2}}bằng",
    "13.",
    "Chohàmsốy=f\\left(x\\right)liêntụctrênđoạn\\left[a;b\\right]vớia<b.Diệntíchcủahìnhphẳnggiớihạnbởiđồthịhàmsốy=f\\left(x\\right),trụchoànhvàhaiđườngthẳngx=a,x=bđượctínhtheocôngthức",
    "S=\\int\\limits_{a}^{b}{\\left|f\\left(x\\right)\\right|\\text{d}x}.",
    "TrongkhônggianvớihệtọađộOxyz,chomặtphẳng\\left(P\\right):2x+2y-z-1=0.Mặtphẳngnàosauđâysongsongvới\\left(P\\right)vàcách\\left(P\\right)mộtkhoảngbằng3?",
    "\\left(Q\\right):2x+2y-z+8=0.",
    "Chohàmsốy=f\\left(x\\right)cóđạohàmliêntụctrên\\mathbb{R}vàthỏamãnđiềukiện{{x}^{6}}{{\\left[{f}'\\left(x\\right)\\right]}^{3}}+27{{\\left[f\\left(x\\right)-1\\right]}^{4}}=0,\\,\\forallx\\in\\mathbb{R}vàf\\left(1\\right)=0.Giátrịcủaf\\left(2\\right)bằng",
    "-7.",
    "ChobiểuthứcP=\\sqrt[3]{{{x}^{5}}\\sqrt[4]{x}}vớix>0.Khiđó",
    "P={{x}^{\\frac{21}{12}}}.",
    "Hàmsốy=\\left(x-2\\right)\\left({{x}^{2}}-1\\right)cóđồthịnhưhìnhvẽMộttrongbốnhìnhdướiđâylàđồthịcủahàmsốy=\\left(x-2\\right)\\left|{{x}^{2}}-1\\right|.Hỏiđólàhìnhnào?",
    "Hình3.",
    "Cóbaonhiêugiátrịnguyêncủathamsốmđểhàmsốy=\\frac{{{x}^{3}}}{3}-(m+1){{x}^{2}}+({{m}^{2}}+2m)x+1nghịchbiếntrênđoạn\\left[2;3\\right]?",
    "2.",
    "Chohàmsốy=f\\left(x\\right)cóbảngbiếnthiênnhưhìnhvẽHỏiđồthịcủahàmsốđãchocóbaonhiêuđườngtiệmcận?",
    "2.",
    "Chohìnhphẳng\\left(H\\right)giớihạnbởicácđườngy=3x-{{x}^{2}},y=0.Quay\\left(H\\right)quanhtrụchoànhtạothànhkhốitrònxoaycóthểtíchlà",
    "\\pi\\int\\limits_{0}^{3}{{{\\left(3x-{{x}^{2}}\\right)}^{2}}\\text{d}x.}",
    "Hàmsốy=-{{x}^{3}}+12x+5nghịchbiếntrênkhoảngnàosauđây?",
    "\\left(2;+\\infty\\right).",
    "Khốibátdiệnđềucósốcạnhlà",
    "12.",
    "XéthaiđiểmA,\\,BlầnlượtlàcácđiểmtrongmặtphẳngtoạđộOxybiểudiễncácsốphứczvà(1+3i)z.BiếtrằngdiệntíchcủatamgiácOABbằng6,môđuncủasốphứczbằng",
    "2.",
    "ChohìnhchópS.ABCDcóđáylàhìnhthoicạnh2a,\\widehat{ABC}={{60}^{\\text{o}}}.TamgiácSADlàtamgiácđềuvànằmtrongmặtphẳngvuônggócvớiđáy.GọiMlàđiểmtrêncạnhABsaocho\\frac{AM}{AB}=\\frac{1}{3}.KhoảngcáchgiữahaiđườngthẳngSMvàBCbằng",
    "\\frac{\\sqrt{30}}{5}a.",
    "Chosốphứcwvàhaisốthựca,b.Biếtrằngw+ivà2w-1làhainghiệmcủaphươngtrình{{z}^{2}}+az+b=0.TổngS=a+bbằng",
    "-\\frac{5}{9}.",
    "Chohàmsốy=f\\left(x\\right)=a{{x}^{4}}+b{{x}^{3}}+c{{x}^{2}}+dx+ecóđồthịnhưhìnhvẽSốcựctrịcủahàmsốy=f\\left(\\left|x+1\\right|-3\\right)là",
    "7.",
    "Chohàmsốy=f\\left(x\\right)xácđịnhtrênđoạn\\left[a;b\\right],cóđồthịcủahàmsốy={f}'\\left(x\\right)nhưhìnhvẽSốđiểmcựctrịcủahàmsốy=f\\left(x\\right)trênđoạn\\left[a;b\\right]là",
    "3.",
    "Tấtcảcácgiátrịthựccủathamsốmđểphươngtrình{{\\log}_{3}}\\left(1-{{x}^{2}}\\right)+{{\\log}_{\\frac{1}{3}}}\\left(x+m-4\\right)=0cóhainghiệmthựcphânbiệtlà",
    "5<m<\\frac{21}{4}\\cdot",
    "Chokhốichóptứgiácđềucótấtcảcáccạnhbằng3a.Thểtíchcủakhốichópđãchobằng",
    "\\frac{9\\sqrt{2}{{a}^{3}}}{2}.",
    "TrongkhônggianvớihệtrụctọađộOxyz,đườngthẳng\\DeltađiquađiểmA\\left(-2;\\,4;\\,3\\right)vàvuônggócvớimặtphẳng\\left(\\alpha\\right):2x-3y+6z+19=0cóphươngtrìnhlà",
    "\\frac{x+2}{2}=\\frac{y-4}{-3}=\\frac{z-3}{6}.",
    "Chohàmsốy=f\\left(x\\right)liêntụctrênkhoảng\\left(-\\infty;+\\infty\\right),cóbảngbiếnthiênnhưsau",
    "Hàmsốy=f\\left(x\\right)đạtcựcđạitạiđiểmx=-2.",
    "Chohàmsốy=a{{x}^{4}}+b{{x}^{2}}+ccóđồthịnhưhìnhvẽKhẳngđịnhnàosauđâyđúng?",
    "a<0,b>0,c>0.",
    "TrongkhônggianvớihệtrụctọađộOxyz,chohaiđiểmA\\left(2;1;-2\\right),B\\left(5;1;1\\right)vàmặtcầu\\left(S\\right):{{x}^{2}}+{{y}^{2}}+{{z}^{2}}+6y+12z+9=0.XétđườngthẳngdđiquaAvàtiếpxúcvới\\left(S\\right)saochokhoảngcáchtừBđếndnhỏnhất.Phươngtrìnhcủađườngthẳngdlà",
    "\\left\\{\\begin{align}&x=2+2t\\\\&y=1-2t\\\\&z=-2+t\\\\\\end{align}\\right..",
    "Chosốphứczthỏamãnđiềukiệniz=3+4i.Môđuncủasốphứczbằng",
    "5.",
    "TrongkhônggianvớihệtrụctọađộOxyz,chođiểmG\\left(1;4;3\\right).MặtphẳngnàosauđâycắtcáctrụcOx,Oy,OzlầnlượttạiA,B,CsaochoGlàtrọngtâmtứdiệnOABC?",
    "12x+3y+4z-48=0.",
    "Đạohàmcủahàmsốy={{e}^{\\sqrt{2x}}}là",
    "{y}'=\\frac{{{e}^{\\sqrt{2x}}}}{\\sqrt{2x}}.",
    "Chobốnđườngcongđượckíhiệulà\\left({{C}_{1}}\\right),\\left({{C}_{2}}\\right),\\left({{C}_{3}}\\right)và\\left({{C}_{4}}\\right)nhưhìnhvẽbên.Hàmsốy={{\\log}_{2}}xcóđồthịlàđườngcong",
    "\\left({{C}_{3}}\\right).",
    "Tậpxácđịnh\\text{D}củahàmsốy={{\\left({{x}^{3}}-27\\right)}^{\\frac{\\pi}{2}}}là",
    "\\text{D}=\\left(3;+\\infty\\right).",
    "TrongkhônggianvớihệtrụctọađộOxyz,chohaimặtphẳng\\left(\\alpha\\right):x-2y+z-1=0,\\left(\\beta\\right):2x+y-z=0vàđiểmA\\left(1;\\,2;\\,-1\\right).Đườngthẳng\\DeltađiquaAvàsongsongvớicảhaimặtphẳng\\left(\\alpha\\right),\\left(\\beta\\right)cóphươngtrìnhlà",
    "\\frac{x-1}{1}=\\frac{y-2}{3}=\\frac{z+1}{5}.",
    "Có5cặpvợchồngcùngthamgiamộttròchơitrảinghiệm.Bantổchứcyêucầuchiahọthành5độiA,B,C,D,Esaochomỗiđộicó2ngườihoặclà1cặpvợchồnghoặccùnglànamhoặccùnglànữ.Hỏicóbaonhiêucáchchiađội?",
    "6720.",
    "ChotứdiệnđềuABCDcócạnhbằng1.ThểtíchcủakhốinónnộitiếptứdiệnABCDbằng",
    "V=\\frac{\\pi\\sqrt{6}}{108}.",
    "ChohìnhchópS.ABCcóđáylàtamgiácABCvuôngtạiB,cạnhbênSAvuônggócvớiđáy\\left(ABC\\right),AB=a,\\,\\,SA=2a.GọiM,NlầnlượtlàtrungđiểmcủaSB,\\,SC.Côsincủagócgiữahaimặtphẳng(AMN)và(ABC)bằng",
    "\\frac{\\sqrt{5}}{5}.",
    "Cho(H)làhìnhphẳnggiớihạnbởicácđườngy=-\\sqrt{x},\\,y=xvàx=2.ThểtíchVcủakhốitrònxoaytạothànhkhiquay(H)xungquanhtrụcOxbằngbaonhiêu?",
    "V=\\frac{17\\pi}{6}.",
    "TrongkhônggianvớihệtoạđộOxyz,mặtcầu\\left(S\\right):3{{x}^{2}}+3{{y}^{2}}+3{{z}^{2}}-6x+12y+2=0cóđườngkínhbằng",
    "\\frac{2\\sqrt{39}}{3}.",
    "Kíhiệua,blầnlượtlàphầnthựcvàphầnảocủasốphứcz=3-2\\sqrt{2}i.GiátrịcủabiểuthứcP=abbằng",
    "-6\\sqrt{2}.",
    "MộttrongbốnhàmsốchotrongcácphươngánA,B,C,DsauđâycóđồthịnhưhìnhvẽHỏihàmsốđólàhàmsốnào?",
    "y={{x}^{3}}-3{{x}^{2}}+1.",
    "Mộtvậtchuyểnđộngtheoquyluậts=-\\frac{1}{2}{{t}^{3}}+3{{t}^{2}}+20vớit(giây)làkhoảngthờigiantínhtừkhivậtbắtđầuchuyểnđộngvàs(mét)làquãngđườngvậtdichuyểnđượctrongkhoảngthờigianđó.Quãngđườngvậtđiđượctínhtừlúcbắtđầuchuyểnđộngđếnlúcvậtđạtvậntốclớnnhấtbằng",
    "28m.",
    "Chohàmsốy=f\\left(x\\right)liêntụctrên\\mathbb{R}thỏamãnđiềukiện3f\\left(x\\right)-f\\left(-x\\right)=\\frac{1}{\\sqrt{{{x}^{2}}+3}}\\cdotTíchphân\\,\\int\\limits_{-1}^{1}{f\\left(x\\right)\\text{d}x}bằng",
    "\\frac{\\ln3}{2}\\cdot",
    "Xéttamthứcbậchaif\\left(x\\right)=a{{x}^{2}}+bx+c,vớia,b,c\\in\\mathbb{R},thoảmãnđiềukiện\\left|f\\left(x\\right)\\right|\\le1,vớimọix\\in\\left[-1;1\\right].Gọimlàsốnguyêndươngnhỏnhấtsaocho\\underset{x\\in\\left[-2;2\\right]}{\\mathop{\\max}}\\,f\\left(x\\right)\\lem.Khiđómbằng",
    "7.",
    "Bấtphươngtrìnhcónghiệmlà",
    "\\frac{844}{15}\\pi.",
    "ChotứdiệnABCDcóBC=BD=AC=AD=1,\\left(ACD\\right)\\bot\\left(BCD\\right)và\\left(ABD\\right)\\bot\\left(ABC\\right).ThểtíchcủatứdiệnABCDbằng",
    "\\frac{2\\sqrt{3}}{27}.",
    "Chodãysố\\left({{u}_{n}}\\right),\\,\\,n\\in{{\\mathbb{N}}^{*}},thoảmãnđiềukiệnGọilàtổngcủansốhạngđầutiêncủadãysốđãcho.Khiđó\\lim{{S}_{n}}bằng",
    "\\frac{5}{2}.",
    "AnhAnmuamộtchiếcxemáytheohìnhthứctrảgóp.AnhAnsẽtrảtiềnmuaxetheobốnđợt,mỗiđợtcáchnhaumộtnămvàthờiđiểmtrảtiềnđợtđầulàmộtnămsaungàymuaxe.Sốtiềnthanhtoánmỗiđợtlầnlượtlà:5.000.000đồng,6.000.000đồng,10.000.000đồngvà20.000.000đồng.BiếtlãisuấtápdụngtheohìnhthứcmuaxecủaanhAnlà8%/năm.HỏichiếcxemáyanhAnmuacógiátrịlàbaonhiêutiền?",
    "32\\,\\,412\\582đồng.",
    "Chobiếthệsốcủa{{x}^{2}}trongkhaitriển{{\\left(1+2x\\right)}^{n}}\\,,\\,\\,n\\in{{\\mathbb{N}}^{*}},bằng180.Khiđónbằng",
    "10.",
    "Gọi{{z}_{1}},\\text{}{{z}_{2}}làhainghiệmphứccủaphươngtrình{{z}^{2}}-z+1=0.GiátrịcủabiểuthứcP=\\left|{{z}_{1}}\\right|+\\left|{{z}_{2}}\\right|bằng",
    "2.",
    "TrongkhônggianvớihệtọađộOxyz,chođiểmA\\left(1;-2;3\\right).TọađộđiểmBđốixứngvớiđiểmAquamặtphẳng\\left(Oxy\\right)là",
    "\\left(1;-2;-3\\right).",
    "Chohàmsốy=f\\left(x\\right)xácđịnhtrênnửakhoảng\\left[-1;3\\right)cóbảngbiếnthiênnhưhìnhvẽKhẳngđịnhnàosauđâyđúng?",
    "\\underset{x\\in\\left[-1;3\\right)}{\\mathop{\\min}}\\,f\\left(x\\right)=-2."
];
cauHoi = document.getElementsByClassName("col-md-11 col-10 question-box-title");
var buttons = document.querySelectorAll('input[type="radio"]');
pickCount = 0;

if (ec(pw) == atob("IT49PW9sXVttbi9uY2NpL2k/JWFkK3M=")) {
    document.getElementsByTagName("h1")[0].insertAdjacentHTML("beforebegin", "<div id='hack' style='text-align: center;'>LAUNCHING...</div><div id='myProgress' style='width: 100%;background-color: #d8f0de;'><div id='myBar' style='width: 1%;height: 30px;background-color: green;'></div></div><div style='text-align: center;'>AUTOBOT CREATED BY QUAN WITH LUV :D</div><div style='text-align: center;'><img src='https://image.flaticon.com/icons/svg/3076/3076339.svg' alt='heck' width='80' height='70'></div><div>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div><br>");
    var i = 0;

    function move() {
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);

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
	document.getElementById('hack').innerText = "DONE!!!";
        alert("Ấn OK để chọn " + pickCount + "/" + cauHoi.length + " câu (" +
            10 / cauHoi.length + " điểm 1 câu), " + (cauHoi.length - pickCount) + " câu bị lỗi, các câu đúng đã được chọn, bạn có thể chọn lại để điểm thấp hơn.");
    }, 7500);
} else {
    alert("Sai mật khẩu, code hông chạy được, sorry :((, đi tìm mật khẩu đi rồi chạy lại code nha.");
}
