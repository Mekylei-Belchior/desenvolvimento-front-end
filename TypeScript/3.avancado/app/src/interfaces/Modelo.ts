import { Comparavel } from "./Comparavel.js";
import { Imprimivel } from "./Imprimivel.js";

/**
 * Interface modelo que herda outras interfaces que devem ter seus métodos implemetadas pelo objeto ao qual implementa esta interface.
 */
export interface Modelo<Tipo> extends Imprimivel, Comparavel<Tipo> {

}