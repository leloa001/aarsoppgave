

function hentIngredienser(){
  var ingredienser = document.getElementsByName('ingrediens');
  var ingrediensArray =[];
  var oppskriftArray = [];
  
  // midlertidig løsning dise dataene skal hentes fra DB
  const spaghettiMedKjøttsaus = {rettNavn: "spaghetti med kjøttsaus", ingredienser: ["spaghetti", "tomat saus", "kjøttdeig"]}
  const spaghettiOgLøk = {rettNavn: "spaghetti og løk", ingredienser: ["spaghetti", "løk"]}
  oppskriftArray.push(spaghettiMedKjøttsaus, spaghettiOgLøk)
  document.getElementById("duKanLage").innerHTML == "";

        // henter valgte ingredienser og legger de i en array
        for (var checkbox of ingredienser) {  
          if (checkbox.checked)  
            ingrediensArray.push(checkbox.value);  
        }  
        for(i = 0; oppskriftArray.length > i; i++){
          
          ingrediensTeller = 0;
          for(x =0; oppskriftArray[i].ingredienser.length > x; x++){
            if(ingrediensArray.includes(oppskriftArray[i].ingredienser[x])){
              ingrediensTeller++
            }
            if(ingrediensTeller == oppskriftArray[i].ingredienser.length){
              document.getElementById("duKanLage").innerHTML += oppskriftArray[i].rettNavn +"<br> <br>"
            }
          };          
        }
};