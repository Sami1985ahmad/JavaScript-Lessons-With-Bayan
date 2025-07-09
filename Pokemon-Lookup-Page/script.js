const lookupButton = document.getElementById("lookupButton");
lookupButton.addEventListener("click", function() {
    const pokemonName = document.getElementById("pokemonInput").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            const pokemonInfo = document.getElementById("pokemonInfo");
            pokemonInfo.querySelector("#pokemonId").textContent = `ID: ${data.id}`;
            pokemonInfo.querySelector("#pokemonName").textContent = `Name: ${data.name}`;
            pokemonInfo.querySelector("#pokemonType").textContent = `Type: ${data.types.map(type => type.type.name).join(", ")}`;
            pokemonInfo.querySelector("#pokemonHeight").textContent = `Height: ${data.height}`;
            pokemonInfo.querySelector("#pokemonWeight").textContent = `Weight: ${data.weight}`;
            pokemonInfo.querySelector("#pokemonImage").src = data.sprites.front_default;
        })
        .catch(error => {
            console.error("Error fetching Pokemon data:", error);
        });
});