import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {getCharacter} from './player.js';
import {Monster} from './monsters.js';
import {Battle} from './battle.js';
import {getMonster} from './monsters.js';
import {getLoot} from './lootTable.js';
import { imageArray } from './player.js';
import { statRoll } from './roleFunctions.js';
import {equipArmor} from './armors.js';
import {upgradeWeapon} from './weapons.js';
import {upgradeArmor} from './armors.js';
import { CharacterStats } from './player.js';
import {displayMonsterHealth} from './monsters.js';
// import {MonstersURLPIC} from './monsters.js';

let player;

function displayStats(battle) {
  $("#goldCount").text(battle.character.money);
  $("#player-health").text(battle.character.hp);
  if (battle.character.actions[0].limit) {
    $("#action-limit").text(battle.character.actions[0].limit);
  }
  $("#numHealthPot").text(battle.character.inventory[0].healthPotion);
  let endBattle = false;
  let message = displayMonsterHealth(battle.monster);
  $("#monster-health").text(message);
  if (message === "OOO you know he dead") {
    endBattle = true;
  }
  if (player.hp < 1) {
    endBattle = true;
  }
  return endBattle;
}

function charStatListeners() {
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
      floor = parseInt($(`input[name=cs-${fieldName}]`).attr('min'));
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
      floor = parseInt($(`input[name=cs-${fieldName}]`).attr('min'));
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
function attachListeners() {
  let monster;
  let battle;
  $("button#explore-button").on("click", function() {
    let chosenMonsterURLPIC = getMonster(player.lvl-5,player.lvl+1);
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.dnd5eapi.co${chosenMonsterURLPIC.url}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(response) {
      let monsterAPIObject = JSON.parse(response);
      monster = new Monster (monsterAPIObject,chosenMonsterURLPIC.pic);
      battle = new Battle (player, monster);
      $("#monster-img").html(`<img class=display-img src=${monster.img}>`);
      $("#monster-name").text(monster.name);
      $("#monster-health").text("Healthy");
      $("#battle-buttons").toggle();
      $("button#explore-button").toggle();
      $("#show-town").toggle();
      displayStats(battle);
    }, function (error) {
      $("#error").text(`${error}`);
    });
  });
  $(`button#melee-attack`).on("click", function() {
    let message = battle.meleeAttack();
    $("#message-board").prepend(message);
    let endBattle = displayStats(battle);
    let turn = 0;
    if (endBattle === false) {
      message = battle.endTurn();
      $("#message-board").prepend(message);
      endBattle = displayStats(battle);
      turn = 1;
    }
    if (endBattle === true) {
      message = battle.getMoney();
      $("#message-board").prepend(message);
      message = getLoot(monster.challengeRating, player);
      $("#message-board").prepend(message);
      $("#battle-buttons").toggle();
      $("#monster-img").html("");
      $("#monster-name").text("NPC");
      $("#monster-health").text("");
      $("button#explore-button").toggle();
      $("#show-town").toggle();
      if (turn === 0) {
        $("#message-board").prepend(`You beat the ${battle.monster.name}<br>`);
      } else {
        $("#message-board").prepend(`The ${battle.monster.name} has defeated you!<br>`);  // return to character creation?
        $("#player-img").html("<img class=player-img src=https://www.pngitem.com/pimgs/m/23-238931_skull-logo-free-skull-and-cross-bones-svg.png>");
        $("#player-name").text("You Are Dead");
        $("#start-over").show();
        $("button#explore-button").hide();
        $("#show-town").hide();
      }
    }
  });
  $(`button#flee`).on("click", function() {
    battle.flee();
    $("#monster-img").html("");
    $("#monster-name").text("NPC");
    $("#monster-health").text("");
    $("#battle-buttons").toggle();
    $("button#explore-button").toggle();
    $("#show-town").toggle();
    $("#message-board").prepend("You flee<br>");
  });
  $(`button#healthPotion`).on("click", function() {
    if (battle.character.hp === battle.character.maxHP) {
      $("#message-board").prepend("You are already max hp you dingus<br>");
    } else {
      let message = battle.useHealthPotion();
      $("#message-board").prepend(message);
    }
    displayStats(battle);
  });
  $(`#action-buttons`).on("click", "#second-attack", function() {
    let message = battle.secondAttack();
    $("#message-board").prepend(message);
    if (battle.character.actions[0].limit !== 0) {
      let endBattle = displayStats(battle);
      let turn = 0;
      if (endBattle === false) {
        message = battle.endTurn();
        $("#message-board").prepend(message);
        endBattle = displayStats(battle);
        turn = 1;
      }
      if (endBattle === true) {
        message = battle.getMoney();
        $("#message-board").prepend(message);
        message = getLoot(monster.challengeRating, player);
        $("#message-board").prepend(message);
        $("#battle-buttons").toggle();
        $("#monster-img").html("");
        $("#monster-name").text("NPC");
        $("#monster-health").text("");
        $("button#explore-button").toggle();
        $("#show-town").toggle();
        if (turn === 0) {
          $("#message-board").prepend(`You beat the ${battle.monster.name}<br>`);
        } else {
          $("#message-board").prepend(`The ${battle.monster.name} has defeated you!<br>`);  // return to character creation?
          $("#player-img").html("<img class=player-img src=https://www.pngitem.com/pimgs/m/23-238931_skull-logo-free-skull-and-cross-bones-svg.png>");
          $("#player-name").text("You Are Dead");
          $("#start-over").show();
          $("button#explore-button").hide();
          $("#show-town").hide();
        }
      }
    }
  });
  $(`#upgradeWeapon`).on("click", function() {
    upgradeWeapon(battle.character);
  });
  $(`#upgradeArmor`).on("click", function() {
    upgradeArmor(battle.character);
  });
  $(`#show-town`).on("click", function() {
    $(`#gameplay`).toggle();
    $(`#townMap`).toggle();
  });
  $(`#show-gameplay`).on("click", function() {
    $(`#gameplay`).toggle();
    $(`#townMap`).toggle();
  });
}

function classListener() {
  $(".select-class").click(function(event) {
    event.preventDefault();
    let className = $(this).attr('value');
    $("#confirm-class").val(`${className}`);
    className = className.toUpperCase();
    let arrayPlace = $(this).attr('field');
    $(`#selected-class`).html(`${className}`);
    $("#character-display").html(`<img class=display-img src=${imageArray[arrayPlace]}>`);
  });
  // Nav Menu Listeners
  $("#icon-journal").on("click", function() {
    $("#character-menu").show();
  });
  $("#menu-option-travel").on("click", function() {
    $("#character-menu").hide();

  });
  $("#menu-option-character").on("click", function() {
    $("#character-menu").hide();

  });
  $("#menu-option-town").on("click", function() {
    $("#character-menu").hide();

  });
  $("#menu-option-camp").on("click", function() {
    $("#character-menu").hide();

  });
}

// function charSheetListener() {
//   $("#cs-player-img").html(player.img);
//   $("#cs-name").html(player.name);
//   $("#cs-class").html(player.playerClass);
//   $("#cs-level").html(player.lvl);
//   $("#cs-exp").html(player.exp);
//   $("#cs-hp").html(player.hp);
//   $("#cs-hp-max").html(player.maxHP);
//   $("#cs-bonus-points").html(player.img);
//   $("#cs-weapon-bonus").html(player.weapon.level);
//   $("#cs-armor-bonus").html(player.armor.level);
//   $("#cs-health-potions").html(player.inventory[0].healthPotion);
//   $("#cs-str-stat").html(player.charStats.strength);
//   $("#cs-dex-stat").html(player.charStats.dexterity);
//   $("#cs-int-stat").html(player.charStats.intelligence);
//   $("#cs-wis-stat").html(player.charStats.wisdom);
//   $("#cs-cha-stat").html(player.charStats.charisma);
//   $("#cs-con-stat").html(player.charStats.constitution);
// }



$(document).ready(function() {
  charStatListeners();
  attachListeners();
  classListener();
  // charSheetListener();
  $("#start-button").click(function() { // splash transition
    $("#splash").toggle();
    $("#char-class").toggle();
  });
  $("#confirm-class").click(function() { // character class transition
    $("#char-class").toggle();
    $("#char-stats").toggle();
  });
  $("#confirm-stats").click(function(event) { // character stats transition
    event.preventDefault();
    $("#char-stats").toggle();
    const name = $(`#name`).val();
    const charClass = $("#confirm-class").val();
    const strength = $("#str-stat").val();
    $("input#cs-str-stat").attr('min', strength);
    const dexterity = $("#dex-stat").val();
    $("input#cs-dex-stat").attr('min', dexterity);
    const intelligence = $("#int-stat").val();
    $("input#cs-int-stat").attr('min', intelligence);
    const wisdom = $("#wis-stat").val();
    $("input#cs-wis-stat").attr('min', wisdom);
    const charisma = $("#cha-stat").val();
    $("input#cs-cha-stat").attr('min', charisma);
    const constitution = $("#con-stat").val();
    $("input#cs-con-stat").attr('min', constitution);
    let charStats = new CharacterStats(strength, dexterity, intelligence, wisdom, charisma, constitution);
    player = getCharacter(name, charClass, charStats);
    equipArmor(player);
    $("#player-name").text(name);
    $("#player-img").html(`<img class=display-img src=${player.img}>`);
    $("#player-health").text(player.hp);
    $("#explore").toggle();
    $("#goldCount").text(player.money);
    $("#character-creation").hide();
    $("#nav-character-name").text(player.name);
    $("#nav-character-level").text("1");
    $("#nav-character-class").text(charClass);
    $("#nav-main").show();
    $("#gameplay").show();
    //$("#message-box").show(); // stuff
    $("#message-board").prepend(`Welcome ${name}, You can start your adventure by exploring and battling monsters.<br>`);
    let buttons = $("#action-buttons");
    buttons.empty();
    player.actions.forEach(function(action) {
      if (!action.limit) {
        buttons.append(`<button class="btn btn-info col-4 mt-3" id='second-attack'>${action.name}</button>`);
      } else {
        buttons.append(`<button class="btn btn-info col-4 mt-3" id='second-attack'>${action.name} (X<span id='action-limit'>${action.limit}</span>)</button>`);
      }
    });
  });
});