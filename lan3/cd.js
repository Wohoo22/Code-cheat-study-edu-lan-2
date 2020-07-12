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
    "Mộttrongnhữngnộidungcủaquyềnđượcpháttriểnlàmọicôngdânđềuđược",
    "khuyếnkhíchpháttriểntàinăng.",
    "Theoquyđịnhcủaphápluật,khôngaiđượcvàochỗởcủangườikhácnếukhông",
    "đượcngườiđóđồngý.",
    "Mụcđíchcủaviệcápdụngtráchnhiệmpháplílànhằmbuộccácchủthểviphạmphápluậtphảichấmdứtmọi",
    "hànhvitráiphápluật.",
    "Mộttrongnhữngnộidungcủaquyềnhọctậplàmọicôngdânđềuđược",
    "họckhônghạnchế.",
    "Trongquanhệlaođộngcụthể,quyềnbìnhđẳngcủacôngdânđượcthựchiệnqua",
    "hợpđồnglaođộng.",
    "Quyluậtgiátrịyêucầu,trênthịtrườngviệctraođổihànghóaphảidựatrêncơsở",
    "thờigianlaođộngxãhộicầnthiết.",
    "Sảnphẩmcủalaođộngcóthểthỏamãnnhucầunàođócủaconngườithôngquatraođổi,muabángọilà",
    "hànghóa.",
    "Viphạmhànhchínhlàhànhviviphạmphápluậtcómứcđộnguyhiểmchoxãhộithấphơntộiphạm,xâmphạmcácquytắc",
    "quảnlínhànước.",
    "Mộttrongnhữngnộidungcủaquyềnbìnhđẳngtrongkinhdoanhlàmọidoanhnghiệpđềuđược",
    "mởrộngquymô.",
    "Bìnhđẳngtronghônnhânvàgiađìnhđượchiểulàbìnhđẳngvềquyềnvànghĩavụgiữacácthànhviêntronggiađìnhtrêncơsởnguyêntắc",
    "dânchủ.",
    "Nhằmkhôiphụcquyềnvàlợiíchhợpphápcủacánhân,tổchứcđãbịxâmphạmbởiquyếtđịnhhànhchính,hànhvihànhchínhlàmụcđíchcủa",
    "khiếunại.",
    "Theoquyđịnhcủaphápluật,việcbắtngườitrongtrườnghợpkhẩncấpđượctiếnhànhkhithấychỗởcủangườinàođócósựlẩntrốncủa",
    "tộiphạmđặcbiệtnghiêmtrọng.",
    "Thihànhphápluậtlàcáccánhân,tổchứcthựchiệnđầyđủnghĩavụ,chủđộnglàmnhữnggìmà",
    "phápluậtquyđịnhphảilàm.",
    "NhândânđượcthảoluậnvàbiểuquyếtcácvấnđềtrọngđạikhiNhànướctổchứctrưngcầuýdânlàthểhiệnquyền",
    "thamgiaquảnlínhànước.",
    "Bấtkìcôngdânnàoviphạmphápluậtđềuphải",
    "chịutráchnhiệmpháplí.",
    "Quyềnứngcửcủacôngdânđượcthựchiệnbằngconđườngnàosauđây?",
    "Tựứngcửhoặcđượcgiớithiệuứngcử.",
    "Cầulàkhốilượnghànghóa,dịchvụmàngườitiêudùngcầnmuatrongmộtthờikỳnhấtđịnhtươngứngvớigiácảvà",
    "thunhậpxácđịnh.",
    "Toànbộnhữngnănglựcthểchấtvàtinhthầncủaconngườiđượcvậndụngvàoquátrìnhsảnxuấtgọilà",
    "sứclaođộng.",
    "Khithựchiệnhoạtđộngkinhdoanh,mọicôngdânphải",
    "thựchiệnnghĩavụđóngthuế.",
    "Cốýđánhngườigâythươngtíchlàcôngdânviphạmquyềnđượcphápluậtbảohộvề",
    "tínhmạng,sứckhỏe.",
    "Theoquyđịnhcủaphápluật,côngdânđượcquyềntốcáokhipháthiệnngườinàođóđang",
    "kíchđộngbiểutìnhtráiphép.",
    "Nộidungquyềnsángtạokhôngthểhiệnởviệccôngdân",
    "tựmìnhkýkếthợpđồnglaođộng.",
    "Côngdânviphạmquyềnđượcphápluậtbảohộvềdanhdự,nhânphẩmkhicốýthựchiệnhànhvinàosauđây?",
    "Xúcphạmđồngnghiệp.",
    "Côngdâncóđủnănglựctráchnhiệmpháplí,thihànhphápluậtkhithựchiệnhànhvinàosauđây?",
    "Tốgiáctộiphạmtruynã.",
    "Lựclượngchứcnăngviphạmquyềnđượcphápluậtbảohộvềtínhmạng,sứckhỏecủacôngdânkhithựchiệnhànhvinàosauđây?",
    "Tratấn,épcung.",
    "Theoquyđịnhcủaphápluật,tạithờiđiểmtổchứcbầucử,cửtrikhôngviphạmnguyêntắcbầucửkhi",
    "độclậplựachọnứngcửviên.",
    "Mọidoanhnghiệpđềubìnhđẳngvềquyềnkhithựchiệnhànhvinàosauđây?",
    "Tựchủđăngkíkinhdoanh.",
    "Buộccácchủthểviphạmphápluậtphảichấmdứthànhvitráiphápluậtlàmộttrongnhữngmụcđíchcủa",
    "tráchnhiệmpháplí.",
    "Ngườisửdụnglaođộngđượcđơnphươngchấmdứthợpđồnglaođộngvớingườilaođộngkhidoanhnghiệp",
    "gặpthiêntai,hỏahoạn.",
    "Nhânviênbưuđiệnviphạmphápluậtdânsựkhithựchiệnhànhvinàosauđây?",
    "Giaobưuphẩmchậmthờihạn.",
    "ChủtịchhuyệnXlàôngTđãkýquyếtđịnhđiềuđộngcánbộytếnhằmhỗtrợviệcphòng,chốnglâynhiễmdịchbệnhởmộtsốđịabànkhókhăn.ÔngTđãthựchiệnphápluậttheohìnhthứcnàosauđây?",
    "Ápdụngphápluật.",
    "ChủmộtcửahàngkinhdoanhthuốctândượclàanhAđãbímậtbánkhẩutrangytếchưađượckiểmđịnhchochịB.VìchịBtốcáoviệcanhAcốýkhôngđổihàngchokháchnênanhAbịcơquanchứcnănglậpbiênbảnxửphạtđồngthờibuộcanhphảihoàntrảlạitiềnchochịB.AnhAđãphảichịutráchnhiệmpháplínàosauđây?",
    "Hànhchínhvàdânsự.",
    "DoanhnghiệpXthôngbáotuyểndụngnhânviêntưvấnkháchhàng,cácanhA,BvàchịCcùngnộphồsơdựtuyển.DùlànữgiớinhưngchịCvẫnđượcdoanhnghiệpXtiếpnhậnvìchịcókếtquảthituyểncaohơn.Bứcxúc,anhAvàanhBđòilạihồsơcùnglệphítuyểndụng,đồngthờiđăngthôngtinhạthấpuytíndoanhnghiệpX.CácanhA,Bđãhiểuchưađúngnộidungnàosauđâycủaquyềnbìnhđẳngtronglaođộng?",
    "Bìnhđẳngvềcơhộitiếpcậnviệclàm.",
    "Trongcuộchọptổdânphố,ôngBnêuýkiếnvềviệcôngnghingờchịChàngxómcủaôngđãgiandốitrongkhaibáodịchtễ.BàAhộitrưởnghộiphụnữyêucầuôngBcungcấpbằngchứngđểtránhgâymấtđoànkết,ôngBđãtựáibỏravề.ÔngBvàbàAđãcùngthựchiệnquyềnnàosauđâycủacôngdân?",
    "Tựdongônluận.",
    "SaukhibịôngBchủmộtxưởngsảnxuấtđồgỗđậppháxemáyvàđedọagiết,chịAhoảngloạntinhthầnphảinằmviệnđiềutrịdàingày.ÔngBđãviphạmphápluậtnàosauđây?",
    "Hìnhsựvàdânsự.",
    "AnhPđãbímậtdùngtiềnthưởngmuanhẫnkimcươnglàmquàcướichoemgái.Biếtchuyện,vợanhlàchịSđãxinđilàmtìnhnguyệnviêntạimộtcơsởcáchlyytếđểtránhmặtchồng.Saukhibiếtchuyện,doquábứcxúc,bàTlàmẹcủaanhPđãbịađặtthôngtinvềchịSvàđềnghịlãnhđạocơquanchịSđuổiviệcchị.AnhPvàbàTđãviphạmquyềnbìnhđẳngcủacôngdântronglĩnhvựcnàosauđây?",
    "Hônnhânvàgiađình.",
    "Trongthờigianởnhàmộtmình,chịPbịđốitượngtrốnlệnhtruynãtênMuyhiếpbuộcchịphảichohắnẩnnấptrongnhàchị.Sauđó,doghentuông,lạibịmẹđẻlàbàYxúigiục,anhKépchịPphảikívàođơnlyhôn.VìchịPkhôngđồngýđểanhKnuôicon,anhKnhờbạnthânlàanhXghépảnhphảncảmnhằmhạuytíncủavợtrênmạngxãhội.Nhữngaisauđâyviphạmnộidungquyềnbìnhđẳngtronghônnhânvàgiađình?",
    "AnhKvàbàY.",
    "PháthiệnchịHhàngxómbiếtmìnhsảnxuấtdungdịchsátkhuẩngiả,anhTrủanhKcùnganhMbắtcóccongáichịHđểuyhiếpdọachịphảigiữimlặng.Saukhiđượcthả,vìcongáihoảngloạntinhthầnphảiđiềutrịtạibệnhviệnnênchồngchịHlàanhBđãxôngvàonhàanhTđậpphánhiềutàisảncógiátrị.Nhữngaisauđâykhôngviphạmquyềnđượcphápluậtbảohộvềtínhmạng,sứckhỏecủacôngdân?",
    "ChịHvàanhB.",
    "AnhAnghingờchịBtungtinhạthấpuytíncủamìnhnênnhờanhDtưvấncáchgiảiquyết.Dođangcầntiềntrảnợ,anhDđedọatốngtiềnnênchịBđãbuộcphảigiao10triệuđồngchoanhD.Pháthiệnsựviệc,chồngchịBlàanhMđãđónđườngdùngvũlựcépanhDphảiđưaxemôtôchoanh.Nhữngaisauđâyviphạmphápluậthìnhsự?",
    "CácanhDvàM.",
    "CácanhM,N,QcùnglàcôngnhânđangthựchiệncáchlyxãhộidodịchCovid–19.KhianhN,QđếnnhàanhMchúcmừngsinhnhậtbạn,chịPvợanhMđãtừchốiđóntiếp.ThấyanhQtựáibỏvề,anhMrủanhNracôngviênuốngrượu.BịanhXcánbộdânphòngphêphán,anhMđãđẩyđổxevàlàmvỡgươngxemáycủaanhX,sauđóanhNnémvỡhaibóngđèntrangtrítạicửahàngcủavợanhXđểtrảthù.Nhữngaisauđâyđồngthờiphảichịutráchnhiệmhànhchínhvàdânsự?",
    "AnhMvàanhN."
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
