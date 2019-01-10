
export class Categoria {

	public id_categoria: number;
	public nombre_cat: string;
	
    public constructor(json?: any) {
        Object.assign(this, json);
    }

    public static getJSON(categoria: Categoria) {
        return {
            id_categoria: categoria.id_categoria,
            nombre_cat: categoria.nombre_cat
        }
    }
}