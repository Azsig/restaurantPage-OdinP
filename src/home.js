function home(){
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    let title = document.createElement('div');
    title.id = 'title';
    title.textContent = 'Warung Pak Yasir';
    let desc = document.createElement('div');
    desc.id = 'desc';
    desc.textContent = "Warung pak yasir is an indonesian traditional restaurant that serve indonesian food, It's have 3 delicious food that can make you adicted to it's food. Nasi kebuli is the best food ever, once you eat, you want more."
    homeDiv.appendChild(title);
    homeDiv.appendChild(desc);

    return homeDiv;
}

export default home