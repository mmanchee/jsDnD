import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { sortMonsters } from './monsters.js';



// $(document).ready(function() {
//   $("#result").click(function() {
//     let request = new XMLHttpRequest();
//     const url = `https://www.dnd5eapi.co/api/monsters/`;
//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getData(response);
//       }
//     };
//     request.open("GET", url, true);
//     request.send();
//     function getData(response) {
//       let result = sortMonsters(response);
//       $("#gameover").text(result);
//     }
//   });
  
$(document).click(function() {
$("form#character").submit(function(event) {
    event.preventDefault()
    const name = $(`#character-name`).val();
    const charClass = $(`#character-class`).val();

    if (charClass === "barbarian") {
      let character = new BarbarianCharacter(name);
    }
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
