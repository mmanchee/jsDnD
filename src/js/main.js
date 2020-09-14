import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {getCharacter} from './player.js';
import {getMonster} from './monsters.js';
import {Monster} from './monsters.js';
import {Battle} from './battle.js';

function displayStats(battle) {
  $("#player-health").text(player.hp);
  let endBattle = false;
  let percentHP = battle.monster.healthPoints / battle.monster.maxHP;
  if (percentHP > 0.75) {
    $("#monster-health").text("Tip-top Condition");
  } else if (percentHP > 0.5) {
    $("#monster-health").text("Wounded");
  } else if (percentHP > 0.25) {
    $("#monster-health").text("Weak");
  } else if (percentHP > 0) {
    $("#monster-health").text("Dying");
  } else {
    $("#monster-health").text("OOO you know he dead");
    endBattle = true;
  }
  return endBattle;
}

function attachListeners() {
  let monster;
  let battle;
  $("button#explore").on("click", function() {
    // $("#explore").prop("disabled", true);
    // $("#attack").show();
    // $("#runaway").show();
    let charCR = 1;
    let chosenMonsterURLPIC = getMonster(charCR-5,charCR+1);
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
      $("button#explore").toggle();
      displayStats(battle);
    });
  });
  $(`button#melee-attack`).on("click", function() {
    let message = battle.meleeAttack();
    $("#message-board").prepend(message);
    message = battle.endTurn();
    $("#message-board").prepend(message);
    let endBattle = displayStats(battle);
    if (endBattle === true) {
      $("#battle-buttons").toggle();
      $("#monster-img").html("");
      $("#monster-name").text("NPC");
      $("#monster-health").text("");
      $("button#explore").toggle();
      $("#message-board").prepend(`You beat the ${battle.monster.name}<br>`);
    }
  });
  $(`button#flee`).on("click", function() {
    battle.flee();
    $("#battle-buttons").toggle();
    $("#monster-img").html("");
    $("#monster-name").text("NPC");
    $("#monster-health").text("");
    $("button#explore").toggle();
    $("#message-board").prepend("You flee<br>");
  })
}

let player;

$(document).ready(function() {
  attachListeners();
  $("form#character").submit(function(event) {
    event.preventDefault();
    const name = $(`#character-name`).val();
    const charClass = $(`#character-class`).val();
    player = getCharacter(name,charClass);
    $("#player-name").text(name);
    $("#player-img").html(`<img class=display-img src=${player.img}>`);
    $("#character-creation").hide();
    $("#gameplay").show();
  });
});