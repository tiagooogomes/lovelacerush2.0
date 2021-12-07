const carrinho =  {
    "popular": {
        "maxima" : {"min": 180, "max": 200},
        "minima" : {"min": 110, "max": 130},
        "derrapagem": {"min": 0.03, "max": 0.04}
    },
    "esporte": {
        "maxima" : {"min": 195, "max": 215}, 
        "minima": {"min": 125, "max": 145}, 
        "derrapagem": {"min": 0.02, "max": 0.03}
    },
    "super" : {
        "maxima": {"min": 210, "max": 230}, 
        "minima": {"min": 140, "max": 160}, 
        "derrapagem": {"min": 0.01, "max": 0.0175}
    },
};

function sorteioRaridade(){

    let raridade = 0;
    let sorteio = Math.random();

    if(sorteio <= 0.6){
        raridade = 1;
    }else if(sorteio > 0.6 && sorteio<=0.95){
        raridade = 2;
    }else{
        raridade = 3;
    }
    
    return raridade;
}

function sorteioCarrinhos(){

    const random = (min, max) => (Math.random() * (max- min) + min);
    let tipoDaRaridade = sorteioRaridade();
    let velocidadeMinima;
    let velocidadeMaxima
    let derrapagem;
    const caracteristicas = new Array();

    if(tipoDaRaridade == 1){
        velocidadeMinima = random(carrinho.popular.minima.min, carrinho.popular.minima.max);
        velocidadeMaxima = random(carrinho.popular.maxima.min, carrinho.popular.maxima.max);
        derrapagem = 1 - random(carrinho.popular.derrapagem.min, carrinho.popular.derrapagem.max);
    }else if(tipoDaRaridade == 2){
        velocidadeMinima = random(carrinho.esporte.minima.min, carrinho.esporte.minima.max);
        velocidadeMaxima = random(carrinho.esporte.maxima.min, carrinho.esporte.maxima.max);
        derrapagem = 1 - random(carrinho.esporte.derrapagem.min, carrinho.esporte.derrapagem.max);
    }else{
        velocidadeMinima = random(carrinho.super.minima.min, carrinho.super.minima.max);
        velocidadeMaxima = random(carrinho.super.maxima.min, carrinho.super.maxima.max);
        derrapagem = 1 - random(carrinho.super.derrapagem.min, carrinho.super.derrapagem.max);
    }

    caracteristicas.push(velocidadeMinima);
    caracteristicas.push(velocidadeMaxima);
    caracteristicas.push(derrapagem);
    
    return caracteristicas;
}

function menosRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;

    const carrinhoPedro = sorteioCarrinhos();
    const carrinhoJuca = sorteioCarrinhos();
    const carrinhoEdna = sorteioCarrinhos();

    for(i = 1; i<=10; i++){

        const random = (min, max) => (Math.random() * (max- min) + min);

        let voltaPedro = random(carrinhoPedro[0], carrinhoPedro[1]) * carrinhoPedro[2];
        let voltaJuca = random(carrinhoJuca[0], carrinhoJuca[1]) * carrinhoJuca[2];
        let voltaEdna = random(carrinhoEdna[0], carrinhoEdna[1]) * carrinhoEdna[2];

        if(voltaPedro > voltaJuca && voltaPedro > voltaEdna){
            totalPedro = totalPedro + 1;
        }else if(voltaJuca > voltaPedro && voltaJuca > voltaEdna){
            totalJuca = totalJuca + 1;
        }else if(voltaEdna > voltaPedro && voltaEdna > voltaJuca){
            totalEdna = totalEdna + 1;
        }

        if(i == 10){

            pedro.innerHTML = totalPedro;
            juca.innerHTML = totalJuca;
            edna.innerHTML = totalEdna;

            if(totalPedro > totalJuca && totalPedro > totalEdna){
                texto.innerHTML = "Ninguém segura o PEDRO";
            }else if(totalJuca > totalPedro && totalJuca > totalEdna){
                texto.innerHTML = "Isso é mamão com açucar para o JUCA";
            }else if(totalEdna > totalPedro && totalEdna > totalJuca){
                texto.innerHTML = "EDNA está botando pra quebrar";
            }
        }
    }
}

function mediaRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;

    const carrinhoPedro = sorteioCarrinhos();
    const carrinhoJuca = sorteioCarrinhos();
    const carrinhoEdna = sorteioCarrinhos();

    for(i = 1; i<=70; i++){

        const random = (min, max) => (Math.random() * (max- min) + min);

        let voltaPedro = random(carrinhoPedro[0], carrinhoPedro[1]) * carrinhoPedro[2];
        let voltaJuca = random(carrinhoJuca[0], carrinhoJuca[1]) * carrinhoJuca[2];
        let voltaEdna = random(carrinhoEdna[0], carrinhoEdna[1]) * carrinhoEdna[2];

        if(voltaPedro > voltaJuca && voltaPedro > voltaEdna){
            totalPedro = totalPedro + 1;
        }else if(voltaJuca > voltaPedro && voltaJuca > voltaEdna){
            totalJuca = totalJuca + 1;
        }else if(voltaEdna > voltaPedro && voltaEdna > voltaJuca){
            totalEdna = totalEdna + 1;
        }

        if(i == 70){

            pedro.innerHTML = totalPedro;
            juca.innerHTML = totalJuca;
            edna.innerHTML = totalEdna;

            if(totalPedro > totalJuca && totalPedro > totalEdna){
                texto.innerHTML = "Pedro não está para brincadeira";
            }else if(totalJuca > totalPedro && totalJuca > totalEdna){
                texto.innerHTML = "Para o JUCA, vencer é uma obrigação";
            }else if(totalEdna > totalPedro && totalEdna > totalJuca){
                texto.innerHTML = "EDNA se tornou lendária";
            }
        }
    }
}

function maximaRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;
    
    const carrinhoPedro = sorteioCarrinhos();
    const carrinhoJuca = sorteioCarrinhos();
    const carrinhoEdna = sorteioCarrinhos();

    for(i = 1; i<=160; i++){

        const random = (min, max) => (Math.random() * (max- min) + min);

        let voltaPedro = random(carrinhoPedro[0], carrinhoPedro[1]) * carrinhoPedro[2];
        let voltaJuca = random(carrinhoJuca[0], carrinhoJuca[1]) * carrinhoJuca[2];
        let voltaEdna = random(carrinhoEdna[0], carrinhoEdna[1]) * carrinhoEdna[2];

        if(voltaPedro > voltaJuca && voltaPedro > voltaEdna){
            totalPedro = totalPedro + 1;
        }else if(voltaJuca > voltaPedro && voltaJuca > voltaEdna){
            totalJuca = totalJuca + 1;
        }else if(voltaEdna > voltaPedro && voltaEdna > voltaJuca){
            totalEdna = totalEdna + 1;
        }

        if(i == 160){

            pedro.innerHTML = totalPedro;
            juca.innerHTML = totalJuca;
            edna.innerHTML = totalEdna;
            
            if(totalPedro > totalJuca && totalPedro > totalEdna){
                texto.innerHTML = "Se tiver PEDRO como adversario, desista";
            }else if(totalJuca > totalPedro && totalJuca > totalEdna){
                texto.innerHTML = "JUCA está viciado na linha de chegada";
            }else if(totalEdna > totalPedro && totalEdna > totalJuca){
                texto.innerHTML = "É o superman? O batman? A não, é a EDNA";
            }
        }
    }
}