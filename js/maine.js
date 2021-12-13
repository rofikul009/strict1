function ghori() {
    var somoy = new Date(),
        ghonta = somoy.getHours(),
        minit = somoy.getMinutes(),
        sec = somoy.getSeconds(),
        dinrat = ' PM';
    // AM PM
    if (ghonta < 12) {
        dinrat = ' AM';
    }
    //00 = 12
    if (ghonta == 0) {
        ghonta = 12;
    }
    //converting 12 hours
    if (ghonta > 12) {
        ghonta = ghonta - 12;
    }
    //adding 0

    if (ghonta < 10) {
        ghonta = '0' + ghonta;
    }

    if (minit < 10) {
                minit = '0' + minit;
            }

    if (sec < 10) {
                        sec = '0' + sec;
                    }

        document.getElementById('abc').innerHTML =ghonta + ':' + minit + ':' + sec + dinrat; 
}
setInterval(ghori, 1000);