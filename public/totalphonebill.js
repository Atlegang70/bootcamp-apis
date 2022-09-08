 function totalPhoneBill(calls){
    var callist = calls.split(",");
    var smsCounter = 0;
    var callCounter = 0;
    
    for(var c = 0; c < callist.length; c++){
      
     if( callist[c].includes("sms") ){
       smsCounter = smsCounter + 0.65;
     }
         else if(callist[c].includes("call") ){
         callCounter = callCounter + 2.75;
         }
       var total = smsCounter + callCounter;
    }
     return "R" + total.toFixed(2);
   
  }