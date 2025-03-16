import { EventosRepository } from "../domain/repositories/eventos.repository";
import { guardarEventoUseCase } from "../domain/usecases/guardar.usecase";
import { obtenerTodosUseCase } from "../domain/usecases/obtenertodos.usecase";


const guardarEventoUseCaseFactory = (eventRepository: EventosRepository) => new guardarEventoUseCase(eventRepository);
export const guardarEventoUseCaseProvider = {
    provide: guardarEventoUseCase,
    useFactory: guardarEventoUseCaseFactory,
    deps: [EventosRepository],
};

const obtenerTodosEventosUseCaseFactory = (eventRepository: EventosRepository) => new obtenerTodosUseCase(eventRepository); 
export const obtenerTodosEventosUseCaseProvider = {
    provide: obtenerTodosUseCase,
    useFactory: obtenerTodosEventosUseCaseFactory,
    deps: [EventosRepository],
};