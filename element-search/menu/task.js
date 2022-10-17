let menuLink=document.getElementsByClassName("menu__link");

let arrMenuLink=Array.from(menuLink);

let counter=0;

for (let j=0; j<=arrMenuLink.length-1; j++){
 
  arrMenuLink[j].onclick = function(){

     counter++;

      let menuSub=arrMenuLink[j].closest('li.menu__item').querySelector('ul.menu_sub');

      //if (menuSub==null){
         // return;
         // } 

      if ((counter% 2) !== 0){

          menuSub.className="menu menu_sub menu_active";

          return false;
           
           } else {    
          
             menuSub.className="menu menu_sub";

              } 
     
     }   
 }
 



