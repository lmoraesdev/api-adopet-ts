import AdotanteEntity from '../entities/AdotanteEntity';

type TipoRequestBodyAdotante = Omit<AdotanteEntity, 'id'>;
type TipoRequestParamsAdotante = {
  id?: string;
};
type TipoResponseBodyAdotante = {
  data?:
    | Pick<AdotanteEntity, 'id' | 'nome' | 'celular'>
    | Pick<AdotanteEntity, 'id' | 'nome' | 'celular'>[];
};

export {
  TipoRequestBodyAdotante,
  TipoRequestParamsAdotante,
  TipoResponseBodyAdotante,
};
