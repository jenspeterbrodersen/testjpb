var wgt = [];   

// 
function eggs(){
    var Eggcount = document.getElementById('numberOfEggs').value;
          
        for (i = 1; i <= Eggcount; i++) {

            //text = "Weight of egg " + i ;
            
            var num = parseFloat(window.prompt("Hvor mange gram vejer æg nummer: " +i+" ?",""));

            wgt.push(num);
           
        }
    
  // Udskriv Æg-nummer, vægt, beregnet kogetid
    text = "<ul>"; 
    for (i = 0; i < Eggcount; i++) {
    
    var min = Math.floor((wgt[i]*6.5)/60);
    var sec = Math.round((wgt[i]*6.5)-(Math.floor((wgt[i]*6.5)/60)*60));

        
        if (sec <= 9){
            sec = '0'+sec; // Add leading zero if sec (seconds) is a 1 digit number
        }
    
    document.getElementById("demo").innerHTML = text += "<li>Æg " +(i+1) +" vejer " +wgt[i] + " gram, og skal koges i " + min + ":" + sec + " min</li>";
    
    }
    text += "</ul>";

    // lav startknappen
    var btn = document.createElement("BUTTON");        
    var t = document.createTextNode("Tryk her når vandet koger");     
    btn.appendChild(t);                                
    document.body.appendChild(btn); 


}



