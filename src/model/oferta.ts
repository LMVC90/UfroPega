import { Categoria } from "./categoria";

export class Oferta {

	public id_oferta: number;
	public nombre: string;
	public monto: number;
	public comentario: string;
	public cupos: string;
    public ubicacion: string;
    public empleador: string;
    public categoria_id: number;

	public categoria: Categoria;

	public constructor(json?: any) {

		Object.assign(this, json);
		if (this.categoria) { this.categoria = new Categoria(this.categoria) };
	}

	public static getJSON(oferta: Oferta): any {
		return {
			id_oferta: oferta.id_oferta,
			nombre: oferta.nombre,
			monto: oferta.monto,
			comentario: oferta.comentario,
            cupos: oferta.cupos,
            ubicacion: oferta.ubicacion,
            empleador: oferta.empleador,
            categoria_id: oferta.categoria_id
		};
    }
}