function contact(){
    let contactDiv = document.createElement('div');
    contactDiv.classList.add('contac');
    let div = document.createElement('div')
    div.id = 'Contact';
    let title = ['Location :', 'Contact Person :'];
    let isi = ['The restaurant located in Yogyakarta, Indonesia', '+62 803-3412-432']
    for( let i = 0; i< title.length; i++){
        let p = document.createElement('p');
        p.textContent = title[i];
        let d = document.createElement('div');
        d.textContent = isi[i];
        div.appendChild(p);
        div.appendChild(d);
    }
    contactDiv.appendChild(div);

    return contactDiv
}

export default contact