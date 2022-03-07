let frm = document.getElementById("kalkulator");

function hitung(operasi) {
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;

    a1 = parseInt(a1);
    a2 = parseInt(a2);
    let total;

    switch(operasi) {
        case 1:  total = a1 + a2; break;
        case 2:  total = a1 - a2; break;
        case 3:  total = a1 * a2; break;
        case 4:  total = a1 / a2; break;
        case 5:  total = Math.pow(a1, a2); break;
        default:  total = 0;
    }

    if(isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka");
    }
    else if(isNaN(a2) || a2 == '') {
        alert("Harap isi data berupa angka");
    }
    else {
        frm.hasil.value = total; 
    }
}

function kosongAll() {
    frm.a1.value="";
    frm.a2.value="";
    frm.hasil.value="0";
}