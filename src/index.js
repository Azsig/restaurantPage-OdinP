import contact from './contact'
import menu from './menu'
import home from './home'

let contemt = () =>{
    let content = document.querySelector('#content');
    let nav = document.createElement('nav');
    let homebtn = document.createElement('button')
    homebtn.textContent = 'Home';
    let menubtn = document.createElement('button')
    menubtn.textContent = 'Menu';
    let contactbtn = document.createElement('button')
    contactbtn.textContent = 'Contact';

    function reset(){
        content.innerHTML = ''
    }

    homebtn.addEventListener('click', ()=>{
        reset();
        content.appendChild(nav)
        content.appendChild(home());
    })

    menubtn.addEventListener('click', () =>{
        reset();
        content.appendChild(nav)
        content.appendChild(menu())
    })

    contactbtn.addEventListener('click', () => {
        reset();
        content.appendChild(nav)
        content.appendChild(contact());
    })

    nav.appendChild(homebtn);
    nav.appendChild(menubtn);
    nav.appendChild(contactbtn);

    content.appendChild(nav);

    content.appendChild(home());

}

let mulai = contemt();