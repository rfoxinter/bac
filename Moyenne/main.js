var _TP1 = false;
var _TP2 = false;
var OPT = false;

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

function section() {
    if (document.getElementById("section").value == "aucune") {
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
    } else if (document.getElementById("section").value == "chinoise") {
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
    m.style.display = "block";
}