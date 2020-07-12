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
    "Genngoàinhân(gentếbàochất)củatếbàothựcvậtcóởbàoquannàosauđây?",
    "Lụclạp.",
    "Tronghệsinhtháirừngmưanhiệtđới,sinhvậtnàosauđâyđóngvaitròtruyềnnănglượngtừmôitrườngvôsinhvàoquầnxãsinhvật?",
    "Sinhvậtsảnxuất.",
    "Trongdạmúikhếcủađộngvậtnhailạidiễnrahoạtđộngnàosauđây?",
    "TiếtrapepsinvàHClđểtiêuhóaprôtêincóởvisinhvậtvàcỏ.",
    "Mốiquanhệdinhdưỡnggiữacácloàitrongmộthệsinhtháiđượcmôtảbằnglướithứcănởhìnhbên.Tronglướithứcănnàycóbaonhiêuloàivừacónguồnthứcănlàmắtxíchphíatrướcvừalànguồnthứcăncủamắtxíchphíasau?",
    "4.",
    "Magiêcóvaitrògìđốivớithựcvật?",
    "Làthànhphầncủadiệplục,hoạthoáenzim.",
    "Theothuyếttiếnhóahiệnđại,nhântốnàosauđâytạonguyênliệusơcấpchoquátrìnhtiếnhóa?",
    "Độtbiến.",
    "Cóbaonhiêubiệnphápsauđâycủaconngườigópphầnvàoviệcsửdụngbềnvữngtàinguyênthiênnhiên?(I).Thựchiệncácbiệnphápchốngxóimònchođất.(II).Ngănchặnnạnphárừngđầunguồn.(III).Khaitháctàinguyênsinhvậtbiểnhợplíkếthợpvớibảovệmôitrường.(IV).Bảovệcácloàisinhvậtbiểnđangcónguycơtuyệtchủng.",
    "4.",
    "Khinóivềquátrìnhhìnhthànhloàimới,phátbiểunàosauđâyđúng?",
    "Ởnhữngloàisinhvậtlưỡngbộisinhsảnhữutính,nếuđộtbiếntựđabộilàmxuấthiệncácthểtambộicókhảnăngsinhsảnvôtínhthìcóthểdẫnđếnhìnhthànhloàimới.",
    "Điềukiệnđể2alencủa1cặpgenalenphânliđồngđềuvềcácgiaotửtrongquátrìnhgiảmphânlà",
    "quátrìnhgiảmphândiễnrabìnhthường.",
    "Khinóivềảnhhưởngcủacácyếutốngoạicảnhđếnquanghợpởthựcvật,phátbiểunàosauđâysai?",
    "Cácloạiánhsángnhântạokhôngảnhhưởngđếnquátrìnhquanghợpởthựcvật.",
    "ỞtimcủađộngvậtnàosauđâycósựphatrộngiữamáugiàuO2vàmáugiàuCO2?",
    "Ếchđồng.",
    "Dạngđộtbiếncấutrúcnhiễmsắcthểnàosauđâycóthểđượcvậndụngđểloạikhỏinhiễmsắcthểnhữnggenkhôngmongmuốn?",
    "Mấtđoạn.",
    "Quátrìnhgiảmphânởcơthểcókiểugennàosauđâytạoranhiềuloạigiaotửnhất?",
    "AaBb.",
    "Khinóivềảnhhưởngcủacácnhântốmôitrườngđếnhôhấpởthựcvật,phátbiểunàosauđâysai?",
    "Nhiệtđộcàngcaothìcườngđộhôhấpcàngcao.",
    "TheoĐacuyn,nguyênliệuchủyếucủaquátrìnhtiếnhóalà",
    "biếndịcáthể.",
    "Khinóivềkíchthướccủaquầnthểsinhvật,phátbiểunàosauđâykhôngđúng?",
    "Kíchthướcquầnthểlàkhoảngkhônggiancầnthiếtđểquầnthểtồntạivàpháttriển.",
    "LoạienzimnàosauđâythamgiavàoquátrìnhnhânđôiADN?",
    "Ligaza.",
    "Tronglịchsửpháttriểncủasinhgiớiquacácđạiđịachất,chimphátsinhởđạinào?",
    "Trungsinh.",
    "Khinóivềquầnxãsinhvật,phátbiểunàosauđâykhôngđúng?",
    "Quầnxãcàngđadạngvềthànhphầnloàithìlướithứcăncàngđơngiản.",
    "TrongquátrìnhnhânđôiADN,nuclêôtitloạitimincủamôitrườngnộibàoliênkếtvớiloạinuclêôtitnàocủamạchkhuôn?",
    "Ađênin.",
    "Mộttrongnhữngưuđiểmcủaphươngphápnuôicấymôởthựcvậtlà:",
    "Nhânnhanhcácgiốngcâytrồngquýhiếm,tạoracáccâyđồngnhấtvềkiểugen",
    "Chobiếtmỗigenquyđịnhmộttínhtrạng,cácalentrộilàtrộihoàntoàn.Theolíthuyết,cácphéplainàosauđâychođờiconcótỉlệphânlikiểugengiốngtỉlệphânlikiểuhình?",
    "AaBb×aabbvàAabb×aaBb.",
    "GenBởvikhuẩngồm1200cặpnuclêôtit,trongđócó20%timin.Theolíthuyết,gennàycóbaonhiêuxitôzin?",
    "720.",
    "PhéplaiP:XAXa×XAY.Theolíthuyết,F1cósốcáthểmangkiểugenXAXachiếmtỉlệ",
    "25%.",
    "Mộtloàithựcvật,alenAquiđịnhthâncaotrộihoàntoànsovớialenaquiđịnhthânthấp;alenBquiđịnhquảngọttrộihoàntoànsovớialenbquiđịnhquảchua.Chocâythâncao,quảngọt(P)tựthụphấn,thuđượcF1gồm4loạikiểuhình,trongđócó54%sốcâythâncao,quảngọt.Biếtrằngkhôngxảyrađộtbiến.Phátbiểunàosauđâyđúng?",
    "Trongsốcáccâythânthấp,quảngọtởF1,có3/7sốcâycókiểugenđồnghợptửvềcả2cặpgen.",
    "Mộtloàithựcvậtlưỡngbộisinhsảnhữutínhgồm12nhómgenliênkết.Dođộtbiến,trongloàinàyđãxuấthiệnthểmộtởtấtcảcáccặpnhiễmsắcthể.Cácthểmộtnàycó",
    "sốlượngNSTtrongtếbàolà23.",
    "Khinóivềhoạtđộngcủahệtuầnhoànởngười,cóbaonhiêuphátbiểusauđâyđúng?(I).Timđậpnhanhvàmạnhlàmhuyếtáptăng,timđậpchậmvàyếulàmhuyếtápgiảm.(II).Huyếtápcaonhấtởđộngmạch,thấpnhấtởmaomạchvàtăngdầnởtĩnhmạch.(III).Vậntốcmáuchậmnhấtởmaomạch.(IV).Tronghệđộngmạch,càngxatim,vậntốcmáucànggiảm.",
    "3.",
    "Tínhtrạngmàuhoado2cặpgenA,avàB,bphânliđộclậpcùngquyđịnh;kiểugencócảalenAvàBquyđịnhhoađỏ,cáckiểugencònlạiquyđịnhhoatrắng.Câyhoađỏcókiểugennàosauđây?",
    "AaBB.",
    "Quầnthểcócấutrúcditruyềnnàosauđâyđangđạttrạngtháicânbằngditruyền?",
    "0,25AA+0,5Aa+0,25aa=1.",
    "Càđộcdượccóbộnhiễmsắcthểlưỡngbội2n=24.Theolíthuyết,loàinàycótốiđabaonhiêudạngthểba?",
    "12.",
    "Chocâythâncao,hoađỏ(P)tựthụphấn,thuđượcF1gồm66%câythâncao,hoađỏ;9%câythâncao,hoatrắng,9%câythânthấp,hoađỏ;16%câythânthấp,hoatrắng.Biếtrằngmỗitínhtrạngđềudomộtgencóhaialenquyđịnh.Theolíthuyết,kếtluậnnàosauđâysai?",
    "Tầnsốhoánvịgenlà40%.",
    "Mạchthứnhấtcủa1phântửADNởvikhuẩncótỉlệA+GT+X=32A+GT+X=32vàmạchthứhaicótỉlệA+TG+X=14A+TG+X=14.TrongcácphátbiểusauđâyvềphântửADNnày,cóbaonhiêuphátbiểuđúng?(I).Mạch2củaphântửADNnàycótỉlệA+GT+X=32A+GT+X=32.(II).PhântửADNnàycótỉlệA+GT+X=1A+GT+X=1.‎(III).PhântửADNnàycótỉlệA+TG+X=74A+TG+X=74.(IV).Mạch1củaphântửADNnàycótỉlệA+TG+X=41A+TG+X=41.",
    "2.",
    "Ởmộtloàithú,alenAquyđịnhmắtđỏtrộihoàntoànsovớialenaquyđịnhmắttrắng;alenBquyđịnhlôngđentrộihoàntoànsovớialenbquyđịnhlôngtrắng.PhéplaiP:con♀mắtđỏ,lôngđen×con♂mắttrắng,lôngtrắng,thuđượcF1gồmtoàncáthểmắtđỏ,lôngđen.ChoF1giaophốivớinhau,thuđượcF2cótỉlệ50%con♀đỏ,lôngđen:20%con♂mắtđỏ,lôngđen:20%con♂mắttrắng,lôngtrắng:5%con♂mắtđỏ,lôngtrắng:5%con♂mắttrắng,lôngđen.Theolíthuyết,cóbaonhiêuphátbiểusauđâyđúng?(I).Cảhaitínhtrạngtrênđềuditruyềnliênkếtgiớitính.(II).Cáthể♀F1đãxảyrahoánvịgenvớitầnsố20%.(III).Nếuchocon♂F1laiphântích,thuđượcFacó12,5%con♀mắtđỏ,lôngđen.(IV).Nếuchocon♀F1laiphântích,thuđượcFacó20%con♂mắtđỏ,lôngđen.",
    "3.",
    "Mộtloàiđộngvật,xét2cặpgencùngnằmtrên1cặpnhiễmsắcthểthường;mỗigenquyđịnhmộttínhtrạng,mỗigenđềucó2alenvàcácalentrộilàtrộihoàntoàn.Biếtrằngkhôngxảyrađộtbiến.Theolíthuyết,cóbaonhiêudựđoánsauđâyđúng?(I).Laihaicáthểvớinhaucóthểthuđượcđờicongồmtoàncáthểdịhợptửvề1cặpgen.(II).Laihaicáthểvớinhaucóthểthuđượcđờiconcó5loạikiểugen.(III).Chocơthểdịhợptửvề2cặpgenlaivớicơthểdịhợptửvề1cặpgen,thuđượcđờiconcósốcáthểdịhợptửvề2cặpgenchiếm25%.(IV).Laihaicáthểvớinhaucóthểthuđượcđờiconcókiểuhìnhphânlitheotỉlệ3:1.",
    "3.",
    "Ởmộtloàithựcvật,alenAquyđịnhthâncaotrộihoàntoànsovớialenaquyđịnhthânthấp.PhéplaiP:câythâncao×câythânthấp,thuđượcF1cótỉlệkiểuhìnhlà50%câythâncao:50%câythânthấp.ChocáccâyF1giaophấnngẫunhiên,thuđượcF2.Theolíthuyết,ởF2cótỉlệkiểuhìnhlà",
    "7câythâncao:9câythânthấp.",
    "Trongcácphátbiểusauđâyvềcơchếditruyềnvàbiếndị,cóbaonhiêuphátbiểuđúng?(I).Khigenbịđộtbiếnthìchuỗipôlipeptittươngứngchắcchắnsẽbịbiếnđổi.(II).Cả3loạiARNđềuthamgiavàoquátrìnhdịchmã.(III).Độtbiếnthaythế1cặpnuclêôtitluônlàmthayđổi1axitamintrongchuỗipôlipeptittươngứng.(IV).Ởtếbàonhânsơ,sốlầnphiênmãcủamộtgenluônbằngsốlầnnhânđôicủagenđó.",
    "1.",
    "ỞngườialenAquyđịnhmắtnhìnmàubìnhthườngtrộihoàntoànsovớialenaquyđịnhbệnhmùmàuđỏ-xanhlục;AlenBquyđịnhmáuđôngbìnhthườngtrộihoàntoànsovớialenbquyđịnhbệnhmáukhóđông.HaigennàyđềunằmởvùngkhôngtươngđồngtrênnhiễmsắcthểgiớitínhX.Chophảhệsau:Chobiếtkhôngxảyrađộtbiếnvàcóthểcóhoánvịgen.Phântíchphảhệtrên,cóbaonhiêuphátbiểusauđâyđúng?(I).Xácđịnhđượctốiđakiểugencủa9ngườitrongphảhệ.(II).Ngườisố8khôngmangalengâybệnhcủacảhaigen.(III).Ngườisố9mangalenquyđịnhbệnhmùmàu.(IV).Ngườisố1cókiểugendịhợptửvề1cặpgen.",
    "2.",
    "Theolíthuyết,cóbaonhiêuphátbiểusauđâyđúng?(I).MộttếbàosinhtinhcókiểugenAaBbDdgiảmphânbìnhthườngcóthểtạoratốiđa8loạigiaotử.(II).MộttếbàosinhtrứngcókiểugenAbaBAbaBDdgiảmphânbìnhthườngtạora1loạigiaotử.(III).HaitếbàosinhtinhcókiểugenAbDaBdAbDaBdgiảmphânbìnhthườngcóthểtạoratốiđa6loạigiaotử.(IV).HaitếbàosinhtinhcókiểugenAaBbDdgiảmphânbìnhthườngcóthểtạoratốiđa4loạigiaotử.",
    "3.",
    "Ởmộtloàithựcvật,cho2câythuầnchủngcókiểuhìnhkhácnhau(P)giaophấnvớinhau,thuđượcF1.Tiếptụcthựchiện2phéplai,thuđượckếtquảsau:-Phéplai1:F1giaophấnvớicâyM,thuđượcFMcótỉlệ7câythâncao,quảtròn:3câythânthấp,quảbầudục:5câythâncao,quảbầudục:1câythânthấp,quảtròn.-Phéplai2:F1giaophấnvớicâyN,thuđượcFNcótỉlệ7câythâncao,quảtròn:3câythânthấp,quảbầudục:1câythâncao,quabầudục:5câythânthấp,quảtròn.ChocâyMgiaophấnvớicâyN,thuđượcFM-N.Chobiếtmỗitínhtrạngđềudo1gencó2alenquyđịnh.Theolíthuyết,cóbaonhiêuphátbiểusauđâyđúng?(I).FM-Ncó4loaikiểugen.(II).FM-Ncókiểuhìnhphânlitheotỉlệ1:1:1:1.(III).FM-Ncó3loạikiểugenquyđịnhcâythâncao,quảtròn.(IV).FM-Ncó1kiểugenquyđịnhcâythấp,quảbầudục.",
    "3.",
    "Mộtquầnthểthựcvật,alenAquyđịnhhoađỏtrộihoàntoànsovớialenaquyđịnhhoatrắng.Thếhệxuấtphát(P)củaquầnthểnàycóthànhphầnkiểugenlà0,5AA:0,4Aa:0,1aa.Theolíthuyết,cóbaonhiêuphátbiểusauđâyđúng?(I).NếuquầnthểnàygiaophấnngẫunhiênthìthànhphầnkiểugenởF1là0,36AA:0,48Aa:0,16aa.(II).Nếuquầnthểnàytựthụphấnthìkiểuhìnhhoatrắngsẽgiảmdầnquacácthếhệ.(III).NếuloạibỏhếtnhữngcâyhoatrắngvàchotấtcảcáccâyhoađỏPtựthụphấnthìthuđượcF1cókiểuhìnhphânlitheotỉlệ:8câyhoađỏ:1câyhoatrắng.(IV).NếuquầnthểnàytựthụphấnthìthếhệF1cóthànhphầnkiểugenlà:0,6AA:0,2Aa:0,2aa.",
    "2."
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
