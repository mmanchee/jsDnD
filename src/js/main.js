import $ from 'jquery'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import forest from '../assets/img/forest.jpg';
import {getCharacter} from './player.js';
import {Monster} from './monsters.js';
import {Battle} from './battle.js';
import {getMonster} from './monsters.js';
import {getLoot} from './lootTable.js';
import { imageArray } from './player.js';
import {equipArmor} from './armors.js';
import {upgradeWeapon} from './weapons.js';
import {upgradeArmor} from './armors.js';
import { CharacterStats } from './player.js';
import { descriptionArray } from './player.js';
import {displayMonsterHealth} from './monsters.js';
import { addExp } from './rollFunctions.js';
// import {MonstersURLPIC} from './monsters.js';
import {menuCamp} from './menu.js';
import { charSheetListener } from './charSheetFront';
import { charStatListeners } from './charSheetFront';

let player;

function displayStats(battle) {
  $("#goldCount").text(battle.character.money);
  $("#player-health").text(battle.character.hp);
  if (battle.character.actions[0].limit) {
    $("#action-limit").text(battle.character.actions[0].limit);
  }
  $(".numHealthPot").text(battle.character.inventory[0].healthPotion);
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



function attachListeners() {
  let monster;
  let battle;
  $("button#explore-button").on("click", function() {
    $("#icon-menu").prop("disabled", true);
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
      $("#icon-menu").prop("disabled", false);
      $("#battle-buttons").toggle();
      $("#monster-img").html("");
      $("#monster-name").text("NPC");
      $("#monster-health").text("");
      $("button#explore-button").toggle();
      $("#show-town").toggle();
      if (turn === 0) {
        $("#message-board").prepend(`You beat the ${battle.monster.name}<br>`);
        message = battle.getMoney();
        message += "<br>";
        message += getLoot(monster.challengeRating, player);
        message += `You gain ${monster.exp} experience<br>`;
        $("#message-board").prepend(message);
        player = addExp(player, monster.exp);
        $("#nav-character-level").text(player.lvl);
        $("#player-health").text(player.hp);
      } else {
        $("#message-board").prepend(`The ${battle.monster.name} has defeated you!<br>`);  // return to character creation?
        $("#player-img").html("<img class=player-img src=https://www.pngitem.com/pimgs/m/23-238931_skull-logo-free-skull-and-cross-bones-svg.png>");
        $("#player-name").text("You Are Dead");
        $("button#start-over").show();
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
    $("#action-limit").text(battle.character.actions[0].limit);
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
        $("#icon-menu").prop("disabled", false);
        $("#battle-buttons").toggle();
        $("#monster-img").html("");
        $("#monster-name").text("NPC");
        $("#monster-health").text("");
        $("button#explore-button").toggle();
        $("#show-town").toggle();
        if (turn === 0) {
          $("#message-board").prepend(`You beat the ${battle.monster.name}<br>`);
          message = battle.getMoney();
          message += "<br>";
          message += getLoot(monster.challengeRating, player);
          $("#message-board").prepend(message);
          player = addExp(player, monster.exp);
          $("#nav-character-level").text(player.lvl);
          $("#player-health").text(player.hp);
        } else {
          $("#message-board").prepend(`The ${battle.monster.name} has defeated you!<br>`);  // return to character creation?
          $("#player-img").html("<img class=player-img src=https://www.pngitem.com/pimgs/m/23-238931_skull-logo-free-skull-and-cross-bones-svg.png>");
          $("#player-name").text("You Are Dead");
          $("button#start-over").show();
          $("button#explore-button").hide();
          $("#show-town").hide();
        }
      }
    }
  });
  $(`#weaponry-button`).on("click", function() {
    $(`#townMap`).toggle();
    $(`#bloodbath`).show();
    $(`#weapon-lvl`).text(`${player.weapon.lvl+1}`);
    $(`#upgradeWeaponCost`).text(`${player.weapon.cost*2}`);
    $("#message-board").prepend(`As you approach the blacksmith you are overcome by the smell of blood and steel.<br>`);
  });
  $(`#upgradeWeapon`).on("click", function() {
    if (player.money < player.weapon.cost*2) {
      $("#message-board").prepend(`You don't have enough money!<br>`);
    } else {
      upgradeWeapon(player);
      $("#message-board").prepend(`You upgraded your weapon to ${player.weapon.lvl}!<br>`);
      $(`#weapon-lvl`).text(player.weapon.lvl+1);
      $(`#upgradeWeaponCost`).text(player.weapon.cost*2);
    }
  });
  $(`#armory-button`).on("click", function() {
    $(`#townMap`).toggle();
    $(`#gnome`).show();
    $(`#armor-lvl`).text(player.armor.lvl+1);
    $(`#upgradeArmorCost`).text(player.armor.cost*2);
    $("#message-board").prepend(`The armorer looks at you skeptically as you open the door to his workshop.<br>`);
  });
  $(`#upgradeArmor`).on("click", function() {
    if (player.money < player.armor.cost*2) {
      $("#message-board").prepend(`You don't have enough money!<br>`);
    } else {
      upgradeArmor(player);
      $("#message-board").prepend(`You upgraded your weapon to ${player.armor.lvl}!<br>`);
      $(`armor-lvl`).text(player.armor.lvl+1);
      $(`#upgradeArmorCost`).text(player.armor.cost*2);
    }
  });
  
  $(`#alchemist-button`).on("click", function() {
    $(`#townMap`).toggle();
    $(`#victorious`).show();
    $(`.numHealthPot`).text(player.inventory[0].healthPotion);
    $("#message-board").prepend(`An alchemist, interesting. You are intrigued, but wary.<br>`);
  });

  $(`#buyPotion`).on("click", function() {
    if (player.money < 100) {
      $("#message-board").prepend(`You don't have enough money!<br>`);
    } else {
      player.inventory[0].healthPotion += 1;
      player.money -= 100;
      $(`.numHealthPot`).text(player.inventory[0].healthPotion);
    }
  });

  $(`#inn-button`).on("click", function() {
    $(`#townMap`).toggle();
    $(`#gobble`).show();
    $("#message-board").prepend(`You step in to a warm and musky inn. You could sure use some sleep and a warm meal.<br>`);
  });

  $(`#buyRoom`).on("click", function() {
    if (player.money < 100) {
      $("#message-board").prepend(`You don't have enough money!<br>`);
    } else {
      player.hp = player.maxHP;
      player.actions[0].limit = 5;
      player.money -= 100;
      $("#message-board").prepend(`You slept soundly, you did it.<br>`);
    }
  });

  // back to town map
  $(`button.back-town`).on("click", function() {
    $(`#townMap`).toggle();
    $(`#bloodbath`).hide();
    $(`#gnome`).hide();
    $(`#gobble`).hide();
    $(`#victorious`).hide();  
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
    let message = `<img class=display-img src=${imageArray[arrayPlace]}>`;
    message += `<br><br><br><p>${descriptionArray[arrayPlace]}`;
    $("#character-display").html(message);
  });
  // Nav Menu Listeners
  $("#icon-menu").on("click", function() {
    $("#gameplay").hide();
    $("#character-sheet").hide();
    $("#townMap").hide();
    $("#character-menu").toggle();
    $(`#bloodbath`).hide();
    $(`#gnome`).hide();
    $(`#gobble`).hide();
    $(`#victorious`).hide();  
  });
  $("#menu-option-travel").on("click", function() {
    $("#character-menu").hide();
    $("#character-sheet").hide();
    $("#gameplay").show();
    
  });
  $("#menu-option-character").on("click", function() {
    $("#character-menu").toggle();
    $("#character-sheet").show();
  });
  $("#menu-option-town").on("click", function() {
    $("#character-sheet").hide();
    $("#character-menu").toggle();
    $("#townMap").show();
    $("#message-board").prepend(`You have arrived at the town.<br>`);
  });
  $("#menu-option-camp").on("click", function() {
    $("#character-sheet").hide();
    $("#character-menu").toggle();
    let message = menuCamp(player);
    $("#message-board").prepend(message);
  });
}

$(document).ready(function() {
  charStatListeners();
  attachListeners();
  classListener();
  $("#start-button").click(function() { // splash transition
    $("#splash").toggle();
    $("#char-class").toggle();
  });
  $("#confirm-class").click(function() { // character class transition
    // let message;
    if ($("#confirm-class").val() === "") {
      false; // message = "select a class";
    } else if ($(`#name`).val() === "") {
      false; // message += "select a name";
    } else {
      $("#char-class").toggle();
      $("#char-stats").toggle();
    }
  });
  $("#confirm-stats").click(function(event) { // character stats transition
    event.preventDefault();
    $('body').css('background-image', `url(${forest})`);
    $('body').addClass("forestBackground"); // change background image
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
    charSheetListener(player);
    equipArmor(player);
    $("#player-name").text(name);
    $("#player-img").html(`<img class=display-img src=${player.img}>`);
    $("#player-health").text(player.hp);
    $("#goldCount").text(player.money);
    player.bonusPoints = $("#bonus-points").text();
    $("#character-creation").hide();
    $("#nav-character-name").text(player.name);
    $("#nav-character-level").text("1");
    $("#nav-character-class").text(player.playerClass);
    $("#nav-main").show();
    $("#gameplay").show();
    $("#message-box").show();
    $("#message-board").prepend(`Welcome ${name}, You can start your adventure by exploring and battling monsters.<br>`);
    let buttons = $("#action-buttons");
    buttons.empty();
    player.actions.forEach(function(action) {
      if (!action.limit) {
        buttons.append(`<button class="btn btn-battle" id='second-attack'>${action.name}</button>`);
      } else {
        buttons.append(`<button class="btn btn-battle" id='second-attack'>${action.name} (X<span id='action-limit'>${action.limit}</span>)</button>`);
      }
    });
  });
});