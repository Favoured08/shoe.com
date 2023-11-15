
let menu = document.querySelector('.hamburger');
let nav = document.querySelector('.nav ul');
console.log(nav);
menu.onclick = function() {
    if(!menu.classList.contains('change')){
      menu.classList.add("change");
        nav.style.display ='flex'

    }else{
        menu.classList.remove('change');
        nav.style.display ='none';
    }
    //menu.classList.toggle("change");
  }
//  console.log(menu)
 // menu.onclick = myFunction();

//  menu.addEventListener('click',myFunction);