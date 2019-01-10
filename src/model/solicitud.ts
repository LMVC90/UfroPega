import { Oferta } from "./oferta";

export class Solicitud {

	public id_solicitud: number;
	public id_estudiante: number;
	public fecha: string;
	public estado: boolean;
	public oferta_id: number;

	public oferta: Oferta;

	public constructor(json?: any) {

		Object.assign(this, json);
		if (this.oferta) { this.oferta = new Oferta(this.oferta) };

	}

	public static getJSON(solicitud: Solicitud): any {
		return {
			id_solicitud: solicitud.id_solicitud,
			id_estudiante: solicitud.id_estudiante,
			fecha: solicitud.fecha,
			estado: solicitud.estado,
			oferta_id: solicitud.oferta_id
		};
    }
}