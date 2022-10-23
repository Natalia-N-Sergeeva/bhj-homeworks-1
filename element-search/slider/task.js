let sliderNext=document.getElementsByClassName('slider__arrow_next');
let arrSliderNext=Array.from(sliderNext);

let sliderPrev=document.getElementsByClassName('slider__arrow_prev');
let arrSliderPrev=Array.from(sliderPrev);

let sliderItem=document.getElementsByClassName('slider__item');
const arrSliderItem=Array.from(sliderItem);

arrSliderNext[0].onclick = function() {

  let indexItemActiveNext=arrSliderItem.findIndex((element)=> element.className=='slider__item slider__item_active');
  arrSliderItem[indexItemActiveNext].className='slider__item';
  indexItemActiveNext++;

  if (indexItemActiveNext>=arrSliderItem.length) {
    indexItemActiveNext=0;
  }
  
  arrSliderItem[indexItemActiveNext].className='slider__item slider__item_active';
}
         

arrSliderPrev[0].onclick = function() {

  let indexItemActivePrev=arrSliderItem.findIndex((element)=> element.className=='slider__item slider__item_active');   
  arrSliderItem[indexItemActivePrev].className='slider__item';
  
  indexItemActivePrev--;
  
  if(indexItemActivePrev<0) {
     indexItemActivePrev=arrSliderItem.length-1;
  } 
  
  arrSliderItem[indexItemActivePrev].className='slider__item slider__item_active';
}



