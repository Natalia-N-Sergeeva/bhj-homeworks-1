
function countDown(){
const timer=document.getElementById("timer");
let timerValueStart=timer.textContent;
   timerValueStart--;
   timer.textContent=timerValueStart;


   if(timerValueStart==-1){
     alert("Вы победили в конкурсе!");
     clearInterval(id);
     timer.textContent=0;
     
   };

};


const id=setInterval(countDown, 1000);











