/**
 * Classe abstrata de objetos imprimíveis.
 */
export abstract class Imprimivel {

    /** Assinatura do método que deve ser implementado pela classe que herdar de Imprimivel */
    public abstract paraTexto(): string;
}