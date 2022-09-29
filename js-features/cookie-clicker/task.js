const cookie = document.getElementById("cookie");

cookie.onclick = function(){
  

  let counter = document.getElementById("clicker__counter");
      
  let clickerCounter=counter.textContent;

  clickerCounter++;
  counter.textContent=clickerCounter;


  if (clickerCounter%2===0){
     cookie.width=400;
     
   }

     else {  
     cookie.width=200;
     
     }
  }




