export default function EnoughAirtime(usage, Camount){
    var smsCount = 0;
    var callCount = 0;
    var dataCount = 0;
   
  
    let usagelist = usage.split(",");
    
    for(var u = 0; u < usagelist.length; u++){
      
      if(usagelist[u].includes("sms")){
         //smsCount++;
        smsCount = smsCount + 0.75;
         }
     else if(usagelist[u].includes("call")){
         callCount = callCount + 1.88;
      }
         else if(usagelist[u].includes("data")){
         dataCount = dataCount + 12;
        }
     var totalUsage = smsCount + callCount + dataCount;
     
    } 
  
  if(totalUsage < Camount){
     return "R" + (Camount-totalUsage).toFixed(2);
     }
    else if(totalUsage >= Camount) {
      //console.log("R" + (totalUsage-totalUsage).toFixed(2));
      return "R" + (totalUsage-totalUsage).toFixed(2);
     }
  }