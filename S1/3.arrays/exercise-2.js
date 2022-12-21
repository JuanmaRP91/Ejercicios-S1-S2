const cars = ['Saab', 'Volvo', 'BMW']; //cars es una constante y no puedo cambiar
const updatedCars = ['Ford', ...cars.slice(1)]; //creo un nuevo arreglo y modifico el primer elemento 
console.log(updatedCars); 