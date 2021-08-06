/*
Um programador de Javascript decidiu criar uma abstração de um relógio em seu código, através da classe Relogio.
A ideia é a seguinte: assim que ele instanciar essa classe, deve ser exibida no console a quantidade de segundos
a partir da sua criação. Aprendemos que o constructor é chamado toda vez que instanciamos objetos de uma classe.

O problema é que a mensagem exibida no console é NaN (Not a Number) e não os segundos desde que o relógio foi
instanciado.Encontre o erro deste código e pense em uma solução, utilizando o que aprendemos neste capítulo, para
que o relógio se comporte como o esperado.

*/

class Relogio{

    constructor(){
        this._segundos = 0

        // usando arrow function. O this é o this de `Relogio`, e não `window`.
        setInterval(() => console.log(++this._segundos), 10)
    }
}


let relogio = new Relogio()