import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {getCharacter} from './player.js';
import {Monster} from './monsters.js';
import {Battle} from './battle.js';
import { getMonster } from './monsters.js'

<<<<<<< HEAD
function displayStats(battle, turn) {
  let endBattle = false;
  let monHealth = "";
  if (battle.character.hp < 0) {
    console.log("in p hp");
    endBattle = true;
  }
  let percentHP = battle.monster.healthPoints / battle.monster.maxHP;
  console.log(percentHP);
  if (percentHP > 0.75) {
    monHealth = "Tip-top Condition";
  } else if (percentHP > 0.5) {
    monHealth = "Wounded";
  } else if (percentHP > 0.25) {
    monHealth = "Weak";
  } else if (percentHP > 0) {
    monHealth = "Dying";
  } else {
    monHealth = "OOO you know he dead";
    endBattle = true;
  }
  $("#monster-health").text(monHealth);
  if (endBattle === true) {
    $("#monster-img").html("");
    $("#monster-name").text("NPC");
    $("#monster-health").text("");
    $("#battle-buttons").toggle();
    $("button#explore").toggle();
    if (turn === 0) {
      $("#message-board").prepend(`The ${battle.monster.name} has defeated you!<br>`);
    } else {
      $("#message-board").prepend(`You beat the ${battle.monster.name}!<br>`);
    }
  }
  console.log(endBattle);
=======
function displayStats(battle) {
  $("#player-health").text(player.hp);
  let endBattle = false;
  let monsterHealth = "";
  if (player.hp < 1) {
    endBattle = true;
  }
  let percentHP = battle.monster.healthPoints / battle.monster.maxHP;
  console.log(percentHP, battle.monster.healthPoints, battle.monster.maxHP);
  if (percentHP > 0.75) {
    monsterHealth = "Tip-top Condition";
  } else if (percentHP > 0.5) {
    monsterHealth = "Wounded";
  } else if (percentHP > 0.25) {
    monsterHealth = "Weak";
  } else if (percentHP > 0) {
    monsterHealth = "Dying";
  } else {
    monsterHealth = "OOO you know he dead";
    endBattle = true;
  }
  $("#monster-health").text(monsterHealth);
>>>>>>> group_1
  return endBattle;
}

function attachListeners() {
  let monster;
  let battle;
  $("button#explore").on("click", function() {
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
      $("button#explore").toggle();
      displayStats(battle);
    });
  });
  $(`button#melee-attack`).on("click", function() {
    let message = battle.meleeAttack();
    $("#message-board").prepend(message);
<<<<<<< HEAD
    let endBattle = displayStats(battle, 0);
    if (endBattle === false) {
      message = battle.endTurn();
      $("#message-board").prepend(message);
      displayStats(battle, 1);
=======
    let endBattle = displayStats(battle);
    let turn = 0;
    if (endBattle === false) {
      message = battle.endTurn();
      $("#message-board").prepend(message);
      endBattle = displayStats(battle);
      turn = 1;
    }
    if (endBattle === true) {
      $("#battle-buttons").toggle();
      $("#monster-img").html("");
      $("#monster-name").text("NPC");
      $("#monster-health").text("");
      $("button#explore").toggle();
      if (turn === 0) {
        $("#message-board").prepend(`You beat the ${battle.monster.name}<br>`);
      } else {
        $("#message-board").prepend(`The ${battle.monster.name} has defeated you!<br>`);
      }
>>>>>>> group_1
    }
  });
  $(`button#flee`).on("click", function() {
    battle.flee();
    $("#monster-img").html("");
    $("#monster-name").text("NPC");
    $("#monster-health").text("");
    $("#battle-buttons").toggle();
    $("button#explore").toggle();
    $("#message-board").prepend("You flee<br>");
  });
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