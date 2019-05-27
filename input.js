var att = document.getElementById("att");
var attLine = document.getElementById("attLine");
dmgInc = document.getElementById('dmgInc');

var bd = document.getElementById("bd");
var bdline = document.getElementById("bdline");
dmgInc1 = document.getElementById("dmgIncBoss");

attt = function() {
    attackLine = parseFloat(attLine.value);
    attack = parseFloat(att.value);
    var resultX = 100 * attackLine / attack;
    var result = resultX.toPrecision(3);
    dmgInc.value = !isNaN(result) ? result : "";
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