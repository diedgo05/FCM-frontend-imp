import { Observable } from "rxjs";
import { EventosModel } from "../models/eventos.model";
import { EventosRepository } from "../repositories/eventos.repository";
import { UseCase } from "../../base/use-case";


export class guardarEventoUseCase implements UseCase<EventosModel, any> {
    constructor(private EventosRepository: EventosRepository) {}

    execute(eventmodel: EventosModel): Observable<any> {
        return this.EventosRepository.guardar(eventmodel);
    }
}