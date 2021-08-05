class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instânciada.')
    }

    /**
     * Converte uma data do tipo Date para o tipo String
     * 
     * @param {*} data uma data no formato Date(aaaa-mm-dd)
     * @returns uma string com a data no formato: dd/mm/aaaa
     */
     static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    /**
     * Cria uma data a partir de uma String
     * 
     * @param {*} texto data no formato: 'aaaa-mm-dd'
     * @returns data no formato
     */
    static textoParaData(texto) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('A data deve estar no formato: aaaa-mm-dd')

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
    }
}