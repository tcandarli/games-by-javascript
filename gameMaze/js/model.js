/*****************************
 * Name : Maze I
 * Description: Positioning in maze and movement of object 
 *              until finding cheese object.
 * 
 * ALGORITHM / STEPS
 * 
 * 1. Random olarak farenin yerini belirle
 * 2. Random olarak peynirin yerini belirle
 * 3. Fare ve peynir ayni kutuya denk gelirse oyunu tekrar baslat
 * 4. Oyuncunun bastigi yon tusuna gore fareyi bir sonraki kutuya yerlestir.
 * 5. 3. islemi peynirin uzerinde oldugu kutucuga kadar devam ettir 
 * 
 * 
 * STATES
 * 1. Fare konumuna yerlestirilmis
 * 3. Fare ile peynir ayni konumda olmus
 * 2. Bir sonraki pozisyona gecirilmis
 * 3. Fare peyniri bulmus
 */


let fare = {
    x: undefined,
    y: undefined
};
let peynir = {
    x: undefined,
    y: undefined
};


// Teknik fonksiyonlar
function randomPozisonBul() {
    return Math.floor(Math.random() * 4);
}

/*******************************
 * Setup fonksiyonu
 */
function fareyiYerlestir() {
    fare.x = randomPozisonBul();
    fare.y = randomPozisonBul();
}

function peyniriYerlestir() {
    peynir.x = randomPozisonBul();
    peynir.y = randomPozisonBul();
}

function fareIlePeynirAyniKonumdami() {
    if (fare.x == peynir.x && fare.y == peynir.y) {
        return true;
    }
    return false;
}

// Ilkleme fonksiyonu
function kurulum() {
    fareyiYerlestir();
    peyniriYerlestir();
    fareIlePeynirAyniKonumdami();
    if (fareIlePeynirAyniKonumdami()) {
        // Sayfayi yenile
        window.location.reload();
    }
}

/************************************
 * 
 * Disaridan yonu parametre olarak alir
 * Farenin koordinatlarini bu gelen yone gore guncelleyecegiz.
 * Farenin labirentin icinde kaldigini kontrol edecegiz.
 * 
 * (x, y) => (row, column)
 */

// Tekrar edilen fonksiyonlar
function fareyiHareketEttir(yon) {

    if (yon == "sag" && fare.y + 1 < 4) {
        fare.y++;
    }
    if (yon == "sol" && fare.y - 1 >= 0) {
        fare.y--;
    }
    if (yon == "asagi" && fare.x + 1 < 4) {
        fare.x++;
    }
    if (yon == "yukari" && fare.x - 1 >= 0) {
        fare.x--;
    }
}

function farePeyniriBuldumu() {
    let buldumu = fareIlePeynirAyniKonumdami();
    return buldumu;
}

/****
 * Main function
 * 
 */
function oyna(yon) {
    fareyiHareketEttir(yon);
    if (farePeyniriBuldumu()) {
        document.getElementById("basari");
        // audio.play();
        alert("Yeayy!")
        kurulum();

    }
}