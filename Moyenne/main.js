var _TP1 = false;
var _TP2 = false;
var OPT = false;
/*var Supp = 0;*/

function option(a) {
    if (document.getElementById("_option").checked) {
        document.getElementById("option").style.display = "table-row";
        document.getElementById("option_coeff").value = 2;
        OPT = document.getElementById("_option").checked;
        if (a) {document.getElementById("Tle").rowSpan ++;}
    } else {
        document.getElementById("option").style.display = "none";
        document.getElementById("option_coeff").value = 0;
        OPT = document.getElementById("_option").checked;
        if (a) {document.getElementById("Tle").rowSpan --;}
    }
}

function TP1(a) {
    if (document.getElementById("_tp1").checked) {
        document.getElementById("tp1").style.display = "table-row";
        document.getElementById("_tp1_coeff").style.display = "unset";
        document.getElementById("spe1_coeff").value = 16*(1-document.getElementById("prop_1").value);
        document.getElementById("tp1_coeff").value = 16*document.getElementById("prop_1").value;
        _TP1 = document.getElementById("_tp1").checked;
        if (a) {document.getElementById("Tle").rowSpan ++;}
    } else {
        document.getElementById("tp1").style.display = "none";
        document.getElementById("_tp1_coeff").style.display = "none";
        document.getElementById("spe1_coeff").value = 16;
        document.getElementById("tp1_coeff").value = 0;
        _TP1 = document.getElementById("_tp1").checked;
        if (a) {document.getElementById("Tle").rowSpan --;}
    }
}

function TP2(a) {
    if (document.getElementById("_tp2").checked) {
        document.getElementById("tp2").style.display = "table-row";
        document.getElementById("_tp2_coeff").style.display = "unset";
        document.getElementById("spe2_coeff").value = 16*(1-document.getElementById("prop_2").value);
        document.getElementById("tp2_coeff").value = 16*document.getElementById("prop_2").value;
        _TP2 = document.getElementById("_tp2").checked;
        if (a) {document.getElementById("Tle").rowSpan ++;}
    } else {
        document.getElementById("tp2").style.display = "none";
        document.getElementById("_tp2_coeff").style.display = "none";
        document.getElementById("spe2_coeff").value = 16;
        document.getElementById("tp2_coeff").value = 0;
        _TP2 = document.getElementById("_tp2").checked;
        if (a) {document.getElementById("Tle").rowSpan --;}
    }
}

/*function supp(a) {
    if (document.getElementById("_tp2").checked) {
        document.getElementById("tp2").style.display = "table-row";
        document.getElementById("_tp2_coeff").style.display = "unset";
        document.getElementById("spe2_coeff").value = 16*(1-document.getElementById("prop_2").value);
        document.getElementById("tp2_coeff").value = 16*document.getElementById("prop_2").value;
        _TP2 = document.getElementById("_tp2").checked;
        if (a) {document.getElementById("Tle").rowSpan ++;}
    } else {
        document.getElementById("tp2").style.display = "none";
        document.getElementById("_tp2_coeff").style.display = "none";
        document.getElementById("spe2_coeff").value = 16;
        document.getElementById("tp2_coeff").value = 0;
        _TP2 = document.getElementById("_tp2").checked;
        if (a) {document.getElementById("Tle").rowSpan --;}
    }
}*/

function change(_id,_value) {
    if (_id.search("spe") + 1) {
        _n = _id.substring(3,4);
        if (eval("_TP"+_n)) {
            document.getElementById("tp"+_n+"_coeff").value = Math.round((_value * document.getElementById("prop_"+_n).value / (1-document.getElementById("prop_"+_n).value))*1000)/1000;
        }
    }
    else {
        _n = _id.substring(2,3);
        if (eval("_TP"+_n)) {
            document.getElementById("spe"+_n+"_coeff").value = Math.round((_value * (1-document.getElementById("prop_"+_n).value) / document.getElementById("prop_"+_n).value)*1000)/1000;
        }
    }
}

function section() {
    if (document.getElementById("section").value === "aucune") {
        document.getElementById("1ere").rowSpan = 8;
        document.getElementById("Tle").rowSpan = 10;
        document.getElementById("LVA_1_coeff").value = 3.33;
        document.getElementById("LVA_2_coeff").value = 3;
        document.getElementById("litt_e_coeff").value = 0;
        document.getElementById("litt_o_coeff").value = 0;
        document.getElementById("hg_1_coeff").value = 3.33;
        document.getElementById("hg_2_coeff").value = 3;
        document.getElementById("DNL_chi_1_coeff").value = 0;
        document.getElementById("DNL_chi_2_coeff").value = 0;
        document.getElementById("DNL_e_coeff").value = 0;
        document.getElementById("DNL_o_coeff").value = 0;
        document.getElementById("LVA_1").style.display = "table-row";
        document.getElementById("LVA_2").style.display = "table-row";
        document.getElementById("litt_e").style.display = "none";
        document.getElementById("litt_o").style.display = "none";
        document.getElementById("hg_1").style.display = "table-row";
        document.getElementById("hg_2").style.display = "table-row";
        document.getElementById("DNL_chi_1").style.display = "none";
        document.getElementById("DNL_chi_2").style.display = "none";
        document.getElementById("DNL_o").style.display = "none";
        document.getElementById("DNL_e").style.display = "none";
    } else if (document.getElementById("section").value === "chinoise") {
        document.getElementById("1ere").rowSpan = 8;
        document.getElementById("Tle").rowSpan = 12;
        document.getElementById("LVA_1_coeff").value = 0;
        document.getElementById("LVA_2_coeff").value = 0;
        document.getElementById("litt_e_coeff").value = 10;
        document.getElementById("litt_o_coeff").value = 5;
        document.getElementById("hg_1_coeff").value = 3.33;
        document.getElementById("hg_2_coeff").value = 3;
        document.getElementById("DNL_chi_1_coeff").value = 5;
        document.getElementById("DNL_chi_2_coeff").value = 5;
        document.getElementById("DNL_e_coeff").value = 0;
        document.getElementById("DNL_o_coeff").value = 0;
        document.getElementById("LVA_1").style.display = "none";
        document.getElementById("LVA_2").style.display = "none";
        document.getElementById("litt_e").style.display = "table-row";
        document.getElementById("litt_o").style.display = "table-row";
        document.getElementById("hg_1").style.display = "table-row";
        document.getElementById("hg_2").style.display = "table-row";
        document.getElementById("DNL_chi_1").style.display = "table-row";
        document.getElementById("DNL_chi_2").style.display = "table-row";
        document.getElementById("DNL_o").style.display = "none";
        document.getElementById("DNL_e").style.display = "none";
    } else {
        document.getElementById("1ere").rowSpan = 6;
        document.getElementById("Tle").rowSpan = 12;
        document.getElementById("LVA_1_coeff").value = 0;
        document.getElementById("LVA_2_coeff").value = 0;
        document.getElementById("litt_e_coeff").value = 10;
        document.getElementById("litt_o_coeff").value = 5;
        document.getElementById("hg_1_coeff").value = 0;
        document.getElementById("hg_2_coeff").value = 0;
        document.getElementById("DNL_chi_1_coeff").value = 0;
        document.getElementById("DNL_chi_2_coeff").value = 0;
        document.getElementById("DNL_e_coeff").value = 10;
        document.getElementById("DNL_o_coeff").value = 5;
        document.getElementById("LVA_1").style.display = "none";
        document.getElementById("LVA_2").style.display = "none";
        document.getElementById("litt_e").style.display = "table-row";
        document.getElementById("litt_o").style.display = "table-row";
        document.getElementById("hg_1").style.display = "none";
        document.getElementById("hg_2").style.display = "none";
        document.getElementById("DNL_chi_1").style.display = "none";
        document.getElementById("DNL_chi_2").style.display = "none";
        document.getElementById("DNL_o").style.display = "table-row";
        document.getElementById("DNL_e").style.display = "table-row";
    }
    if (OPT) {document.getElementById("Tle").rowSpan ++;}
    if (_TP1) {document.getElementById("Tle").rowSpan ++;}
    if (_TP2) {document.getElementById("Tle").rowSpan ++;}
}

function moyenne() {
    var m = document.getElementById("moyenne");
    var moy = Math.round((100*document.getElementById("f_o_note").value*100*document.getElementById("f_o_coeff").value+100*document.getElementById("f_e_note").value*100*document.getElementById("f_e_coeff").value+100*document.getElementById("spe_note").value*100*document.getElementById("spe_coeff").value+100*document.getElementById("bulletins_note").value*100*document.getElementById("bulletins_coeff").value+100*document.getElementById("DNL_chi_1_note").value*100*document.getElementById("DNL_chi_1_coeff").value+100*document.getElementById("es1_note").value*100*document.getElementById("es1_coeff").value+100*document.getElementById("LVA_1_note").value*100*document.getElementById("LVA_1_coeff").value+100*document.getElementById("LVB_1_note").value*100*document.getElementById("LVB_1_coeff").value+100*document.getElementById("hg_1_note").value*100*document.getElementById("hg_1_coeff").value+100*document.getElementById("es2_note").value*100*document.getElementById("es2_coeff").value+100*document.getElementById("LVA_2_note").value*100*document.getElementById("LVA_2_coeff").value+100*document.getElementById("LVB_2_note").value*100*document.getElementById("LVB_2_coeff").value+100*document.getElementById("litt_e_note").value*100*document.getElementById("litt_e_coeff").value+100*document.getElementById("litt_o_note").value*100*document.getElementById("litt_o_coeff").value+100*document.getElementById("hg_2_note").value*100*document.getElementById("hg_2_coeff").value+100*document.getElementById("DNL_e_note").value*100*document.getElementById("DNL_e_coeff").value+100*document.getElementById("DNL_o_note").value*100*document.getElementById("DNL_o_coeff").value+100*document.getElementById("DNL_chi_2_note").value*100*document.getElementById("DNL_chi_2_coeff").value+100*document.getElementById("philo_note").value*100*document.getElementById("philo_coeff").value+100*document.getElementById("eps_note").value*100*document.getElementById("eps_coeff").value+100*document.getElementById("emc_note").value*100*document.getElementById("emc_coeff").value+100*document.getElementById("spe1_note").value*100*document.getElementById("spe1_coeff").value+100*document.getElementById("tp1_note").value*100*document.getElementById("tp1_coeff").value+100*document.getElementById("spe2_note").value*100*document.getElementById("spe2_coeff").value+100*document.getElementById("tp2_note").value*100*document.getElementById("tp2_coeff").value+100*document.getElementById("go_note").value*100*document.getElementById("go_coeff").value+100*document.getElementById("option_note").value*100*document.getElementById("option_coeff").value)/(100*document.getElementById("f_o_coeff").value+100*document.getElementById("f_e_coeff").value+100*document.getElementById("spe_coeff").value+100*document.getElementById("bulletins_coeff").value+100*document.getElementById("DNL_chi_1_coeff").value+100*document.getElementById("es1_coeff").value+100*document.getElementById("LVA_1_coeff").value+100*document.getElementById("LVB_1_coeff").value+100*document.getElementById("hg_1_coeff").value+100*document.getElementById("es2_coeff").value+100*document.getElementById("LVA_2_coeff").value+100*document.getElementById("LVB_2_coeff").value+100*document.getElementById("litt_e_coeff").value+100*document.getElementById("litt_o_coeff").value+100*document.getElementById("hg_2_coeff").value+100*document.getElementById("DNL_e_coeff").value+100*document.getElementById("DNL_o_coeff").value+100*document.getElementById("DNL_chi_2_coeff").value+100*document.getElementById("philo_coeff").value+100*document.getElementById("eps_coeff").value+100*document.getElementById("emc_coeff").value+100*document.getElementById("spe1_coeff").value+100*document.getElementById("tp1_coeff").value+100*document.getElementById("spe2_coeff").value+100*document.getElementById("tp2_coeff").value+100*document.getElementById("go_coeff").value+100*document.getElementById("option_coeff").value))/100
    m.innerHTML = "Moyenne : "+moy.toFixed(2).toString().replace(".",",")+"/20";
}

function sauvegarder() {
    var a = document.createElement("a");
    var text = btoa(document.getElementById("section").value+"\n"+document.getElementById("_option").checked+"\n"+document.getElementById("_tp1").checked+"\n"+document.getElementById("prop_2").value+"\n"+document.getElementById("_tp2").checked+"\n"+document.getElementById("prop_2").value+"\n"+document.getElementById("f_o_note").value+"\n"+document.getElementById("f_o_coeff").value+"\n"+document.getElementById("f_e_note").value+"\n"+document.getElementById("f_e_coeff").value+"\n"+document.getElementById("spe_note").value+"\n"+document.getElementById("spe_coeff").value+"\n"+document.getElementById("bulletins_note").value+"\n"+document.getElementById("bulletins_coeff").value+"\n"+document.getElementById("DNL_chi_1_note").value+"\n"+document.getElementById("DNL_chi_1_coeff").value+"\n"+document.getElementById("es1_note").value+"\n"+document.getElementById("es1_coeff").value+"\n"+document.getElementById("LVA_1_note").value+"\n"+document.getElementById("LVA_1_coeff").value+"\n"+document.getElementById("LVB_1_note").value+"\n"+document.getElementById("LVB_1_coeff").value+"\n"+document.getElementById("hg_1_note").value+"\n"+document.getElementById("hg_1_coeff").value+"\n"+document.getElementById("es2_note").value+"\n"+document.getElementById("es2_coeff").value+"\n"+document.getElementById("LVA_2_note").value+"\n"+document.getElementById("LVA_2_coeff").value+"\n"+document.getElementById("LVB_2_note").value+"\n"+document.getElementById("LVB_2_coeff").value+"\n"+document.getElementById("litt_e_note").value+"\n"+document.getElementById("litt_e_coeff").value+"\n"+document.getElementById("litt_o_note").value+"\n"+document.getElementById("litt_o_coeff").value+"\n"+document.getElementById("hg_2_note").value+"\n"+document.getElementById("hg_2_coeff").value+"\n"+document.getElementById("DNL_e_note").value+"\n"+document.getElementById("DNL_e_coeff").value+"\n"+document.getElementById("DNL_o_note").value+"\n"+document.getElementById("DNL_o_coeff").value+"\n"+document.getElementById("DNL_chi_2_note").value+"\n"+document.getElementById("DNL_chi_2_coeff").value+"\n"+document.getElementById("philo_note").value+"\n"+document.getElementById("philo_coeff").value+"\n"+document.getElementById("eps_note").value+"\n"+document.getElementById("eps_coeff").value+"\n"+document.getElementById("emc_note").value+"\n"+document.getElementById("emc_coeff").value+"\n"+document.getElementById("spe1_note").value+"\n"+document.getElementById("spe1_coeff").value+"\n"+document.getElementById("tp1_note").value+"\n"+document.getElementById("tp1_coeff").value+"\n"+document.getElementById("spe2_note").value+"\n"+document.getElementById("spe2_coeff").value+"\n"+document.getElementById("tp2_note").value+"\n"+document.getElementById("tp2_coeff").value+"\n"+document.getElementById("go_note").value+"\n"+document.getElementById("go_coeff").value+"\n"+document.getElementById("option_note").value+"\n"+document.getElementById("option_coeff").value)
    a.href = window.URL.createObjectURL(new Blob([text], {type: "text/plain"}));
    a.download = "bac.notes";
    a.click();
}

function ouvrir(notes) {
    var elements = ["section","_option","_tp1","prop_2","_tp2","prop_2","f_o_note","f_o_coeff","f_e_note","f_e_coeff","spe_note","spe_coeff","bulletins_note","bulletins_coeff","DNL_chi_1_note","DNL_chi_1_coeff","es1_note","es1_coeff","LVA_1_note","LVA_1_coeff","LVB_1_note","LVB_1_coeff","hg_1_note","hg_1_coeff","es2_note","es2_coeff","LVA_2_note","LVA_2_coeff","LVB_2_note","LVB_2_coeff","litt_e_note","litt_e_coeff","litt_o_note","litt_o_coeff","hg_2_note","hg_2_coeff","DNL_e_note","DNL_e_coeff","DNL_o_note","DNL_o_coeff","DNL_chi_2_note","DNL_chi_2_coeff","philo_note","philo_coeff","eps_note","eps_coeff","emc_note","emc_coeff","spe1_note","spe1_coeff","tp1_note","tp1_coeff","spe2_note","spe2_coeff","tp2_note","tp2_coeff","go_note","go_coeff","option_note","option_coeff"];
    document.getElementById(elements[0]).value = notes[0];
    section()
    for (var i = 1; i < elements.length; i++) {
        if (i === 1 || i === 2 || i ===4) {
            document.getElementById(elements[i]).checked = Boolean(notes[i].replace("false",""));
        } else {
            document.getElementById(elements[i]).value = notes[i];
        }
    }
    option(document.getElementById("_option").checked);
    TP1(document.getElementById("_tp1").checked);
    TP2(document.getElementById("_tp2").checked);
    moyenne();
}
