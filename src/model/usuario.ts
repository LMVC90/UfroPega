

export class Usuario {

	public id_usuario: number;
	public correo: string;
	public contrasena: string;
	public nombre: string;
	public rol: string;
    public region: string;
    public comuna: string;
    public info_extra: string;


	public constructor(json?: any) {

		Object.assign(this, json);

	}

	public static getJSON(usuario: Usuario): any {
		return {
			id_usuario: usuario.id_usuario,
			correo: usuario.correo,
			contrasena: usuario.contrasena,
			nombre: usuario.nombre,
            rol: usuario.rol,
            region: usuario.region,
            comuna: usuario.comuna,
            info_extra: usuario.info_extra
		};
    }
    
}