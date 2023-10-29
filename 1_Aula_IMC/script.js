/*var peso;
var altura;
var imc;
var resultado;


function calcular(event) {//limpa o formulário, o event serve pra isso(?)
    event.preventDefault(); //agora o formulário não será limpo após apertar no botão de calcular.

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');

    if (imc < 17) {
        // resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, você está muito abaixo do peso!';
    } else if (imc > 17 && imc < 18.49) {
        // resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, você está abaixo do peso!';
    } else if (imc >= 18.5 && imc < 24.99) {
        // resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está no peso ideal!';
    } else if (imc > 25 && imc < 29.99) {
        // resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, você está acima do peso!';
    } else if (imc >= 30) {
        // resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, você está muito acima do peso!';
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

}

*/