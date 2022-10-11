let menuLink=document.getElementsByClassName("menu__link");

let arrMenuLink=Array.from(menuLink);

for (let j=0; j<=arrMenuLink.length; j++){
 
  arrMenuLink[j].onclick = function(){
  
     let menuSub=arrMenuLink[j].closest('li.menu__item').querySelector('ul.menu_sub');

     menuSub.className="menu menu_sub menu_active";

      return false;
}
}



