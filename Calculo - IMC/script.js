function calcular(){
    let nome = document.getElementById('nome').value; 
    let a = document.getElementById('altura').value;
    let p = document.getElementById('peso').value;

    let res = document.getElementById('resultado')

    if (nome.value == '' || a.value =='' || p.value == ''){
        res.innerHTML = 'Preencha os campos!'
    }else{
        let valorIMC = (p / (a*a)).toFixed(2)
        if (valorIMC < 18.5){
        res.innerHTML = `Olá, ${nome}! Seu IMC é ${valorIMC} e você está abaixo do peso! Procure manter uma alimentação saudável`;
        } if (valorIMC <= 24.9){
            res.innerHTML = `Olá, ${nome}! Seu IMC é ${valorIMC} e você está com peso ideal. Parabéns!`;
        } if (valorIMC <=30){
            res.innerHTML = `Olá, ${nome}! Seu IMC é ${valorIMC} e você está acima do peso! Procure manter uma alimentação saudável`;
        } else {
            res.innerHTML = `Olá, ${nome}! Seu IMC é ${valorIMC} e você está com obesidade! Procure ajuda de um nutricionista!`;
        }

    }
} 