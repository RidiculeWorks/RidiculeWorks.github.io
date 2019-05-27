const mainhandCoefEpic = 2;
const mainhandCoefLegendary = 4;
const onehandedCoefEpic = 2.25;
const onehandedCoefLegendary = 4.5;
const twohandedCoefEpic = 2.75;
const twohandedCoefLegendary = 5.5;

const jobFactorArcher = 6.4575;
const jobFactorAssassin = 0.55125;
const jobFactorBerserker = 4.305;
const jobFactorHeavyGunner = 2.03875;
const jobFactorKnight = 3.78;
const jobFactorPriest = 7.34125;
const jobFactorRuneBlade = 3.78;
const jobFactorSoulBinder = 3.40375;
const jobFactorStriker = 2.03875;
const jobFactorThief = 0.60375;
const jobFactorWizard = 3.40375;

function critRate(jobFactor, LUK, criticalRate){
    let criticalRatePercentage = (((jobFactor * LUK) + (criticalRate * 5.3)) * 0.015);
    return criticalRatePercentage;
}

function hitChance(accuracy,evasion){
    let chanceToHit = accuracy/evasion;
    return chanceToHit;
}

function damage(){
    damageDealt = (skillDamage * (1 + damageIncreases)) * (1/enemyDefense) * (1/(1-piercing)) * ((1500-(enemyResistance-((physicalPiercing+magicalPiercing)*15)))/1500);
    return damageDealt;
}

function damageBreakpoint(){
    breakpoint = 5 * (pAttack + mAttack) / 12 - 100;
    return breakpoint;
}

function bossInc(){
    dmgInc = (1+(boss+bossLine)/100) * (pAttack+mAttack);
    return dmgInc;
}

function attInc(){
    let attack = document.getElementById("totalAtt");
    let attLine = document.getElementById("attLine");
    dmgInc = (1+(boss/100)) * ((attack)+attLine);
    return dmgInc;
}