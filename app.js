
let titulo = document.getElementById('cuac');

titulo.addEventListener('click',() =>{
    if(titulo.style.color=="black"){
        titulo.style.color="blue";
    }else{
        titulo.style.color="green";
    }
})