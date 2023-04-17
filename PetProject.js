//============= START ONLOAD ==============

window.onload = function(){

  var formHandle = document.forms.player_form;
  formHandle.onsubmit = processForm;

 //=========== ATTACKER RANDOM DICE GENERATOR =============

  var attacking = document.getElementById("aDice");
  var newofense = document.getElementById('attackerDice');

  attacking.onclick = attackerValue
  function attackerValue (){
  newofense.value = attack();
  
    function attack() {
      return Math.floor(Math.random() * 18) + 1;
    };

     
  };

//============== DEFENDER RANDOM DICE GENERATOR ================

 var defending = document.getElementById("dDice");
 var newdefense = document.getElementById('defenderDice');

  defending.onclick = defenderValue
  function defenderValue() {
  newdefense.value = defend();

    function defend() {
      return Math.floor(Math.random() * 12) + 1;
    };

   
  };
  
//======== START PROCESS FORM ==========

  function processForm(){

    var user_name = formHandle.user_name;
    var user_colour = formHandle.user_colour;
    var defenderColour = formHandle.user_dcolour
    var defender = formHandle.defender_name;

    var attack_name = document.getElementById("attack_name");
    var defend_name = document.getElementById("defend_name");

    attack_name.innerHTML = user_name.value;
    defend_name.innerHTML = defender.value;
    attack_name.style.color = user_colour.value;
    defend_name.style.color = defenderColour.value; 


 //========== CREATING LOGIC FOR WHO NUMBER HIGHER ============

    var submition = document.getElementById("submit");
    var message = document.getElementById("msg_winner");

    submition.onclick = diceRolled
   function diceRolled(){
      var attackerValue = parseInt(newofense.value);
      var defenderValue = parseInt(newdefense.value);
    
      if  ( attackerValue > defenderValue){
        message.innerHTML = (user_name.value + " has won, 1 army loss to " + defender.value);
        message.style.color = "red";
      } else if (attackerValue < defenderValue){
        message.innerHTML = (defender.value + " has won, 1 army loss to " + user_name.value);
        message.style.color = "blue";
      } else {
        message.innerHTML = (defender.value + " has won, 1 army loss to " + user_name.value);
        message.style.color = "blue";
      }
    }
    

  return false; 

}//======== END PROCESS FORM ==========


}//============== END ONLOAD ==================
