import { HttpClient } from "@angular/common/http";
import { EventosRepository } from "../../../domain/repositories/eventos.repository";
import { EventosRepositoryMapper } from "./mappers/eventos-repository.mapper";
import { EventosModel } from "../../../domain/models/eventos.model";
import { identity, map, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class EventosImplementationRepository extends EventosRepository {
    eventoMapper = new EventosRepositoryMapper();
    constructor(private http: HttpClient) { super(); }

    guardar(params: EventosModel): Observable<any> {
        return this.http.post<any>('http://localhost:8080/eventos/', params
        ).pipe(map(this.eventoMapper.mapFrom));
    }

     obtenerTodos(): Observable<any> {
        return this.http.get('http://localhost:8080/eventos/')
    }
}