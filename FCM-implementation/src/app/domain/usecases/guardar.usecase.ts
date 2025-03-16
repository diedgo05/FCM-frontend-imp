import { Observable } from "rxjs";
import { EventosModel } from "../models/eventos.model";
import { EventosRepository } from "../repositories/eventos.repository";


export class guardarEventoUseCase{
    constructor(private EventosRepository: EventosRepository) {}

    execute(eventmodel: EventosModel): Observable<any> {
        return this.EventosRepository.guardar(eventmodel);
    }
}