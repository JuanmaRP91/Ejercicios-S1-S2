const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
  ];
  
  let totalSellCount = 0;
  
  for (let i = 0; i < products.length; i++) { // Sumo el total de las ventas de todos los productos
    totalSellCount += products[i].sellCount;
  }
  const averageSellCount = totalSellCount / products.length; // Calcular la media de totalSellCount
  
  console.log(averageSellCount);