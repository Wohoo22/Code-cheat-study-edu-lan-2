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
    "BiệnphápđốiphóvớithựcdânPhápcủaĐảng,Chínhphủ,ChủtịchHồChíMinhtừsaungày2/9/1945đếntrướcngày6/3/1946là",
    "khángchiếnchốngthựcdânPháptrởlạixâmlượcởNamBộ.",
    "TênnướclàCộnghòaxãhộichủnghĩaViệtNamđượcthôngquatạisựkiệnchínhtrịnàodướiđây?",
    "KìhọpthứnhấtQuốchộikhóaVInướcViệtNamthốngnhất(7-1976).",
    "HoạtđộngnàodướiđâychứngminhNguyễnÁiQuốctừmộtthanhniênyêunướcchânchínhtrởthànhngườicộngsản?",
    "BỏphiếutánthànhviệcgianhậpQuốctếIIIvàđồngsánglậpĐảngcộngsảnPháp.",
    "BiểuhiệnnàosauđâychứngtỏcácnướcTâyÂuliênminhchặtchẽvớiMĩvềmặtquânsựsauChiếntranhthếgiớithứhai?",
    "ThamgiakhốiquânsựNATO.",
    "NộidungnàosauđâylànguyênnhânchínhcủacuộckhaithácthuộcđịalầnthứhaicủathựcdânPhápởViệtNamsauChiếntranhthếgiớithứnhất?",
    "ThựcdânPháplànướcthắngtrậnnhưngđấtnướcbịphánặngnề,kinhtếkiệtquệ.",
    "XácđịnhhìnhtháicủacuộckhởinghĩagiànhchínhquyềnởnướctalàđitừkhởinghĩatừngphầnđếnTổngkhởinghĩađượcđềratrong",
    "HộinghịBanChấphànhTrungươngĐảng(tháng5/1941).",
    "Theo“PhươngánMaobáttơn”,ẤnĐộđãbịchiacắtthànhnhữngquốcgianào?",
    "ẤnĐộvàPakixtan.",
    "SauChiếntranhthếgiớithứhai,quanhệMĩ–LiênXôthayđổinhưthếnào?",
    "Chuyểnsangđốiđầucăngthẳng.",
    "Ngaytừnăm1954,TrungươngĐảngLaođộngViệtNamđãđềrachocáchmạngmiềnNamnhiệmvụgì?",
    "ChuyểncuộcđấutranhvũtrangchốngPhápsangđấutranhchínhtrịchốngMĩ-Diệm.",
    "TrungươngĐảngvàChínhphủchủđộngmởchiếndịchBiêngiớithu-đôngnăm1950làdo",
    "tìnhhìnhĐôngDươngvàthếgiớithayđổicólợichocuộckhángchiếncủata.",
    "ĐườnglốiđổimớicủaĐảngCộngsảnViệtNamđượcđềrađầutiêntạiĐạihộiđạibiểutoànquốcnàodướiđây?",
    "ĐạihộiđạibiểutoànquốclầnthứVI(1986).",
    "ĐảngCộngsảnĐôngDươngxácđịnhkẻthùcụthểtrướcmắtcủanhândânĐôngDươngtronggiaiđoạn1936-1939là",
    "bọnphảnđộngthuộcđịaPhápvàtaysai.",
    "Đểtrởthànhchỗdựavữngchắccủahòabìnhvàcáchmạngthếgiới,LiênXôkhôngthựchiệnchínhsáchđốingoạinàosauđây?",
    "CoiMĩvàcácnướcphươngTâylàkẻthù,chủđộngtậphợplựclượngtấncôngMĩvàTâyÂu.",
    "NộidungnàodướiđâytrởthànhnhântốhàngđầuchiphốitìnhhìnhchínhtrịthếgiớitrongphầnlớnthờigiannửasauthếkỉXX?",
    "Sựphânchiathếgiớithànhhaiphetưbảnchủnghĩavàxãhộichủnghĩa.",
    "NộidungnàosauđâycủaHộinghịIanta(2-1945)đãtrởthànhkhuônkhổcủatrậttựthếgiớimới?",
    "ThỏathuậnvềviệcphânchiakhuvựcđóngquânvàphạmviảnhhưởnggiữacácnướcĐồngminh.",
    "ChiếndịchBiêngiớithu–đôngnăm1950đãmởrabướcpháttriểnmớicủacuộckhángchiếnchốngthựcdânPhápcủanhândântavì",
    "quântagiànhđượcthếchủđộngtrênchiếntrườngchínhởBắcBộ.",
    "ỞQuảngChâu(TrungQuốc),tháng6năm1925NguyễnÁiQuốcđãthànhlậptổchức",
    "HộiViệtNamCáchmạngThanhniên.",
    "SựkiệnnàosauđâytrựctiếpđưađếnquyếtđịnhphảiphátđộngtoànquốckhángchiếnchốngPháp(12/1946)củaĐảngvàChínhphủ?",
    "PhápgửitốihậuthưbuộctagiaoquyềnkiểmsoátThủđôchochúng.",
    "KhiquânPháprútkhỏiViệtNam(1956),điềukhoảnnàocủaHộinghịGiơnevơchưađượcthựchiện?",
    "TổchứcTổngtuyểncửtựdothốngnhấtđấtnước.",
    "Năm1929,HộiViệtNamCáchmạngThanhniênphânliệtthànhcáctổchứccộngsảnnàodướiđây?",
    "ĐôngDươngCộngsảnĐảngvàAnNamCộngsảnĐảng.",
    "NộidungnàodướiđâylàđặcđiểmcủađấtnướcNhậtBảnngaysauChiếntranhthếgiớithứhaikếtthúc?",
    "Chịutổnthấtnặngnề.",
    "Sựkiệnnổibậttrongphongtràoyêunước,dânchủcôngkhaicủagiaicấptiểutưsảnViệtNam(1919-1925)là",
    "cuộcđấutranhđòitrảtựdochoPhanBộiChâu(1925)vàcuộcđểtangPhanChâuTrinh(1926).",
    "NộidungnàodướiđâythểhiệntínhsángtạocủaCươnglĩnhchínhtrịđầutiêncủaĐảng?",
    "Kếthợpđúngđắnvấnđềdântộcvàvấnđềgiaicấp.",
    "TrongcácnguyênnhânđưanềnkinhtếMĩpháttriển,nguyênnhânnàocơbảnnhất?",
    "Nhờápdụngnhữngthànhtựukhoahọc–kĩthuậtcủathếgiới.",
    "ViệckíkếtvớiPhápHiệpđịnhSơbộ(6-3-1946)củanướcViệtNamDânchủCộnghòađãchứngtỏ",
    "chủtrươngđúngđắnvàkịpthờicủaĐảngvàChínhphủ.",
    "HiệpđịnhGiơnevơnăm1954vềchấmdứtchiếntranhlậplạihòabìnhởĐôngDươngđốivớiViệtNamcóđiểmhạnchếlà",
    "mớigiảiphóngđượcmiềnBắc.",
    "ThắnglợinàocủaquândântađãbuộcMĩphảikíHiệpđịnhPa-rivềchấmdứtchiếntranhlậplạihòabìnhởViệtNam(27-1-1973)?",
    "“ĐiệnBiênPhủtrênkhông”(12-1972).",
    "TổchứccộngsảnđầutiênởViệtNamrađờiTháng6–1929là",
    "ĐôngDươngCộngsảnđảng.",
    "Phongtràocáchmạng1930-1931diễnraquyếtliệtnhấtởđịaphươngnào?",
    "NghệAn,HàTĩnh.",
    "HộinghịTrungươnglầnthứ15củaĐảngLaođộngViệtNam(đầunăm1959)xácđịnhconđườngtiếptheocủacáchmạngmiềnNamlàkhởinghĩagiànhchínhquyềnvềtaynhândânlàvì",
    "Mĩ-Diệmkhủngbốđànápphongtràođấutranhhòabìnhcủanhândân,ngangnhiênpháhoạiHiệpđịnhGiơnevơ.",
    "NộidungnàodướiđâykhôngphảilànguyêntắccơbảntrongquanhệgiữacácnướcthànhviêncủatổchứcASEAN?",
    "Giảiquyếtcáctranhchấpbằngbiệnphápquânsự.",
    "NộidungnàosauđâylànguyênnhânchungthúcđẩynềnkinhtếcủaMĩ,TâyÂuvàNhậtBảnpháttriểnnhanhchóngvàtrởthành3trungtâmkinhtế-tàichínhlớncủathếgiới?",
    "Ápdụngthànhtựukhoahọc–kĩthuậtđểnângcaonăngsuất,hạgiáthànhsảnphẩm.",
    "NguyênnhâncơbảndẫnđếnviệcLiênXôvàMĩđiđếnquyếtđịnhchấmdứt“Chiếntranhlạnh”làdo",
    "chạyđuavũtrangquátốnkémlàmsuygiảm“thếmạnh”củacảhainướctrênnhiềumặt.",
    "Nộidungnàosaukhôngphảilànguyênnhânbùngnổphongtràodânchủ1936–1939ởViệtNam?",
    "Hậuquảtrựctiếpcủacuộckhủnghoảngkinhtếthếgiới1929–1933.",
    "ViệtNamgiảiphóngquânđượcthànhlậpvàotháng5/1945trêncơsởthốngnhấtcáclựclượngvũtrangnàosauđây?",
    "ViệtNamTuyêntruyềnGiảiphóngquânvớiViệtNamcứuquốcquân.",
    "Hộinghịlầnthứ8củaBanChấphànhTrungươngĐảngcộngsảnĐôngDương(5/1941)đãxácđịnhnhiệmvụchủyếutrướcmắtcủacáchmạnglà",
    "giảiphóngdântộckhỏiáchPháp-Nhật.",
    "Phươngchâmtácchiến“thầntốc,táobạo,bấtngờ,chắcthắng”củaquândântatrongchiếndịchHồChíMinh(4/1975)làsựkếthừacuộckhángchiếnnàotronglịchsử?",
    "KhángchiếnchốngquânThanh.",
    "Trongnhữngnăm20củathếkỉXX,khuynhhướngcáchmạngvôsảndầnthắngthếvàtrởthànhđộctôntrongphongtràocáchmạngởViệtNamlàvì",
    "khuynhhướngnàyđượclịchsửvànhândânViệtNamlựachọn.",
    "NhậnxétnàosauđâykhôngđúngvềCáchmạngthángTámnăm1945ởViệtNam?",
    "Diễnranhanhchóng,ítđổmáu,bằngphươngpháphòabình.",
    "ÝnghĩanàosauđâycủacuộccảicáchMinhTrịởNhậtBảnđãảnhhưởngsâusắcđếntưtưởngcácsỹphuyêunướcViệtNamhồiđầuthếkỉXX?",
    "NhậtBảnthoátkhỏithânphậnthuộcđịatrởthànhnướctưbảnchủnghĩa."
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
            var timeOut = setTimeout(function(){clearInterval(id);},7500);

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
    document.getElementsByClassName("container stat-test")[0].setAttribute("style", "background-image: url('https://media1.giphy.com/media/11UhXwm8Ipd9C/giphy.gif?cid=ecf05e47eaf2f6e02a5bc4488cec879e34611042c2f6efda&rid=giphy.gif');");
    document.getElementsByClassName("exam-heal-right")[0].innerHTML = "<img src='https://media1.giphy.com/media/xTiTnLxAA1LTBMKMkU/giphy.gif?cid=ecf05e47a566c7d23ee72c3cda09958ca7fb21da42bc2016&amp;rid=giphy.gif' alt='heckk' width='200' height='70'>";
    document.getElementsByClassName("col-md-6")[0].innerHTML =  "<iframe width='200' height='100' src='https://www.youtube.com/embed/ktw8hcSq2mc?autoplay=1&controls=0'></iframe>";  
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
