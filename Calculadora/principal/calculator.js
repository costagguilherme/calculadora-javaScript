// Tipo: Determina uma ação ou um valor númerico
// Caractere: Determina o caractere relacionado ao tipo.


function calcular (tipo,caractere) {

    if (tipo === 'valor') { // Possibilidades se o tipo for um valor
 
        document.getElementById('calculo_resultado').value += caractere
    }

    else if (tipo === 'acao') { // Possibilidades se o tipo for uma ação


        if (caractere === 'c') {

            document.getElementById('calculo_resultado').value = ''
        }

        if (caractere === '+'  || caractere === '-' || caractere === '/' || caractere === '*' || caractere === '.') {

            document.getElementById('calculo_resultado').value += caractere

        }

        if (caractere === '=') {
           var resultado_final = document.getElementById('calculo_resultado').value
            document.getElementById('calculo_resultado').value = eval(resultado_final)
        }


    }
   
}

