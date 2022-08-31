export declare class CursoEntity {
    id: string;
    descricao: string;
    dataInicio: string;
    status: string;
    constructor(_id: string, _descricao: string, _dataInicio: string);
    private getStatus;
    static build(_id: string, _dataInicio: string, _descricao: string): CursoEntity;
}
