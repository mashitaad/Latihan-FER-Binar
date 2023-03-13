async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    const moves = data.moves.map((move) => move.move.name);
    console.log(`Ditto moves: ${moves.join(', ')}`);
    console.log(`Ditto move: ${moves[0]}`);
    console.log(`Ditto stats:`);
    data.stats.forEach((stat) => {
      console.log(`${stat.stat.name}: ${stat.base_stat}`);
    });
  } catch (error) {
    console.error(error);
  }
}

getPokemon();
