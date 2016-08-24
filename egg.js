var wgt = [];  
var listOfEggs = []; 
//var message = [];


function eggs() {
   var Eggcount = document.getElementById('numberOfEggs').value;
          
        for (i = 1; i <= Eggcount; i++) {
           var num = parseFloat(window.prompt("Hvor mange gram vejer nummer: " +i+" ?",""));

           var btime = Math.floor(num*6.5);
           var min = Math.floor((num[i]*6.5)/60);
           var sec = Math.round((num[i]*6.5)-(Math.floor((num[i]*6.5)/60)*60));

                // Add leading zero if sec (seconds) is a 1 digit number 
                if (sec <= 9){
                    sec = '0'+sec; 
                }

            // create an array of objects        
            listOfEggs.push(
                { 
                    eggnumber : +i, 
                    weight : +num,
                    kogetid : btime                
                }
            );
}

// sorter array of objects på vægt-værdien
    var byWeight = listOfEggs.slice(0);
    byWeight.sort(function(a,b) {
        return a.weight - b.weight; 
    });

// udskriv sorteret 
  document.getElementById("message").innerHTML = "Rekkefolgen er: <br />"
  
  var text = "";
  var x;
  for (x in byWeight) {

    document.getElementById("demo").innerHTML = text += "Nummer " + byWeight[x].eggnumber + " vejer " + byWeight[x].weight + "g" + ". Det skal koge i " + byWeight[x].kogetid + " sekunder" + "<br />";
  }
  //  console.log('by weight:');
   // console.log(byWeight);

// lav startknappen
    var btn = document.createElement("BUTTON");        
    var t = document.createTextNode("start timer");     
    btn.appendChild(t);                                
    document.body.appendChild(btn); 

// set timer
    document.getElementsByClassName('timer')[0].setAttribute("data-seconds-left", btime);

// this function is triggered by user clicking the "start timer" button
    btn.onclick = function(){
        $(function() {
            $('.timer').startTimer({
                onComplete: function() {
                    console.log(btime); 
                }
            });
        })
    }
}


