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
    "Trongphènchuacóchứaloạimuốinhômnàosauđây?",
    "Al2(SO4)3.",
    "Chấtnàosauđâycómàunâuđỏ?",
    "Fe(OH)3.",
    "Trongphântửchấtnàosauđâychỉcóliênkếtđơn?",
    "CH4.",
    "KimloạiFekhôngtantrongdungdịchnàosauđây?",
    "HNO3đặc,nguội.",
    "Kimloạinàosauđâylàkimloạikiềmthổ?",
    "Mg.",
    "Phântửkhốicủaalaninlà",
    "89.",
    "Chấtnàosauđâylàchấtkhíởđiềukiệnthường?",
    "Metylamin.",
    "KhíXlàkhígâymưaaxitvàđượcsinhratrongquátrìnhđốtcháyquặngpirit.KhíXlà",
    "SO2.",
    "TrùnghợpchấtnàodướiđâythuđượcPolietilen?",
    "CH2=CH2.",
    "Chấtbéolàtriestecủaaxitbéovới",
    "glixerol.",
    "Thànhphầnchínhcủaquặnghematitđỏlà",
    "Fe2O3.",
    "Ionnàosauđâycótínhoxihóamạnhnhất?",
    "Ag+.",
    "Chấtcócùngcôngthứcphântửvớiglucozơlà",
    "fructozơ.",
    "Kimloạinàosauđâykhôngkhửđượcnướcởnhiệtđộthường?",
    "Be.",
    "Trongnướccứngtạmthờiluônchứaanion",
    "HCO3-.",
    "Metylaxetatcócôngthứccấutạolà",
    "CH3COOCH3.",
    "Ngâmmộtlákẽmtrong100mldungdịchAgNO30,1M.GiảsửtoànbộlượngkimloạiAgsinhrađềubámhếtvàolákẽm.Khiphảnứngkếtthúc,nhấclákẽmra,làmkhô,khốilượnglákẽmtăngthêm",
    "0,755gam.",
    "OxitnàosauđâybịkhửbởikhíCOởnhiệtđộcao?",
    "Fe2O3.",
    "Trongcácdungdịchloãngsauđây,dungdịchcópH<7là",
    "HCl.",
    "ChấtXđượcsửdụngđểkhửchuađấttrồng,điềuchếcloruavôi,làmvậtliệutrongxâydựng,…Xcòncótêngọilàvôitôi.CôngthứchóahọccủaXlà",
    "Ca(OH)2.",
    "Cho18,75gamH2NCH2COOHphảnứnghếtvớidungdịchKOH,thuđượcdungdịchchứamgammuối.Giátrịcủamlà",
    "28,25.",
    "ChodungdịchNaOHđếndưvàodungdịchmuốiXthuđượckếttủatrắng.MuốiXlà",
    "Mg(NO3)2.",
    "Đunnóng200mldungdịchglucozơamol/lvớilượngdưdungdịchAgNO3trongNH3.Saukhiphảnứngxảyrahoàntoàn,thuđược21,6gamAg.Giátrịcủaalà",
    "0,5.",
    "Chocácpolimesau:poli(vinylclorua),poli(metylmetacrylat),poli(etylenterephtalat),poliacrilonitrin.Sốpolimeđượcđiềuchếbằngphảnứngtrùnghợplà",
    "3.",
    "ĐốtcháyhoàntoànmgamAltrongkhíO2dư,thuđược10,2gamAl2O3.Giátrịcủamlà",
    "5,40.",
    "ChấtXcótrongnhiềuloàithựcvật,cónhiềunhấttrongcâymía,củcảiđườngvàhoathốtnốt.ThủyphânchấtXthuđượcchấtYcóphảnứngtránggương,cóvịngọthơnđườngmía.TêngọicủaXvàYlầnlượtlà:",
    "saccarozơvàfructozơ.",
    "Saukhikếtthúccácphảnứng,thínghiệmnàosauđâythuđượcmuốisắt(III)?",
    "ChobộtsắtvàodungdịchAgNO3dư.",
    "Cho1mldungdịchAgNO31%vàoốngnghiệmsạch,lắcnhẹ,sauđónhỏtừtừtừnggiọtdungdịchNH32Mchođếnkhikếttủasinhrabịhòatanhết.Nhỏtiếp3-5giọtdungdịchX,sauđóngâmốngnghiệmchứahỗnhợpphảnứngvàocốcnướcnóng(khoảng70-80oC)trongvàiphút.Trênthànhốngnghiệmxuấthiệnlớpbạcsáng.ChấtXlà",
    "anđehitfomic.",
    "Phátbiểunàosauđâysai?",
    "KimloạidẫnđiệntốtnhấtlàCu.",
    "Phátbiểunàosauđâyđúng?",
    "PhântửH2N–CH2–CO–NH–CH2–COOHlàmộtđipeptit.",
    "Hấpthụhoàntoàn3,36lítkhíCO2(đktc)vàodungdịchchứaxmolKOHvàymolK2CO3,thuđược200mldungdịchX.Chotừtừđếnhết100mldungdịchXvào450mldungdịchHCl0,25M,thuđược2,016lítkhí(đktc).Mặtkhác,cho100mldungdịchXtácdụngvớidungdịchCa(OH)2dư,thuđược15gamkếttủa.Giátrịcủaxlà",
    "0,075.",
    "Tiếnhànhthínghiệmtheocácbướcsau:Bước1:Nhỏ3giọtanilinvàoốngnghiệmchứa2mlnướccất,lắcđều,sauđóđểyên.Bước2:Nhúnggiấyquỳtímvàodungdịchtrongốngnghiệm,sauđónhấcgiấyquỳra.Bước3:Nhỏtiếp1mldungdịchHClđặcvàoốngnghiệm,lắcđều,sauđóđểyên.Bước4:Nhỏtiếp1mldungdịchNaOHđặcvàoốngnghiệm,lắcđều,sauđóđểyên.Chocácphátbiểusau:(a)Kếtthúcbước1,anilinhầunhưkhôngtanvàlắngxuốngđáyốngnghiệm.(b)Kếtthúcbước2,giấyquỳtímchuyểnthànhmàuxanhdoanilincótínhbazơ.(c)Kếtthúcbước3,thuđượcdungdịchtrongsuốt.(d)Kếtthúcbước4,trongốngnghiệmcóanilinđượctạothành.Sốphátbiểuđúnglà",
    "3.",
    "ChomgamhỗnhợpXgồmCuO,Fe2O3,FeOtácdụngvừađủvới100mldungdịchchứaH2SO41MvàHCl1M.ĐểkhửhoàntoànmgamhỗnhợpX(nungnóng)cầntốithiểuVlítkhíCO(đktc).GiátrịcủaVlà",
    "3,36.",
    "Cho0,06molhỗnhợphaiesteđơnchứcXvàYtácdụngvừađủvớidungdịchKOHthuđượchỗnhợpZgồmcácchấthữucơ.ĐốtcháyhoàntoànZthuđượcH2O;0,144molCO2và0,036molK2CO3.LàmbayhơiZthuđượcmgamchấtrắn.Giátrịcủamlà",
    "6,624.",
    "ĐunnóngagamhỗnhợpEchứatriglixeritXvàcácaxitbéovới200mldungdịchNaOH1M(vừađủ),thuđượcglixerolvàhỗnhợpmuốiY.HiđrohóahoàntoànYcầnvừađủ0,1molH2chỉthuđượcmuốinatripanmitat.Đốtcháy0,07molEthuđược1,645molCO2.Biếtcácphảnứngxảyrahoàntoàn.Giátrịcủaalà",
    "52,14.",
    "Chocácphátbiểusau:(a)Bộtnhômtựbốccháykhitiếpxúcvớikhíclo.(b)Trongănmònđiệnhóahọc,tạianotxảyraquátrìnhoxihóakimloại.(c)Nhiệtđộnóngchảycủacáckimloạikiềmthổcaohơncáckimloạikiềm.(d)HỗnhợpAlvàBaO(tỉlệmoltươngứnglà1:1)tanhoàntoàntrongnướcdư.(e)ChodungdịchNH3tớidưvàodungdịchFeCl3,saukhiphảnứngkếtthúcthuđượckếttủa.(f)Trongxửlýnướccứng,cóthểdùngcácvậtliệupolimecókhảnăngtraođổication.",
    "6.",
    "Chocácphátbiểusau:(a)Caosubunacótínhđànhồivàđộbềntốthơncaosuthiênnhiên.(b)OxihóaglucozơbằnghiđrocóNilàmxúctácthuđượcsobitol.(c)Dầumỡsaukhirán,cóthểđượcdùngđểtáichếthànhnhiênliệu.(d)ỨngvớicôngthứcphântửC3H7NO2có2α-aminoaxitlàđồngphâncấutạocủanhau.(e)CácesteđơnchứcđềuphảnứngvớidungdịchNaOHtheotỉlệmol1:1.(g)CóthểdùngCu(OH)2trongmôitrườngkiềmđểphânbiệtcácdungdịch:glucozơ,etanolvàlòngtrắngtrứng.Sốphátbiểusailà",
    "4.",
    "Đốtcháyhoàntoàn0,12molhỗnhợpEgồmhaichấthữucơmạchhởX(CnH2n+1O2N)vàestehaichứcY(CmH2m-2O4)cầnvừađủ0,69molO2,thuđượcCO2,N2và0,564molH2O.Mặtkhác,khicho0,12molEtácdụnghếtvớidungdịchNaOHđunnóng,kếtthúcphảnứngthuđượchỗnhợpZgồmMvàNlàhaiancolno,đơnchứckếtiếpnhautrongdãyđồngđẳng(biếtphântửkhốivàsốmolcủaMđềunhỏhơnN)vàagamhỗnhợpmuốikhan(cóchứamuốicủaglyxin).Giátrịcủaalà",
    "14,088.",
    "ChocácsơđồchuyểnhóatheođúngtỉlệmolE(C9H12O4)+2NaOH→toX1+X2+X3X1+2HCl→Y+2NaClX2+O2Z+H2OZ+X3T(C5H10O2)+H2OBiếtchấtElàestemạchhở.Chocácphátbiểusau:(a)ChấtEcóđồngphânhìnhhọc.(b)TrongthànhphầnphântửcủaX1chỉcócácnguyêntửcủa3nguyêntố.(c)TrongphântửY,sốnguyêntửoxigấp2lầnsốnguyêntửhiđro.(d)CóhaicôngthứccấutạothỏamãntínhchấtcủaX3.(e)ChấtZcóthểđượctạothànhtừCH3OHchỉbằng1phảnứnghóahọc.Sốphátbiểuđúnglà",
    "4.",
    "HỗnhợpEgồm:X,Ylàhaiaxitđồngđẳngkếtiếp;Z,Tlàhaieste(đềuhaichức,mạchhở;YvàZlàđồngphâncủanhau;MT–MZ=14).Đốtcháyhoàntoàn7,704gamEcầnvừađủ0,222molO2,thuđượcCO2vàH2O.Mặtkhác,cho7,704gamEphảnứngvừađủvới220mldungdịchNaOH0,6M.Côcạndungdịchsauphảnứng,thuđượchỗnhợpmuốikhanGcủacácaxitcacboxylicvà1,68gamhỗnhợpbaancolcócùngsốmol.KhốilượngmuốicủaaxitcóphântửkhốilớnnhấttrongGgầnnhấtvớigiátrịnàodướiđây?",
    "3,9gam."
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
