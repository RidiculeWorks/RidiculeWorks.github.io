/*var att = document.getElementById("att");
var attLine = document.getElementById("attLine");
dmgInc = document.getElementById('dmgInc');

var bd = document.getElementById("bd");
var bdline = document.getElementById("bdline");
dmgInc1 = document.getElementById("dmgIncBoss");

let weaponCoef = document.getElementById("wepcoef");
let cf = document.getElementById("cf");
let jf = document.getElementById("jf");

attt = function(){
    attackLine = parseFloat(attLine.value);
    attack = parseFloat(att.value);
    var resultX = 100 * attackLine / attack;
    var result = resultX.toPrecision(3);
    dmgInc.value = !isNaN(result) ? result : "";
}

changeValue = function(){
    singleValues = $("#job").val();
    if (singleValues === "archer"){
        weaponCoef.value = thLegendary;
        cf.value = cfPhysical;
        jf.value = jfArcher;
    }
    else if (singleValues === "assassin"){
        weaponCoef.value = ohLegendary;
        cf.value = cfPhysical;
        jf.value = jfAssassin;
    }
    else if (singleValues === "berserker"){
        weaponCoef.value = thLegendary;
        cf.value = cfPhysical;
        jf.value = jfBerserker;
    }
    else if (singleValues === "heavygunner"){
        weaponCoef.value = thLegendary;
        cf.value = cfPhysical;
        jf.value = jfHeavygunner;
    }
    else if (singleValues === "knight"){
        weaponCoef.value = mhLegendary;
        cf.value = cfPhysical;
        jf.value = jfKnight;
    }
    else if (singleValues === "priest"){
        weaponCoef.value = mhLegendary;
        cf.value = cfPriest;
        jf.value = jfPriest;
    }
    else if (singleValues === "runeblade"){
        weaponCoef.value = thLegendary;
        cf.value = cfPhysical;
        jf.value = jfRuneblade;
    }
    else if (singleValues === "soulbinder"){
        weaponCoef.value = thLegendary;
        cf.value = cfMagical;
        jf.value = jfSoulBinder;
    }
    else if (singleValues === "striker"){
        weaponCoef.value = thLegendary;
        cf.value = cfPhysical;
        jf.value = jfStriker;
    }
    else if (singleValues === "thief"){
        weaponCoef.value = ohLegendary;
        cf.value = cfPhysical;
        jf.value = jfThief;
    }
    else if (singleValues === "wizard"){
        weaponCoef.value = thLegendary;
        cf.value = cfMagical;
        jf.value = jfWizard;
    }
}

$("#job").change(function(){
    changeValue();
    });


    let choice = $("#job option:selected").val();
    switch (choice){
        case "archer":
            weaponCoef.value = thLegendary;
            cf.value = cfPhysical;
            jf.value = jfArcher;
        case "assassin":
            weaponCoef.value = mhLegendary;
            cf.value = cfPhysical;
            jf.value = jfAssassin;
        case "berserker":
            weaponCoef.value = thLegendary;
            cf.value = cfPhysical;
            jf.value = jfBerserker;
            
    }

$(".test" ).change(function() {
    attt();
  });

bdd = function() {
    bossd = parseFloat(bd.value);
    bdlinee = parseFloat(bdline.value);
    var resultX = 100 * (bdlinee / (100 + bossd));
    var result = resultX.toPrecision(3);
    dmgInc1.value = !isNaN(result) ? result : "";
}

$(".test1").change(function() {
    bdd();
});
*/