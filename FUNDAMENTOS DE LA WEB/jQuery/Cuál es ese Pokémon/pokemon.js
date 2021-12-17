$(document).ready(function () {
  const wrapper = $("#pokemones");
  const data = $("#data");

  for (let index = 1; index < 151; index++) {
    wrapper.append(
      `<img id =${index} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index}.png" alt="pokemon" />`
    );
  }

  $("img").click(function () {
    let id = $(this).attr("id");
    $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function (e) {
      let type_list = "";
      for (let index = 0; index < e.types.length; index++) {
        type_list = type_list + `<li>${e.types[index].type.name}</li>`;
      }

      data.html(`
            <ul>
                <h2>${e.name} </h2>
                <img id =${id} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png" alt="pokemon" />
                <li><b>Types</b>${type_list} </li><br>
                <li><b>Height:</b> ${e.height} </li><br>
                <li><b>Weight:</b> ${e.weight} </li>
            </ul>
            `);
    });
  });
});
