import { Oferta } from "./oferta";

export class Solicitud {

	public id_solicitud: number;
	public origen: string;
	public id_estudiante: number;
	public fecha: string;
	public estado: string;
	public oferta_id: number;
	public nombre_ofer: string;
	public id_empleador: number;

	public oferta: Oferta;

	public constructor(json?: any) {

		Object.assign(this, json);

	}

	public static getJSON(solicitud: Solicitud): any {
		return {
			id_solicitud: solicitud.id_solicitud,
			origen: solicitud.origen,
			id_estudiante: solicitud.id_estudiante,
			fecha: solicitud.fecha,
			estado: solicitud.estado,
			oferta_id: solicitud.oferta_id,
			nombre_ofer: solicitud.nombre_ofer,
			id_empleador: solicitud.id_empleador
		};
    }
}