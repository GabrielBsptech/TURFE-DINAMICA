let lista_cavalos = []
let tempo_cavalos = []

let tempo_toral = 0;

// func auxiliar, sorteia um num. aleatório
function aleatorio() {
    let aleatorio = Math.random()
    let intervalo = 7 - 9   
    let formatado = aleatorio * intervalo + 7

    return formatado
}

    function largada() {
        let qtd_cavalos = Number(ipt_qntcavalos)
        let voltas = Number(ipt_qtd_voltas.value)
    
        if (qtd_cavalos <= 3 && voltas <= 7) {
            div_exibir.innerHTML = `Insira os valores validos`
        }

        for (i = 0; i <= voltas; i++) {
            tempo_cavalos.push(aleatorio());

        }

        if (lista_cavalos.length == 1) {
            alert('Deve haver, no mínimo, 2 cavalos na corrida!')
        } else if (lista_cavalos.length == 2) {
            formatado
        }
        else if (lista_cavalos.length == 3) {
            formatado
        }
        else if (lista_cavalos.length == 4) {
            formatado
        }
        else if (lista_cavalos.length == 5) {
            formatado
        }
        else if (lista_cavalos.length == 6) {
            formatado
        }

        for (let i = 0; i < array.length; i++) {
            ;
            
        }
        
    }
    
    function cadastrar() {
        let qtd_cavalos = Number(ipt_qtd_cavalos.value)
        let voltas = Number(ipt_qtd_voltas.value)
    
        if (qtd_cavalos <= 0 || voltas <= 0) {
            div_exibir.innerHTML = `Insira os valores validos`
        }
        else if(qtd_cavalos == "" || voltas == ""){
            div_exibir.innerHTML = `Insira os valores validos`
            }
        if (lista_cavalos.length == 6) {
            alert('O limite de cavalos já foi atingido')
        } else {
            let nome_cavalo = ipt_nome.value
            lista_cavalos.push(nome_cavalo)
        }
    }
