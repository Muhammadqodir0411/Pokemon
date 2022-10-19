const elForm = document.querySelector('#form');
const elCards = document.querySelector('.cards');
const elSearchForm = document.querySelector('#search-form');
const elSearch = document.querySelector('#search')

elSearchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // const searchText = elSearch.value.toLowerCase();
    // const filteredArray = [];
    // pokemon.forEach((element) => {
    //     if(element.name.toLowerCase().includes(searchText)) {
    //         filteredArray.push(element)
    //     }
    // });
    // renderPokemon(filteredArray)
});

elSearchForm.addEventListener('input', (e)=>{
    e.preventDefault();
    const searchText = elSearch.value.trim().toLowerCase();
    const filteredArray = [];
    pokemon.forEach((element) => {
        if(element.name.toLowerCase().includes(searchText)) {
            filteredArray.push(element)
        }
    });
    renderPokemon(filteredArray)
});

const renderPokemon = (array, parentElement = elCards) => {
    parentElement.textContent = ""
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const card = document.createElement('div')
        card.className = 'card border-dark rounded-5';
        card.style.width = '18rem';
        card.setAttribute('title', 'salom');

        card.innerHTML = `
        <img class="card-img-top p-5 border-bottom border-dark" src="${element.img}"
        alt="${element.title}" width = "200">
        <div class="card-body ">
        <h3 class="card-title">${element.name}</h3>
        <p class="card-text">${element.weaknesses}</p>
        
        <div class="d-flex">
        <h5>${element.weight}</h5>
        <h5>${element.height}</h5>
        </div>
        </div> `
        parentElement.appendChild(card);
    }
}

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

renderPokemon(pokemon);
