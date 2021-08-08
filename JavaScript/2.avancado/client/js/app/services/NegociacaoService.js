class NegociacaoService {

    constructor() {
        this._httpService = new HttpService()
    }

    /**
     * Busca as negociações da semana
     * 
     * @returns uma (Promise) 
     */
    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            this._httpService.get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))
                    )
                })
                .catch(erro => {
                    console.log(erro)
                    reject('Não foi possível obter as negociações da semana.')
                })
        })
    }

    /**
     * Busca as negociações da semana anterior
     * 
     * @returns uma (Promise) 
     */
    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this._httpService.get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))
                    )
                })
                .catch(erro => {
                    console.log(erro)
                    reject('Não foi possível obter as negociações da semana anterior.')
                })
        })
    }

    /**
     * Busca as negociações da semana retrasada
     * 
     * @returns uma (Promise) 
     */
    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._httpService.get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))
                    )
                })
                .catch(erro => {
                    console.log(erro)
                    reject('Não foi possível obter as negociações da semana retrasada.')
                })
        })
    }

}