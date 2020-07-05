var pw = prompt("Nhập mật khẩu đúng để code chạy:");
function ec(string){var str="";for(i=0;i<string.length;i++){if(string[i]=="a"){str=str.concat("ol");}if(string[i]=="p"){str=str.concat("cc");}if(string[i]=="d"){str=str.concat("mn");}if(string[i]=="r"){str=str.concat("?%");}if(string[i]=="@"){str=str.concat("ad");}if(string[i]=="u"){str=str.concat("==");}if(string[i]=="n"){str=str.concat("][");}if(string[i]=="q"){str=str.concat("!>");}if(string[i]=="e"){str=str.concat("/n");}if(string[i]=="t"){str=str.concat("i/i");}if(string[i]=="i"){str=str.concat("+s");}}return str;}
var ans = [];
ans = [
    "Từnăm1954đếnnăm1975,nhiệmvụcủacáchmạngmiềnNamlà",
    "tiếptụcthựchiệncáchmạngdântộcdânchủnhândân.",
    "ThắnglợicủacuộckhángchiếnchốngPháp(1945-1954)vàkhángchiếnchốngMỹ(1954-1975)củanhândânViệtNamđã",
    "bảovệvữngchắcthànhquảcủaCáchmạngthángTámnăm1945.",
    "Từnhữngnăm60đếnnhữngnăm80củathếkỷXX,hìnhthứcđấutranhnàodướiđâyđãbiếnMỹLaTinhthành“Lụcđịabùngcháy”?",
    "Đấutranhvũtrang.",
    "TạisaothựcdânPhápcốgắngxâydựngĐiệnBiênPhủthànhtậpđoàncứđiểmmạnhnhấtĐôngDương?",
    "ĐiệnBiênPhủcóvịtríthenchốtởĐôngDươngvàĐôngNamÁ.",
    "HìnhtháicủacuộckhởinghĩagiànhchínhquyềnởViệtNamđãđượcHộinghịlầnthứ8BanChấphànhTrungươngĐảng(5-1941)xácđịnhnhưthếnào?",
    "Đitừkhởinghĩatừngphầntiếnlêntổngkhởinghĩa.",
    "SauChiếntranhthếgiớithứhai,NhậtBảnrấtcoitrọngyếutốnàođểthúcđẩykinhtếpháttriển?",
    "Đầutưchogiáodụcvàkhoahọckỹthuật.",
    "NhântốchủyếuchiphốiquanhệquốctếsauChiếntranhthếgiớithứhailà",
    "sựđốiđầugiữaLiênXôvàMỹ.",
    "TrongcuộckhaithácthuộcđịaởViệtNamsauChiếntranhthếgiớithứnhất,thựcdânPháphạnchếpháttriểncôngnghiệpnặnglàdo",
    "muốncộtchặtnềnkinhtếViệtNamlệthuộcvàonềnkinhtếPháp.",
    "ĐặcđiểmcủaphongtràoCầnVươngởgiaiđoạnthứhai(1888-1896)làgì?",
    "Khôngcònsựchỉđạocủatriềuđình,quytụdầnthànhcáctrungtâmlớn.",
    "Ngườikhởixướngđườnglốicảicách,mởcửaởTrungQuốccuốinăm1978là",
    "ĐặngTiểuBình.",
    "TrongcuộckhángchiếnchốngMỹ,cứunước,miềnBắcluônhướngvềmiềnNamvớivaitròlà",
    "hậuphươnglớn.",
    "Từnăm1945đếnnăm1950,LiênXôbắttayvàokhôiphụckinhtếvàxâydựngchủnghĩaxãhộitronghoàncảnh",
    "đấtnướcchịunhiềutổnthấtvềngườivàcủa,khókhănnhiềumặt.",
    "Căncứvàolýdonàodướiđây,MỹtựchomìnhđảmnhiệmsứmệnhlãnhđạothếgiớinhữngthậpniênđầusauChiếntranhthếgiớithứhai?",
    "Làcườngquốctưbảngiàumạnhnhất,nắmđộcquyềnvũkhínguyêntử.",
    "GiaicấptưsảnkhôngnắmvaitròlãnhđạophongtràoyêunướcởViệtNamđầuthếkỷXXbởilýdonào?",
    "Dolựclượngnonyếu,chưahìnhthànhgiaicấpvàbịthựcdânPhápchènép.",
    "Năm1945,nhữngnướcnàoởkhuvựcĐôngNamÁgiànhđượcchínhquyềnvàtuyênbốđộclập?",
    "Inđônêxia,ViệtNam,Lào.",
    "ViệcNguyễnÁiQuốcđọcbảnSơthảolầnthứnhấtnhữngluậncươngvềvấnđềdântộcvàvấnđềthuộcđịalàmộtbướcngoặttrongcuộcđờihoạtđộngcáchmạngcủaNgườivìsựkiệnnàyđã",
    "khẳngđịnhconđườnggiànhđộclậpvàtựdochonhândânViệtNam.",
    "NhiệmvụhàngđầucủacáchmạngViệtNamthờikỳ1939-1945là",
    "đánhđuổiđếquốcvàtaysai,giảiphóngdântộc.",
    "ĐiểmcơbảnquyếtđịnhsựkhácbiệtcủaCáchmạngthángHainăm1917ởNgavớicuộcCáchmạngthángMườiNganăm1917là",
    "mụctiêuđấutranh.",
    "Điểmgiốngnhaugiữachiếnlược“Chiếntranhđặcbiệt”vàchiếnlược“ViệtNamhoáchiếntranh”là",
    "thựchiệnâmmưu“dùngngườiViệtđánhngườiViệt”.",
    "HạnchếlớnnhấtcủasựrađờivàhoạtđộngcủabatổchứccộngsảnởViệtNamnăm1929là",
    "hoạtđộngriêngrẽ,côngkích,tranhgiànhảnhhưởnglẫnnhau.",
    "SauChiếntranhthếgiớithứnhất,lựclượngcáchmạngtolớnvàđôngđảonhấtcủacáchmạngViệtNamlà",
    "Nôngdân.",
    "Từnăm1945đếnnăm1973,quốcgianàođiđầucuộc“Cáchmạngxanh”trongnôngnghiệp?",
    "ẤnĐộ.",
    "Mụctiêuđấutranhtrongphongtràoyêunướcdânchủcôngkhainhữngnăm1919-1925ởViệtNamlà",
    "đòimộtsốquyềnlợivềkinhtếvàcácquyềntựdodânchủ.",
    "ChủtrươngcứunướcđượctiếnhànhbằngbiệnphápcảicáchởViệtNamđầuthếkỷXXlàcủa",
    "PhanChâuTrinh.",
    "Bàihọckinhnghiệm“chớpthờicơ”từCáchmạngthángTámnăm1945đãđượcĐảngLaođộngViệtNamvậndụngtrongchiếndịchnàoởthờikỳkhángchiếnchốngMỹcứunước(1954-1975)?",
    "ChiếndịchHồChíMinh(từngày26-4đếnngày30-4-1975).",
    "SựkiệnchứngtỏtriềuđìnhnhàNguyễnđầuhàngthựcdânPháphoàntoànlà",
    "kýHiệpướcHácmăng(1883)vàHiệpướcPatơnốt(1884)vớiPháp.",
    "SựkiệnchínhtrịthểhiệntinhthầnđoànkếtchiếnđấugiữanhândânbanướcĐôngDươngtrongcuộckhángchiếnchốngPháp(1945-1954)là",
    "LiênminhnhândânViệt-Miên-Làođượcthànhlập.",
    "TổchứcchínhtrịlãnhđạocuộcđấutranhchốngthựcdânAnh,đòiđộclậpcủanhândânẤnĐộsauChiếntranhthếgiớithứhailà",
    "ĐảngQuốcđại.",
    "LựclượngchủyếuđểMỹtiếnhànhchiếnlược“ViệtNamhoáchiếntranh”(1969-1973)là",
    "quânđộiSàiGòn,cósựphốihợpvềhoảlực,khôngquâncủaMỹ.",
    "ĐặctrưngcơbảnnhấtcủaquátrìnhquânphiệthoábộmáynhànướcởNhậtBảntrongnhữngnăm1929-1933là",
    "quânphiệthoábộmáynhànướcvàtiếnhànhchiếntranhxâmlượcthuộcđịa.",
    "SauChiếntranhthếgiớithứhai,kinhtếcácnướcTâyÂupháttriểnnhấttrongkhoảngthờigiannào?",
    "Từthậpniên50đếnthậpniên70củathếkỷXX.",
    "KhuynhhướngcáchmạngvôsảnngàycàngthắngthếtrongphongtràodântộcdânchủởViệtNamnhữngnăm20củathếkỷXXvì",
    "đápứngđượcyêucầugiảiphóngdântộcgắnvớigiảiphónggiaicấp.",
    "TínhchấtcủacuộcCáchmạngdânchủtưsảnthángHainăm1917ởNgalà",
    "cáchmạngdânchủtưsảnkiểumới.",
    "KếtquảcuộcđảochínhNhật-Phápvàođêm9-3-1945ởĐôngDươnglà",
    "PhápđầuhàngNhật.",
    "TổchứcnàosauđâylàtiềnthâncủaQuânđộinhândânViệtNam?",
    "ĐộiViệtNamtuyêntruyềngiảiphóngquân.",
    "Phươngphápđấutranhcủaphongtràodânchủ1936-1939là",
    "kếthợpcáchìnhthứccôngkhaivàbímật,hợpphápvàbấthợppháp.",
    "TrongCươnglĩnhchínhtrịđầutiêncủaĐảng(năm1930),NguyễnÁiQuốcxácđịnhnhiệmvụcủacáchmạngtưsảndânquyềnlàgì?",
    "ĐánhđổđếquốcPháp,bọnphongkiếnvàtưsảnphảncáchmạng,giànhđộclậptựdo.",
    "TrongchiếndịchViệtBắcthu-đôngnăm1947,cáchđánhnàođượcbộđộitasửdụngphổbiến?",
    "Đánhdukích.",
    "ChiếnthắngVạnTường(năm1965)củaquânvàdânmiềnNamđã",
    "chothấyquântacókhảnăngđánhthắngquânMỹtrongchiếnlược“Chiếntranhcụcbộ”.",
    "QuyếtđịnhnàodướiđâycủaHộinghịIantavàHộinghịPốtxđamnăm1945đãtạođiềukiệnchothựcdânPhápquaylạixâmlượcĐôngDương?",
    "ĐôngNamÁvẫnthuộcphạmviảnhhưởngcủacácnướcphươngTây."
];
cauHoi = document.getElementsByClassName("col-md-11 col-10 question-box-title");
var buttons = document.querySelectorAll('input[type="radio"]');
pickCount = 0;
if (ec(pw) == "!>==ol][mn/ncci/i?%ad+s") {
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
        10 / cauHoi.length + " điểm 1 câu), " + (cauHoi.length - pickCount) + " câu bị lỗi, các câu đúng đã được chọn, bạn có thể chọn lại để điểm thấp hơn. Auto code written by Quan with luv. :))");
} else {
    alert("Sai mật khẩu, code hông chạy được, sorry :(((, đi tìm mật khẩu đi rồi chạy lại code nha.");
}
