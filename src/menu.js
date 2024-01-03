function Menu (){
    let menuDiv = document.createElement('div')
    menuDiv.classList.add('menu');
    let name = ['Nasi Kebuli', 'Mie Goreng', 'Nasi Goreng'];
    let image = ['Kebuli.jpg', 'Mie Goreng.jpg', 'Nasi_Goreng.jpg'];
    let id = ['kebuli', 'Mie', 'NasGor'];
    let price = [1.50, 0.80, 1.00];
    for( let i = 0; i < name.length; i++){
        let list = document.createElement('div')
        list.id = id[i]
        let p1 = document.createElement('p')
        p1.textContent = `Price : $${price[i]}`;
        let img = document.createElement('img');
        img.src = './img/'+image[i];
        let p2 = document.createElement('p');
        p2.textContent = name[i];
        list.appendChild(p1);
        list.appendChild(img);
        list.appendChild(p2);
        menuDiv.appendChild(list);
    }
    
    return menuDiv
}

export default Menu