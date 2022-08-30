import { IsNotEmpty, IsString } from "class-validator";

export namespace CriaCursoDto {
  export class Body {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsString()
    @IsNotEmpty()
    status: string;
  }
}
