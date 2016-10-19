var wgt = [];  
var listOfEggs = []; 
//var message = [];


function eggs() {
   var Eggcount = document.getElementById('numberOfEggs').value;
          
        for ( i = 1; i <= Eggcount; i++ ) {
           var num = parseFloat(window.prompt("Hvor mange gram vejer nummer: " +i+" ?",""));

           var btime = Math.floor( num * 6.5 );
           var min = Math.floor(( num * 6.5 )/60 );
           var sec = Math.round(( num * 6.5 )-( Math.floor(( num * 6.5 )/60 ) * 60 ));

          
            // create an array of objects        
            listOfEggs.push(
                { 
                    eggnumber : +i, 
                    weight : +num,
                    kogemin : +min + ":",
                    kogesec : +sec,  
                    btime : btime              
                }
            );
}



// set timer to the highest value
    var maxtime = Math.max.apply(Math,listOfEggs.map(function(o) {
        return o.btime;
        })) //find max value in array
    
        // add 5 seconds 
        maxtime = (maxtime + 5);
    
    document.getElementsByClassName('timer')[0].setAttribute("data-seconds-left", maxtime);



// sorter array of objects på vægt-værdien
    var byWeight = listOfEggs.slice(0);
    
    byWeight.sort(function(a,b) {
        return b.weight - a.weight; 
    });



// udskriv sorteret liste
  document.getElementById("message").innerHTML = "<p>Vent til vandet koger. </p><p>Læg derefter æg nummer " + byWeight[0].eggnumber + " i gryden og start timeren.</p><p>Resten af æggene puttes i gryden i denne rækkefølge: <br /></p>"
  
  var text = "";
  var x;
  for (x in byWeight) {
      
      // add 0 to 1 digit numbers (seconds)
      if (byWeight[x].kogesec < 10){ 
          sekunder = '0'+byWeight[x].kogesec
        } else {
          sekunder = byWeight[x].kogesec
        } 

    document.getElementById("demo").innerHTML = text += "<div data-eggID=" + byWeight[x].eggnumber + "" +  " data-kogetid=" + byWeight[x].kogemin + sekunder + ">" + "Æg nummer " + byWeight[x].eggnumber + " (" + byWeight[x].weight + " g)" + " skal koge i " + byWeight[x].kogemin + sekunder + " minutter" + "</div>";
  }




// lav startknappen
    var btn = document.createElement("BUTTON");        
    var t = document.createTextNode("start timer");     
    btn.appendChild(t);                                
    document.body.appendChild(btn); 




// create arrays with time to boil in seconds (btime) and ID (eggnumber)
    var nxtEgg = listOfEggs.map(function(a) { 
        return a.btime;
        })

    var nxtID = listOfEggs.map(function(a) {
        return a.eggnumber;
        })

                console.log(nxtID);
                console.log(nxtEgg);



    // this is called every second from jquery.simple.timer.js
    checkTime = function(){

        if ( timeLeft > 0 ){

            var arrayLength = nxtEgg.length;

            for (var i=0; i < arrayLength; i++) {

                // find and remove the highest value in array nxtEgg
                var highest = Math.max.apply(Math,nxtEgg.map(function(o) {
                    return o;
                    }));

                        if ( (highest) == timeLeft ) {

                            match();

                        };
                    
                function match() {
                    console.log("Match!");
                    var index = nxtEgg.indexOf(highest);
                    var _nxtID = nxtID.indexOf(index);
                    nxtEgg.splice(index, 1); 
                    nxtID.splice(index, 1); 
                    console.log('highest = ' +highest);
                    console.log('timeleft = ' +timeLeft);
                    console.log('nxtID = ' +nxtID);
                    console.log('nxtEgg = ' +nxtEgg);
                    console.log('_nxtID = ' +_nxtID);
                    console.log('index = ' +index + "\n\n");

                }                       
            };
        };             
    }         



// this function is triggered by user clicking the "start timer" button
    btn.onclick = function(){
        btn.remove();
        $(function() {           

            $('.timer').startTimer({
                onComplete: function() {
                    console.log(btime); 
                }
            });
        })
    }
}



