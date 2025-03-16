import { Observable } from "rxjs";
import { EventosRepository } from "../repositories/eventos.repository";


export class obtenerTodosUseCase{
    constructor(private EventosRepository: EventosRepository) {}

    execute(): Observable<any> {
        return this.EventosRepository.obtenerTodos();
    }
}