var weapon = document.querySelector("#weapons");
var enemy =  document.querySelector("#enemies");
var modifier =  document.querySelector("#modifiers");
var killCheck = document.getElementById("killCheck");
var killAmount = document.getElementById("killAmount");
var dmgDealt = document.getElementById("dmg");
var remHits = document.getElementById("hits");
var canbeKilled = false;

function calc() {
    console.log(weapon.weaponData);
    if (weapon.weaponData.maxDmg > enemy.enemyData.health) {
        killCheck.innerHTML = "YES!";
        canbeKilled = true;
    }
    else {
        killCheck.innerHTML = "NO!";
        canbeKilled = false;
    }
    
    if (canbeKilled)
        killAmount.innerHTML = Math.ceil(enemy.enemyData.health / weapon.weaponData.atk);
    else killAmount.innerHTML = "-";
    
    if (canbeKilled) {
        dmgDealt.innerHTML = (Math.ceil(enemy.enemyData.health / weapon.weaponData.atk))*weapon.weaponData.atk;
    } else dmgDealt.innerHTML = weapon.weaponData.maxDmg;
    if (canbeKilled) {
        remHits.innerHTML = weapon.weaponData.dur - (Math.ceil(enemy.enemyData.health / weapon.weaponData.atk));
    } else remHits.innerHTML = 0;
}