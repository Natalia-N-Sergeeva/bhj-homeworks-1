let modalMain = document.getElementById("modal_main");

modalMain.className = "modal modal_active";

let modalClose = document.getElementsByClassName("modal__close");

let arrModalClose=Array.from(modalClose);


let showSuccess=document.getElementsByClassName("show-success");

let arrShowSuccess=Array.from(showSuccess);


arrShowSuccess[0].onclick=function(){

	let modalSuccess=document.getElementById("modal_success");
	
	modalSuccess.className="modal modal_active";

}

arrModalClose[2].onclick = function(){

  let modalMain2 = document.getElementById("modal_success");

  modalMain2.className = "modal";

  let modalMain1 = document.getElementById("modal_main");

    modalMain1.className = "modal";


}


arrModalClose[0].onclick = function(){

  let modalMain1 = document.getElementById("modal_main");

    modalMain1.className = "modal";

}








