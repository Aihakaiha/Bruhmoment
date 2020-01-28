function ch(){
    var formi = document.getElementById("kyselylomake");
    var koknimi = formi.kokonimi.value;
    var sposti = formi.sposti.value;
    var min = formi.ika.min;
    var max = formi.ika.max;
    var ika = formi.ika.value;
    var radiovastaus = formi.suositus.value;
    if (koknimi.length < 3){
        alert("Kirjoita kelvollinen nimi.");
        formi.kokonimi.focus();
        return false;
    }
    if(emailIsValid(sposti)){
    //
    }
    else{
        alert("Anna oikea sähköpostiosoitteesi");
        formi.sposti.focus();
        return (false);
    }
    if(ika < min || ika > max){
        alert("Pistä sopiva ikä")
        formi.ika.focus()
        return false;
    }

}
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}