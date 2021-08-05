class Aluno{

    constructor(matricula, nome){
        this._matricula = matricula
        this._nome = nome
    }

    get matricula(){
        return this._matricula
    }

    get nome(){
        return this._nome
    }
}


class Prova{
    
    constructor(aluno, nota){
        this._aluno = aluno
        this._nota = nota
    }

    get aluno(){
        return this._aluno
    }

    get nota(){
        return this._nota
    }
}


let avaliacoes = [
    new Prova(new Aluno(1, 'Pedro'), 7.5),
    new Prova(new Aluno(2, 'Maria'), 8),
    new Prova(new Aluno(3, 'Marcos'), 6.2),
    new Prova(new Aluno(4, 'Alex'), 7.1),
    new Prova(new Aluno(5, 'Marcia'), 6.9),
]

let aprovados = avaliacoes.filter(prova => prova.nota > 7).map(prova => prova.aluno.nome)

console.log(aprovados)