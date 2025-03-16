import { Observable } from "rxjs";
import { EventosModel } from "../models/eventos.model";


export abstract class EventosRepository {
    abstract guardar(params: EventosModel): Observable<any>;

    abstract obtenerTodos(): Observable<any>;
}