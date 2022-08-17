import { Imprimivel } from "../util/imprimivel";
import { Comparavel } from "./comparavel";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}