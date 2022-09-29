let index;

for (let index=1; index<=9; index++){
  getHole = index => document.getElementById(`hole${index}`);


  getHole(index).onclick = function(){

    let moleKilled=document.getElementById('dead');
    let  moleKilledCounter=moleKilled.textContent;

    let moleMissed=document.getElementById('lost');
    let  moleMissedCounter=moleMissed.textContent;

	  
    let holeClass=getHole(index).className;

  

    if (holeClass.includes('hole_has-mole')==true){
  	   moleKilledCounter++;
       moleKilled.textContent=moleKilledCounter;
       if (moleKilledCounter==10){
        moleMissed.textContent=0;
        moleKilled.textContent=0;
       } 
      } else{

        moleMissedCounter++;
        moleMissed.textContent=moleMissedCounter;
         if(moleMissedCounter==5){
       moleMissed.textContent=0;
       moleKilled.textContent=0;
     }
      }

   }  
}


