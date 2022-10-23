let modalMain = document.getElementById('modal_main');

modalMain.className = 'modal modal_active';

let showSuccess=document.getElementsByClassName('show-success');

let arrShowSuccess=Array.from(showSuccess);

arrShowSuccess[0].onclick=function() {

	let modalSuccess=document.getElementById('modal_success');
	modalSuccess.className='modal modal_active';
  
  let modalMain3 = document.getElementById('modal_main');
  modalMain3.className = 'modal';
}

let modalCloseTimes=document.getElementsByClassName('modal__close_times');
let arrMoodalCloseTimes=Array.from(modalCloseTimes);

for (let i=0; i<arrMoodalCloseTimes.length; i++) {
 
  arrMoodalCloseTimes[i].onclick = function() {
    arrMoodalCloseTimes[i].closest('div.modal').className="modal";
  }
}













