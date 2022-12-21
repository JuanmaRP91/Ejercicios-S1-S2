const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

let fruitIndex = 0; // Utilizo un índice para recorrer el array de frutas y no repetir frutas


for (let i = 0; i < foodSchedule.length; i++) {
  
  if (!foodSchedule[i].isVegan) {
    
    foodSchedule[i].name = fruits[fruitIndex];// Si no es vegana, reemplazamos el nombre de la comida por una fruta
    
    fruitIndex++;// Incremento el índice para elegir una fruta diferente en la siguiente iteración
    
    if (fruitIndex == fruits.length) fruitIndex = 0; // Si llego al final del array de frutas, vuelvo al inicio
  }
}


console.log(foodSchedule);