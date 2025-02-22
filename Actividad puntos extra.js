function jugar() {
  while (true) {
    // Generar un número al azar entre 1 y 9
    const numeroComputadora = Math.floor(Math.random() * 9) + 1;
    
    // Pedir al usuario que ingrese un número entre 3 y 6
    let numeroUsuario;
    do {
      numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
    } while (numeroUsuario < 3 || numeroUsuario > 6);

    // Pedir al usuario que adivine si su número es mayor, menor o igual
    const adivinanza = prompt("¿Crees que tu número es mayor, menor o igual al de la computadora? (mayor/menor/igual)");

    // Mostrar los números y el resultado
    if (adivinanza === "mayor" && numeroUsuario > numeroComputadora ||
        adivinanza === "menor" && numeroUsuario < numeroComputadora ||
        adivinanza === "igual" && numeroUsuario === numeroComputadora) {
      alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. ¡Ha adivinado!`);
    } else {
      alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. No adivinó.`);
    }

    // Preguntar si quiere jugar otra vez
    const respuesta = prompt("¿Quieres jugar otra vez? (SI/NO)").toUpperCase();
    if (respuesta !== "SI") {
      alert(`Gracias por jugar, Ana Lucia Flores (25001421)`);
      break;
    }
  }
}

// Iniciar el juego
jugar();
