let pokemones = [
  {
    nombre: "Pikachu",
    nivel: 15,
    tipo: ["Eléctrico"],
    foto: "https://img.pokemondb.net/artwork/pikachu.jpg",
    hp: 35,
    hp_total: 35,
    evolucion: true
  },
  {
    nombre: "Charmander",
    nivel: 12,
    tipo: ["Fuego"],
    foto: "https://img.pokemondb.net/artwork/charmander.jpg",
    hp: 39,
    hp_total: 39,
    evolucion: true
  },
  {
    nombre: "Bulbasaur",
    nivel: 10,
    tipo: ["Planta", "Veneno"],
    foto: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    hp: 45,
    hp_total: 45,
    evolucion: true
  }
  
  // =========================================================================
  // INICIO DE TU CONTRIBUCIÓN (Pokemones agregados para el PR)
  // =========================================================================
  , // Importante: la coma separa el último Pokémon inicial del primer Pokémon agregado
  // NUEVO POKÉMON 1
  {
    nombre: "Meowth",
    nivel: 8,
    tipo: ["Normal"],
    foto: "https://img.pokemondb.net/artwork/meowth.jpg",
    hp: 40,
    hp_total: 40,
    evolucion: true 
  }, 
  // NUEVO POKÉMON 2
  {
    nombre: "Gengar",
    nivel: 45,
    tipo: ["Fantasma", "Veneno"],
    foto: "https://img.pokemondb.net/artwork/gengar.jpg",
    hp: 100,
    hp_total: 100,
    evolucion: false
  }
];


function mostrarPokemones() {
  console.log("Pokemones cargados:");
  console.log(pokemones);
  console.log("Lista de nombres:");
  console.log(pokemones.map(p => p.nombre).join(", "));
}


function cargarPokemon() {
  let seguir = true;
  while (seguir) {
    let nuevo = {
      nombre: prompt("Ingrese el nombre del Pokémon:"),
      nivel: Number(prompt("Ingrese el nivel del Pokémon:")),
      tipo: prompt("Ingrese los tipos separados por coma:").split(","),
      foto: prompt("Ingrese la URL de la foto:"),
      hp_total: Number(prompt("Ingrese el HP total:")),
      hp: 0,
      evolucion: prompt("¿Tiene evolución? (si/no)") === "si"
    };

    
    nuevo.hp = nuevo.hp_total;
    pokemones.push(nuevo);

    let terminar = prompt("¿Desea cargar otro Pokémon? (si/no)");
    if (terminar !== "si") {
      seguir = false;
    }
  }
}


function restarHP() {
  let nombre = prompt("Ingrese el nombre del Pokémon al que le quiere restar HP:");
  let poke = pokemones.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

  if (poke) {
    let daño = Number(prompt("Ingrese la cantidad de HP a restar:"));
    poke.hp -= daño;
    if (poke.hp < 0) poke.hp = 0;
    // La plantilla literal se repara aquí para que funcione correctamente
    console.log(`${poke.nombre} ahora tiene ${poke.hp}/${poke.hp_total} HP`);
  } else {
    console.log("Pokémon no encontrado.");
  }
}


let opcion;
do {
  opcion = prompt(
    "Elija una opción:\n1. Mostrar Pokemones\n2. Cargar un nuevo Pokémon\n3. Restar HP a un Pokémon\n4. Salir"
  );

  switch (opcion) {
    case "1":
      mostrarPokemones();
      break;
    case "2":
      cargarPokemon();
      mostrarPokemones();
      break;
    case "3":
      restarHP();
      mostrarPokemones();
      break;
    case "4":
      console.log("Saliendo del programa...");
      break;
    default:
      console.log("Opción inválida.");
  }
} while (opcion !== "4");