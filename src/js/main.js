import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {getCharacter} from './player.js';
import {getMonster} from './monsters.js';
import {Monster} from './monsters.js';
import {Battle} from './battle.js';

function displayStats(battle) {
  let maxHP = battle.monster.healthPoints;
  let percentHP = maxHP / battle.monster.healthPoints;
  if (percentHP > 0.75) {
    $("#monster-health").text("Tip-top Condition");
  } else if (percentHP > 0.5) {
    $("#monster-health").text("Wounded");
  } else if (percentHP > 0.25) {
    $("#monster-health").text("Weak");
  } else if (percentHP > 0 ) {
    $("#monster-health").text("Dying");
  }
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
    displayStats(battle);
    console.log(monster.healthPoints);
  });
  $(`button#flee`).on("click", function() {
    battle.flee();
    $("#battle-buttons").toggle();
    $("#monster-img").html("");
    $("#monster-name").text("NPC");
    $("#monster-health").text("");
    $("button#explore").toggle();
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
  });
});

// function displayStats() {
//   $("#char-name").text(protag.name);
//   $("#char-hp").text(protag.hp);
//   $("#char-inventory").text(protag.loot);
// }

// function attachListeners() {
//   let monster;
//   let battle;
//   $("button#explore").on("click", function() {
//     $("#explore").prop("disabled", true);
//     $("#attack").show();
//     $("#runaway").show();
    
//     monster = getMonster(protag.challenge_rating-1,protag.challenge_rating+1)
//     battle = new Battle (protag, monster);

//     $("#monster-img").html(monster.img);
//     $("#monster-name").text(monster.name);
//     displayStats();
//   });
//   $("button#attack").on("click", function() {
//     battle.attacking();
//     if (protag.hp <= 0) {
//       $("#game").hide();
//       $("#gameover").show();
//     } else if (monster.hp <= 0) {
//       $("#monster-name").text("VICTORY");
//       battle.getLoot();
//       protag.levelUp();
//       $("#attack").hide();
//       $("#runaway").hide();
//       $("#explore").prop("disabled", false);
//     }
//     displayStats();
//   });
//   $("button#runaway").on("click", function() {
//     battle.runAway();
//     if (battle.endBattle === true){
//       $("#attack").hide();
//       $("#runaway").hide();
//       $("#explore").prop("disabled", false);
//     }
//     if (protag.hp <= 0) {
//       $("#game").hide();
//       $("#gameover").show();
//     }
//     displayStats();
//   });
// }

// let protag;

// $(document).ready(function() {
//   attachListeners();
//   $("form#character").submit(function(event) {
//     event.preventDefault();

//     const name = $("input#name").val();

//     protag = new Character(name);

//     $("form#character").hide();

//     displayStats();
//   });
// });
