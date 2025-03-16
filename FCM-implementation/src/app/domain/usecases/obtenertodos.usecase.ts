import { Observable } from "rxjs";
import { EventosRepository } from "../repositories/eventos.repository";
import { UseCase } from "../../base/use-case";
import { EventosModel } from "../models/eventos.model";

//pendiente para ver si funciona o si esta bien implementado usecase de base, lo mismo con guardar
export class obtenerTodosUseCase implements UseCase<any, EventosModel> {
    constructor(private EventosRepository: EventosRepository) {}

    execute(): Observable<any> {
        return this.EventosRepository.obtenerTodos();
    }
}