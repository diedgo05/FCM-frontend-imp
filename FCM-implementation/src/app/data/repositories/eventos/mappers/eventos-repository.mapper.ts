import { Mapper } from "../../../../base/mapper";
import { EventosModel } from "../../../../domain/models/eventos.model";
import { EventosEntity } from "../entities/eventos.entity";


export class EventosRepositoryMapper extends Mapper<EventosEntity,EventosModel> {
     mapFrom(param: EventosEntity): EventosModel {
        return {
            id: Number(param.id),
            tipo_sensor: param.tipo_sensor,
            valor: param.valor,
            timestamp: param.timestamp,
            creado_en: param.creado_en
        };
    }
     mapTo(param: EventosModel): EventosEntity {
        return {
            id: param.id,
            tipo_sensor: param.tipo_sensor,
            valor: param.valor,
            timestamp: param.timestamp,
            creado_en: param.creado_en
        }
    }
}