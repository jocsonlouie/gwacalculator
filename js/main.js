//Modal
var modal = document.getElementById('modal');
//modal button
var btnModal = document.getElementById('btn-peek');
//close
var btnClose = document.getElementById('btn-close');

btnModal.addEventListener('click', openmodal);
btnClose.addEventListener('click', closemodal);
window.addEventListener('click', clickOutside);

//function
function openmodal(){
    modal.style.display = 'block';
}

//function
function closemodal(){
    modal.style.display = 'none';
}

//function
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}