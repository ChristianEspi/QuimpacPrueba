export type Roles = 1 | 2;
export class Login {
  username:string;
  password:string;
}
export interface LoginRespuesta{
  data:{token:string,
        permiso: Permiso[],
        usu:{
          usu_cod_usu:     number;
          usu_cod_cli:     number;
          usu_cod_rol:     number;
          usu_nom_ape:     string;
          usu_usu:         string;
          usu_cla:         string;
          usu_cor:         string;
          usu_cod_sap:     string;
          usu_est:         null;
          usu_fec_cre:     Date;
          usu_usu_cre_sap: string;
          usu_fec_mod:     Date;
          usu_usu_mod_sap: string;
        }
        };
  message:string;
}
export interface Welcome {
    message: string;
    error:   boolean;
    data:    Data;
}

export interface Data {
    token:   string;
    permiso: Permiso[];
    user:     User[];
}

export interface Permiso {
    per_nom: string;
    per_uri: string;
}

export interface User {
    usu_cod_usu:     number;
    usu_cod_cli:     number;
    usu_cod_rol:     number;
    usu_nom_ape:     string;
    usu_usu:         string;
    usu_cla:         string;
    usu_cor:         string;
    usu_cod_sap:     string;
    usu_est:         null;
    usu_fec_cre:     Date;
    usu_usu_cre_sap: string;
    usu_fec_mod:     Date;
    usu_usu_mod_sap: string;
}
