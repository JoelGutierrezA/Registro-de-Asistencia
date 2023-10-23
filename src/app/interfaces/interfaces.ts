export interface User{
    id: Number;
    nombre: String;
    apellido: String;
    username: String;
    password: String;
    role: String;
    isactive: boolean;
}

export interface Users{
    id: Number;
    username: String;
    password: String;
}

export interface RespuestaTopHeadlines {
    status: String;
    totalResults: number;
}
