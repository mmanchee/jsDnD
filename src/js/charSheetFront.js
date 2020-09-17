import $ from 'jquery';
import { updatePlayer } from './charSheetBack.js';
import { statRoll } from './charSheetBack.js';

export function charSheetListener(player) {
  $("#menu-option-character").on('click', function() {
    $("#cs-name").html(player.name);
    $("#cs-class").html(player.playerClass);
    $("#cs-level").html(player.lvl);
    $("#cs-exp").html(player.exp);
    $("#cs-hp").html(player.hp);
    $("#cs-hp-max").html(player.maxHP);
    $("#cs-bonus-points").text(player.bonusPoints);
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
    $("#character-menu").toggle();
    $("#character-sheet").toggle();
  });
}
export function charStatListeners() {
  $('#bonus-points').text(statRoll());
  $("input[name='strength']").val(10);
  $("input[name='dexterity']").val(10);
  $("input[name='intelligence']").val(10);
  $("input[name='wisdom']").val(10);
  $("input[name='charisma']").val(10);
  $("input[name='constitution']").val(10);
  $('.stat-plus').click(function(event) {
    event.preventDefault();
    let fieldName = $(this).attr('field');
    let currentVal = parseInt($(`input[name=${fieldName}]`).val());
    let idVal = parseInt($(`input[name=${fieldName}]`).attr('min'));
    let floor, ceil, bonusID;
    if (idVal === 0) {
      floor = 8;
      ceil = 18;
      bonusID = "#bonus-points";
    } else {
      floor = parseInt($(`input[name=${fieldName}]`).attr('min'));
      ceil = 30;
      bonusID = "#cs-bonus-points";
    }
    if (!isNaN(currentVal) && currentVal >= floor && currentVal < ceil) {
      let bp = parseInt($(bonusID).text());
      let check = 0;
      currentVal > 13 ? currentVal > 15 ? check = 3 : check = 2 : check = 1;
      if (bp >= check) {
        $(`input[name=${fieldName}]`).val(currentVal + 1);
        $(bonusID).text(bp - check);
      }
    } else if (currentVal === ceil) {
      false;
    } else {
      $(`input[name=${fieldName}]`).val(floor);
    }
  });
  $(".stat-minus").click(function(event) {
    event.preventDefault();
    let fieldName = $(this).attr('field');
    let currentVal = parseInt($(`input[name=${fieldName}]`).val());
    let idVal = parseInt($(`input[name=${fieldName}]`).attr('min'));
    let floor, bonusID;
    if (idVal === 0) {
      floor = 8;
      bonusID = "#bonus-points";
    } else {
      floor = parseInt($(`input[name=${fieldName}]`).attr('min'));
      bonusID = "#cs-bonus-points";
    }
    if (!isNaN(currentVal) && currentVal > floor) {
      let check = 0;
      currentVal > 14 ? currentVal > 16 ? check = 3 : check = 2 : check = 1;
      let bp = parseInt($(bonusID).text());
      $(`input[name=${fieldName}]`).val(currentVal - 1);
      $(bonusID).text(bp + check);
    } else {
      $(`input[name=${fieldName}]`).val(floor);
    }
  });
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
}
