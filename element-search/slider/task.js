let sliderNext=document.getElementsByClassName("slider__arrow_next");
let arrSliderNext=Array.from(sliderNext);

let sliderItem=document.getElementsByClassName("slider__item");
let arrSliderItem=Array.from(sliderItem);
let i=0;

let sliderPrev=document.getElementsByClassName("slider__arrow_prev");
let arrSliderPrev=Array.from(sliderPrev);



arrSliderNext[0].onclick = function(){
       
  arrSliderItem[i].className='slider__item';
  i++;

  if (i>=arrSliderItem.length){
    i=0;
  }
  arrSliderItem[i].className='slider__item_active';

}

arrSliderPrev[0].onclick = function(){
       
  arrSliderItem[i].className='slider__item';
  i--
  if(i<0){
      i=arrSliderItem.length-1;
    } 
  
  arrSliderItem[i].className='slider__item_active';

}


 