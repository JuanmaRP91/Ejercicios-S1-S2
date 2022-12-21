const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
    ];

    for (let i = 0; i < alumns.length; i++) { //recorro el array
        const alumn = alumns[i];  //creo contenedor para meter todos los resultados filtrados
        let numTrue = 0;          //creo contenedor para añadirle los true de cada T
        if (alumn.T1 === true) {  //filtro los T true y los sumo a numTrue
            numTrue++;
        }
        if (alumn.T2 === true) {
            numTrue++;
        }
        if (alumn.T3 === true) {
            numTrue++;
        }
        if (numTrue >= 2) {  // filtro los numTrue con mas de dos true que sean true en isApproved
            alumn.isApproved = true;
        } else {                        //filtro los numTrue con solo un true para que sean false en IsApproved
            alumn.isApproved = false;
        }
        }
        console.log(alumns);