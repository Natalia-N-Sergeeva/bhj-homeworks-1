let sliderNext=document.getElementsByClassName("slider__arrow_next");
let arrSliderNext=Array.from(sliderNext);

let sliderPrev=document.getElementsByClassName("slider__arrow_prev");
let arrSliderPrev=Array.from(sliderPrev);

arrSliderNext[0].onclick = function(){

  let sliderItemNext=document.getElementsByClassName("slider__item");
  let arrSliderItemNext=Array.from(sliderItemNext);

  let indexItemActiveNext=arrSliderItemNext.findIndex((element)=> element.className=='slider__item slider__item_active');

  arrSliderItemNext[indexItemActiveNext].className='slider__item';

    indexItemActiveNext++;
    if (indexItemActiveNext>=arrSliderItemNext.length){
       indexItemActiveNext=0;
   }
  
  arrSliderItemNext[indexItemActiveNext].className='slider__item slider__item_active';

 }
         

arrSliderPrev[0].onclick = function(){

  let sliderItemPrev=document.getElementsByClassName("slider__item");
  let arrSliderItemPrev=Array.from(sliderItemPrev);

  let indexItemActivePrev=arrSliderItemPrev.findIndex((element)=> element.className=='slider__item slider__item_active');   
  
  arrSliderItemPrev[indexItemActivePrev].className='slider__item';
  
  indexItemActivePrev--
  
  f(indexItemActivePrev<0){
     indexItemActivePrev=arrSliderItemPrev.length-1;
   } 
  
  arrSliderItemPrev[indexItemActivePrev].className='slider__item slider__item_active';

 }



