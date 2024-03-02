// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(array) {
  return array.filter((obj) => obj.type.includes("Fire"));
}
console.log(getAllFirePokemons(pokemons));
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(array) {
  if (array.length === 0) {
    return 0;
  }
  const pokeWithMinHeight = array.reduce((accumulator, currentValue) => {
    if (currentValue.height < accumulator.height) {
      return currentValue;
    } else {
      return accumulator;
    }
  }, array[0]);
  return pokeWithMinHeight.name;
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  sum = array.reduce((accumulator, currentValue) => {
    if (currentValue.hasOwnProperty("candy_count")) {
      return currentValue.candy_count + accumulator;
    } else {
      return accumulator;
    }
  }, 0);
  return parseFloat((sum / array.length).toFixed(2));
}
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(array) {
  if (array.length === 0) {
    return 0;
  }
  numOfPokesG = array.filter((poke) => poke.type.includes("Ground"));
  firstTenGrounds = numOfPokesG.slice(0, 10);
  firsTenImgs = firstTenGrounds.map((poke) => poke.img);
  return firsTenImgs;
}
// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(array) {
  if (array.length == 0) {
    return 0;
  }
  const heavierThanPik = array
    .filter((poke) => poke.weight > 6.0)
    .map((poke) => poke.name);

  return heavierThanPik;
}

function orderAlphabetically(array) {
  const sortedArr = [...array].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });

  const sortedNames = sortedArr.map((poks) => poks.name);

  if (sortedNames.length > 20) {
    return sortedNames.slice(0, 20);
  } else {
    return sortedNames;
  }
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(array) {
  const filteredPokemons = array.filter(
    (pokemon) => pokemon.weaknesses.length === 1
  );
  const pokemonNames = filteredPokemons
    .slice(0, 15)
    .map((pokemon) => pokemon.name);
  return pokemonNames;
}
