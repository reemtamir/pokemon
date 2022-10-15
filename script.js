'use strict';
const cardsContainer = document.querySelector('.cards-container');
const pokemonIdInput = document.getElementById('pokemon-id');
const findBtn = document.getElementById('find-pokemon');
findBtn.addEventListener('click', findPokemon);
function findPokemon() {
  const pokemonId = pokemonIdInput.value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => {
      return response.json();
    })
    .then((pokemon) => {
      let html = `<div class="card" style="width: 16rem;">
      <img style="height:150px;" src="${pokemon.sprites.other.dream_world.front_default}" class="card-img-top" alt="${pokemon.name}'s image">
      <div class="card-body">
        <h5 class="card-title fs-1">${pokemon.name}</h5>
      `;
      cardsContainer.innerHTML += html;
    });

  pokemonIdInput.value = '';
}
