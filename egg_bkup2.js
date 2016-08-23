var wgt = [];  
var alleggs = []; 

// 
function eggs(){
   var Eggcount = document.getElementById('numberOfEggs').value;
          
        for (i = 1; i <= Eggcount; i++) {

//text = "Weight of egg " + i ;            
            var num = parseFloat(window.prompt("Hvor mange gram vejer nummer: " +i+" ?",""));
            wgt.push(num); 
            alleggs.push(num+''+i);          
        }
    
// Udskriv ægnummer, vægt samt beregnet kogetid
    text = "<ul>"; 
    for (i = 0; i < Eggcount; i++) {
    
    var btime = Math.floor(wgt[i]*6.5);
    var min = Math.floor((wgt[i]*6.5)/60);
    var sec = Math.round((wgt[i]*6.5)-(Math.floor((wgt[i]*6.5)/60)*60));
        
        if (sec <= 9){
            sec = '0'+sec; // Add leading zero if sec (seconds) is a 1 digit number
        }
    
    document.getElementById("demo").innerHTML = text += "<li>Nummer " +(i+1) +" vejer " +wgt[i] + " gram, og skal koges i " + min + ":" + sec + " min, (" + btime + " sek.)</li>"; // lav en liste med ægnummer + kogetider
 
    }
    text += "</ul>"; //listen afsluttes

// lav startknappen
    var btn = document.createElement("BUTTON");        
    var t = document.createTextNode("start timer");     
    btn.appendChild(t);                                
    document.body.appendChild(btn); 


// set timer
    document.getElementsByClassName('timer')[0].setAttribute("data-seconds-left", btime);

sortFunction = function() {
    alleggs.sort(function(a,b){return a-b;}); 
    document.getElementById("_alleggs").innerHTML = alleggs;
}


    

// click the button to start the timer

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





