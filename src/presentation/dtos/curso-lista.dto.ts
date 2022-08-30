import { IsNotEmpty, IsString } from "class-validator";

export namespace ListaCursoDTO {
  export class Query {
    @IsString()
    @IsNotEmpty()
    status: string;
  }
}
