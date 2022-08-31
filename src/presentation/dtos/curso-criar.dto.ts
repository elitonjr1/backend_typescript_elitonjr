import { IsDate, IsNotEmpty, IsString } from "class-validator";

export namespace CriaCursoDto {
  export class Body {
    // @IsString()
    // @IsNotEmpty()
    // id: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsNotEmpty()
    @IsString()
    dataInicio: string;
  }
}
