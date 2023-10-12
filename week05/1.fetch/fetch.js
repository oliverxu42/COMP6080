const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // const p = document.querySelector('p');
    // p.innerText = JSON.stringify(data);
  });
