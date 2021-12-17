let markMass= 80;
let markHeight= 1.80;

let johnMass= 90;
let johnHeight= 1.70;



function calculateBMI(mass,height) {
    
    return Math.floor(mass/(height*height)) //vucut kitle endex formulu //Math.floor sayilari yuvarlamak icin kullanilir
}
console.log("bu deger mark'a aittir:" + calculateBMI(markMass,markHeight));
console.log("bu deger john'a aittir:" + calculateBMI(johnMass,johnHeight));
//console.log("" + calculateBMI(150,1.90));//returnde fomul tanimladigimiz icin sadece atadigimiz isimler icin degil herhangi baska bir kilo boyu da hesaplayabiliriz.
//console.log("" + calculateBMI(80, 1.70));

function controlBMI(isim,bmi){
    if (bmi<18.5) {
        return isim + "zayif";
    }
    else if (bmi>=18.5 && bmi<24.9){
        return isim + "normal"
    }
    else if(bmi>=25 && 29.9){
        return isim +"kilolu"
    }else (bmi>30) 
        {return isim + "obez"}
    
}
console.log(controlBMI("naciye", 27));