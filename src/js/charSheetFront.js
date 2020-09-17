import {updatePlayer} from './charSheetBack.js';
import $ from 'jquery'; 

export function charSheetListener(player) {
  $("#menu-option-character").on('click', function() {
    $("#cs-name").html(player.name);
    $("#cs-class").html(player.playerClass);
    $("#cs-level").html(player.lvl);
    $("#cs-exp").html(player.exp);
    $("#cs-hp").html(player.hp);
    $("#cs-hp-max").html(player.maxHP);
    $("#cs-bonus-points").html(player.bonusPoints);
    $("#cs-weapon-bonus").html(player.weapon.lvl);
    $("#cs-armor-bonus").html(player.armor.lvl);
    $("#cs-health-potions").html(player.inventory[0].healthPotion);
    $("#cs-gold").html(player.money);
    $("#cs-str-stat").val(player.charStats.strength);
    $("#cs-dex-stat").val(player.charStats.dexterity);
    $("#cs-int-stat").val(player.charStats.intelligence);
    $("#cs-wis-stat").val(player.charStats.wisdom);
    $("#cs-cha-stat").val(player.charStats.charisma);
    $("#cs-con-stat").val(player.charStats.constitution);
  });
  $("#confirm-upgrade").on('click', function() {
    let strength = $("#cs-str-stat").val();
    let dexterity = $("#cs-dex-stat").val();
    let intelligence = $("#cs-int-stat").val();
    let wisdom = $("#cs-wis-stat").val();
    let charisma = $("#cs-cha-stat").val();
    let constitution = $("#cs-con-stat").val();
    let bonusPoints = $("#cs-bonus-points").val();
    player = updatePlayer(strength,dexterity,intelligence,wisdom,charisma,constitution,bonusPoints, player);
  });
}

