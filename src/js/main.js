import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
// import {getCharacter} from './player.js';
import {getMonster} from './monsters.js';
import {Monster} from './monsters.js';
// import {Battle} from './battle.js';

function attachListeners() {
  let monster = "";
  // let battle;
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
      // battle = new Battle (protag, monster);
      $("#monster-img").html(`<img class=npcimg src=${monster.img}>`);
      $("#monster-name").text(monster.name);
    });
  });
  // $(`button#attack`).on("click", function() {

  // })
}

// let protag;

$(document).ready(function() {
  attachListeners();
  $("form#character").submit(function(event) {
    event.preventDefault();
    // const name = $(`#character-name`).val();
    // const charClass = $(`#character-class`).val();
    // protag = getCharacter(name,charClass);


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
