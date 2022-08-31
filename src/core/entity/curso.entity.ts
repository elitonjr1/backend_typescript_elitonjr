export class CursoEntity {
  public id: string;
  public descricao: string;
  public dataInicio: string;
  public status: string;

  constructor(_id: string, _descricao: string, _dataInicio: string) {
    this.id = _id;
    this.dataInicio = _dataInicio;
    this.descricao = _descricao;
    this.status = this.getStatus();
  }

  private getStatus(): string {
    return "mock";
  }

  static build(
    _id: string,
    _dataInicio: string,
    _descricao: string
  ): CursoEntity {
    return new CursoEntity(_id, _descricao, _dataInicio);
  }
}
