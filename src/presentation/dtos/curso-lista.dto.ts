import { IsNotEmpty, IsString } from "class-validator";

export namespace ListaCursoDTO {
  export class Query {
    // @IsString()
    // @IsNotEmpty()
    // id: string;
    // @IsString()
    // @IsNotEmpty()
    // dataInicio: string;
    @IsString()
    @IsNotEmpty()
    descricao: string;
    // @IsString()
    // @IsNotEmpty()
    // status: string;
  }
}
