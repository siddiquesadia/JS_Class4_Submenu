let button = document.querySelector(`.btn`);
let sidebar = document.querySelector(`.sidebar`);

function sidebarShow(){
   sidebar.classList.toggle(`active`);
if(sidebar.classList.contains(`active`)==true){
    button.innerHTML = `<i class="bi bi-x-lg"></i>`;
}
else{
    button.innerHTML = `<i class="bi bi-list"></i>`;
}
}

button.addEventListener(`click`, sidebarShow);